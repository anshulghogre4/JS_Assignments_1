const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector('.accordian_body');

//const faqs = []; //not able to figure out where to use it

function showFaq() {
  // hoisting the createFaq as  callback function here
faqData.forEach( (rows)=>{

  createFaq(rows.question,rows.answer) 

})

}
showFaq();




function createFaq(question,answer) {

  // creating for one row will be using it as a loop 

  //  creating div with faq class 
  let faq = document.createElement('div');
  faq.className='faq'; 
  accordianBody.appendChild(faq); 

  
  let faqHeader = document.createElement('div');
  faqHeader.className='faq_header' ; 
  faq.appendChild(faqHeader);

  let h3 = document.createElement('h3');
  h3.textContent = question;
  faqHeader.appendChild(h3);


  // p tag will be hidden and will  be availaible when user will click the '+' sign, and it'll  be  inside the faq div,not faq_header div
  var para = document.createElement('p');
  para.textContent = answer;
  para.className='hidden';
  faq.appendChild(para);

  let btn = document.createElement('button');
  btn.textContent = '+';
  btn.className='show_btn';
  faqHeader.appendChild(btn);
  
}

// declaring respective container to set conditions individually
let paraCheck1 =document.querySelectorAll('.hidden')[0];
let paraCheck2 =document.querySelectorAll('.hidden')[1];
let paraCheck3 =document.querySelectorAll('.hidden')[2];
let faqContainer1 = document.querySelectorAll('.faq')[0];
let faqContainer2 = document.querySelectorAll('.faq')[1];
let faqContainer3 = document.querySelectorAll('.faq')[2];

btnStatusUpdate(); // calling event listeners

function btnStatusUpdate() {
  
let  eventOnClick = document.querySelectorAll('.show_btn');

eventOnClick.forEach((val) => {
       
  //let answer = val.parentElement.parentElement.lastChild;
  val.addEventListener('click', ()=>{

    //  answer.classList.toggle('hidden'); //alternative quick answer
   
   
   if( val.parentElement.parentElement == faqContainer1){

// val.(faq_header is mother).(faq is grandmother)  ==  checks (is it the same grandma)



      paraCheck1.classList.toggle('hidden'); // toggle return hidden as false or true, while clicking on '+' button

   } else if ( val.parentElement.parentElement==faqContainer2){

    paraCheck2.classList.toggle('hidden');
   }
   else if ( val.parentElement.parentElement==faqContainer3){

    paraCheck3.classList.toggle('hidden');
   }

  })
  
})

}

