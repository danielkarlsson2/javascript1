/* 

    NUMBERS
    -----------------------------------
    
    +   Lägga till
    -   Tar bort
    *   Gånger
    **  Upphöjt i
    /   Delar
    ++  Ökar med 1
    --  Minskar med 1
    %   division remainder (det som är kvar)

    =   Lika med
    +=  Lägg till på det ursprungliga värdet
    -=  Ta bort ur det ursprungliga värdet
    *=  Gångra och lägg till
    /=  Dela och lägg till

*/

let string1 = 'Hej';
let string2 = 'då';

let num1 = 10;
let num2 = 2.5;

/* console.log(num1 + num2);
console.log(string1 + num1); */
// console.log(string1 + string2);

num1 = num1 + 1;
num1 += 1;
num1++;

num1 = num1 - 1;
num1 -= 1;
num1--;

// console.log(num1);

// console.log(num1 ** num2);
// console.log(num1 % 2);



console.log(Math.random() *100);
let randomNr = Math.ceil(Math.random() *100);

console.log('Random number: ' + randomNr);

// Avrunda
console.log(Math.round(num2));

// Avrunda uppåt
console.log(Math.ceil(num2));

// Avrunda nedåt 
console.log(Math.floor(num2));


let text = 'text, ';

text += text;
text += text;
text += text;

console.log(text);