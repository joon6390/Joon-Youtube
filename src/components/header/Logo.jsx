import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <h1 className="header__logo">
      <Link to="/" aria-label="JoonTube 홈">
        {/* YouTube 로고 SVG */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 28 20"
          aria-hidden="true"
          focusable="false"
          style={{ marginRight: 10, display: "block" }}
        >
          {/* 빨간 라운드 사각형 */}
          <path
            d="M27.4 3.1c-.3-1.2-1.2-2.1-2.4-2.4C22.9 0 14 0 14 0S5.1 0 3 .7C1.8 1 .9 1.9.6 3.1 0 5.2 0 10 0 10s0 4.8.6 6.9c.3 1.2 1.2 2.1 2.4 2.4C5.1 20 14 20 14 20s8.9 0 11-.7c1.2-.3 2.1-1.2 2.4-2.4.6-2.1.6-6.9.6-6.9s0-4.8-.6-6.9z"
            fill="#FF0000"
          />
          {/* 흰색 재생 삼각형 */}
          <path d="M11 6.5V13.5L17 10L11 6.5Z" fill="#FFFFFF" />
        </svg>

        <span>JoonTube</span>
      </Link>
    </h1>
  );
};

export default Logo;
