//----------Noise-Background----------//
const canvas = document.querySelector('.noise');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {canvas.width = window.innerWidth; canvas.height = window.innerHeight;});

function noise(ctx){
    let w = ctx.canvas.width;
    let h = ctx.canvas.height;
    const ndata = ctx.createImageData(w, h);
    const buffer32 = new Uint32Array(ndata.data.buffer);

    for (let i = 0; i < buffer32.length; i++) {
        buffer32[i] = ((30 * Math.random()) |0) << 24;
    }
    ctx.putImageData(ndata, 0, 0);
}

function loop(){
    let toggle = true;
    toggle = !toggle;
    if (toggle){
        requestAnimationFrame(loop);
        return;
    } 
    noise(ctx);
    requestAnimationFrame(loop);
}
loop();

//----------Scroll Effects----------//

window.addEventListener("scroll", () => {
    let cardItem = Array.from(document.querySelectorAll('.cardimg__item'))
    let body = document.querySelector('body')
    let contact = document.querySelector('.contact')
    let logoInner = document.querySelector('.logo svg .c')
    let logoOuter = document.querySelector('.logo svg .d')
    let links = Array.from(document.querySelectorAll('.nav ul li a'))

    if(window.pageYOffset * 3.1 > canvas.height){
        for(let i = 0; i < cardItem.length; i++){
            cardItem[i].classList.add('cardimg--reveal')
        }
    }
    function checkWorks(){
        if(window.pageYOffset + 400 > canvas.height){
            body.style.backgroundColor = "var(--bookopus)"
            logoInner.style.fill = "var(--light)"
            logoOuter.style.stroke = "var(--dark)"
            for(let i = 0; i < links.length; i++){
                links[i].style.color = "var(--dark)"
            }
        }    else{ /* Default Values */
            body.style.backgroundColor = "var(--light)"
            logoInner.style.fill = "var(--cta)"
            logoOuter.style.stroke = "var(--dark)"
            for(let i = 0; i < links.length; i++){
                links[i].style.color = "var(--dark)"
            }
        }
    }
    checkWorks();
    if(window.pageYOffset + contact.scrollHeight - 450  > canvas.height +  contact.scrollHeight ){
        body.style.backgroundColor = "var(--dark)"
        logoInner.style.fill = "var(--cta)"
        logoOuter.style.stroke = "var(--light)"
        for(let i = 0; i < links.length; i++){
            links[i].style.color = "var(--light)"
        }
    }else if (window.pageYOffset + 200 > canvas.height || window.pageYOffset + contact.scrollHeight - 900  < canvas.height +  contact.scrollHeight){
        checkWorks();
    }
})


