document.getElementById('botonEnviar').addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
    const mensaje = `Hola, ${nombre}! Bienvenido a mi aplicación web.`;
    document.getElementById('mensaje').textContent = mensaje;
});
