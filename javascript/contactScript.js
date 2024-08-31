//selection du coeur blanc de la nav t transformation en texte ''Faire un Don '' au survole
const navHeartStick=document.querySelector('.navbar-middle-section li a span ');

navHeartStick.addEventListener('mouseover',()=>{
    navHeartStick.innerHTML="Je donne !";
})
navHeartStick.addEventListener('mouseout',()=>{
    navHeartStick.innerHTML="Donation";
});