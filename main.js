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
        i.classList.add("fa-circle-check")
        elementchild.appendChild(i2)
        i2.classList.add("fa-solid")
        i2.classList.add("fa-file-pen")
        elementchild.appendChild(i3)
        i3.classList.add("fa-solid")
        i3.classList.add("fa-trash-can")
        row3.appendChild(div)
        done(i, div)
        destroy(i3, div)
        edit(i, i2, i3, div, p, elementchild0, elementchild)
        create_task.focus()
        
//filters on top right
        // filterToDo(div)
        // filterFinished(div)
        // showAll(div)
        
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
function edit(i, i2, i3, div, p, elementchild0, elementchild) {
    i2.addEventListener("click", () => {
        elementchild0.removeChild(p)
        i4 = document.createElement('i')
        elementchild.appendChild(i4)
        i4.classList.add("fa-solid")
        i4.classList.add("fa-floppy-disk")
        i4.style.display = "block"
        i4.style.margin = "auto"
        i.style.display = "none"
        i2.style.display = "none"
        i3.style.display = "none"
        newinput = document.createElement("input")
        elementchild0.appendChild(newinput)
        newinput.focus()
        elementchild0.appendChild(p)
        p.innerText = newinput.value
        i4.addEventListener("click",  function (event){
            elementchild0.removeChild(newinput)
            p.innerText = newinput.value
            i4.style.display = "none"
            i.style.display = "block"
            i2.style.display = "block"
            i3.style.display = "block"
        })

        newinput.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                elementchild0.removeChild(newinput)
                p.innerText = newinput.value
                i4.style.display = "none"
                i.style.display = "block"
                i2.style.display = "block"
                i3.style.display = "block"
            }
        })
    })
}

let afaire =document.getElementById("filterToDo")
let finished = document.getElementById("finished")
let showall = document.getElementById("showAll")


afaire.addEventListener("click", function (event) {
    elements = document.querySelectorAll(".element")
    console.log(elements)
    elements.forEach(element => {
        if(element.style.backgroundColor == "lightgreen"){
            element.style.display = "none"
        }
        else{
            element.style.display = "flex"
        }
    });
})

finished.addEventListener("click", function (event) {
    elements = document.querySelectorAll(".element")
    elements.forEach(element => {
        if(element.style.backgroundColor != "lightgreen"){
            element.style.display = "none"
        }
        else{
            element.style.display = "flex"
        }
    });
})

showall.addEventListener("click", function (event) {
    elements = document.querySelectorAll(".element")
    elements.forEach(element => {
            element.style.display = "flex"
    });
})