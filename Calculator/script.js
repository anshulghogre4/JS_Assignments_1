

  let string ='';
document.querySelector('.textview').value ='0.0';

function insert(num){

string=string+num;
document.querySelector('.textview').value =string;

}


function equals(){
    string = eval(string);
    document.querySelector('.textview').value =string; 
}



function clean(){

string ='';
document.querySelector('.textview').value =string; 

}


function back(){
string =string.substring(0,string.length-1);
document.querySelector('.textview').value = string;

}