import { useState } from "react";
import "./form.css";
const Form = () => {
    const initilform = {
        nome: "",
    }
    /* estado do formulario */
    const [FormState, setFormState] = useState(initilform);
    /*  função para lidar quando a alteração do campos de entrada  */
    const handleInput = (event) => {
        const target = event.currentTarget;
        const { value, name } = target;
        setFormState({ ...FormState, [name]: value })
    }
    /* função para lida com a submição do formulario */
    const handleSubmit = ( event ) => {
        event.preventDefault()
        console.log(FormState.nome);
        
        setFormState({...initilform});
    }
    return (
        <div className="containerForm">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="nome">Nome</label>
                        <input type="text"
                            id="nome"
                            name="nome"
                            value={FormState.nome}
                            onChange={handleInput}
                        />
                    </div>
                    <div className="form-control">
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
