const saveInput = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulistEl = document.getElementById("ul-el")

//localStorage.clear()

// Load existing leads from storage on page load, or start with an empty array
let myLeads = JSON.parse(localStorage.getItem("lead")) || []

// Render whatever was loaded, so leads show up immediately on refresh
renderLead()

function saveLead(){
  myLeads.push(inputEl.value)
  localStorage.setItem("lead", JSON.stringify(myLeads))
  renderLead()
  inputEl.value = ""
}

saveInput.addEventListener('click', saveLead)

function renderLead(){
  ulistEl.innerHTML = ""  // clear before re-rendering to avoid duplicates
  for(let i = 0; i < myLeads.length; i++){
    ulistEl.innerHTML += `
    <li>
      <a href="${myLeads[i]}" target='_blank' rel='noopener noreferrer'>
        ${myLeads[i]}
      </a>
    </li>`;
  }
}