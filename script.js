const saveInput = document.getElementById('input_btn');
let myLeads = []
const inputEl = document.getElementById('input_el')
const ulEl = document.getElementById('ul_el')
const deleteAll = document.getElementById('delete_btn')
const saveTab = document.getElementById('tab_btn')

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
// console.log(leadsFromLocalStorage)
// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()
// console.log(Boolean(leadsFromLocalStorage))

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage 
    render(myLeads)
}

saveTab.addEventListener('click', () => {
    //grab the current tab from the chrome api
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        myLeads.push(tabs[0].url)
        localStorage.setItem('myLeads', JSON.stringify(myLeads))
        render(myLeads)
    })
})

// 2. Listen for double clicks on the delete button (google it!)
// 3. When clicked, clear localStorage, myLeads, and the DOM
deleteAll.addEventListener('dblclick', () => {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

saveInput.addEventListener('click', () => {
    // Push the value from the inputEl into the myLeads array 
    myLeads.push(inputEl.value)
    inputEl.value = ''
    // Save the myLeads array to localStorage 
    // PS: remember JSON.stringify()
    localStorage.setItem('myLeads', JSON.stringify(myLeads)) 
    // console.log(localStorage.getItem("myLeads"))
    render(myLeads)
})

function render(leads) {

    let listItems = ''
    for(let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}' >
                    ${leads[i]}
                </a>
            </li>
        `
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
