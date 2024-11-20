function tomar_datos(){
    const tarea=document.getElementById("tarea").value;
    const error=document.getElementById("error");
    const tipo_tarea=document.getElementById("importancia");
    const tarea_alta=document.getElementById("tarea_alta");
    const tarea_lista=document.createElement("li");
    const tarea_baja=document.getElementById("tarea_baja");

    
    if (tarea===""){
        error.innerHTML="Debes ingresar una tarea";
        return;
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function() {
        if (checkbox.checked) {
            tarea_lista.classList.add("completed");
        } else {
            tarea_lista.classList.remove("completed");
        }
    };

    const Eliminar = document.createElement("button");
    Eliminar.textContent = "Eliminar";
    Eliminar.onclick = function() {
        tarea_lista.remove();
    };

    tarea_lista.textContent = tarea;
    tarea_lista.prepend(checkbox);
    tarea_lista.appendChild(Eliminar);

    if (tipo_tarea.value==="alta"){
        tarea_alta.appendChild(tarea_lista);
    }else{
        
        tarea_baja.appendChild(tarea_lista);
    }


}