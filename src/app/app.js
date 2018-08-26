//----------Scroll Effects----------//
if(document.querySelector('.hero')){
    let landingTop = document.querySelector('.hero').getBoundingClientRect()
    let landingTopWidth = landingTop.width
    let landingTopHeight = landingTop.height
    let landingBookopusOffset = document.querySelector('#works1').getBoundingClientRect().top

    window.addEventListener("scroll", () => {
        let cardItem = Array.from(document.querySelectorAll('.cardimg__item'))
        let body = document.querySelector('body')
        let contact = document.querySelector('.contact')
        let logoInner = document.querySelector('.logo svg .c')
        let logoOuter = document.querySelector('.logo svg .d')
        let links = Array.from(document.querySelectorAll('.nav ul li a'))

        if(window.pageYOffset + 400 > landingTopHeight){
            for(let i = 0; i < cardItem.length; i++){
                cardItem[i].classList.add('cardimg--reveal')
            }
        }
        function checkWorks(){
            if(window.pageYOffset + 100 > landingTopHeight){
                body.style.backgroundColor = "var(--bookopus)"
                if (landingTopWidth > 900){
                    logoInner.style.fill = "var(--light)"
                    logoOuter.style.stroke = "var(--dark)"
                    for(let i = 0; i < links.length; i++){
                        links[i].style.color = "var(--dark)"
                    }
                }
            }    else{ /* Default Values */
                body.style.backgroundColor = "var(--light)"
                if (landingTopWidth > 900){
                    logoInner.style.fill = "var(--cta)"
                    logoOuter.style.stroke = "var(--dark)"
                    for(let i = 0; i < links.length; i++){
                        links[i].style.color = "var(--dark)"
                    }
                }
            }
        }
        checkWorks();
        if(window.pageYOffset + contact.scrollHeight - 450  > landingTopHeight +  contact.scrollHeight ){
            body.style.backgroundColor = "var(--dark)"
            if (landingTopWidth > 900){
                logoInner.style.fill = "var(--cta)"
                logoOuter.style.stroke = "var(--light)"
                for(let i = 0; i < links.length; i++){
                    links[i].style.color = "var(--light)"
                }
            }
        }else if (window.pageYOffset + 200 > landingTopHeight || window.pageYOffset + contact.scrollHeight - 900  < landingTopHeight +  contact.scrollHeight){
            checkWorks();
        }
    })
}

let menu = document.querySelector('.mobile-nav--menu')
    
menu.addEventListener('click', () => {
    let logo = document.querySelector('.mobile-nav .logo .c');
    let body = document.querySelector('body');
    let links = document.querySelector('.mobile-nav__links');
    
    menu.classList.toggle('active');

    if (menu.classList.contains('active') === true){
        logo.style.fill = "var(--light)";
        body.style.overflowY = "hidden";
        links.style.opacity = "1"
        links.style.transform = "scale(1)"
    } else{
        closeTab();
    }
    function closeTab(){
        logo.style.fill = "var(--cta)"
        body.style.overflowY = "visible";
        links.style.opacity = "0"
        links.style.transform = "scale(1, 0)"
    }
    links.addEventListener('click', () => {
        if (menu.classList.contains('active')){
            menu.classList.remove('active');
            closeTab();
        }
    })
})

let aboutTriDesk = document.querySelector('.about--desktop')
let aboutTriMob = document.querySelector('.about--mobile')
    
aboutTriDesk.addEventListener('click', openAbout); 
aboutTriMob.addEventListener('click', () => {
    openAbout();
    bodyOverflow();
}); 

function openAbout() {
    let logo = document.querySelector('.logo svg .c');
    let about = document.querySelector('.about');
    let close = document.querySelector('.about__close');
    about.classList.add('about--active');

    if (about.classList.contains('about--active') === true){
        aboutTriDesk.classList.add('highlight')
        logo.style.fill = "var(--light)";
    } else{
        logo.style.fill = "var(--cta)"
        aboutTriDesk.classList.remove('highlight')
    }
    close.addEventListener("click", () => {
        about.classList.remove('about--active');
        logo.style.fill = "var(--cta)"
        aboutTriDesk.classList.remove('highlight')
    })
}
function bodyOverflow(){
    let body = document.querySelector('body');
    let about = document.querySelector('.about');
    let close = document.querySelector('.about__close');

    if (about.classList.contains('about--active') === true){
        body.style.overflowX = "hidden"
    } else{
        body.style.overflowX = "visible"
    }
    close.addEventListener("click", () => {
        body.style.overflowX = "visible"
    })
}

if (document.querySelector('.case__mockup')){

    window.addEventListener('scroll', () => {

        const mockup = document.querySelector('.case__mockup');
        const mockupImg = document.querySelector('.case__mockup img');
        const bottomMock = document.querySelector('.case__bottom');
        const bottomMockImg = Array.from(document.querySelectorAll('.case__bottom img'));

        let mockupOffset = mockup.getBoundingClientRect().top
        let bottomOffset = bottomMock.getBoundingClientRect().top

        const userFlow = Array.from(document.querySelectorAll('#userflow .st0'))

        if (window.pageYOffset >= mockupOffset + 450){
            mockupImg.classList.add('animate')
        }
        if (window.pageYOffset >= mockupOffset + 1900){
            for (let st0 in userFlow){
                userFlow[st0].classList.add('animate')
            }
        }
        if (window.pageYOffset >= bottomOffset * 10){
            for (let img in bottomMockImg){
                bottomMockImg[img].classList.add('animate')
            }
        }
        if (window.pageYOffset >= mockupOffset + 450){
            mockupImg.classList.add('animate')
        }

    })
}