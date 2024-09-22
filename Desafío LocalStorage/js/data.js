const storedData = localStorage.getItem('text');    // Obtiene el valor almacenado en localStorage bajo la clave "text"

// Actualiza el contenido del elemento con id "data"
// Si hay datos almacenados, mostrarlos; de lo contrario, mostrar un mensaje alternativo
document.getElementById('data').textContent = storedData ? storedData : 'No hay datos guardados.';  