let container = document.getElementById("container")
let create_task = document.getElementById('tachesadd');
let list_tasks = [];
let row3 = document.getElementById('row3')
let section = document.getElementById('global')


//function create a new task
function ajouter() {
    if (create_task.value == "") {
        create_task.value = "Entrez une tâche valide svp"
    } else {
        div = document.createElement('div')
        div.classList.add("element")
        p = document.createElement('p')
        i = document.createElement('i')
        div.appendChild(p)
        p.innerText = create_task.value
        div.appendChild(i)
        i.classList.add("fa-solid")
        i.classList.add("fa-v")
        div.appendChild(i)
        i.classList.add("fa-file-pen")
        div.appendChild(i)
        row3.appendChild(div)
    }
}
container.appendChild(row3)
document.body.appendChild(section)
//for each