document.addEventListener('DOMContentLoaded', function () {
    alert('¡Bienvenido a la suscripción a la Membresía de Vinos!');

    let confirmed = confirm('¿Deseas proceder con la suscripción?');
    if (!confirmed) {
        alert('Suscripción cancelada.');
    } else {
        mostrarPlanes();
    }
});

function searchWine() {
    let query = document.getElementById('search-input').value;
    alert('Buscando: ' + query);
}

function submitForm() {
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let direccion = document.getElementById('direccion').value;
    let plan = document.getElementById('plan').value;

    if (nombre === '' || email === '' || direccion === '' || plan === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }

    let confirmed = confirm(`¿Confirmas tu suscripción con los siguientes datos?\nNombre: ${nombre}\nEmail: ${email}\nDirección: ${direccion}\nPlan: ${plan}`);
    if (confirmed) {
        alert('¡Gracias por suscribirte!');
        document.getElementById('subscription-form').submit();
    } else {
        alert('Suscripción cancelada.');
    }
}

// Ejemplo de iteración
function mostrarPlanes() {
    let planes = ['Básico - $5.000/mes', 'Premium - $10.000/mes', 'Élite - $20.000/mes'];
    let mensaje = 'Planes disponibles:\n';

    for (let i = 0; i < planes.length; i++) {
        mensaje += (i + 1) + '. ' + planes[i] + '\n';
    }

    alert(mensaje);
}
