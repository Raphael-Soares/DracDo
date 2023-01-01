import React from "react";

import "../styles/components/AddForm.scss";

function AddForm() {
    return (
        <section className="add-form">
            <form action="">
                <span>
                    <label htmlFor="titulo">Título</label>
                    <input type="text" name="titulo" id="titulo" />
                </span>
                <span>
                    <label htmlFor="descricao">Descrição*</label>
                    <textarea name="descrição" id="descricao" />
                </span>

                <div className="input-area">
                    <span>
                        <label htmlFor="titulo">Data</label>
                        <input type="date" name="titulo" id="titulo" />
                    </span>
                    <span>
                        <label htmlFor="titulo">Horário</label>
                        <input type="time" name="titulo" id="titulo" />
                    </span>
                </div>
            </form>
        </section>
    );
}

export default AddForm;
