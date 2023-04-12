function guardarEmpleado() {
    let empleados = JSON.parse(localStorage.getItem("empleados")) || [];

    const empleado = {
        employeeID: document.getElementById("employee-id").value,
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
}
