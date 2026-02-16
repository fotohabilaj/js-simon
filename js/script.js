
//1 genera 5 numeri math random avvia countdown
//3 aspetta 1 secondo mostra 5 caselle su cui inserirei numeri
//4 controllare con for quali numeri sono stati ricordati correttamente
const instructionsEl = document.getElementById('instructions')
const numberListEl = document.getElementById('numbers-list')
const answerFormEl = document.getElementById('answers-form')
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
},5000)
setTimeout(function(){
    numberListEl.innerHTML=[];
    answerFormEl.classList.remove('d-none')
    
},30000)

answerFormEl.addEventListener('submit',function(e){
    e.preventDefault()
    let userArray = [];
    userArray.push(Number(document.getElementById('one').value));
    userArray.push(Number(document.getElementById('two').value));
    userArray.push(Number(document.getElementById('three').value));
    userArray.push(Number(document.getElementById('four').value));
    userArray.push(Number(document.getElementById('five').value));
    console.log(userArray);
    let correctArray = [];
    let correctCount = 0;
    for (let index = 0; index < userArray.length; index++) {
        const user_number = userArray[index];
        for (let index = 0; index < randomArray.length; index++) {
            const random_number = randomArray[index];
            if(user_number===random_number){
                correctArray.push(user_number);
                correctCount++
            }
        }
    }
    console.log('numeri indovinati',correctArray);
    const messageEl = document.getElementById('message');
    messageEl.innerText = `Hai indovinato ${correctCount} numeri: ${correctArray}`
    
})

