import React from "react";
import { HeaderStyle, ImageWrap } from "./styles";
import moon from "../assets/moonsolid.svg";
import Image from "next/image";

function Header({ toggleTheme }) {
  return (
    <HeaderStyle>
      <h1>Where in the World? </h1>
      <div>
        <ImageWrap>
          <Image
            className="teste"
            width={30}
            height={20}
            src={moon}
            alt="test"
          />
        </ImageWrap>
        <button
          onClick={() => {
            toggleTheme();
          }}
        >
          Dark Mode
        </button>
      </div>
    </HeaderStyle>
  );
}

export default Header;
