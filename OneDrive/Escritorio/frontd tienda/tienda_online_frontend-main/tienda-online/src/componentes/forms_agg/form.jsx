 
import React, { useState } from "react";

const validate = (input) => {
    let errors = {};


   
     if (!/^[a-zA-Z]+$/.test(input.prenda)) {

        errors.prenda = "Solo se aceptan letras";  
      }

          else if (input.prenda.length > 20) {

            errors.prenda = "El nombre es demasiado largo";

          }
          else if (input.precio.length > 10 || !/^[0-9-]+$/.test(input.precio)){

                errors.precio ="Precio en bolivares soberanos"
          }
          if (!input.image) {

               errors.image = "La imagen es requerida";
               
            } else if (!/\.(jpg|jpeg|png|gif)$/i.test(input.image)) {

              errors.image = "El formato de imagen no es válido. Se aceptan formatos jpg, jpeg, png y gif";
             }  

          
          return errors;
}


const Form = () => {
    const [input, setInput] = useState({
        prenda:"",
        precio:"",
        color:"", 
        talla:"",
        image:"",
    })

    const [errors, setErrors] = useState({
        prenda:"",
        precio:"",
        color:"", 
        talla:"",
        image:"",
    })
 
    const handleChange = (event) => {

        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
        setErrors(validate(input))
    }

    return(
        <form>

        <label htmlFor="image">image: </label>
          <input
            name="image"
            type="text"
            placeholder='ImagenUrl..'
            value={input.image} 
            onChange={handleChange}   />

            {errors.image !== "" && <p style = {{color:"red"}}> {errors.image}</p>}


            <hr style={{border: "none" }}/>

            

          <label htmlFor="prenda">prenda: </label>
          <input 
          type="text"
          name="prenda"
          //placeholder="Tipo de prenda"
          value={input.prenda}
          onChange={handleChange} />

          {errors.prenda !== "" && <p style = {{color:"red"}}> {errors.prenda}</p>}
          
   
          <hr style={{border: "none" }}/>

          <label htmlFor="precio">precio: </label>
          <input 
          
          type="text"
          name="precio"
          value={input.precio}
          onChange={handleChange} />

          {errors.precio !== "" && <p style = {{color:"red"}}> {errors.precio}</p>}


          <hr style={{border: "none" }}/>

          <label htmlFor="color">color: </label>
          <input 
          type="text"
          name="color"
          value={input.color} 
          onChange={handleChange}/>
          
           <hr style={{border: "none" }}/>

          <label htmlFor="talla">talla: </label>
          <select
          type="text"
          name="talla"
          value={input.talla} 
          onChange={handleChange}>
            <option value= "vacio"></option>
            <option value= "xs">XS</option>
            <option value= "s">S</option>
            <option value= "m">M</option>
            <option value= "l">L</option>
            <option value= "xl">XL</option>
            <option value= "xxl">XXL</option>
            <option value= "xxxl">XXXL</option>
          </select>

            <hr style={{border: "none" }}/>

          <button 
          
          type="submit" 
          disabled={!input.image || !input.image || !input.precio || !input.prenda
          || !input.talla || errors.prenda || errors.image || errors.talla || errors.precio }

          
          >
            
            
            send </button>

         </form>
    )
}
export default Form;