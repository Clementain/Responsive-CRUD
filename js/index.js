$(document).ready(() => {
    let datosLocalStorage = JSON.parse(localStorage.getItem('empleados'));
    if (!datosLocalStorage) {
        datosLocalStorage = [];
    }

    $("#nwind").DataTable({
        data: datosLocalStorage,
        columns: [
            { title: "EmployeeID", data: "employeeID" },
            { title: "Lastname", data: "lastName" },
            { title: "Firstname", data: "firstName" },
            { title: "Title", data: "title" },
            { title: "TitleOfCourtesy", data: "titleOfCourtesy" },
            { title: "Birthday", data: "birthDate" },
            { title: "HireDay", data: "hireDate" },
            { title: "Address", data: "address" },
            { title: "City", data: "city" },
            { title: "Region", data: "region" },
            { title: "PostalCode", data: "postalCode" },
            { title: "Country", data: "country" },
            { title: "PhoneHome", data: "homePhone" },
            { title: "Email", data: "email" },
            { title: "Extension", data: "extension" },
            { title: "ReportsTO", data: "reportsTo" },
            {
                title: 'Operaciones', data: null, render: (data, type) => {
                    return '<button type="button" onclick="eliminar(' +
                        data.employeeID + ')">Eliminar</button> <button type="button" onclick="editar(' +
                        data.employeeID + ')">Editar</button>';
                }
            },

        ], "order": [[1, 'asc'], [2, 'asc']],
        responsive: {
            details: {
                renderer: function (api, rowIdx, columns) {
                    var data = $.map(columns, function (col, i) {
                        return col.hidden ?
                            '<tr data-dt-row="' + col.rowIndex + '" data-dt-column="' + col.columnIndex + '">' +
                            '<td>' + col.title + ':' + '</td> ' +
                            '<td>' + col.data + '</td>' +
                            '</tr>' :
                            '';
                    }).join('');

                    return data ?
                        $('<table/>').append(data) :
                        false;
                }
            }
        },
        columnDefs: [
            { responsivePriority: 1, targets: 16 },
            { responsivePriority: 2, targets: [0, 1, 2] },
            { responsivePriority: 3, targets: [3, 12, 13, 14, 15] },
            { responsivePriority: 4, targets: -1 },
        ]
    });
});

function eliminar(id) {
    const datosLocalStorage = JSON.parse(localStorage.getItem('empleados'));
    const index = datosLocalStorage.findIndex(empleado => empleado.employeeID === id);
    if (index !== -1) {
        datosLocalStorage.splice(index, 1);
        localStorage.setItem('empleados', JSON.stringify(datosLocalStorage));
        alert('Empleado eliminado exitosamente');
    } else {
        alert('No se encontró el empleado');
    }
    location.reload()
}

function editar(id) {
    window.location.href = "./FormularioRegistro.html?id=" + id;
}

function agregarEmpleado() {
    window.location.replace("./FormularioRegistro.html");

}


