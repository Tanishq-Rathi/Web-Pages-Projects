const counterValue = document.querySelector('#counter')

const increment = ()=>{
    let value = parseInt(counterValue.innerText)
    value = value+1
    counterValue.innerText=value
}
const decrement = ()=>{
    let value = parseInt(counterValue.innerText)
    value = value-1
    counterValue.innerText=value
}