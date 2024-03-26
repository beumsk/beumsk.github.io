export default function Logo() {
  return (
    <svg
      id="logo-gradient"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 600 600"
      width="100px"
      fill="url(#linear-gradient) #009688"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="435.39"
          y1="490.86"
          x2="84.52"
          y2="139.99"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="transparent">
            <animate
              attributeName="stop-color"
              values="transparent; #004d40"
              begin="2.5s"
              dur="0.1s"
              repeatCount="none"
              fill="freeze"
            ></animate>
          </stop>
          <stop offset="1" stopColor="transparent">
            <animate
              attributeName="stop-color"
              values="transparent; #26a69a"
              begin="2.5s"
              dur="0.1s"
              repeatCount="none"
              fill="freeze"
            ></animate>
          </stop>
        </linearGradient>
      </defs>
      <path
        stroke="#009688"
        strokeWidth="1px"
        strokeDasharray="2861px"
        strokeDashoffset="-2861px"
        d="M446,352h-.33q-4.68-37.26-25.73-55.6a73.82,73.82,0,0,0-14.19-9.55c-6.37,18.34-16.14,32-27.37,42.17q10.67,11.87,11.1,30.65c.2,2.43.31,5,.31,7.63v69.57q-1.06,21.12-11.63,31.41-11.76,11.43-36.6,11.43H261.83v-.09H210.09V339.21h64l51.38,115.5h16c9.2,0,16.37-1.63,19.17-4.35,2.15-2.09,3.65-7.36,4.06-14.18V405.64l-35.1-77.54Q388.5,309.82,388.49,236V173.22q0-52.93-28.42-77.44t-84-24.51H153.23V528.73H335.67q59.46,0,85.29-23.53t25.81-79.73V366.66A135.33,135.33,0,0,0,446,352ZM210.09,120.29h73.84q24.82,0,36.27,11.11t11.44,35.94v75.15q0,24.84-11.44,36.27T283.93,290.2H210.09Z"
      >
        <animate id="p1" attributeName="stroke-dashoffset" values="2861;0" dur="3s" repeatCount="none" fill="freeze" />
      </path>
    </svg>
  );
}
