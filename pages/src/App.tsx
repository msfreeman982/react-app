import React from "react";
import ReactDOM from 'react-dom/client';
import MainPage from "../../pages/src/Components/Pages/MainPage/MainPage";
import "./index.scss"


const App = () => (
    <div>
        <MainPage/>
    </div>
);

const root = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(root).render(<App />);
