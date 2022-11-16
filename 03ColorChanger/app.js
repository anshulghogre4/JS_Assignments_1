
let canvas = document.getElementById('canvas');



let btn = document.getElementById('button');


btn.addEventListener('click', ()=> {

    canvas.style.backgroundColor= returnColors();


} )



function returnColors(){

    let color ='#';

    let char ='0123456789abcdef';

    for(let i=0;i<6;i++){
    color =color+ char[Math.round(Math.random()*char.length)];
    }

    return color;


}