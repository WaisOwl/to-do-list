let taskCounter=0;
let btn=document.getElementById('btn-add-task'); //llamo la id 
btn.addEventListener('click',function (){ //espero a que escuche el 'click' para llamar a la función

    let li=document.createElement("li"); //creo la variable li
    li.className = "list-group-item d-flex justify-content-between align-items-start"; //para que ande el bootstrap
    let span = document.createElement("span"); //creo la variable li
    span.className = "mt-1";
    let deleteButton = document.createElement("button"); //creo el boton para eliminar pero lo vamos a ver despues
    deleteButton.textContent = "Eliminar"; //textcontent es para agregar eliminar dentro del boton
    deleteButton.className = "btn btn-danger"; //para ponerle el color al boton con bootstrap
    let taskInput = document.getElementById("taskInput"); // For task entries llamo el id de task imput que es la barra para escribir
    let taskList = document.getElementById("taskList"); // For listing tasks llamo el id de task list que es la lista que queda abajo
    let countTask = document.getElementById("countTask"); //la variable para el numero del contador

    if (taskInput.value==""){
    alert("Por favor ingrese una Tarea!");
    taskInput.focus(); //obligo que el cursor(el 'focus') quede seleccionando la barra
    return;
    }
  
    span.textContent=taskInput.value; // Lo que esta en la caja de entrada pasa al span
    li.appendChild(span); //Agrego el span dentro del li
    taskCounter++;
    li.appendChild(deleteButton);
    countTask.textContent = "Cantidad de Tareas : " + taskCounter; //una vez se sume la tarea saldrá el texto mas el taskcounter que definimos
    taskList.appendChild(li); //agrego li dentro de tasklist que esta en ul
    taskInput.value=""; //para que quede vacio la barra para poner las tareas
    taskInput.focus();
    deleteButton.addEventListener('click', function (){ //hago que el boton de eliminar llame la funcion cuando escuche el click
        if (confirm("¿Estás seguro de que quieres eliminar esta tarea?")){
        taskCounter--;
        countTask.textContent = `Cantidad de Tareas : ${taskCounter}`; //modificación a usar para la variable "countTask.textContent"
        taskList.removeChild(li); //borro li de la tasklist

        }
    });


 });
