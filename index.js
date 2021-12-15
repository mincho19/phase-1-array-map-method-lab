const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// function correctLine(tutorial){
//   for(i = 0; i < tutorial.length; i++){
//     if(tutorial[i-1] == ' ') tutorial[i] = tutorial[i].toUpperCase();
//   }
//   return tutorial
// }

const titleCased = () => tutorials.map(tutorial => { 
  
  let newWord = tutorial[0].toUpperCase();
  for(let i = 1; i < tutorial.length; i++){
    if(tutorial[i-1] === ' '){
      newWord += tutorial[i].toUpperCase();
    }else{
      newWord += tutorial[i];
    }
  }
  return newWord
}); 
