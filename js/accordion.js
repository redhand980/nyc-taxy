const accordion = document.getElementsByClassName('content-box');
let i
for( i = 0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
};