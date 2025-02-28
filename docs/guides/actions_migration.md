---
slug: actions_migration
title: GitHub Actions migration
---

import useBaseUrl from '@docusaurus/useBaseUrl';

If you encounter any issues while migrating, please join our [community Slack channel](https://www.infracost.io/community-chat), we'll help you very quickly 😄

# Actions to GitHub App migration

:::tip
We recommend using the [GitHub App](/docs/integrations/github_app/) as it has several benefits over GitHub Actions.
:::

1. Follow the [GitHub App](/docs/integrations/github_app/) docs to install the app. You can do this from the same Infracost organization you use already, and going into the Org Settings > Integrations page.
2. Test it by sending a pull request that costs money, and ensuring that the pull request comment matches between the GitHub Actions and the GitHub App. The GitHub App automatically uses your [config file](/docs/features/config_file/).
3. Remove the Infracost steps from your GitHub Actions completely.

# GitHub Actions v1 to v2 migration

Follow this section to migrate your [Infracost GitHub actions](https://github.com/infracost/actions) from v1 to v2.

## What's new?

The v1 actions used Infracost v0.9.x of the Infracost CLI, whereas the v2 actions use Infracost v0.10.x. With this new release, we'll support two ways to run Infracost with Terraform via `--path`:
1. **Parsing HCL code (recommended)**: this is the default and recommended option as it has [5 key benefits](/docs/guides/v0.10_migration/#1-faster-cli). This page describes how you can migrate to this option.
    ```shell
    # Terraform variables can be set using --terraform-var-file or --terraform-var
    infracost breakdown --path /code
    ```

2. **Parsing plan JSON file**: this will continue to work as before. There are [examples here](https://github.com/infracost/actions/tree/master/examples#plan-json-examples) of generating Terraform plan JSON files in GitHub Actions and passing them to Infracost.
    ```shell
    cd /code
    terraform init
    terraform plan -out tfplan.binary
    terraform show -json tfplan.binary > plan.json

    infracost breakdown --path plan.json
    ```

## Actions v2 migration guide

Changing your workflow to work with the parse HCL option requires the following changes:

1. Remove the Terraform and Terragrunt dependencies:
    - Delete any `hashicorp/setup-terraform` or `autero1/action-terragrunt` steps as Infracost now parses the HCL code directly, so it does not depend on these.
    - Delete any step that runs `terraform` or `terragrunt`, e.g. "terraform init", "terraform plan" and "terraform show" are no longer needed.

2. Bump the version of the `infracost/actions/setup` action from `v1` to `v2`:

    ```yaml
          - name: Setup Infracost
            uses: infracost/actions/setup@v2
            with:
              api-key: ${{ secrets.INFRACOST_API_KEY }}
    ```

3. After the "Setup Infracost" step, add the following two steps for generating a cost estimate baseline from the main/master branch.

    ```yaml
    - name: Checkout base branch
      uses: actions/checkout@v2
      with:
        ref: '${{ github.event.pull_request.base.ref }}'

    - name: Generate Infracost cost estimate baseline
      run: |
        infracost breakdown --path=PATH/TO/YOUR_TERRAFORM_CODE \
                            --format=json \
                            --out-file=/tmp/infracost-base.json
    ```

    :::note
    You should replace any `--terraform-plan-flags` flags with either `--terraform-var` to add variables or `--terraform-var-file` to point to var files. These work similarly to Terraform's `-var` and `-var-file` flags and can be repeated.
    :::

    :::note
    If you have variables stored on Terraform Cloud/Enterprise Infracost will pull these in automatically if you add the following environment variables to your job:

    ```yaml
    jobs:
      infracost:
        # ...
        env:
          INFRACOST_TERRAFORM_CLOUD_TOKEN: ${{ secrets.TFC_TOKEN }}
          # Change this if you're using Terraform Enterprise
          INFRACOST_TERRAFORM_CLOUD_HOST: app.terraform.io
    ```
    :::

    :::note
    If you have a Terraform mono-repo and you want to pass separate variables to each Terraform project you can create a [config file](/docs/features/config_file) and pass that with the `--config-file` flag as per [this example](https://github.com/infracost/actions/tree/master/examples/multi-project-config-file#readme)
    :::

4. After the above, add the following two steps for comparing against the Infracost cost estimate baseline. If you added any required variable or config file flags in step 3, also add them to the `infracost diff` command below.

    ```yml
    - name: Checkout PR branch
      uses: actions/checkout@v2

    - name: Run Infracost
      run: |
        infracost diff --path=PATH/TO/YOUR_TERRAFORM_CODE \
                      --format=json \
                      --compare-to=/tmp/infracost-base.json \
                      --out-file=/tmp/infracost.json

    # Post pull request comment in the same way as before by running:
    # infracost comment github --path=/tmp/infracost.json ...
    ```

5. See [our full examples](https://github.com/infracost/actions/tree/master/examples) that use the new parsing HCL option. You can find one that is the closest to your use-case and adapt as required.
