let btn=document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
 const quotes =[{
    quote:`"We are all broken, that's how the light gets in."`,
    person:`Ernest Hemingway`
 },{
    quote:`"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."`,
    person:`Ralph Waldo Emerson`
 },{
quote:`"Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well."`,
person:`Voltaire`
 },{
quote:`"Tears are words that need to be written."`,
person:`Paulo Coelho`
 }
];

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random()* quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})