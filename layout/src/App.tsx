import React from "react";
import ReactDOM from 'react-dom/client';
import "./index.scss"
import Header from "../../layout/src/Header/Header";
import Footer from "../../layout/src/Footer/Footer";


const App = () => (
    <div>
        <Header/>
        <Footer/>
    </div>
);

const root = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(root).render(<App />);
