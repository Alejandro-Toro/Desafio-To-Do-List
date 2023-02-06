let tareas = [
    {
        id: 1,
        descripcion: "Hacer mercado",
        completado: false,
    },
    {
        id: 2,
        descripcion: "Estudiar para la prueba",
        completado: false,
    },
    {
        id: 3,
        descripcion: "Sacar a pasear a Tobby",
        completado: false,
    },
];

const inputAgregar = document.querySelector("#inputAgregar");
const botonAgregar = document.querySelector("#btnAgregar");
const spanTareasTotales = document.querySelector("#tareasTotales");
const spanTareasRealizadas = document.querySelector("#tareasRealizadas");
const divTareas = document.querySelector("#tareas");
const botonBorrar = document.querySelector("#botonBorrar");

let nuevoId = 4;

botonAgregar.addEventListener("click", function () {
    
    crearTarea();

    renderTareas();

    tareasTotales();

    
});



function crearTarea() {
    let nuevaTarea = inputAgregar.value;

    tareas.push({
        id: nuevoId,
        descripcion: nuevaTarea,
        completado: false,

    });

    nuevoId++;
}

function renderTareas() {
    let html = "";

    tareas.forEach(function(tarea){
        let checkboxChequeado = "";

        if (tarea.completado) {
            checkboxChequeado = "checked";
        };

        let template = `
        <div style="width: 10%;">${tarea.id}</div>
                        <div style="width: 70%;">${tarea.descripcion}</div>
                        <div style="width: 10%;">
                            <input type="checkbox" name="" id="completado${tarea.id}" ${checkboxChequeado} onchange="actualizarTarea(${tarea.id})">
                        </div>
                        <div style="width: 10%;">
                        <button class="btn btn-danger" onclick="borrar(${tarea.id})">X</button>
                        </div>
        `;

        html += template;
    });

    divTareas.innerHTML = html;
};

function borrar(id){
    const index = tareas.findIndex((ele) => ele.id == id);
    tareas.splice(index, 1);
    renderTareas();
    tareasTotales();
};


function actualizarTarea (tareaId){
    for (let i = 0; i < tareas.length; i++){
       if (tareas[i]["id"] == tareaId){
        tareas[i]["completado"] = true;
       } 
    } 
    TareasRealizadas()
    
}

function TareasRealizadas(){
    let tareasCompletadas = tareas.filter(value => value["completado"] == true).length;
    document.getElementById("tareasRealizadas").innerHTML = tareasCompletadas;
    
}

function tareasTotales() {
    let tareasTotales = document.getElementById("tareasTotales").innerHTML = tareas.length;
}
