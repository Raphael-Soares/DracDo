import React from "react";
import {useNavigate} from "react-router-dom";
import "../styles/Login.scss";

function Registro() {
    const navigate = useNavigate();
    return (
        <main>
            <section>
                <h1>Crie sua conta DracDo</h1>
                <form action="">
                    <span>
                        <label htmlFor="email">Email*</label>
                        <input type="email" name="email" id="email" />
                    </span>
                    <span>
                        <label htmlFor="senha">Senha*</label>
                        <input type="password" name="senha" id="senha" />
                    </span>
                    <span>
                        <label htmlFor="senha2">Confirme sua senha*</label>
                        <input type="password" name="senha" id="senha2" />
                    </span>
                    <p>* campos obrigatórios</p>
                    <div className="btn-group">
                        <button
                            onClick={() => {
                                navigate("/login");
                            }}
                        >
                            Já tenho uma conta
                        </button>
                        <button onClick={() => console.log("foo")}>Criar conta</button>
                    </div>
                </form>
            </section>
        </main>
    );
}

export default Registro;
