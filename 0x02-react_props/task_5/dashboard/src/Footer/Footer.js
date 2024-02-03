import React from "react";
import "./Footer.css";
[2;2R[>77;30604;0c]10;rgb:bfbf/bfbf/bfbf]11;rgb:0000/0000/0000import { getFullYear, getFooterCopy } from "../utils/utils";

function Footer() {
  return (
    <>
      <div className="App-footer">
        Copyright {getFullYear()} - {getFooterCopy()}
      </div>
    </>
  );
}

export default Footer;
