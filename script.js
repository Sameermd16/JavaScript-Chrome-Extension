const saveInput = document.getElementById('input_btn');
const myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById('input_el')
const ulEl = document.getElementById('ul_el')

saveInput.addEventListener('click', () => {
    // Push the value from the inputEl into the myLeads array 
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

for(let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += '<li>' + myLeads[i] + '</li>'
    // const listItems = document.createElement('li')
    // document.body.appendChild(listItems)
    // listItems.textContent = myLeads[i]
}