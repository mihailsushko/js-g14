// confirm("Is everything ok?");
// alert("hi");
// prompt("Your name?","Vlad Dracula");
// console.log(10*2);
// console.log(2*5==20/2);

// let a   = 10;

//    let b   = 3;

//    let c   = 15;

//    let d = '5';

//    let e   = 'My name';

//    let f = 'Maybe';

// console.group('Addition');

//      console.log(a + b); // 13

//      console.log(a + d); // 105

//      console.log(e + ' ' + f);

//      console.log(e += ' is the Batman');

//    console.groupEnd();

// var theNumber = prompt("Введите число, которое нужно возвести в квадрат ", "");

//    if (!isNaN(theNumber)){

//        alert("Квадрат числа =" +  theNumber * theNumber);

//    }

// else{

//            alert("Это не похоже на число");
    
//        };

// var num = Number(prompt("Выбери число", "0"));

// if (num < 10) {

//     alert("No");

// }

// else if (num < 100) {

//     alert("Ok");

// }

// else {

//     alert("Nop");

// }

var x = Number(prompt("Enter x:"));

var y = Number(prompt("Enter y:"));

// if (!(isNaN(x) || isNaN(y))) {

//    var operator = prompt("Enter operator:");

//    if (operator == '+') {

//        alert("x + y =" + (x + y));

//    } else if (operator == '-') {

//        alert("x - y =" + (x - y));

//    } else if (operator == '-') {

//        alert("x - y =" + (x - y));

//    } else {

//        alert("Непонятная операция!");

//    }

// } else {alert("Это не похоже на число");}

switch (prompt("Enter operator:")) {

       case "+":
    
           alert("x + y ="+(x+y)); break;
    
       case "-":
    
           alert("x - y ="+(x-y)); break;
    
       case "*":
    
           alert("x * y ="+(x*y)); break;
    
       case "/":
    
           alert("x / y ="+(x/y)); break;
    
       default:   
    
           alert("Непонятная операция!"); break;
    
    }