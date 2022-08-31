//Códigos para o Hot site Rubem Braga

// console.log('hello world');

// ECMA 
// função(argumentos)

// cria um novo obejeto da classe date 
const tempo = new Date()

const txtData = tempo.getFullYear() + '- Hora:' + tempo.getHours()+ 'minuto:'+ tempo.getMinutes()



//ELEMENTOS DOM
const spanData = document.getElementById('data')
const btHamburguer = document.getElementById('btHamburguer')
const navPhone = document.getElementById('navPhone')
const btFecharphone = document.getElementById('btFecharphone')
// Insere o txtData dentro do ID "data"
spanData.innerText = txtData

btHamburguer.addEventListener('click', function(){
    document.getElementById('navPhone').style.display = "block";
})

btFecharphone.addEventListener('click', function(){
    document.getElementById('navPhone').style.display = "none";
})

    
