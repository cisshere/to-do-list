// <div id="item-1" class="tarea-agregada">
//<h3 class="tarea"> </h3>
//<button class="btn-borrar">Borrar</button>
//</div>

var arrayDeTareas = [];

const mostrarTareas = () => {
    const contenedor = document.querySelector(".contenedor");
    contenedor.innerHTML = "";

    arrayDeTareas.forEach((tarea, indice) =>{
        const div = document.createElement("div");
        div.id = "item-"+indice;
        div.classList.add("tarea-agregada");

        const h3 = document.createElement("h3");
        h3.classList.add("tarea");
        h3.innerText = tarea;

        const button = document.createElement("button");
        button.classList.add("btn-borrar");
        button.innerHTML = "borrar";

        button.onclick = (() =>{
            arrayDeTareas.splice(indice,1);
            document.getElementById(div.id).remove();//div.remove()
            //mostrarTareas();
        })

        contenedor.appendChild(div);
        div.appendChild(h3);
        div.appendChild(button);
    });
}

const agregarClick = () => {
    const inputTarea = document.querySelector(".input-tarea");
    const tareaTexto = inputTarea.value;
    arrayDeTareas.push(tareaTexto);
    mostrarTareas();
}


const borrarClick = () => {
    const contenedor = document.querySelector(".contenedor");
    contenedor.innerHTML = "";
    arrayDeTareas = [];
    
}

const btnBorrar = document.querySelector(".btn-borrar-todo");
btnBorrar.addEventListener("click", borrarClick);

