import { useState } from 'react';

function useForm(valoresIniciais) {
    const [values, setValues] = useState(valoresIniciais);
    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor, // nome: valor
            // Chave é bem parecida com array
        })
    }

    function handleChange(infosDoEvento) {
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
        );
    }

    function clearForm() {
        setValues(valoresIniciais)
    }

    return {
        values,
        handleChange,
        clearForm,
    };

}

export default useForm;
