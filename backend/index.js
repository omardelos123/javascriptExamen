const API_URL =
    "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole";

cargarDatos();

var btnCliente = document.getElementById("botonCliente");
btnCliente.addEventListener('click', filtrarClientesGold, true);


async function cargarDatos() {
    const data = fetch(API_URL)
        .then((response) => response.json())
        .then((info) => {
            return info;
        });

    const setTabla = async() => {
        const a = await data;
        if (a.length > 0) {

            var temp = "";

            a.forEach((u) => {
                //console.log("u.created: ", u.created);
                temp += "<tr>";
                temp += "<td>" + u.first + "</td>";
                temp += "<td>" + u.last + "</td>";
                temp += "<td>" + u.email + "</td>";
                temp += "<td style='display:none;'>" + u.address + "</td>";
                temp += "<td>" + u.balance + "</td>";
                temp += "<td style='display:none;'>" + u.created + "</td>";
                temp += "<td>" + "<button title='Detalle' data-target='#detalle' onclick='mostrarDetalle(this)' id='botonDetalle' data-toggle='modal'><i title='Detalle' class='fa fa-file-text-o'></i></button>";
                temp += "<button title='Antiguedad' data-target='#antiguedad' onclick='mostrarAntiguedad(this)' id='botonAntiguedad' data-toggle='modal'/><i title='Antiguedad' class='fa fa-clock-o'></i></button></td></tr>";
                //temp += "<a href='#antiguedad' id='botonAntiguedad' onclick='mostrarAntiguedad()' class='btn btn-success' data-toggle='modal'><span>Antiguedad</span></a></td></tr>";


            })

            document.getElementById("tbody").innerHTML = temp;

        }
        //console.log(a);
    };

    setTabla();

    var maxRows = 4;

    var table = document.getElementById('ttable');
    var wrapper = table.parentNode;
    var rowsInTable = table.rows.length;
    var height = 0;
    if (rowsInTable > maxRows) {
        for (var i = 0; i < maxRows; i++) {
            height += table.rows[i].clientHeight;
        }
        wrapper.style.height = height + "px";
    }
}

function filtrarClientesGold() {
    const data = fetch(API_URL)
        .then((response) => response.json())
        .then((info) => {
            return info;
        });

    const setTabla = async() => {
        const a = await data;
        if (a.length > 0) {

            var temp = "";

            a.forEach((u) => {

                const len = u.balance.length;
                const valorBalance = u.balance.substring(1, len);

                if (valorBalance > "5,000") {
                    temp += "<tr>";
                    temp += "<td>" + u.first + "</td>";
                    temp += "<td>" + u.last + "</td>";
                    temp += "<td>" + u.email + "</td>";
                    temp += "<td style='display:none;'>" + u.address + "</td>";
                    temp += "<td>" + u.balance + "</td>";
                    temp += "<td style='display:none;'>" + u.created + "</td>";
                    temp += "<td>" + "<button title='Detalle' data-target='#detalle' onclick='mostrarDetalle(this)' id='botonDetalle' data-toggle='modal'><i title='Detalle' class='fa fa-file-text-o'></i></button>";
                    temp += "<button title='Antiguedad' data-target='#antiguedad' onclick='mostrarAntiguedad(this)' id='botonAntiguedad' data-toggle='modal'/><i title='Antiguedad' class='fa fa-clock-o'></i></button></td></tr>";
                    //temp += "<a href='#antiguedad' id='botonAntiguedad' class='btn btn-success' data-toggle='modal'><span>Antiguedad</span></a></td></tr>";
                }
            })

            document.getElementById("tbody").innerHTML = temp;

        }
    };

    setTabla();
}