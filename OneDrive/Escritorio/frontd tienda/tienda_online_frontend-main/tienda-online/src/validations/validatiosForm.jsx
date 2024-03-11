

const validations = () => {
   
    if (!input.name) {
        errors.name = "El nombre es requerido";
      } else if (!/^[a-zA-Z0-9-() .]+$/.test(input.name)) {
        errors.name =
          "Solo se aceptan letras, numeros, guiones medios y parentesis";  }

}