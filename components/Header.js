import React from "react";
import { HeaderStyle, ImageWrap, HeaderSizer, DarkModeDiv } from "./styles";
import moon from "../public/assets/moonsolid.svg";
import Image from "next/image";

function Header({ toggleTheme }) {
  return (
    <HeaderStyle>
      <HeaderSizer>
        <h1>Where in the world? </h1>
        <DarkModeDiv
          onClick={() => {
            toggleTheme();
          }}
        >
          <ImageWrap>
            <Image
              className="teste"
              width={30}
              height={20}
              src={moon}
              alt="test"
            />
          </ImageWrap>
          <button>Dark Mode</button>
        </DarkModeDiv>
      </HeaderSizer>
    </HeaderStyle>
  );
}

export default Header;
