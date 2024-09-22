const storedData = localStorage.getItem('text');
document.getElementById('data').textContent = storedData ? storedData : 'No hay datos guardados.';