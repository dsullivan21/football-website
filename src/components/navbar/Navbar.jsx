import React, {useState} from "react";
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className ="fb__navbar">
            <div className="fb__navbar-links">
                <div className ="fb__navbar-links_logo">
                    <h2 className ="fb__navbar-logo-placeholder">BEAT THE LINE</h2> 
                </div>
                <div className="gpt3__navbar-links_container">
                    <p><a href="#projections">Projections</a></p>
                    <p><a href="#picks">Best Picks</a></p>
                    </div>
                </div>
                <div className="gpt3__navbar-sign">
                    <p>Sign in</p>
                    <button type="button">Sign up</button>
                </div>
                <div className="gpt3__navbar-menu">
                    {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                    {toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                    <div className="gpt3__navbar-menu_container-links">
                        <p><a href="#projections">Projections</a></p>
                        <p><a href="#picks">Best Picks</a></p>
                    </div>
                    <div className="gpt3__navbar-menu_container-links-sign">
                        <p>Sign in</p>
                        <button type="button">Sign up</button>
                    </div>
                    </div>
                    )}
            </div>
        </div>

    )

}

export default Navbar