import React from "react";
import { HeaderStyle, ImageWrap, HeaderSizer } from "./styles";
import moon from "../public/assets/moonsolid.svg";
import Image from "next/image";

function Header({ toggleTheme }) {
  return (
    <HeaderStyle>
      <HeaderSizer>
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
      </HeaderSizer>
    </HeaderStyle>
  );
}

export default Header;
