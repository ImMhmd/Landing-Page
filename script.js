let menu = document.getElementById('menu')

menu.addEventListener('click', clickMenu)

function clickMenu(){
    if (links.style.display == 'block'){
        links.style.display = 'none'
    } else{
        links.style.display = 'block'
    }
}
