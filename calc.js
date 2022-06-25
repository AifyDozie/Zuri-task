
const n1 = parseFloat (prompt("Enter a number. ","e.g.123")); 
const operator= prompt ('Enter operator (+,-,/,*)');
const n2 = parseFloat (prompt("Enter a number. ","e.g.123")); 
let result = 0;
if (isNaN (n1) || isNaN (n2)) {
    alert('Wrong input! Refresh the page and try again');}
    else {
        if (operator =='+'){
    result =n1 + n2;}
    else if (operator =='-'){
    result =n1 - n2;}
    else if(operator =='*'){
    result =n1 * n2;}
    else if (operator =='/'){
    result =n1 / n2;}
document.write (n1 + operator + n2 + ' = ' + result);
    }

