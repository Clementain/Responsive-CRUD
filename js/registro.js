function guardarEmpleado() {
    let empleados = JSON.parse(localStorage.getItem("empleados")) || [];

    const empleado = {
        employeeID: obtenerNuevoID(empleados),
        lastName: document.getElementById("last-name").value,
        firstName: document.getElementById("first-name").value,
        title: document.getElementById("title").value,
        titleOfCourtesy: document.getElementById("title-of-courtesy").value,
        birthDate: document.getElementById("birth-date").value,
        hireDate: document.getElementById("hire-date").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        region: document.getElementById("region").value,
        postalCode: document.getElementById("postal-code").value,
        country: document.getElementById("country").value,
        homePhone: document.getElementById("home-phone").value,
        email: document.getElementById("email").value,
        extension: document.getElementById("extension").value,
        reportsTo: document.getElementById("reports-to").value
    };

    empleados.push(empleado);

    const jsonEmpleados = JSON.stringify(empleados);
    localStorage.setItem("empleados", jsonEmpleados);
    window.location.replace("./Tabla.html");
}

function actualizarEmpleado(employeeID) {
    let empleados = JSON.parse(localStorage.getItem("empleados")) || [];

    const empleado = empleados.find(e => e.employeeID === employeeID);

    empleado.lastName = document.getElementById("last-name").value;
    empleado.firstName = document.getElementById("first-name").value;
    empleado.title = document.getElementById("title").value;
    empleado.titleOfCourtesy = document.getElementById("title-of-courtesy").value;
    empleado.birthDate = document.getElementById("birth-date").value;
    empleado.hireDate = document.getElementById("hire-date").value;
    empleado.address = document.getElementById("address").value;
    empleado.city = document.getElementById("city").value;
    empleado.region = document.getElementById("region").value;
    empleado.postalCode = document.getElementById("postal-code").value;
    empleado.country = document.getElementById("country").value;
    empleado.homePhone = document.getElementById("home-phone").value;
    empleado.email = document.getElementById("email").value;
    empleado.extension = document.getElementById("extension").value;
    empleado.reportsTo = document.getElementById("reports-to").value;

    const jsonEmpleados = JSON.stringify(empleados);
    localStorage.setItem("empleados", jsonEmpleados);

    window.location.replace("./Tabla.html");
}

function cambiarPagina() {
    window.location.href = "./Tabla.html";
}



function obtenerNuevoID(empleados) {
    let maxID = 0;
    for (let i = 0; i < empleados.length; i++) {
        const empleado = empleados[i];
        if (empleado.employeeID > maxID) {
            maxID = empleado.employeeID;
        }
    }
    return maxID + 1;
}

function obtenerParametroUrl(parametro) {
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has(parametro)) {
        return urlParams.get(parametro);
    } else {
        return null;
    }
}


function obtenerEmpleado(id) {
    var employees = JSON.parse(localStorage.getItem('empleados'));
    var empleadoEncontrado = null;
    for (var i = 0; i < employees.length; i++) {
        if (employees[i].employeeID === parseInt(id)) {
            empleadoEncontrado = employees[i];
            break;
        }
    }
    return empleadoEncontrado;
}

function llenarFormulario(empleado) {
    var label = document.getElementById('employee-label');
    label.style.display = 'block';
    label.textContent += empleado.employeeID.toString();
    var boton = document.getElementById("boton");
    boton.value = "Actualizar";
    boton.onclick = function () {
        actualizarEmpleado(empleado.employeeID);
    };
    document.getElementById("last-name").value = empleado.lastName.toString();
    document.getElementById("first-name").value = empleado.firstName.toString();
    document.getElementById("title").value = empleado.title.toString();
    document.getElementById("title-of-courtesy").value = empleado.titleOfCourtesy.toString();
    document.getElementById("birth-date").value = empleado.birthDate.toString();
    document.getElementById("hire-date").value = empleado.hireDate.toString();
    document.getElementById("address").value = empleado.address.toString();
    document.getElementById("city").value = empleado.city.toString();
    document.getElementById("region").value = empleado.region.toString();
    document.getElementById("postal-code").value = empleado.postalCode.toString();
    document.getElementById("country").value = empleado.country.toString();
    document.getElementById("home-phone").value = empleado.homePhone.toString();
    document.getElementById("email").value = empleado.email.toString();
    document.getElementById("extension").value = empleado.extension.toString();
    document.getElementById("reports-to").value = empleado.reportsTo.toString();
}