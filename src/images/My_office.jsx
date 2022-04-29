import React from 'react';

function MyOffice({radius=31}) {
    return (
        <svg id="Component_8_11" data-name="Component 8 – 11" xmlns="http://www.w3.org/2000/svg"
             width="62" height="62" viewBox="0 0 62 62">
            <circle id="Ellipse_1" data-name="Ellipse 1" cx={radius} cy={radius} r={radius} fill="#f2f2f2"/>
            <g id="_24px-2" data-name="24px-2" transform="translate(13 13)">
                <path id="Path_35" data-name="Path 35" d="M0,0H36V36H0Z" fill="none"/>
                <path id="Path_36" data-name="Path 36"
                      d="M18,7.325A3.675,3.675,0,1,1,14.325,11,3.675,3.675,0,0,1,18,7.325m0,15.75c5.2,0,10.675,2.555,10.675,3.675v1.925H7.325V26.75c0-1.12,5.478-3.675,10.675-3.675M18,4a7,7,0,1,0,7,7A7,7,0,0,0,18,4Zm0,15.75c-4.673,0-14,2.345-14,7V32H32V26.75C32,22.1,22.673,19.75,18,19.75Z"
                      fill="#707070"/>
            </g>
        </svg>
    );
}

export default MyOffice;