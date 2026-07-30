const saveInput = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const listEl = document.getElementById("list-el")

let myLeads = []

function saveLead(){
  myLeads.push(inputEl.value)
  inputEl.value = ""
  console.log(myLeads)

  const newListItem = document.createElement("li")
  for(let i = 0; i < myLeads.length; i++ ){
    newListItem.textContent = myLeads[i]
  }
  listEl.appendChild(newListItem)
}

saveInput.addEventListener('click', saveLead)
