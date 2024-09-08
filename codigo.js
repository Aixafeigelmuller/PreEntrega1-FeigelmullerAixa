document.addEventListener('DOMContentLoaded', function () {
    // Bienvenida
    alert('¡Bienvenido a la suscripción a la Membresía de Vinos!');

    // Comprobación
    let confirmed = confirm('¿Deseas proceder con la suscripción?');
    if (!confirmed) {
        alert('Suscripción cancelada.');
    } else {
        mostrarPlanes();
    }

    // Cargar datos del localStorage
    cargarDatos();
});

function searchWine() {
    let query = document.getElementById('search-input').value;
    if (query.trim() === '') {
        alert('Por favor, ingresa un término de búsqueda.');
    } else {
        alert('Buscando: ' + query);
    }
}

function submitForm() {
    // Obtener los valores del formulario
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let direccion = document.getElementById('direccion').value;
    let plan = document.getElementById('plan').value;

    // Validación de los campos
    if (nombre === '' || email === '' || direccion === '' || plan === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Confirmación de suscripción
    let confirmed = confirm(`¿Confirmas tu suscripción con los siguientes datos?\nNombre: ${nombre}\nEmail: ${email}\nDirección: ${direccion}\nPlan: ${plan}`);
    if (confirmed) {
        // Guardar los datos en localStorage
        let datosUsuario = {
            nombre: nombre,
            email: email,
            direccion: direccion,
            plan: plan
        };

        // Almacenar en localStorage
        localStorage.setItem('suscripcion', JSON.stringify(datosUsuario));

        alert('¡Gracias por suscribirte!');
        // Limpiar el formulario
        document.getElementById('subscription-form').reset();
    } else {
        alert('Suscripción cancelada.');
    }
}

function mostrarPlanes() {
    let planes = ['Básico - $5.000/mes', 'Premium - $10.000/mes', 'Élite - $20.000/mes'];
    let mensaje = 'Planes disponibles:\n';

    planes.forEach((plan, index) => {
        mensaje += `${index + 1}. ${plan}\n`;
    });

    alert(mensaje);
}

function cargarDatos() {
    // Verificar si hay datos en el localStorage
    let datosGuardados = localStorage.getItem('suscripcion');
    
    if (datosGuardados) {
        let datosUsuario = JSON.parse(datosGuardados);
        document.getElementById('nombre').value = datosUsuario.nombre;
        document.getElementById('email').value = datosUsuario.email;
        document.getElementById('direccion').value = datosUsuario.direccion;
        document.getElementById('plan').value = datosUsuario.plan;

        alert('Datos cargados de una sesión anterior.');
    }
}

// Limpiar datos del localStorage
function limpiarDatos() {
    localStorage.removeItem('suscripcion');
    alert('Datos de suscripción eliminados.');
}
