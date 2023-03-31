import React from "react";
const MarvelLogoIco = require("./marvel-logo.svg") as string;

const Loader = ({visibility}: any) => {

    return (
        <div className={`loader ${visibility ? '' : 'loader_hidden'}`}>
            <img src={MarvelLogoIco} alt={'marvel logo'}/>
        </div>
    )
}

export default Loader;