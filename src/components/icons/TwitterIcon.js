import React from 'react';

function TwitterIcon({ fill = '#c0b9c9' }) {
  return (
    <svg
      alt="Twitter icon"
      width="24"
      height="20"
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="fill"
        d="M7.54752 20C16.6042 20 21.5578 12.3047 21.5578 5.63144C21.5578 5.41287 21.5578 5.19529 21.5434 4.97869C22.507 4.26381 23.3389 3.37867 24 2.3647C23.1013 2.77309 22.148 3.04092 21.1718 3.15923C22.1998 2.52812 22.9691 1.53548 23.3366 0.366057C22.3701 0.954283 21.3126 1.36884 20.2099 1.59182C19.4675 0.782212 18.4856 0.246107 17.4162 0.0664704C16.3468 -0.113166 15.2494 0.0736804 14.294 0.598096C13.3385 1.12251 12.5782 1.95526 12.1307 2.96748C11.6833 3.9797 11.5735 5.11495 11.8186 6.19756C9.86088 6.09691 7.94572 5.57516 6.19741 4.66618C4.4491 3.7572 2.90672 2.48131 1.6704 0.921344C1.04073 2.03306 0.847872 3.34911 1.1311 4.60154C1.41433 5.85397 2.15234 6.9486 3.19488 7.66257C2.41127 7.63876 1.64475 7.42196 0.96 7.03049C0.96 7.05117 0.96 7.07283 0.96 7.09449C0.960311 8.26041 1.35385 9.39034 2.07387 10.2926C2.79389 11.1949 3.79606 11.8139 4.9104 12.0448C4.18547 12.2476 3.42488 12.2772 2.68704 12.1315C3.00169 13.1349 3.61427 14.0124 4.43911 14.6412C5.26395 15.27 6.25979 15.6186 7.28736 15.6384C5.54375 17.0438 3.38982 17.8067 1.17216 17.8044C0.780387 17.8037 0.388996 17.7793 0 17.7316C2.25181 19.2136 4.87192 19.9997 7.54752 19.9961"
        fill={fill}
      />
    </svg>
  );
}

export default TwitterIcon;
