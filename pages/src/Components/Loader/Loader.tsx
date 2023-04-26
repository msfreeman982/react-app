import React from "react";
import { ReactComponent as Logo } from "./marvel-logo.svg";


const Loader = ({visibility}: any) => {

    return (
        <div className={`loader ${visibility ? '' : 'loader_hidden'}`}>
            <Logo />
        </div>
    )
}

export default Loader;