function scrollToElement(elementSelector, instancia = 0){
    const elements = document.querySelectorAll(elementSelector);
    if(elements.length > instancia){
        elements[instancia].scrollIntoView({ behavior:'smooth'});
    }
}

const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');

link1.addEventListener("click", () => {
    scrollToElement('.sobre')
})

link2.addEventListener("click", () => {
    scrollToElement('.portas')
})

link3.addEventListener("click", () => {
    scrollToElement('.serviços')
})

