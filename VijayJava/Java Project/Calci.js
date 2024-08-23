function calculator(event){
    var num1 = document.getElementById("input1").value;
    var num2 = document.getElementById("input2").value;
    var result = document.getElementById("result");
    var operator = event.target.value;
    console.log(event);
    switch(operator){
        case "ADD":
            result.textContent=parseInt(num1)+parseInt(num2);
            break;
        case "SUBTRACT":
            result.textContent=parseInt(num1)-parseInt(num2);
            break;
        case "MULTIPLY":
            result.textContent=parseInt(num1)*parseInt(num2);
            break;
        case "DIVIDE":
            result.textContent=parseInt(num1)/parseInt(num2);
            break;
        default:
            result.textContent="Invalid";
            break;
    }

    
}