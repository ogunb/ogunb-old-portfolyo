//----------Scroll Effects----------//
if(document.querySelector('.hero')){
    let landingTop = document.querySelector('.hero').getBoundingClientRect()
    let landingTopWidth = landingTop.width
    let landingTopHeight = landingTop.height
    let landingTopX = landingTop.top

    let works = document.querySelector('.works').getBoundingClientRect()
    let worksTop = works.top

    let contact = document.querySelector('.contact').getBoundingClientRect()
    let contactTop = contact.top

    window.addEventListener("scroll", () => {
        let cardItem = Array.from(document.querySelectorAll('.cardimg__item'))
        let body = document.querySelector('body')
        let logoInner = document.querySelector('.logo svg .c')
        let logoOuter = document.querySelector('.logo svg .d')
        let links = Array.from(document.querySelectorAll('.nav ul li a'))

        let works = document.querySelector('.works').getBoundingClientRect()
        let worksTop = works.top

        let contact = document.querySelector('.contact').getBoundingClientRect()
        let contactTop = contact.top

        if(worksTop < 400){
            cardItem.forEach((item) => {
                item.classList.add('cardimg--reveal')
            })
        }
        if(worksTop < 300){
            body.style.backgroundColor = "var(--bookopus)"
            if (landingTopWidth > 900){
                logoInner.style.fill = "var(--light)"
                logoOuter.style.stroke = "var(--dark)"
                links.forEach((link) => {
                    link.style.color = "var(--dark)"
                })
            }
        }else{ /* Default Values */
            body.style.backgroundColor = "var(--light)"
            if (landingTopWidth > 900){
                logoInner.style.fill = "var(--cta)"
                logoOuter.style.stroke = "var(--dark)"
                links.forEach((link) => {
                    link.style.color = "var(--dark)"
                })
            }
        }
        if(contactTop < 200){
            body.style.backgroundColor = "var(--dark)"
            if (landingTopWidth > 900){
                logoInner.style.fill = "var(--cta)"
                logoOuter.style.stroke = "var(--light)"
                links.forEach((link) => {
                    link.style.color = "var(--light)"
                })
            }
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

        if (mockupOffset < 450){
            mockupImg.classList.add('animate')
        }
        if (mockupOffset < -430){
            for (let st0 in userFlow){
                userFlow[st0].classList.add('animate')
            }
        }
        if (bottomOffset < 400){
            for (let img in bottomMockImg){
                bottomMockImg[img].classList.add('animate')
            }
        }
    })
}

// Async fetch for bookopus case study.

const bookopus = document.querySelector('.bookopus')
bookopus.addEventListener('click', fetchCaseStudy)


function fetchCaseStudy() {
    let bookopusLink = bookopus.getAttribute('href').substr(1) + '.html'

    const cardImg = document.querySelector('.cardimg--bookopus')
    const worksArticle = document.querySelector('.works__article')

    const worksContent = document.querySelector('#works__content')
    const worksContentPlace = document.querySelector('#works__content div')
    const worksContentBg = document.querySelector('#works__content .works__content__bg')

    cardImg.classList.add('animate')
    worksArticle.classList.add('animate')

    worksContent.style.opacity = "1"
    worksContent.style.zIndex = "200"

    fetch('bookopus.html')
        .then((res) => res.text())
        .then((data) => {
            worksContentPlace.innerHTML = data
            worksContent.style.position = "relative"
            worksContentBg.opacity = "1"
        })

}

// fetch('bookopus.html')
//     .then((res) => res.text())
//     .then((data) => {
//         document.getElementById('content').innerHTML = data
//     })


var VanillaTilt=function(){"use strict";class t{constructor(t,e={}){if(!(t instanceof Node))throw"Can't initialize VanillaTilt because "+t+" is not a Node.";this.width=null,this.height=null,this.left=null,this.top=null,this.transitionTimeout=null,this.updateCall=null,this.updateBind=this.update.bind(this),this.resetBind=this.reset.bind(this),this.element=t,this.settings=this.extendSettings(e),this.reverse=this.settings.reverse?-1:1,this.glare=this.isSettingTrue(this.settings.glare),this.glarePrerender=this.isSettingTrue(this.settings["glare-prerender"]),this.glare&&this.prepareGlare(),this.addEventListeners()}isSettingTrue(t){return""===t||!0===t||1===t}addEventListeners(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.onWindowResizeBind=this.onWindowResizeBind.bind(this),this.element.addEventListener("mouseenter",this.onMouseEnterBind),this.element.addEventListener("mousemove",this.onMouseMoveBind),this.element.addEventListener("mouseleave",this.onMouseLeaveBind),this.glare&&window.addEventListener("resize",this.onWindowResizeBind)}removeEventListeners(){this.element.removeEventListener("mouseenter",this.onMouseEnterBind),this.element.removeEventListener("mousemove",this.onMouseMoveBind),this.element.removeEventListener("mouseleave",this.onMouseLeaveBind),this.glare&&window.removeEventListener("resize",this.onWindowResizeBind)}destroy(){clearTimeout(this.transitionTimeout),null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.reset(),this.removeEventListeners(),this.element.vanillaTilt=null,delete this.element.vanillaTilt,this.element=null}onMouseEnter(t){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()}onMouseMove(t){null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event=t,this.updateCall=requestAnimationFrame(this.updateBind)}onMouseLeave(t){this.setTransition(),this.settings.reset&&requestAnimationFrame(this.resetBind)}reset(){this.event={pageX:this.left+this.width/2,pageY:this.top+this.height/2},this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",this.glare&&(this.glareElement.style.transform="rotate(180deg) translate(-50%, -50%)",this.glareElement.style.opacity="0")}getValues(){let t=(this.event.clientX-this.left)/this.width,e=(this.event.clientY-this.top)/this.height;return t=Math.min(Math.max(t,0),1),e=Math.min(Math.max(e,0),1),{tiltX:(this.reverse*(this.settings.max/2-t*this.settings.max)).toFixed(2),tiltY:(this.reverse*(e*this.settings.max-this.settings.max/2)).toFixed(2),percentageX:100*t,percentageY:100*e,angle:Math.atan2(this.event.clientX-(this.left+this.width/2),-(this.event.clientY-(this.top+this.height/2)))*(180/Math.PI)}}updateElementPosition(){let t=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=t.left,this.top=t.top}update(){let t=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.axis?0:t.tiltY)+"deg) rotateY("+("y"===this.settings.axis?0:t.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.glare&&(this.glareElement.style.transform=`rotate(${t.angle}deg) translate(-50%, -50%)`,this.glareElement.style.opacity=`${t.percentageY*this.settings["max-glare"]/100}`),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:t})),this.updateCall=null}prepareGlare(){if(!this.glarePrerender){const t=document.createElement("div");t.classList.add("js-tilt-glare");const e=document.createElement("div");e.classList.add("js-tilt-glare-inner"),t.appendChild(e),this.element.appendChild(t)}this.glareElementWrapper=this.element.querySelector(".js-tilt-glare"),this.glareElement=this.element.querySelector(".js-tilt-glare-inner"),this.glarePrerender||(Object.assign(this.glareElementWrapper.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden"}),Object.assign(this.glareElement.style,{position:"absolute",top:"50%",left:"50%","pointer-events":"none","background-image":`linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)`,width:`${2*this.element.offsetWidth}px`,height:`${2*this.element.offsetWidth}px`,transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"}))}updateGlareSize(){Object.assign(this.glareElement.style,{width:`${2*this.element.offsetWidth}`,height:`${2*this.element.offsetWidth}`})}onWindowResizeBind(){this.updateGlareSize()}setTransition(){clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.glare&&(this.glareElement.style.transition=`opacity ${this.settings.speed}ms ${this.settings.easing}`),this.transitionTimeout=setTimeout(()=>{this.element.style.transition="";this.glare&&(this.glareElement.style.transition="")},this.settings.speed)}extendSettings(t){let e={reverse:!1,max:35,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:"1",speed:"300",transition:!0,axis:null,glare:!1,"max-glare":1,"glare-prerender":!1,reset:!0},i={};for(var s in e)if(s in t)i[s]=t[s];else if(this.element.hasAttribute("data-tilt-"+s)){let t=this.element.getAttribute("data-tilt-"+s);try{i[s]=JSON.parse(t)}catch(e){i[s]=t}}else i[s]=e[s];return i}static init(e,i){e instanceof Node&&(e=[e]),e instanceof NodeList&&(e=[].slice.call(e)),e instanceof Array&&e.forEach(e=>{"vanillaTilt"in e||(e.vanillaTilt=new t(e,i))})}}return"undefined"!=typeof document&&(window.VanillaTilt=t,t.init(document.querySelectorAll("[data-tilt]"))),t}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInZlbmRvcnMvdmFuaWxsYS10aWx0Lm1pbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN01BIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLVNjcm9sbCBFZmZlY3RzLS0tLS0tLS0tLS8vXHJcbmlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvJykpe1xyXG4gICAgbGV0IGxhbmRpbmdUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVybycpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICBsZXQgbGFuZGluZ1RvcFdpZHRoID0gbGFuZGluZ1RvcC53aWR0aFxyXG4gICAgbGV0IGxhbmRpbmdUb3BIZWlnaHQgPSBsYW5kaW5nVG9wLmhlaWdodFxyXG4gICAgbGV0IGxhbmRpbmdUb3BYID0gbGFuZGluZ1RvcC50b3BcclxuXHJcbiAgICBsZXQgd29ya3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29ya3MnKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgbGV0IHdvcmtzVG9wID0gd29ya3MudG9wXHJcblxyXG4gICAgbGV0IGNvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdCcpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICBsZXQgY29udGFjdFRvcCA9IGNvbnRhY3QudG9wXHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgICAgIGxldCBjYXJkSXRlbSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRpbWdfX2l0ZW0nKSlcclxuICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxyXG4gICAgICAgIGxldCBsb2dvSW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nbyBzdmcgLmMnKVxyXG4gICAgICAgIGxldCBsb2dvT3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nbyBzdmcgLmQnKVxyXG4gICAgICAgIGxldCBsaW5rcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdiB1bCBsaSBhJykpXHJcblxyXG4gICAgICAgIGxldCB3b3JrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b3JrcycpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICAgICAgbGV0IHdvcmtzVG9wID0gd29ya3MudG9wXHJcblxyXG4gICAgICAgIGxldCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QnKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgICAgIGxldCBjb250YWN0VG9wID0gY29udGFjdC50b3BcclxuXHJcbiAgICAgICAgaWYod29ya3NUb3AgPCA0MDApe1xyXG4gICAgICAgICAgICBjYXJkSXRlbS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2NhcmRpbWctLXJldmVhbCcpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHdvcmtzVG9wIDwgMzAwKXtcclxuICAgICAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLWJvb2tvcHVzKVwiXHJcbiAgICAgICAgICAgIGlmIChsYW5kaW5nVG9wV2lkdGggPiA5MDApe1xyXG4gICAgICAgICAgICAgICAgbG9nb0lubmVyLnN0eWxlLmZpbGwgPSBcInZhcigtLWxpZ2h0KVwiXHJcbiAgICAgICAgICAgICAgICBsb2dvT3V0ZXIuc3R5bGUuc3Ryb2tlID0gXCJ2YXIoLS1kYXJrKVwiXHJcbiAgICAgICAgICAgICAgICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluay5zdHlsZS5jb2xvciA9IFwidmFyKC0tZGFyaylcIlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNleyAvKiBEZWZhdWx0IFZhbHVlcyAqL1xyXG4gICAgICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tbGlnaHQpXCJcclxuICAgICAgICAgICAgaWYgKGxhbmRpbmdUb3BXaWR0aCA+IDkwMCl7XHJcbiAgICAgICAgICAgICAgICBsb2dvSW5uZXIuc3R5bGUuZmlsbCA9IFwidmFyKC0tY3RhKVwiXHJcbiAgICAgICAgICAgICAgICBsb2dvT3V0ZXIuc3R5bGUuc3Ryb2tlID0gXCJ2YXIoLS1kYXJrKVwiXHJcbiAgICAgICAgICAgICAgICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluay5zdHlsZS5jb2xvciA9IFwidmFyKC0tZGFyaylcIlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjb250YWN0VG9wIDwgMjAwKXtcclxuICAgICAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLWRhcmspXCJcclxuICAgICAgICAgICAgaWYgKGxhbmRpbmdUb3BXaWR0aCA+IDkwMCl7XHJcbiAgICAgICAgICAgICAgICBsb2dvSW5uZXIuc3R5bGUuZmlsbCA9IFwidmFyKC0tY3RhKVwiXHJcbiAgICAgICAgICAgICAgICBsb2dvT3V0ZXIuc3R5bGUuc3Ryb2tlID0gXCJ2YXIoLS1saWdodClcIlxyXG4gICAgICAgICAgICAgICAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmsuc3R5bGUuY29sb3IgPSBcInZhcigtLWxpZ2h0KVwiXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxubGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlLW5hdi0tbWVudScpXHJcbiAgICBcclxubWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGxldCBsb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZS1uYXYgLmxvZ28gLmMnKTtcclxuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgbGV0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZS1uYXZfX2xpbmtzJyk7XHJcbiAgICBcclxuICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcblxyXG4gICAgaWYgKG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgbG9nby5zdHlsZS5maWxsID0gXCJ2YXIoLS1saWdodClcIjtcclxuICAgICAgICBib2R5LnN0eWxlLm92ZXJmbG93WSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgbGlua3Muc3R5bGUub3BhY2l0eSA9IFwiMVwiXHJcbiAgICAgICAgbGlua3Muc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgxKVwiXHJcbiAgICB9IGVsc2V7XHJcbiAgICAgICAgY2xvc2VUYWIoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNsb3NlVGFiKCl7XHJcbiAgICAgICAgbG9nby5zdHlsZS5maWxsID0gXCJ2YXIoLS1jdGEpXCJcclxuICAgICAgICBib2R5LnN0eWxlLm92ZXJmbG93WSA9IFwidmlzaWJsZVwiO1xyXG4gICAgICAgIGxpbmtzLnN0eWxlLm9wYWNpdHkgPSBcIjBcIlxyXG4gICAgICAgIGxpbmtzLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMSwgMClcIlxyXG4gICAgfVxyXG4gICAgbGlua3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSl7XHJcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGNsb3NlVGFiKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcbmxldCBhYm91dFRyaURlc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQtLWRlc2t0b3AnKVxyXG5sZXQgYWJvdXRUcmlNb2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQtLW1vYmlsZScpXHJcbiAgICBcclxuYWJvdXRUcmlEZXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlbkFib3V0KTsgXHJcbmFib3V0VHJpTW9iLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgb3BlbkFib3V0KCk7XHJcbiAgICBib2R5T3ZlcmZsb3coKTtcclxufSk7IFxyXG5cclxuZnVuY3Rpb24gb3BlbkFib3V0KCkge1xyXG4gICAgbGV0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nbyBzdmcgLmMnKTtcclxuICAgIGxldCBhYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dCcpO1xyXG4gICAgbGV0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0X19jbG9zZScpO1xyXG4gICAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnYWJvdXQtLWFjdGl2ZScpO1xyXG5cclxuICAgIGlmIChhYm91dC5jbGFzc0xpc3QuY29udGFpbnMoJ2Fib3V0LS1hY3RpdmUnKSA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgYWJvdXRUcmlEZXNrLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodCcpXHJcbiAgICAgICAgbG9nby5zdHlsZS5maWxsID0gXCJ2YXIoLS1saWdodClcIjtcclxuICAgIH0gZWxzZXtcclxuICAgICAgICBsb2dvLnN0eWxlLmZpbGwgPSBcInZhcigtLWN0YSlcIlxyXG4gICAgICAgIGFib3V0VHJpRGVzay5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHQnKVxyXG4gICAgfVxyXG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBhYm91dC5jbGFzc0xpc3QucmVtb3ZlKCdhYm91dC0tYWN0aXZlJyk7XHJcbiAgICAgICAgbG9nby5zdHlsZS5maWxsID0gXCJ2YXIoLS1jdGEpXCJcclxuICAgICAgICBhYm91dFRyaURlc2suY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0JylcclxuICAgIH0pXHJcbn1cclxuZnVuY3Rpb24gYm9keU92ZXJmbG93KCl7XHJcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgIGxldCBhYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dCcpO1xyXG4gICAgbGV0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0X19jbG9zZScpO1xyXG5cclxuICAgIGlmIChhYm91dC5jbGFzc0xpc3QuY29udGFpbnMoJ2Fib3V0LS1hY3RpdmUnKSA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvd1ggPSBcImhpZGRlblwiXHJcbiAgICB9IGVsc2V7XHJcbiAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvd1ggPSBcInZpc2libGVcIlxyXG4gICAgfVxyXG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBib2R5LnN0eWxlLm92ZXJmbG93WCA9IFwidmlzaWJsZVwiXHJcbiAgICB9KVxyXG59XHJcblxyXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhc2VfX21vY2t1cCcpKXtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBtb2NrdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FzZV9fbW9ja3VwJyk7XHJcbiAgICAgICAgY29uc3QgbW9ja3VwSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhc2VfX21vY2t1cCBpbWcnKTtcclxuICAgICAgICBjb25zdCBib3R0b21Nb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhc2VfX2JvdHRvbScpO1xyXG4gICAgICAgIGNvbnN0IGJvdHRvbU1vY2tJbWcgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXNlX19ib3R0b20gaW1nJykpO1xyXG5cclxuICAgICAgICBsZXQgbW9ja3VwT2Zmc2V0ID0gbW9ja3VwLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcFxyXG4gICAgICAgIGxldCBib3R0b21PZmZzZXQgPSBib3R0b21Nb2NrLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcFxyXG5cclxuICAgICAgICBjb25zdCB1c2VyRmxvdyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3VzZXJmbG93IC5zdDAnKSlcclxuXHJcbiAgICAgICAgaWYgKG1vY2t1cE9mZnNldCA8IDQ1MCl7XHJcbiAgICAgICAgICAgIG1vY2t1cEltZy5jbGFzc0xpc3QuYWRkKCdhbmltYXRlJylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1vY2t1cE9mZnNldCA8IC00MzApe1xyXG4gICAgICAgICAgICBmb3IgKGxldCBzdDAgaW4gdXNlckZsb3cpe1xyXG4gICAgICAgICAgICAgICAgdXNlckZsb3dbc3QwXS5jbGFzc0xpc3QuYWRkKCdhbmltYXRlJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYm90dG9tT2Zmc2V0IDwgNDAwKXtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW1nIGluIGJvdHRvbU1vY2tJbWcpe1xyXG4gICAgICAgICAgICAgICAgYm90dG9tTW9ja0ltZ1tpbWddLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuLy8gQXN5bmMgZmV0Y2ggZm9yIGJvb2tvcHVzIGNhc2Ugc3R1ZHkuXHJcblxyXG5jb25zdCBib29rb3B1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rb3B1cycpXHJcbmJvb2tvcHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmV0Y2hDYXNlU3R1ZHkpXHJcblxyXG5cclxuZnVuY3Rpb24gZmV0Y2hDYXNlU3R1ZHkoKSB7XHJcbiAgICBsZXQgYm9va29wdXNMaW5rID0gYm9va29wdXMuZ2V0QXR0cmlidXRlKCdocmVmJykuc3Vic3RyKDEpICsgJy5odG1sJ1xyXG5cclxuICAgIGNvbnN0IGNhcmRJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZGltZy0tYm9va29wdXMnKVxyXG4gICAgY29uc3Qgd29ya3NBcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmtzX19hcnRpY2xlJylcclxuXHJcbiAgICBjb25zdCB3b3Jrc0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd29ya3NfX2NvbnRlbnQnKVxyXG4gICAgY29uc3Qgd29ya3NDb250ZW50UGxhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd29ya3NfX2NvbnRlbnQgZGl2JylcclxuICAgIGNvbnN0IHdvcmtzQ29udGVudEJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dvcmtzX19jb250ZW50IC53b3Jrc19fY29udGVudF9fYmcnKVxyXG5cclxuICAgIGNhcmRJbWcuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZScpXHJcbiAgICB3b3Jrc0FydGljbGUuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZScpXHJcblxyXG4gICAgd29ya3NDb250ZW50LnN0eWxlLm9wYWNpdHkgPSBcIjFcIlxyXG4gICAgd29ya3NDb250ZW50LnN0eWxlLnpJbmRleCA9IFwiMjAwXCJcclxuXHJcbiAgICBmZXRjaCgnYm9va29wdXMuaHRtbCcpXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLnRleHQoKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB3b3Jrc0NvbnRlbnRQbGFjZS5pbm5lckhUTUwgPSBkYXRhXHJcbiAgICAgICAgICAgIHdvcmtzQ29udGVudC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIlxyXG4gICAgICAgICAgICB3b3Jrc0NvbnRlbnRCZy5vcGFjaXR5ID0gXCIxXCJcclxuICAgICAgICB9KVxyXG5cclxufVxyXG5cclxuLy8gZmV0Y2goJ2Jvb2tvcHVzLmh0bWwnKVxyXG4vLyAgICAgLnRoZW4oKHJlcykgPT4gcmVzLnRleHQoKSlcclxuLy8gICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbi8vICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5pbm5lckhUTUwgPSBkYXRhXHJcbi8vICAgICB9KVxyXG5cclxuIiwidmFyIFZhbmlsbGFUaWx0PWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7Y2xhc3MgdHtjb25zdHJ1Y3Rvcih0LGU9e30pe2lmKCEodCBpbnN0YW5jZW9mIE5vZGUpKXRocm93XCJDYW4ndCBpbml0aWFsaXplIFZhbmlsbGFUaWx0IGJlY2F1c2UgXCIrdCtcIiBpcyBub3QgYSBOb2RlLlwiO3RoaXMud2lkdGg9bnVsbCx0aGlzLmhlaWdodD1udWxsLHRoaXMubGVmdD1udWxsLHRoaXMudG9wPW51bGwsdGhpcy50cmFuc2l0aW9uVGltZW91dD1udWxsLHRoaXMudXBkYXRlQ2FsbD1udWxsLHRoaXMudXBkYXRlQmluZD10aGlzLnVwZGF0ZS5iaW5kKHRoaXMpLHRoaXMucmVzZXRCaW5kPXRoaXMucmVzZXQuYmluZCh0aGlzKSx0aGlzLmVsZW1lbnQ9dCx0aGlzLnNldHRpbmdzPXRoaXMuZXh0ZW5kU2V0dGluZ3MoZSksdGhpcy5yZXZlcnNlPXRoaXMuc2V0dGluZ3MucmV2ZXJzZT8tMToxLHRoaXMuZ2xhcmU9dGhpcy5pc1NldHRpbmdUcnVlKHRoaXMuc2V0dGluZ3MuZ2xhcmUpLHRoaXMuZ2xhcmVQcmVyZW5kZXI9dGhpcy5pc1NldHRpbmdUcnVlKHRoaXMuc2V0dGluZ3NbXCJnbGFyZS1wcmVyZW5kZXJcIl0pLHRoaXMuZ2xhcmUmJnRoaXMucHJlcGFyZUdsYXJlKCksdGhpcy5hZGRFdmVudExpc3RlbmVycygpfWlzU2V0dGluZ1RydWUodCl7cmV0dXJuXCJcIj09PXR8fCEwPT09dHx8MT09PXR9YWRkRXZlbnRMaXN0ZW5lcnMoKXt0aGlzLm9uTW91c2VFbnRlckJpbmQ9dGhpcy5vbk1vdXNlRW50ZXIuYmluZCh0aGlzKSx0aGlzLm9uTW91c2VNb3ZlQmluZD10aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcyksdGhpcy5vbk1vdXNlTGVhdmVCaW5kPXRoaXMub25Nb3VzZUxlYXZlLmJpbmQodGhpcyksdGhpcy5vbldpbmRvd1Jlc2l6ZUJpbmQ9dGhpcy5vbldpbmRvd1Jlc2l6ZUJpbmQuYmluZCh0aGlzKSx0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIix0aGlzLm9uTW91c2VFbnRlckJpbmQpLHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5vbk1vdXNlTW92ZUJpbmQpLHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLHRoaXMub25Nb3VzZUxlYXZlQmluZCksdGhpcy5nbGFyZSYmd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLm9uV2luZG93UmVzaXplQmluZCl9cmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKXt0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIix0aGlzLm9uTW91c2VFbnRlckJpbmQpLHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5vbk1vdXNlTW92ZUJpbmQpLHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLHRoaXMub25Nb3VzZUxlYXZlQmluZCksdGhpcy5nbGFyZSYmd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLm9uV2luZG93UmVzaXplQmluZCl9ZGVzdHJveSgpe2NsZWFyVGltZW91dCh0aGlzLnRyYW5zaXRpb25UaW1lb3V0KSxudWxsIT09dGhpcy51cGRhdGVDYWxsJiZjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZUNhbGwpLHRoaXMucmVzZXQoKSx0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCksdGhpcy5lbGVtZW50LnZhbmlsbGFUaWx0PW51bGwsZGVsZXRlIHRoaXMuZWxlbWVudC52YW5pbGxhVGlsdCx0aGlzLmVsZW1lbnQ9bnVsbH1vbk1vdXNlRW50ZXIodCl7dGhpcy51cGRhdGVFbGVtZW50UG9zaXRpb24oKSx0aGlzLmVsZW1lbnQuc3R5bGUud2lsbENoYW5nZT1cInRyYW5zZm9ybVwiLHRoaXMuc2V0VHJhbnNpdGlvbigpfW9uTW91c2VNb3ZlKHQpe251bGwhPT10aGlzLnVwZGF0ZUNhbGwmJmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlQ2FsbCksdGhpcy5ldmVudD10LHRoaXMudXBkYXRlQ2FsbD1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGVCaW5kKX1vbk1vdXNlTGVhdmUodCl7dGhpcy5zZXRUcmFuc2l0aW9uKCksdGhpcy5zZXR0aW5ncy5yZXNldCYmcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVzZXRCaW5kKX1yZXNldCgpe3RoaXMuZXZlbnQ9e3BhZ2VYOnRoaXMubGVmdCt0aGlzLndpZHRoLzIscGFnZVk6dGhpcy50b3ArdGhpcy5oZWlnaHQvMn0sdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybT1cInBlcnNwZWN0aXZlKFwiK3RoaXMuc2V0dGluZ3MucGVyc3BlY3RpdmUrXCJweCkgcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHNjYWxlM2QoMSwgMSwgMSlcIix0aGlzLmdsYXJlJiYodGhpcy5nbGFyZUVsZW1lbnQuc3R5bGUudHJhbnNmb3JtPVwicm90YXRlKDE4MGRlZykgdHJhbnNsYXRlKC01MCUsIC01MCUpXCIsdGhpcy5nbGFyZUVsZW1lbnQuc3R5bGUub3BhY2l0eT1cIjBcIil9Z2V0VmFsdWVzKCl7bGV0IHQ9KHRoaXMuZXZlbnQuY2xpZW50WC10aGlzLmxlZnQpL3RoaXMud2lkdGgsZT0odGhpcy5ldmVudC5jbGllbnRZLXRoaXMudG9wKS90aGlzLmhlaWdodDtyZXR1cm4gdD1NYXRoLm1pbihNYXRoLm1heCh0LDApLDEpLGU9TWF0aC5taW4oTWF0aC5tYXgoZSwwKSwxKSx7dGlsdFg6KHRoaXMucmV2ZXJzZSoodGhpcy5zZXR0aW5ncy5tYXgvMi10KnRoaXMuc2V0dGluZ3MubWF4KSkudG9GaXhlZCgyKSx0aWx0WToodGhpcy5yZXZlcnNlKihlKnRoaXMuc2V0dGluZ3MubWF4LXRoaXMuc2V0dGluZ3MubWF4LzIpKS50b0ZpeGVkKDIpLHBlcmNlbnRhZ2VYOjEwMCp0LHBlcmNlbnRhZ2VZOjEwMCplLGFuZ2xlOk1hdGguYXRhbjIodGhpcy5ldmVudC5jbGllbnRYLSh0aGlzLmxlZnQrdGhpcy53aWR0aC8yKSwtKHRoaXMuZXZlbnQuY2xpZW50WS0odGhpcy50b3ArdGhpcy5oZWlnaHQvMikpKSooMTgwL01hdGguUEkpfX11cGRhdGVFbGVtZW50UG9zaXRpb24oKXtsZXQgdD10aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7dGhpcy53aWR0aD10aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGgsdGhpcy5oZWlnaHQ9dGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodCx0aGlzLmxlZnQ9dC5sZWZ0LHRoaXMudG9wPXQudG9wfXVwZGF0ZSgpe2xldCB0PXRoaXMuZ2V0VmFsdWVzKCk7dGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybT1cInBlcnNwZWN0aXZlKFwiK3RoaXMuc2V0dGluZ3MucGVyc3BlY3RpdmUrXCJweCkgcm90YXRlWChcIisoXCJ4XCI9PT10aGlzLnNldHRpbmdzLmF4aXM/MDp0LnRpbHRZKStcImRlZykgcm90YXRlWShcIisoXCJ5XCI9PT10aGlzLnNldHRpbmdzLmF4aXM/MDp0LnRpbHRYKStcImRlZykgc2NhbGUzZChcIit0aGlzLnNldHRpbmdzLnNjYWxlK1wiLCBcIit0aGlzLnNldHRpbmdzLnNjYWxlK1wiLCBcIit0aGlzLnNldHRpbmdzLnNjYWxlK1wiKVwiLHRoaXMuZ2xhcmUmJih0aGlzLmdsYXJlRWxlbWVudC5zdHlsZS50cmFuc2Zvcm09YHJvdGF0ZSgke3QuYW5nbGV9ZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSlgLHRoaXMuZ2xhcmVFbGVtZW50LnN0eWxlLm9wYWNpdHk9YCR7dC5wZXJjZW50YWdlWSp0aGlzLnNldHRpbmdzW1wibWF4LWdsYXJlXCJdLzEwMH1gKSx0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJ0aWx0Q2hhbmdlXCIse2RldGFpbDp0fSkpLHRoaXMudXBkYXRlQ2FsbD1udWxsfXByZXBhcmVHbGFyZSgpe2lmKCF0aGlzLmdsYXJlUHJlcmVuZGVyKXtjb25zdCB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dC5jbGFzc0xpc3QuYWRkKFwianMtdGlsdC1nbGFyZVwiKTtjb25zdCBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZS5jbGFzc0xpc3QuYWRkKFwianMtdGlsdC1nbGFyZS1pbm5lclwiKSx0LmFwcGVuZENoaWxkKGUpLHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0KX10aGlzLmdsYXJlRWxlbWVudFdyYXBwZXI9dGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtdGlsdC1nbGFyZVwiKSx0aGlzLmdsYXJlRWxlbWVudD10aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy10aWx0LWdsYXJlLWlubmVyXCIpLHRoaXMuZ2xhcmVQcmVyZW5kZXJ8fChPYmplY3QuYXNzaWduKHRoaXMuZ2xhcmVFbGVtZW50V3JhcHBlci5zdHlsZSx7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHRvcDpcIjBcIixsZWZ0OlwiMFwiLHdpZHRoOlwiMTAwJVwiLGhlaWdodDpcIjEwMCVcIixvdmVyZmxvdzpcImhpZGRlblwifSksT2JqZWN0LmFzc2lnbih0aGlzLmdsYXJlRWxlbWVudC5zdHlsZSx7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHRvcDpcIjUwJVwiLGxlZnQ6XCI1MCVcIixcInBvaW50ZXItZXZlbnRzXCI6XCJub25lXCIsXCJiYWNrZ3JvdW5kLWltYWdlXCI6YGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDApIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDEwMCUpYCx3aWR0aDpgJHsyKnRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aH1weGAsaGVpZ2h0OmAkezIqdGhpcy5lbGVtZW50Lm9mZnNldFdpZHRofXB4YCx0cmFuc2Zvcm06XCJyb3RhdGUoMTgwZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcInRyYW5zZm9ybS1vcmlnaW5cIjpcIjAlIDAlXCIsb3BhY2l0eTpcIjBcIn0pKX11cGRhdGVHbGFyZVNpemUoKXtPYmplY3QuYXNzaWduKHRoaXMuZ2xhcmVFbGVtZW50LnN0eWxlLHt3aWR0aDpgJHsyKnRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aH1gLGhlaWdodDpgJHsyKnRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aH1gfSl9b25XaW5kb3dSZXNpemVCaW5kKCl7dGhpcy51cGRhdGVHbGFyZVNpemUoKX1zZXRUcmFuc2l0aW9uKCl7Y2xlYXJUaW1lb3V0KHRoaXMudHJhbnNpdGlvblRpbWVvdXQpLHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uPXRoaXMuc2V0dGluZ3Muc3BlZWQrXCJtcyBcIit0aGlzLnNldHRpbmdzLmVhc2luZyx0aGlzLmdsYXJlJiYodGhpcy5nbGFyZUVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbj1gb3BhY2l0eSAke3RoaXMuc2V0dGluZ3Muc3BlZWR9bXMgJHt0aGlzLnNldHRpbmdzLmVhc2luZ31gKSx0aGlzLnRyYW5zaXRpb25UaW1lb3V0PXNldFRpbWVvdXQoKCk9Pnt0aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbj1cIlwiO3RoaXMuZ2xhcmUmJih0aGlzLmdsYXJlRWxlbWVudC5zdHlsZS50cmFuc2l0aW9uPVwiXCIpfSx0aGlzLnNldHRpbmdzLnNwZWVkKX1leHRlbmRTZXR0aW5ncyh0KXtsZXQgZT17cmV2ZXJzZTohMSxtYXg6MzUscGVyc3BlY3RpdmU6MWUzLGVhc2luZzpcImN1YmljLWJlemllciguMDMsLjk4LC41MiwuOTkpXCIsc2NhbGU6XCIxXCIsc3BlZWQ6XCIzMDBcIix0cmFuc2l0aW9uOiEwLGF4aXM6bnVsbCxnbGFyZTohMSxcIm1heC1nbGFyZVwiOjEsXCJnbGFyZS1wcmVyZW5kZXJcIjohMSxyZXNldDohMH0saT17fTtmb3IodmFyIHMgaW4gZSlpZihzIGluIHQpaVtzXT10W3NdO2Vsc2UgaWYodGhpcy5lbGVtZW50Lmhhc0F0dHJpYnV0ZShcImRhdGEtdGlsdC1cIitzKSl7bGV0IHQ9dGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGlsdC1cIitzKTt0cnl7aVtzXT1KU09OLnBhcnNlKHQpfWNhdGNoKGUpe2lbc109dH19ZWxzZSBpW3NdPWVbc107cmV0dXJuIGl9c3RhdGljIGluaXQoZSxpKXtlIGluc3RhbmNlb2YgTm9kZSYmKGU9W2VdKSxlIGluc3RhbmNlb2YgTm9kZUxpc3QmJihlPVtdLnNsaWNlLmNhbGwoZSkpLGUgaW5zdGFuY2VvZiBBcnJheSYmZS5mb3JFYWNoKGU9PntcInZhbmlsbGFUaWx0XCJpbiBlfHwoZS52YW5pbGxhVGlsdD1uZXcgdChlLGkpKX0pfX1yZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQmJih3aW5kb3cuVmFuaWxsYVRpbHQ9dCx0LmluaXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXRpbHRdXCIpKSksdH0oKTsiXX0=
