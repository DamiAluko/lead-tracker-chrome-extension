const saveInput = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulistEl = document.getElementById("ul-el")

let myLeads = []

function saveLead(){
  myLeads.push(inputEl.value)
  inputEl.value = ""
  
  let allListItems = ""
  for(let i = 0; i < myLeads.length; i++){
    allListItems += "<li>" + myLeads[i] + "</li>"
  }
  ulistEl.innerHTML = allListItems

  console.log(myLeads)
  console.log(allListItems)
}

saveInput.addEventListener('click', saveLead)
