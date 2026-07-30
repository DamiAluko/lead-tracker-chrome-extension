const saveInput = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulistEl = document.getElementById("ul-el")

let myLeads = []

function saveLead(){
  myLeads.push(inputEl.value)
  renderLead()
  inputEl.value = ""
}

saveInput.addEventListener('click', saveLead)

function renderLead(){
  //let listItem = "<li><a href='" + inputEl.value + "' target='_blank' rel='noopener noreferrer'>" + inputEl.value + "</a>" + "</li>";
  let listItem = `
    <li>
      <a href= ${inputEl.value} 
      target='_blank' 
      rel='noopener noreferrer'>
        ${inputEl.value} 
      </a>  
    </li>`;
  
  ulistEl.innerHTML += listItem
}
// NOTE: it's good practice to also include rel="noopener noreferrer". 
// Without it, the newly opened page can access window.opener and potentially 
// redirect your original tab (a known security/phishing risk), 
// and in some older browsers it can also cause a minor performance hit since 
// the new page shares the same process.