import React from "react";

import "../styles/components/Navbar.scss";

import {MdOutlineKeyboardArrowDown, MdAdd} from "react-icons/md";

function Navbar() {
    return (
        <section className="navbar">
            <button className="add-btn">
                <MdAdd />
            </button>
            <div className="dropdown">
                <p>
                    <MdOutlineKeyboardArrowDown />
                </p>
                <div className="dropdown-content">
                    <a>Adicionar DracDo</a>
                    <a className="red">Sair</a>
                </div>
            </div>
        </section>
    );
}

export default Navbar;
