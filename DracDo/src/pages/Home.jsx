import React from "react";

import Navbar from "../components/Navbar";
import AddForm from "../components/AddForm";
import "../styles/Home.scss";

function Home() {
    return (
        <div className="home">
            <Navbar />
            <main>
                <div className="drac">
                    <AddForm />
                    <div className="tasks">
                        <div className="task"></div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;
