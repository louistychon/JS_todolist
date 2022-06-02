//get containers

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
        elementchild0 = document.createElement('div')
        elementchild = document.createElement('div')
        p = document.createElement('p')
        i = document.createElement('i')
        i2 = document.createElement('i')
        i3 = document.createElement('i')
        div = document.createElement('div')
        div.classList.add("element")
        elementchild0.classList.add("elementchild")
        elementchild.classList.add("elementchild")
        div.appendChild(elementchild0)
        elementchild0.appendChild(p)
        div.appendChild(elementchild)
        p.innerText = create_task.value
        elementchild.appendChild(i)
        i.classList.add("fa-solid")
        i.classList.add("fa-v")
        elementchild.appendChild(i2)
        i2.classList.add("fa-solid")
        i2.classList.add("fa-file-pen")
        elementchild.appendChild(i3)
        i3.classList.add("fa-solid")
        i3.classList.add("fa-dumpster")
        row3.appendChild(div)
        done(i, div)
        destroy(i3, div)
        edit(i, i2, i3, div, p, elementchild0)
    }
}

function destroy(i3, div) {
    i3.addEventListener("click", () => {
        row3.removeChild(div)
    })
}

//changeColor of task when done
function done(i, div) {
    i.addEventListener("click", () => {
        changeColor(div)
    })
}

function changeColor(div) {
    if (div.style.backgroundColor == "") {
        div.style.backgroundColor = "lightgreen"
    } else {
        div.style.backgroundColor = ""
    }
}

//edit task name
function edit(i, i2, i3, div, p, elementchild0) {
    i2.addEventListener("click", () => {
        elementchild0.removeChild(p)
        newinput = document.createElement("input")
        elementchild0.appendChild(newinput)
        newinput.focus()
        elementchild0.appendChild(p)
        p.innerText = newinput.value
        newinput.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                elementchild0.removeChild(newinput)
                p.innerText = newinput.value
            }
        })
    })
}

