import React from "react";
import {useNavigate} from "react-router-dom";
import "../styles/Login.scss";

function Login() {
    const navigate = useNavigate();
    return (
        <main className="login">
            <section>
                <h1>Entre na sua consta DracDo</h1>
                <form action="">
                    <span>
                        <label htmlFor="email">Email*</label>
                        <input type="email" name="email" id="email" />
                    </span>
                    <span>
                        <label htmlFor="senha">Senha*</label>
                        <input type="password" name="senha" id="senha" />
                    </span>
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
