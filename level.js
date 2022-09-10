/* const obj = { firstName: 'avrahar', LastName: 'likhon' }
const ParseObj = JSON.stringify(obj)

localStorage.setItem('name', ParseObj)
let count = localStorage.getItem('count');
const pValue = document.getElementById('p-tag');

//level two 
const btnClick = () => {
    let getNew = ++count
    localStorage.setItem("count",getNew);
    pValue.innerText = getNew
}
pValue.innerText = count */