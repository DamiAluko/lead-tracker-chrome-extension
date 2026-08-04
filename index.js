const saveInput = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulistEl = document.getElementById("ul-el")
const deleteEl = document.getElementById("delete-btn")
const tabEl = document.getElementById("tab-btn")

// let myTabs = [
//   {url: "https://www.linkedin.com/in/oluwadamilola-aluko-724831334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}
// ]

//localStorage.clear()

// Load existing leads from storage on page load, or start with an empty array
let myLeads = JSON.parse(localStorage.getItem("lead")) || []

// Render whatever was loaded, so leads show up immediately on refresh
render(myLeads)

function saveLead(array){
  array.push(inputEl.value)
  localStorage.setItem("lead", JSON.stringify(array))
  render(array)
  inputEl.value = ""
}

saveInput.addEventListener('click', () => saveLead(myLeads))
deleteEl.addEventListener('dblclick', () => deleteLeads(myLeads, myTabs))

tabEl.addEventListener('click', function(){
  
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    //tabs here is a keyword from chrome
    myLeads.push(tabs[0].url)
    localStorage.setItem("tab", JSON.stringify(myLeads))
    render(myLeads)
    inputEl.value = "" 
  })
})

function render(array){
  ulistEl.innerHTML = ""  // clear before re-rendering to avoid duplicates
  for(let i = 0; i < array.length; i++){
    ulistEl.innerHTML += `
    <li>
      <a href="${array[i]}" target='_blank' rel='noopener noreferrer'>
        ${array[i]}
      </a>
    </li>`;
  }
}


function deleteLeads(array1, array2){
  localStorage.clear()
  array1 = ['']
  array2 = ['']
  render(array1)
}

