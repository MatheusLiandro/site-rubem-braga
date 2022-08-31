// código home page

const btFechar = document.getElementById('btFechar')
const divModal = document.getElementById('divModal')

//Ao clicar no id "btFechar"
btFechar.addEventListener('click',function(){
    // oculta o modal - CSS display:none 
 
     document.getElementById('divModal').style.display = 'none';
 
 })
 