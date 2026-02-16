
//1 genera 5 numeri math random avvia countdown
//3 aspetta 1 secondo mostra 5 caselle su cui inserirei numeri
//4 controllare con for quali numeri sono stati ricordati correttamente
const instructionsEl = document.getElementById('instructions')
const numberListEl = document.getElementById('numbers-list')

const numbOne = Math.floor((Math.random() * 50)+1);
const numbTwo = Math.floor((Math.random() * 50)+1);
const numbThree = Math.floor((Math.random() * 50)+1);
const numbFour = Math.floor((Math.random() * 50)+1);
const numbFive = Math.floor((Math.random() * 50)+1);

const randomArray = [numbOne,numbTwo,numbThree,numbFour,numbFive]
console.log(randomArray);

setTimeout(function(){
    instructionsEl.classList.add('d-none');
    let items = '';
    for (let i = 0; i < randomArray.length; i++) {
        items += `<li>${randomArray[i]}</li>`
    }
    numberListEl.innerHTML = items;
},500)
setTimeout(function(){
    numberListEl.innerHTML=[];
    document.getElementById('answers-form').classList.remove('d-none')
    
},3000)