import React from "react";
import {useNavigate} from "react-router-dom";

import Input from "../components/Input";
import "../styles/Login.scss";

function Login() {
    const navigate = useNavigate();
    return (
        <main className="login">
            <section>
                <h1>Entre na sua conta DracDo</h1>
                <form action="">
                    <Input name="email" id="email" label="Email*" type="email" />
                    <Input name="senha" id="senha" label="Senha*" type="password" />

                    <p>* campos obrigatórios</p>
                    <div className="btn-group">
                        <button
                            onClick={() => {
                                navigate("/registro");
                            }}
                        >
                            Não tenho uma conta
                        </button>
                        <button type="submit">Entrar</button>
                    </div>
                </form>
            </section>
        </main>
    );
}

export default Login;
