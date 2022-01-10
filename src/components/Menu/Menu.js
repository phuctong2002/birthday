import React, {useState} from "react";
import { Link } from "react-router-dom";
import '../../App.css'
export default function Menu() {
    console.log("render trong menu.js");
    const [tt, setTT] = useState( true);
    function a( e){
        console.log( e.target.className);
        console.log( e.target)
        setTT( true);
    }
    function b( e){
        console.log( e.target.className );
        setTT( false);
    }
    return (
        <div className='navbar navbar-default'>
            <a className='navbar-brand' href='/'> CALL API</a>
            <ul className='nav navbar-nav'>
                <li className={tt? "active" : ""} onClick={a}>
                    {/* <a href='/'>Trang chu</a> */}
                    <Link to='/' >Trang chu</Link>
                </li>
                <li className={!tt ? "active" : ""}  onClick={b}>
                    {/* <a href='/'>Quan ly san pham</a> */}
                    <Link to='/pages/ProductListPage/ProductListPage'  >Quan ly san pham</Link>
                </li>
            </ul>
        </div>

    )
}