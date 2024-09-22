document.getElementById('buttonText').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;   // Obtiene el valor del campo de entrada con id 'inputText'
    localStorage.setItem('text', inputText);                       // Guarda el valor en localStorage bajo la clave 'text'
    document.getElementById('inputText').value = '';              // Limpia el campo de entrada después de guardar el dato
});

