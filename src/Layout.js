import React from "react";
import {Link, Outlet} from "react-router-dom";
import {Header} from "./components/Header";


const Layout = () => {
    return (
        <div>
            <Header/>
            <div>
                <Outlet/>
            </div>
            {/*<footer></footer>*/}
        </div>
    )
}
export {Layout};
