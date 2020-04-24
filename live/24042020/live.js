// propriété
console.log('hello', document.querySelector('.container span').textContent);
window.document.querySelector('.container span').textContent = "Salut";

//méthode
window.alert('coucou')

//évènement
document.querySelector('.container span').addEventListener('click', () => 
{
    console.log('click');
    
})
