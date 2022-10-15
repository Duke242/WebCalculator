let displayValue = ""; 
let currentValue = ""; 
let newValue = "";
// const operator = ["+", "-", "/", "*"]

const operations = document.querySelectorAll('.operation')
for (let i = 0; i < operations.length; i++) {
    operations[i].addEventListener('click', function(e) { 
        console.log(e.target.id)
        currentValue = displayValue;
        displayValue = "";
        return e.target.id
    });
}

function operate(displayValue,newValue) { 
    let result = `${displayValue} ${newValue}`
    return result
};

const equalSign = document.querySelector('#equalSign')
equalSign.addEventListener('click', function(e){
    console.log(e.target.id)
    let displayValue = newValue;
    let result = currentValue e.target.id newValue
    console.log(result)
    return result
});

const numberButton = document.querySelectorAll('.numberButton')
for (i = 0; i < numberButton.length; i++) { 
    numberButton[i].addEventListener('click', function(e) {
        console.log(e.target.id)
        displayValue = displayValue + e.target.id
        console.log(displayValue)
    });
}; 
console.log(displayValue)


// const add = function(displayValue,newValue) {
    // 	let result = a + b
    //   return result
    // };
    
    // const subtract = function(displayValue,newValue) {
    // 	let result = a - b 
    //   return result
    // };
    
    // const sum = function(displayValue,newValue) {
    //   let result = a + b 
    //   return result
        
    // };
    
    // const multiply = function(displayValue,newValue) {
    //   let result = a * b 
    //   return result
    // 