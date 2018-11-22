var preload = document.getElementById("loading");
var container = document.getElementById("container")
setTimeout(function(){
    preload.classList.add('close-preload');
    container.classList.remove('container-close')
    container.style.animation = 'loadContainer 4s ease'
    container.classList.add('container')
}, 2000);

