// 1
let s = prompt("Укажите первую переменную");
let w = prompt("Укажите вторую переменную");

let u = s;

s = w;

w = u;

alert(s);
alert(w);


// 2


let division = sub.length / 2;
let modulo = sub.length % 2;

console.log(division); 
console.log(modulo); 


let legFirst = prompt("Укажите длину первого катета");
let legSecond = prompt("Укажите длину второго катета");

let subtense = ((Math.pow(legFirst,2)) + (Math.pow(legSecond,2)));

alert(subtense);

// 3

// Условия
// 1

let e = prompt("Укажите первую переменную от -10 до 10");

if (e > 10 || e < -10) {
    prompt("Укажите переменную в диапазоне от -10 до 10");
    e = prompt("Укажите первую переменную");
}

let f = prompt("Укажите вторую переменную от -10 до 10");

if (f > 10 || f < -10) {
    prompt("Укажите переменную в диапазоне от -10 до 10");
    f = prompt("Укажите вторую переменную");
}

let g = prompt("Укажите третью переменную от -10 до 10");

if (g > 10 || g < -10) {
    prompt("Укажите переменную в диапазоне от -10 до 10");
    g = prompt("Укажите третью переменную");
}

let result = (Math.max((e*f*g, e+f+g) + 3));
alert(result); 


// 2

let z = prompt("Укажите первую переменную от -100 до 100");

if (z > 100 || z < -100) {
} 

let r = prompt("Укажите вторую переменную от -100 до 100"); 

if (r > 100 || r < -100) {
    prompt("Укажите переменную в диапазоне от -100 до 100");
    r = prompt("Укажите вторую переменную");
} else if (r== 0) {
    prompt("На ноль делить нельзя");
}
if(z%r==0){
    alert("Остатка нет");
} else {
    alert("Остаток от деления равен "+z%r);
} 

alert("Частное от деления равно "+z/r);


// квадратное уравнение

let t = prompt("Укажите первый коэффициент");
if (t == 0) { 
    alert("Коэфициент не должен быть равен нулю");
    t = prompt("Укажите первый коэффициент");
} 

let k = prompt("Укажите второй коэффициент");

let l = prompt("Укажите третий коэффициент");


let H = ((Math.pow(k,2)) - 4*t*l);
//alert(D);

if (H < 0) {
    alert("Корней нет");
} else if (H === 0) {
    let x = -(k/2*t);
    alert("Корень уравнения "+ x);
} else {
    let x1 = ((-k - (Math.sqrt(H)))/(2*t));
    let x2 = ((-k + (Math.sqrt(h)))/(2*t)); 
    alert( "Первый корень уравнения " +x1);
    alert( "Второй корень уравнения "+x2);
}







