
 let divSection = document.querySelector('.naming_conversion');
let convert = divSection.querySelector('button');
let input = divSection.querySelector('#text')
    
// adding event listner
convert.addEventListener('click', click)



function click() {
    let text = input.value.toLowerCase();

        


    document.querySelector('#camel-case').innerText = camelCase(text);

     
    document.querySelector('#pascal-case').innerText =pascalCase(text);

     document.querySelector('#snake-case').innerText=snakeCase(text);

     document.querySelector('#screaming-snake-case').innerText=screamingSnakeCase(text);

     document.querySelector('#kebab-case').innerText=kebabCase(text);

     document.querySelector('#screaming-kebab-case').innerText=screamingKebabCase(text);
    }

    
    //respective functions

    function pascalCase(str){

         let wordArr = str.split(' '); // with extra space ('' not this but ' ' this) to form an array of words

         let pascalArr = wordArr.map(word => word[0].toUpperCase().concat(word.slice(1)));

       let newPascalArr =  pascalArr.join('');

       return newPascalArr;
    
   
    }

    function camelCase(str){

        let wordArr = str.split(' ');

        let pascalArr = wordArr.map(word => word[0].toUpperCase().concat(word.slice(1)));

      let newPascalArr =  pascalArr.join('');

      let camelC= newPascalArr[0].toLowerCase().concat(newPascalArr.slice(1));

      return camelC;

    }


    function snakeCase(str){

        let wordArr = str.split(' ');

        let  lowerWordArr = wordArr.map(word => word.toLowerCase())

      let snakeArr =  lowerWordArr.join('_');

         return snakeArr;

    }


    function screamingSnakeCase(str){

        let wordArr = str.split(' ');

        let capitalWordArr = wordArr.map(word => word.toUpperCase())

      let screamSnakeArr = capitalWordArr.join('_');

         return screamSnakeArr;

    }


    function kebabCase(str){

        let wordArr = str.split(' ');

        let  lowerWordArr = wordArr.map(word => word.toLowerCase())

      let kebabArr =   lowerWordArr.join('-');

         return kebabArr;

    }

    function screamingKebabCase(str){

        let wordArr = str.split(' ');

        let capitalWordArr = wordArr.map(word => word.toUpperCase())

      let screamKebabArr = capitalWordArr.join('-');

         return screamKebabArr;

    }