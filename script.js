const saveInput = document.getElementById('input_btn');
let myLeads = []
const inputEl = document.getElementById('input_el')
const ulEl = document.getElementById('ul_el')
const deleteBtn = document.getElementById('delete_btn')

// 1. Turn the myLeads string into an array
// myLeads = JSON.parse(myLeads)
// 2. Push a new value to the array
// myLeads.push("www.howdydhobi.com")
// 3. Turn the array into a string again
// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)
// 4. Console.log the string using typeof to verify that it's a string
// console.log(typeof myLeads)
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")) 
console.log(leadsFromLocalStorage)
// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()
console.log(Boolean(leadsFromLocalStorage))

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage 
    renderLeads()
}


saveInput.addEventListener('click', () => {
    // Push the value from the inputEl into the myLeads array 
    myLeads.push(inputEl.value)
    inputEl.value = ''
    // Save the myLeads array to localStorage 
    // PS: remember JSON.stringify()
    localStorage.setItem('myLeads', JSON.stringify(myLeads)) 
    console.log(localStorage.getItem("myLeads"))
    renderLeads()
})

function renderLeads() {

    let listItems = ''
    for(let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}' >
                    ${myLeads[i]}
                </a>
            </li>
        `
        // create element
        // set text content
        // append to ul
        // const li = document.createElement('li')
        // li.textContent = myLeads[i] 
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItems
}

// 1. Save a key-value pair in localStorage
// 2. Refresh the page. Get the value and log it to the console
// 3. Clear localStorage

// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings
