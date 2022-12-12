import './App.css';
import {Route, Routes} from "react-router-dom";

import Register from "./project/Authorization/Register/Register";
import Login from "./project/Authorization/Login/Login";
import ColorHex from "./project/ColorHex/ColorHex";
import Calculator from "./project/Calculator/Calculator";
import {DragDrop} from "./project/DragDrop/DragDrop";
import {Layout} from "./Layout";
import {Home} from "./components/Home";


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="calculator" element={<Calculator/>}/>
                    <Route path="color" element={<ColorHex/>}/>
                    <Route path="drop" element={<DragDrop/>}/>
                    <Route path='register' element={<Register/>}/>
                    <Route path='login' element={<Login/>}/>
                </Route>
                <Route path="*" element={<div>Not found</div>}/>
            </Routes>
        </>
    )
}

export default App;
