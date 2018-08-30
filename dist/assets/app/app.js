//----------Index Scroll Effects----------//
let works = document.querySelector('.works').getBoundingClientRect()
let worksTop = works.top
if(document.querySelector('.hero')){
    let landingTop = document.querySelector('.hero').getBoundingClientRect()
    let landingTopWidth = landingTop.width
    let landingTopHeight = landingTop.height
    let landingTopX = landingTop.top
    
    window.addEventListener("scroll", () => {
        if(!document.querySelector('.case__html .main-wrapper')){
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

const bookopusWorks = document.querySelector('.bookopus');

bookopusWorks.addEventListener('click', fetchBookopusStudy);

function fetchBookopusStudy(){
    const cardImg = document.querySelector('.cardimg--bookopus');
    const worksArticle = document.querySelector('.works__article');

    const caseHtml = document.querySelector('.case__html');
    const caseBg = document.querySelector('.case__bg');
    
    const index = document.querySelector('#index');

    fetch('bookopus.html')
    .then((res) => res.text())
    .then((data) => {
        caseHtml.innerHTML = data
    })
    
    
    cardImg.style.animation = "slideLeft 1.5s cubic-bezier(0.69, 0.02, 0.29, 1.16) forwards 1";
    worksArticle.style.animation = "slideRight 1.5s cubic-bezier(0.69, 0.02, 0.29, 1.16) forwards 1";
    
    caseBg.style.opacity = "1"
    caseBg.style.visibility = "visible"

    setTimeout(() => {
        caseHtml.style.opacity = "1"
        caseHtml.style.visibility = "visible"
        index.style.visibility = "hidden"

        window.scrollTo(0, 0);

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

        const caseClose = document.querySelector('.case__close');
    
        caseClose.addEventListener('click', () =>{
            caseHtml.style.opacity = "0"
            caseHtml.style.visibility = "hidden"
            index.style.visibility = "visible"
    
            setTimeout(() => {
                window.scrollTo(0, worksTop);
                cardImg.style.animation = "slideLeftBack 1.5s cubic-bezier(0.69, 0.02, 0.29, 1.16) forwards 1";
                worksArticle.style.animation = "slideRightBack 1.5s cubic-bezier(0.69, 0.02, 0.29, 1.16) forwards 1";
                
                caseBg.style.opacity = "0"
                caseBg.style.visibility = "hidden"
            }, 100);
            caseHtml.innerHTML = ' '
        });

    }, 1500);
   

}

var VanillaTilt=function(){"use strict";class t{constructor(t,e={}){if(!(t instanceof Node))throw"Can't initialize VanillaTilt because "+t+" is not a Node.";this.width=null,this.height=null,this.left=null,this.top=null,this.transitionTimeout=null,this.updateCall=null,this.updateBind=this.update.bind(this),this.resetBind=this.reset.bind(this),this.element=t,this.settings=this.extendSettings(e),this.reverse=this.settings.reverse?-1:1,this.glare=this.isSettingTrue(this.settings.glare),this.glarePrerender=this.isSettingTrue(this.settings["glare-prerender"]),this.glare&&this.prepareGlare(),this.addEventListeners()}isSettingTrue(t){return""===t||!0===t||1===t}addEventListeners(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.onWindowResizeBind=this.onWindowResizeBind.bind(this),this.element.addEventListener("mouseenter",this.onMouseEnterBind),this.element.addEventListener("mousemove",this.onMouseMoveBind),this.element.addEventListener("mouseleave",this.onMouseLeaveBind),this.glare&&window.addEventListener("resize",this.onWindowResizeBind)}removeEventListeners(){this.element.removeEventListener("mouseenter",this.onMouseEnterBind),this.element.removeEventListener("mousemove",this.onMouseMoveBind),this.element.removeEventListener("mouseleave",this.onMouseLeaveBind),this.glare&&window.removeEventListener("resize",this.onWindowResizeBind)}destroy(){clearTimeout(this.transitionTimeout),null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.reset(),this.removeEventListeners(),this.element.vanillaTilt=null,delete this.element.vanillaTilt,this.element=null}onMouseEnter(t){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()}onMouseMove(t){null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event=t,this.updateCall=requestAnimationFrame(this.updateBind)}onMouseLeave(t){this.setTransition(),this.settings.reset&&requestAnimationFrame(this.resetBind)}reset(){this.event={pageX:this.left+this.width/2,pageY:this.top+this.height/2},this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",this.glare&&(this.glareElement.style.transform="rotate(180deg) translate(-50%, -50%)",this.glareElement.style.opacity="0")}getValues(){let t=(this.event.clientX-this.left)/this.width,e=(this.event.clientY-this.top)/this.height;return t=Math.min(Math.max(t,0),1),e=Math.min(Math.max(e,0),1),{tiltX:(this.reverse*(this.settings.max/2-t*this.settings.max)).toFixed(2),tiltY:(this.reverse*(e*this.settings.max-this.settings.max/2)).toFixed(2),percentageX:100*t,percentageY:100*e,angle:Math.atan2(this.event.clientX-(this.left+this.width/2),-(this.event.clientY-(this.top+this.height/2)))*(180/Math.PI)}}updateElementPosition(){let t=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=t.left,this.top=t.top}update(){let t=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.axis?0:t.tiltY)+"deg) rotateY("+("y"===this.settings.axis?0:t.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.glare&&(this.glareElement.style.transform=`rotate(${t.angle}deg) translate(-50%, -50%)`,this.glareElement.style.opacity=`${t.percentageY*this.settings["max-glare"]/100}`),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:t})),this.updateCall=null}prepareGlare(){if(!this.glarePrerender){const t=document.createElement("div");t.classList.add("js-tilt-glare");const e=document.createElement("div");e.classList.add("js-tilt-glare-inner"),t.appendChild(e),this.element.appendChild(t)}this.glareElementWrapper=this.element.querySelector(".js-tilt-glare"),this.glareElement=this.element.querySelector(".js-tilt-glare-inner"),this.glarePrerender||(Object.assign(this.glareElementWrapper.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden"}),Object.assign(this.glareElement.style,{position:"absolute",top:"50%",left:"50%","pointer-events":"none","background-image":`linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)`,width:`${2*this.element.offsetWidth}px`,height:`${2*this.element.offsetWidth}px`,transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"}))}updateGlareSize(){Object.assign(this.glareElement.style,{width:`${2*this.element.offsetWidth}`,height:`${2*this.element.offsetWidth}`})}onWindowResizeBind(){this.updateGlareSize()}setTransition(){clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.glare&&(this.glareElement.style.transition=`opacity ${this.settings.speed}ms ${this.settings.easing}`),this.transitionTimeout=setTimeout(()=>{this.element.style.transition="";this.glare&&(this.glareElement.style.transition="")},this.settings.speed)}extendSettings(t){let e={reverse:!1,max:35,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:"1",speed:"300",transition:!0,axis:null,glare:!1,"max-glare":1,"glare-prerender":!1,reset:!0},i={};for(var s in e)if(s in t)i[s]=t[s];else if(this.element.hasAttribute("data-tilt-"+s)){let t=this.element.getAttribute("data-tilt-"+s);try{i[s]=JSON.parse(t)}catch(e){i[s]=t}}else i[s]=e[s];return i}static init(e,i){e instanceof Node&&(e=[e]),e instanceof NodeList&&(e=[].slice.call(e)),e instanceof Array&&e.forEach(e=>{"vanillaTilt"in e||(e.vanillaTilt=new t(e,i))})}}return"undefined"!=typeof document&&(window.VanillaTilt=t,t.init(document.querySelectorAll("[data-tilt]"))),t}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInZlbmRvcnMvdmFuaWxsYS10aWx0Lm1pbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hOQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS1JbmRleCBTY3JvbGwgRWZmZWN0cy0tLS0tLS0tLS0vL1xyXG5sZXQgd29ya3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29ya3MnKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG5sZXQgd29ya3NUb3AgPSB3b3Jrcy50b3BcclxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8nKSl7XHJcbiAgICBsZXQgbGFuZGluZ1RvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvJykuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgIGxldCBsYW5kaW5nVG9wV2lkdGggPSBsYW5kaW5nVG9wLndpZHRoXHJcbiAgICBsZXQgbGFuZGluZ1RvcEhlaWdodCA9IGxhbmRpbmdUb3AuaGVpZ2h0XHJcbiAgICBsZXQgbGFuZGluZ1RvcFggPSBsYW5kaW5nVG9wLnRvcFxyXG4gICAgXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXNlX19odG1sIC5tYWluLXdyYXBwZXInKSl7XHJcbiAgICAgICAgICAgIGxldCBjYXJkSXRlbSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRpbWdfX2l0ZW0nKSlcclxuICAgICAgICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuICAgICAgICAgICAgbGV0IGxvZ29Jbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvIHN2ZyAuYycpXHJcbiAgICAgICAgICAgIGxldCBsb2dvT3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nbyBzdmcgLmQnKVxyXG4gICAgICAgICAgICBsZXQgbGlua3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYgdWwgbGkgYScpKVxyXG5cclxuICAgICAgICAgICAgbGV0IHdvcmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmtzJykuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgICAgICAgICAgbGV0IHdvcmtzVG9wID0gd29ya3MudG9wXHJcblxyXG4gICAgICAgICAgICBsZXQgY29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0JykuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgICAgICAgICAgbGV0IGNvbnRhY3RUb3AgPSBjb250YWN0LnRvcFxyXG5cclxuICAgICAgICAgICAgaWYod29ya3NUb3AgPCA0MDApe1xyXG4gICAgICAgICAgICAgICAgY2FyZEl0ZW0uZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnY2FyZGltZy0tcmV2ZWFsJylcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYod29ya3NUb3AgPCAzMDApe1xyXG4gICAgICAgICAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLWJvb2tvcHVzKVwiXHJcbiAgICAgICAgICAgICAgICBpZiAobGFuZGluZ1RvcFdpZHRoID4gOTAwKXtcclxuICAgICAgICAgICAgICAgICAgICBsb2dvSW5uZXIuc3R5bGUuZmlsbCA9IFwidmFyKC0tbGlnaHQpXCJcclxuICAgICAgICAgICAgICAgICAgICBsb2dvT3V0ZXIuc3R5bGUuc3Ryb2tlID0gXCJ2YXIoLS1kYXJrKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rLnN0eWxlLmNvbG9yID0gXCJ2YXIoLS1kYXJrKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2V7IC8qIERlZmF1bHQgVmFsdWVzICovXHJcbiAgICAgICAgICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tbGlnaHQpXCJcclxuICAgICAgICAgICAgICAgIGlmIChsYW5kaW5nVG9wV2lkdGggPiA5MDApe1xyXG4gICAgICAgICAgICAgICAgICAgIGxvZ29Jbm5lci5zdHlsZS5maWxsID0gXCJ2YXIoLS1jdGEpXCJcclxuICAgICAgICAgICAgICAgICAgICBsb2dvT3V0ZXIuc3R5bGUuc3Ryb2tlID0gXCJ2YXIoLS1kYXJrKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rLnN0eWxlLmNvbG9yID0gXCJ2YXIoLS1kYXJrKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihjb250YWN0VG9wIDwgMjAwKXtcclxuICAgICAgICAgICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1kYXJrKVwiXHJcbiAgICAgICAgICAgICAgICBpZiAobGFuZGluZ1RvcFdpZHRoID4gOTAwKXtcclxuICAgICAgICAgICAgICAgICAgICBsb2dvSW5uZXIuc3R5bGUuZmlsbCA9IFwidmFyKC0tY3RhKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbG9nb091dGVyLnN0eWxlLnN0cm9rZSA9IFwidmFyKC0tbGlnaHQpXCJcclxuICAgICAgICAgICAgICAgICAgICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuc3R5bGUuY29sb3IgPSBcInZhcigtLWxpZ2h0KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmxldCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZS1uYXYtLW1lbnUnKVxyXG4gICAgXHJcbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBsZXQgbG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtbmF2IC5sb2dvIC5jJyk7XHJcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgIGxldCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtbmF2X19saW5rcycpO1xyXG4gICAgXHJcbiAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG5cclxuICAgIGlmIChtZW51LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykgPT09IHRydWUpe1xyXG4gICAgICAgIGxvZ28uc3R5bGUuZmlsbCA9IFwidmFyKC0tbGlnaHQpXCI7XHJcbiAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvd1kgPSBcImhpZGRlblwiO1xyXG4gICAgICAgIGxpbmtzLnN0eWxlLm9wYWNpdHkgPSBcIjFcIlxyXG4gICAgICAgIGxpbmtzLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMSlcIlxyXG4gICAgfSBlbHNle1xyXG4gICAgICAgIGNsb3NlVGFiKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjbG9zZVRhYigpe1xyXG4gICAgICAgIGxvZ28uc3R5bGUuZmlsbCA9IFwidmFyKC0tY3RhKVwiXHJcbiAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvd1kgPSBcInZpc2libGVcIjtcclxuICAgICAgICBsaW5rcy5zdHlsZS5vcGFjaXR5ID0gXCIwXCJcclxuICAgICAgICBsaW5rcy5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEsIDApXCJcclxuICAgIH1cclxuICAgIGxpbmtzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChtZW51LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpe1xyXG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBjbG9zZVRhYigpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pXHJcblxyXG5sZXQgYWJvdXRUcmlEZXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0LS1kZXNrdG9wJylcclxubGV0IGFib3V0VHJpTW9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0LS1tb2JpbGUnKVxyXG4gICAgXHJcbmFib3V0VHJpRGVzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5BYm91dCk7IFxyXG5hYm91dFRyaU1vYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIG9wZW5BYm91dCgpO1xyXG4gICAgYm9keU92ZXJmbG93KCk7XHJcbn0pOyBcclxuXHJcbmZ1bmN0aW9uIG9wZW5BYm91dCgpIHtcclxuICAgIGxldCBsb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28gc3ZnIC5jJyk7XHJcbiAgICBsZXQgYWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQnKTtcclxuICAgIGxldCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dF9fY2xvc2UnKTtcclxuICAgIGFib3V0LmNsYXNzTGlzdC5hZGQoJ2Fib3V0LS1hY3RpdmUnKTtcclxuXHJcbiAgICBpZiAoYWJvdXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhYm91dC0tYWN0aXZlJykgPT09IHRydWUpe1xyXG4gICAgICAgIGFib3V0VHJpRGVzay5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQnKVxyXG4gICAgICAgIGxvZ28uc3R5bGUuZmlsbCA9IFwidmFyKC0tbGlnaHQpXCI7XHJcbiAgICB9IGVsc2V7XHJcbiAgICAgICAgbG9nby5zdHlsZS5maWxsID0gXCJ2YXIoLS1jdGEpXCJcclxuICAgICAgICBhYm91dFRyaURlc2suY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0JylcclxuICAgIH1cclxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgYWJvdXQuY2xhc3NMaXN0LnJlbW92ZSgnYWJvdXQtLWFjdGl2ZScpO1xyXG4gICAgICAgIGxvZ28uc3R5bGUuZmlsbCA9IFwidmFyKC0tY3RhKVwiXHJcbiAgICAgICAgYWJvdXRUcmlEZXNrLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpXHJcbiAgICB9KVxyXG59XHJcbmZ1bmN0aW9uIGJvZHlPdmVyZmxvdygpe1xyXG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICBsZXQgYWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQnKTtcclxuICAgIGxldCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dF9fY2xvc2UnKTtcclxuXHJcbiAgICBpZiAoYWJvdXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhYm91dC0tYWN0aXZlJykgPT09IHRydWUpe1xyXG4gICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3dYID0gXCJoaWRkZW5cIlxyXG4gICAgfSBlbHNle1xyXG4gICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3dYID0gXCJ2aXNpYmxlXCJcclxuICAgIH1cclxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvd1ggPSBcInZpc2libGVcIlxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgYm9va29wdXNXb3JrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rb3B1cycpO1xyXG5cclxuYm9va29wdXNXb3Jrcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZldGNoQm9va29wdXNTdHVkeSk7XHJcblxyXG5mdW5jdGlvbiBmZXRjaEJvb2tvcHVzU3R1ZHkoKXtcclxuICAgIGNvbnN0IGNhcmRJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZGltZy0tYm9va29wdXMnKTtcclxuICAgIGNvbnN0IHdvcmtzQXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b3Jrc19fYXJ0aWNsZScpO1xyXG5cclxuICAgIGNvbnN0IGNhc2VIdG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhc2VfX2h0bWwnKTtcclxuICAgIGNvbnN0IGNhc2VCZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXNlX19iZycpO1xyXG4gICAgXHJcbiAgICBjb25zdCBpbmRleCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmRleCcpO1xyXG5cclxuICAgIGZldGNoKCdib29rb3B1cy5odG1sJylcclxuICAgIC50aGVuKChyZXMpID0+IHJlcy50ZXh0KCkpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIGNhc2VIdG1sLmlubmVySFRNTCA9IGRhdGFcclxuICAgIH0pXHJcbiAgICBcclxuICAgIFxyXG4gICAgY2FyZEltZy5zdHlsZS5hbmltYXRpb24gPSBcInNsaWRlTGVmdCAxLjVzIGN1YmljLWJlemllcigwLjY5LCAwLjAyLCAwLjI5LCAxLjE2KSBmb3J3YXJkcyAxXCI7XHJcbiAgICB3b3Jrc0FydGljbGUuc3R5bGUuYW5pbWF0aW9uID0gXCJzbGlkZVJpZ2h0IDEuNXMgY3ViaWMtYmV6aWVyKDAuNjksIDAuMDIsIDAuMjksIDEuMTYpIGZvcndhcmRzIDFcIjtcclxuICAgIFxyXG4gICAgY2FzZUJnLnN0eWxlLm9wYWNpdHkgPSBcIjFcIlxyXG4gICAgY2FzZUJnLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIlxyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNhc2VIdG1sLnN0eWxlLm9wYWNpdHkgPSBcIjFcIlxyXG4gICAgICAgIGNhc2VIdG1sLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIlxyXG4gICAgICAgIGluZGV4LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiXHJcblxyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbW9ja3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhc2VfX21vY2t1cCcpO1xyXG4gICAgICAgICAgICBjb25zdCBtb2NrdXBJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FzZV9fbW9ja3VwIGltZycpO1xyXG4gICAgICAgICAgICBjb25zdCBib3R0b21Nb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhc2VfX2JvdHRvbScpO1xyXG4gICAgICAgICAgICBjb25zdCBib3R0b21Nb2NrSW1nID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FzZV9fYm90dG9tIGltZycpKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBtb2NrdXBPZmZzZXQgPSBtb2NrdXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXHJcbiAgICAgICAgICAgIGxldCBib3R0b21PZmZzZXQgPSBib3R0b21Nb2NrLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcFxyXG5cclxuICAgICAgICAgICAgY29uc3QgdXNlckZsb3cgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyN1c2VyZmxvdyAuc3QwJykpXHJcblxyXG4gICAgICAgICAgICBpZiAobW9ja3VwT2Zmc2V0IDwgNDUwKXtcclxuICAgICAgICAgICAgICAgIG1vY2t1cEltZy5jbGFzc0xpc3QuYWRkKCdhbmltYXRlJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobW9ja3VwT2Zmc2V0IDwgLTQzMCl7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBzdDAgaW4gdXNlckZsb3cpe1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJGbG93W3N0MF0uY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZScpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGJvdHRvbU9mZnNldCA8IDQwMCl7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbWcgaW4gYm90dG9tTW9ja0ltZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tTW9ja0ltZ1tpbWddLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QgY2FzZUNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhc2VfX2Nsb3NlJyk7XHJcbiAgICBcclxuICAgICAgICBjYXNlQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcclxuICAgICAgICAgICAgY2FzZUh0bWwuc3R5bGUub3BhY2l0eSA9IFwiMFwiXHJcbiAgICAgICAgICAgIGNhc2VIdG1sLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiXHJcbiAgICAgICAgICAgIGluZGV4LnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIlxyXG4gICAgXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHdvcmtzVG9wKTtcclxuICAgICAgICAgICAgICAgIGNhcmRJbWcuc3R5bGUuYW5pbWF0aW9uID0gXCJzbGlkZUxlZnRCYWNrIDEuNXMgY3ViaWMtYmV6aWVyKDAuNjksIDAuMDIsIDAuMjksIDEuMTYpIGZvcndhcmRzIDFcIjtcclxuICAgICAgICAgICAgICAgIHdvcmtzQXJ0aWNsZS5zdHlsZS5hbmltYXRpb24gPSBcInNsaWRlUmlnaHRCYWNrIDEuNXMgY3ViaWMtYmV6aWVyKDAuNjksIDAuMDIsIDAuMjksIDEuMTYpIGZvcndhcmRzIDFcIjtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2FzZUJnLnN0eWxlLm9wYWNpdHkgPSBcIjBcIlxyXG4gICAgICAgICAgICAgICAgY2FzZUJnLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiXHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgIGNhc2VIdG1sLmlubmVySFRNTCA9ICcgJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0sIDE1MDApO1xyXG4gICBcclxuXHJcbn1cclxuIiwidmFyIFZhbmlsbGFUaWx0PWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7Y2xhc3MgdHtjb25zdHJ1Y3Rvcih0LGU9e30pe2lmKCEodCBpbnN0YW5jZW9mIE5vZGUpKXRocm93XCJDYW4ndCBpbml0aWFsaXplIFZhbmlsbGFUaWx0IGJlY2F1c2UgXCIrdCtcIiBpcyBub3QgYSBOb2RlLlwiO3RoaXMud2lkdGg9bnVsbCx0aGlzLmhlaWdodD1udWxsLHRoaXMubGVmdD1udWxsLHRoaXMudG9wPW51bGwsdGhpcy50cmFuc2l0aW9uVGltZW91dD1udWxsLHRoaXMudXBkYXRlQ2FsbD1udWxsLHRoaXMudXBkYXRlQmluZD10aGlzLnVwZGF0ZS5iaW5kKHRoaXMpLHRoaXMucmVzZXRCaW5kPXRoaXMucmVzZXQuYmluZCh0aGlzKSx0aGlzLmVsZW1lbnQ9dCx0aGlzLnNldHRpbmdzPXRoaXMuZXh0ZW5kU2V0dGluZ3MoZSksdGhpcy5yZXZlcnNlPXRoaXMuc2V0dGluZ3MucmV2ZXJzZT8tMToxLHRoaXMuZ2xhcmU9dGhpcy5pc1NldHRpbmdUcnVlKHRoaXMuc2V0dGluZ3MuZ2xhcmUpLHRoaXMuZ2xhcmVQcmVyZW5kZXI9dGhpcy5pc1NldHRpbmdUcnVlKHRoaXMuc2V0dGluZ3NbXCJnbGFyZS1wcmVyZW5kZXJcIl0pLHRoaXMuZ2xhcmUmJnRoaXMucHJlcGFyZUdsYXJlKCksdGhpcy5hZGRFdmVudExpc3RlbmVycygpfWlzU2V0dGluZ1RydWUodCl7cmV0dXJuXCJcIj09PXR8fCEwPT09dHx8MT09PXR9YWRkRXZlbnRMaXN0ZW5lcnMoKXt0aGlzLm9uTW91c2VFbnRlckJpbmQ9dGhpcy5vbk1vdXNlRW50ZXIuYmluZCh0aGlzKSx0aGlzLm9uTW91c2VNb3ZlQmluZD10aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcyksdGhpcy5vbk1vdXNlTGVhdmVCaW5kPXRoaXMub25Nb3VzZUxlYXZlLmJpbmQodGhpcyksdGhpcy5vbldpbmRvd1Jlc2l6ZUJpbmQ9dGhpcy5vbldpbmRvd1Jlc2l6ZUJpbmQuYmluZCh0aGlzKSx0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIix0aGlzLm9uTW91c2VFbnRlckJpbmQpLHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5vbk1vdXNlTW92ZUJpbmQpLHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLHRoaXMub25Nb3VzZUxlYXZlQmluZCksdGhpcy5nbGFyZSYmd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLm9uV2luZG93UmVzaXplQmluZCl9cmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKXt0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIix0aGlzLm9uTW91c2VFbnRlckJpbmQpLHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5vbk1vdXNlTW92ZUJpbmQpLHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLHRoaXMub25Nb3VzZUxlYXZlQmluZCksdGhpcy5nbGFyZSYmd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLm9uV2luZG93UmVzaXplQmluZCl9ZGVzdHJveSgpe2NsZWFyVGltZW91dCh0aGlzLnRyYW5zaXRpb25UaW1lb3V0KSxudWxsIT09dGhpcy51cGRhdGVDYWxsJiZjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZUNhbGwpLHRoaXMucmVzZXQoKSx0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCksdGhpcy5lbGVtZW50LnZhbmlsbGFUaWx0PW51bGwsZGVsZXRlIHRoaXMuZWxlbWVudC52YW5pbGxhVGlsdCx0aGlzLmVsZW1lbnQ9bnVsbH1vbk1vdXNlRW50ZXIodCl7dGhpcy51cGRhdGVFbGVtZW50UG9zaXRpb24oKSx0aGlzLmVsZW1lbnQuc3R5bGUud2lsbENoYW5nZT1cInRyYW5zZm9ybVwiLHRoaXMuc2V0VHJhbnNpdGlvbigpfW9uTW91c2VNb3ZlKHQpe251bGwhPT10aGlzLnVwZGF0ZUNhbGwmJmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlQ2FsbCksdGhpcy5ldmVudD10LHRoaXMudXBkYXRlQ2FsbD1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGVCaW5kKX1vbk1vdXNlTGVhdmUodCl7dGhpcy5zZXRUcmFuc2l0aW9uKCksdGhpcy5zZXR0aW5ncy5yZXNldCYmcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVzZXRCaW5kKX1yZXNldCgpe3RoaXMuZXZlbnQ9e3BhZ2VYOnRoaXMubGVmdCt0aGlzLndpZHRoLzIscGFnZVk6dGhpcy50b3ArdGhpcy5oZWlnaHQvMn0sdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybT1cInBlcnNwZWN0aXZlKFwiK3RoaXMuc2V0dGluZ3MucGVyc3BlY3RpdmUrXCJweCkgcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHNjYWxlM2QoMSwgMSwgMSlcIix0aGlzLmdsYXJlJiYodGhpcy5nbGFyZUVsZW1lbnQuc3R5bGUudHJhbnNmb3JtPVwicm90YXRlKDE4MGRlZykgdHJhbnNsYXRlKC01MCUsIC01MCUpXCIsdGhpcy5nbGFyZUVsZW1lbnQuc3R5bGUub3BhY2l0eT1cIjBcIil9Z2V0VmFsdWVzKCl7bGV0IHQ9KHRoaXMuZXZlbnQuY2xpZW50WC10aGlzLmxlZnQpL3RoaXMud2lkdGgsZT0odGhpcy5ldmVudC5jbGllbnRZLXRoaXMudG9wKS90aGlzLmhlaWdodDtyZXR1cm4gdD1NYXRoLm1pbihNYXRoLm1heCh0LDApLDEpLGU9TWF0aC5taW4oTWF0aC5tYXgoZSwwKSwxKSx7dGlsdFg6KHRoaXMucmV2ZXJzZSoodGhpcy5zZXR0aW5ncy5tYXgvMi10KnRoaXMuc2V0dGluZ3MubWF4KSkudG9GaXhlZCgyKSx0aWx0WToodGhpcy5yZXZlcnNlKihlKnRoaXMuc2V0dGluZ3MubWF4LXRoaXMuc2V0dGluZ3MubWF4LzIpKS50b0ZpeGVkKDIpLHBlcmNlbnRhZ2VYOjEwMCp0LHBlcmNlbnRhZ2VZOjEwMCplLGFuZ2xlOk1hdGguYXRhbjIodGhpcy5ldmVudC5jbGllbnRYLSh0aGlzLmxlZnQrdGhpcy53aWR0aC8yKSwtKHRoaXMuZXZlbnQuY2xpZW50WS0odGhpcy50b3ArdGhpcy5oZWlnaHQvMikpKSooMTgwL01hdGguUEkpfX11cGRhdGVFbGVtZW50UG9zaXRpb24oKXtsZXQgdD10aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7dGhpcy53aWR0aD10aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGgsdGhpcy5oZWlnaHQ9dGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodCx0aGlzLmxlZnQ9dC5sZWZ0LHRoaXMudG9wPXQudG9wfXVwZGF0ZSgpe2xldCB0PXRoaXMuZ2V0VmFsdWVzKCk7dGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybT1cInBlcnNwZWN0aXZlKFwiK3RoaXMuc2V0dGluZ3MucGVyc3BlY3RpdmUrXCJweCkgcm90YXRlWChcIisoXCJ4XCI9PT10aGlzLnNldHRpbmdzLmF4aXM/MDp0LnRpbHRZKStcImRlZykgcm90YXRlWShcIisoXCJ5XCI9PT10aGlzLnNldHRpbmdzLmF4aXM/MDp0LnRpbHRYKStcImRlZykgc2NhbGUzZChcIit0aGlzLnNldHRpbmdzLnNjYWxlK1wiLCBcIit0aGlzLnNldHRpbmdzLnNjYWxlK1wiLCBcIit0aGlzLnNldHRpbmdzLnNjYWxlK1wiKVwiLHRoaXMuZ2xhcmUmJih0aGlzLmdsYXJlRWxlbWVudC5zdHlsZS50cmFuc2Zvcm09YHJvdGF0ZSgke3QuYW5nbGV9ZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSlgLHRoaXMuZ2xhcmVFbGVtZW50LnN0eWxlLm9wYWNpdHk9YCR7dC5wZXJjZW50YWdlWSp0aGlzLnNldHRpbmdzW1wibWF4LWdsYXJlXCJdLzEwMH1gKSx0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJ0aWx0Q2hhbmdlXCIse2RldGFpbDp0fSkpLHRoaXMudXBkYXRlQ2FsbD1udWxsfXByZXBhcmVHbGFyZSgpe2lmKCF0aGlzLmdsYXJlUHJlcmVuZGVyKXtjb25zdCB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dC5jbGFzc0xpc3QuYWRkKFwianMtdGlsdC1nbGFyZVwiKTtjb25zdCBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZS5jbGFzc0xpc3QuYWRkKFwianMtdGlsdC1nbGFyZS1pbm5lclwiKSx0LmFwcGVuZENoaWxkKGUpLHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0KX10aGlzLmdsYXJlRWxlbWVudFdyYXBwZXI9dGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtdGlsdC1nbGFyZVwiKSx0aGlzLmdsYXJlRWxlbWVudD10aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy10aWx0LWdsYXJlLWlubmVyXCIpLHRoaXMuZ2xhcmVQcmVyZW5kZXJ8fChPYmplY3QuYXNzaWduKHRoaXMuZ2xhcmVFbGVtZW50V3JhcHBlci5zdHlsZSx7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHRvcDpcIjBcIixsZWZ0OlwiMFwiLHdpZHRoOlwiMTAwJVwiLGhlaWdodDpcIjEwMCVcIixvdmVyZmxvdzpcImhpZGRlblwifSksT2JqZWN0LmFzc2lnbih0aGlzLmdsYXJlRWxlbWVudC5zdHlsZSx7cG9zaXRpb246XCJhYnNvbHV0ZVwiLHRvcDpcIjUwJVwiLGxlZnQ6XCI1MCVcIixcInBvaW50ZXItZXZlbnRzXCI6XCJub25lXCIsXCJiYWNrZ3JvdW5kLWltYWdlXCI6YGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDApIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDEwMCUpYCx3aWR0aDpgJHsyKnRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aH1weGAsaGVpZ2h0OmAkezIqdGhpcy5lbGVtZW50Lm9mZnNldFdpZHRofXB4YCx0cmFuc2Zvcm06XCJyb3RhdGUoMTgwZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcInRyYW5zZm9ybS1vcmlnaW5cIjpcIjAlIDAlXCIsb3BhY2l0eTpcIjBcIn0pKX11cGRhdGVHbGFyZVNpemUoKXtPYmplY3QuYXNzaWduKHRoaXMuZ2xhcmVFbGVtZW50LnN0eWxlLHt3aWR0aDpgJHsyKnRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aH1gLGhlaWdodDpgJHsyKnRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aH1gfSl9b25XaW5kb3dSZXNpemVCaW5kKCl7dGhpcy51cGRhdGVHbGFyZVNpemUoKX1zZXRUcmFuc2l0aW9uKCl7Y2xlYXJUaW1lb3V0KHRoaXMudHJhbnNpdGlvblRpbWVvdXQpLHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uPXRoaXMuc2V0dGluZ3Muc3BlZWQrXCJtcyBcIit0aGlzLnNldHRpbmdzLmVhc2luZyx0aGlzLmdsYXJlJiYodGhpcy5nbGFyZUVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbj1gb3BhY2l0eSAke3RoaXMuc2V0dGluZ3Muc3BlZWR9bXMgJHt0aGlzLnNldHRpbmdzLmVhc2luZ31gKSx0aGlzLnRyYW5zaXRpb25UaW1lb3V0PXNldFRpbWVvdXQoKCk9Pnt0aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbj1cIlwiO3RoaXMuZ2xhcmUmJih0aGlzLmdsYXJlRWxlbWVudC5zdHlsZS50cmFuc2l0aW9uPVwiXCIpfSx0aGlzLnNldHRpbmdzLnNwZWVkKX1leHRlbmRTZXR0aW5ncyh0KXtsZXQgZT17cmV2ZXJzZTohMSxtYXg6MzUscGVyc3BlY3RpdmU6MWUzLGVhc2luZzpcImN1YmljLWJlemllciguMDMsLjk4LC41MiwuOTkpXCIsc2NhbGU6XCIxXCIsc3BlZWQ6XCIzMDBcIix0cmFuc2l0aW9uOiEwLGF4aXM6bnVsbCxnbGFyZTohMSxcIm1heC1nbGFyZVwiOjEsXCJnbGFyZS1wcmVyZW5kZXJcIjohMSxyZXNldDohMH0saT17fTtmb3IodmFyIHMgaW4gZSlpZihzIGluIHQpaVtzXT10W3NdO2Vsc2UgaWYodGhpcy5lbGVtZW50Lmhhc0F0dHJpYnV0ZShcImRhdGEtdGlsdC1cIitzKSl7bGV0IHQ9dGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGlsdC1cIitzKTt0cnl7aVtzXT1KU09OLnBhcnNlKHQpfWNhdGNoKGUpe2lbc109dH19ZWxzZSBpW3NdPWVbc107cmV0dXJuIGl9c3RhdGljIGluaXQoZSxpKXtlIGluc3RhbmNlb2YgTm9kZSYmKGU9W2VdKSxlIGluc3RhbmNlb2YgTm9kZUxpc3QmJihlPVtdLnNsaWNlLmNhbGwoZSkpLGUgaW5zdGFuY2VvZiBBcnJheSYmZS5mb3JFYWNoKGU9PntcInZhbmlsbGFUaWx0XCJpbiBlfHwoZS52YW5pbGxhVGlsdD1uZXcgdChlLGkpKX0pfX1yZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQmJih3aW5kb3cuVmFuaWxsYVRpbHQ9dCx0LmluaXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXRpbHRdXCIpKSksdH0oKTsiXX0=
