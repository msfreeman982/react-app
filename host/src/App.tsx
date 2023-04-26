import React from "react";
import ReactDOM from 'react-dom/client';
import MainPage from "../../pages/src/Components/Pages/MainPage/MainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./index.scss"
import Header from "../../layout/src/Header/Header";
import Footer from "../../layout/src/Footer/Footer";


const App = () => (
    <div>
        <Header/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
            </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
);

const root = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(root).render(<App />);

