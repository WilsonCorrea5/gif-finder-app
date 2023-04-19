import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {//<-- Aqui desestructuramos la propiedad *target* del evento enviado
    setInputValue(target.value);
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    if (inputValue.trim().length <= 1) return//<-- aqui validamos si hay 2 o mas caracteres en el input para poder ingresar
    onNewCategory(inputValue.trim().toLocaleLowerCase());
    setInputValue('');// <-- reseteamos nuestro input
  }
  return (
    <form onSubmit={(event)=>handleSubmit(event)}>{/* forma 1 <-- Aqui en el valor del evento *onSubmit*, con una funcion de callback le enviamos el evento a la funcion handleSubmit */}
      <input
        type="text"
        placeholder="Agrega una categoria"
        value={inputValue}
        onChange={onInputChange}// forma 2 <-- Aqui implicitamente la llamada a la funcion *onInputChange* recibe por defecto el evento de la propiedad *onChange* como argumento
      />
    </form>
  );
};
/* podemos poner los valores de nuestras propiedades como se ve en las formas 1 y 2 ya que en este ejemplo se espera por default un evento. ambas funcionan dejandolo explicito como en la forma 1 o implicito como en la forma 2 */