import React from "react";
import "./Header.scss";
import { ReactComponent as Logo } from "../images/logo.svg";

export default function Header() {
  return (
    <div className="header">
        <Logo className={'header__logo'}/>
    </div>
  );
}