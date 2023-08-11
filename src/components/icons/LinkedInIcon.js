import React from 'react';

function LinkedInIcon({ fill, color }) {
  fill = fill || '#c0b9c9';
  color = color || '#ffffff';

  return (
    <svg
      alt="LinkedIn icon"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="fill"
        d="M0 1.71921C0 0.769972 0.794024 0 1.77355 0H22.2264C23.2059 0 24 0.769972 24 1.71921V22.2808C24 23.2303 23.2059 24 22.2264 24H1.77355C0.794024 24 0 23.2303 0 22.2808V1.71921Z"
        fill={fill}
      />
      <path
        className="color"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.27512 20.0905V9.25314H3.65014V20.0905H7.27512ZM5.46262 7.77349C6.72672 7.77349 7.51352 6.9413 7.51352 5.90131C7.48996 4.8379 6.72672 4.02881 5.4866 4.02881C4.2466 4.02881 3.43585 4.8379 3.43585 5.90131C3.43585 6.9413 4.22248 7.77349 5.43899 7.77349H5.46255H5.46262Z"
        fill={color}
      />
      <path
        className="color"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.28094 20.0905H12.9059V14.0385C12.9059 13.7146 12.9295 13.391 13.0252 13.1594C13.2872 12.5123 13.8837 11.8421 14.8851 11.8421C16.1968 11.8421 16.7215 12.8359 16.7215 14.2928V20.0905H20.3462V13.8765C20.3462 10.5478 18.5578 8.99884 16.1729 8.99884C14.2173 8.99884 13.3588 10.085 12.8818 10.8248H12.906V9.25314H9.28104C9.32861 10.27 9.28104 20.0905 9.28104 20.0905H9.28094Z"
        fill={color}
      />
    </svg>
  );
}

export default LinkedInIcon;
