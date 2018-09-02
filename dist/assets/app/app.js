//----------Index Scroll Effects----------//
let works = document.querySelector('.works').getBoundingClientRect();
let worksTop = works.top;
let logoInner = document.querySelector('.logo svg .c');

if(document.querySelector('.hero')){
    let landingTop = document.querySelector('.hero').getBoundingClientRect()
    let landingTopWidth = landingTop.width
    
    window.addEventListener("scroll", () => {
        if(!document.querySelector('.case__html .main-wrapper')){
            let cardItem = Array.from(document.querySelectorAll('.cardimg__item'))
            let body = document.querySelector('body')
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
    
    
    // cardImg.style.animation = "slideLeft 1.5s cubic-bezier(0.69, 0.02, 0.29, 1.16) forwards 1";
    // worksArticle.style.animation = "slideRight 1.5s cubic-bezier(0.69, 0.02, 0.29, 1.16) forwards 1";
    
    cardImg.style.opacity = "0"
    worksArticle.style.opacity = "0"

    caseBg.style.opacity = "1"
    caseBg.style.visibility = "visible"

    
    setTimeout(() => {
        menu.style.display = "none"
        caseHtml.style.opacity = "1"
        caseHtml.style.visibility = "visible"
        index.style.visibility = "hidden"

        logoInner.style.fill = "var(--cta)"

        window.scrollTo(0, 0);

        window.addEventListener('scroll', () => {
            if(document.querySelector('.case__html .main-wrapper')){
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
                // if (mockupOffset < -430){
                //     for (let st0 in userFlow){
                //         userFlow[st0].classList.add('animate')
                //     }
                // }
                if (bottomOffset < 400){
                    for (let img in bottomMockImg){
                        bottomMockImg[img].classList.add('animate')
                    }
                }
            }
        })

        const mobileNav = document.querySelector('.mobile-nav');
        const caseClose = document.querySelector('.case__close');
    
        caseClose.addEventListener('click', closeCase);
        mobileNav.addEventListener('click', closeCase);


        function closeCase() {
            caseHtml.style.opacity = "0"
            caseHtml.style.visibility = "hidden"
            index.style.visibility = "visible"
            menu.style.display = "block"
    
            setTimeout(() => {
                window.scrollTo(0, worksTop);
                // cardImg.style.animation = "slideLeftBack 1.5s cubic-bezier(0.69, 0.02, 0.29, 1.16) forwards 1";
                // worksArticle.style.animation = "slideRightBack 1.5s cubic-bezier(0.69, 0.02, 0.29, 1.16) forwards 1";
                    
                cardImg.style.opacity = "1"
                worksArticle.style.opacity = "1"
                
                caseBg.style.opacity = "0"
                caseBg.style.visibility = "hidden"
            }, 100);
            caseHtml.innerHTML = ' '
        }

    }, 1500);
}

var VanillaTilt=function(){"use strict";class t{constructor(t,e={}){if(!(t instanceof Node))throw"Can't initialize VanillaTilt because "+t+" is not a Node.";this.width=null,this.height=null,this.left=null,this.top=null,this.transitionTimeout=null,this.updateCall=null,this.updateBind=this.update.bind(this),this.resetBind=this.reset.bind(this),this.element=t,this.settings=this.extendSettings(e),this.reverse=this.settings.reverse?-1:1,this.glare=this.isSettingTrue(this.settings.glare),this.glarePrerender=this.isSettingTrue(this.settings["glare-prerender"]),this.glare&&this.prepareGlare(),this.addEventListeners()}isSettingTrue(t){return""===t||!0===t||1===t}addEventListeners(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.onWindowResizeBind=this.onWindowResizeBind.bind(this),this.element.addEventListener("mouseenter",this.onMouseEnterBind),this.element.addEventListener("mousemove",this.onMouseMoveBind),this.element.addEventListener("mouseleave",this.onMouseLeaveBind),this.glare&&window.addEventListener("resize",this.onWindowResizeBind)}removeEventListeners(){this.element.removeEventListener("mouseenter",this.onMouseEnterBind),this.element.removeEventListener("mousemove",this.onMouseMoveBind),this.element.removeEventListener("mouseleave",this.onMouseLeaveBind),this.glare&&window.removeEventListener("resize",this.onWindowResizeBind)}destroy(){clearTimeout(this.transitionTimeout),null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.reset(),this.removeEventListeners(),this.element.vanillaTilt=null,delete this.element.vanillaTilt,this.element=null}onMouseEnter(t){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()}onMouseMove(t){null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event=t,this.updateCall=requestAnimationFrame(this.updateBind)}onMouseLeave(t){this.setTransition(),this.settings.reset&&requestAnimationFrame(this.resetBind)}reset(){this.event={pageX:this.left+this.width/2,pageY:this.top+this.height/2},this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",this.glare&&(this.glareElement.style.transform="rotate(180deg) translate(-50%, -50%)",this.glareElement.style.opacity="0")}getValues(){let t=(this.event.clientX-this.left)/this.width,e=(this.event.clientY-this.top)/this.height;return t=Math.min(Math.max(t,0),1),e=Math.min(Math.max(e,0),1),{tiltX:(this.reverse*(this.settings.max/2-t*this.settings.max)).toFixed(2),tiltY:(this.reverse*(e*this.settings.max-this.settings.max/2)).toFixed(2),percentageX:100*t,percentageY:100*e,angle:Math.atan2(this.event.clientX-(this.left+this.width/2),-(this.event.clientY-(this.top+this.height/2)))*(180/Math.PI)}}updateElementPosition(){let t=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=t.left,this.top=t.top}update(){let t=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.axis?0:t.tiltY)+"deg) rotateY("+("y"===this.settings.axis?0:t.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.glare&&(this.glareElement.style.transform=`rotate(${t.angle}deg) translate(-50%, -50%)`,this.glareElement.style.opacity=`${t.percentageY*this.settings["max-glare"]/100}`),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:t})),this.updateCall=null}prepareGlare(){if(!this.glarePrerender){const t=document.createElement("div");t.classList.add("js-tilt-glare");const e=document.createElement("div");e.classList.add("js-tilt-glare-inner"),t.appendChild(e),this.element.appendChild(t)}this.glareElementWrapper=this.element.querySelector(".js-tilt-glare"),this.glareElement=this.element.querySelector(".js-tilt-glare-inner"),this.glarePrerender||(Object.assign(this.glareElementWrapper.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden"}),Object.assign(this.glareElement.style,{position:"absolute",top:"50%",left:"50%","pointer-events":"none","background-image":`linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)`,width:`${2*this.element.offsetWidth}px`,height:`${2*this.element.offsetWidth}px`,transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"}))}updateGlareSize(){Object.assign(this.glareElement.style,{width:`${2*this.element.offsetWidth}`,height:`${2*this.element.offsetWidth}`})}onWindowResizeBind(){this.updateGlareSize()}setTransition(){clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.glare&&(this.glareElement.style.transition=`opacity ${this.settings.speed}ms ${this.settings.easing}`),this.transitionTimeout=setTimeout(()=>{this.element.style.transition="";this.glare&&(this.glareElement.style.transition="")},this.settings.speed)}extendSettings(t){let e={reverse:!1,max:35,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:"1",speed:"300",transition:!0,axis:null,glare:!1,"max-glare":1,"glare-prerender":!1,reset:!0},i={};for(var s in e)if(s in t)i[s]=t[s];else if(this.element.hasAttribute("data-tilt-"+s)){let t=this.element.getAttribute("data-tilt-"+s);try{i[s]=JSON.parse(t)}catch(e){i[s]=t}}else i[s]=e[s];return i}static init(e,i){e instanceof Node&&(e=[e]),e instanceof NodeList&&(e=[].slice.call(e)),e instanceof Array&&e.forEach(e=>{"vanillaTilt"in e||(e.vanillaTilt=new t(e,i))})}}return"undefined"!=typeof document&&(window.VanillaTilt=t,t.init(document.querySelectorAll("[data-tilt]"))),t}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInZlbmRvcnMvdmFuaWxsYS10aWx0Lm1pbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZPQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS1JbmRleCBTY3JvbGwgRWZmZWN0cy0tLS0tLS0tLS0vL1xyXG5sZXQgd29ya3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29ya3MnKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxubGV0IHdvcmtzVG9wID0gd29ya3MudG9wO1xyXG5sZXQgbG9nb0lubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28gc3ZnIC5jJyk7XHJcblxyXG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVybycpKXtcclxuICAgIGxldCBsYW5kaW5nVG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8nKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgbGV0IGxhbmRpbmdUb3BXaWR0aCA9IGxhbmRpbmdUb3Aud2lkdGhcclxuICAgIFxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlmKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FzZV9faHRtbCAubWFpbi13cmFwcGVyJykpe1xyXG4gICAgICAgICAgICBsZXQgY2FyZEl0ZW0gPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkaW1nX19pdGVtJykpXHJcbiAgICAgICAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXHJcbiAgICAgICAgICAgIGxldCBsb2dvT3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nbyBzdmcgLmQnKVxyXG4gICAgICAgICAgICBsZXQgbGlua3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYgdWwgbGkgYScpKVxyXG5cclxuICAgICAgICAgICAgbGV0IHdvcmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmtzJykuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgICAgICAgICAgbGV0IHdvcmtzVG9wID0gd29ya3MudG9wXHJcblxyXG4gICAgICAgICAgICBsZXQgY29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0JykuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgICAgICAgICAgbGV0IGNvbnRhY3RUb3AgPSBjb250YWN0LnRvcFxyXG5cclxuICAgICAgICAgICAgaWYod29ya3NUb3AgPCA0MDApe1xyXG4gICAgICAgICAgICAgICAgY2FyZEl0ZW0uZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnY2FyZGltZy0tcmV2ZWFsJylcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYod29ya3NUb3AgPCAzMDApe1xyXG4gICAgICAgICAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLWJvb2tvcHVzKVwiXHJcbiAgICAgICAgICAgICAgICBpZiAobGFuZGluZ1RvcFdpZHRoID4gOTAwKXtcclxuICAgICAgICAgICAgICAgICAgICBsb2dvSW5uZXIuc3R5bGUuZmlsbCA9IFwidmFyKC0tbGlnaHQpXCJcclxuICAgICAgICAgICAgICAgICAgICBsb2dvT3V0ZXIuc3R5bGUuc3Ryb2tlID0gXCJ2YXIoLS1kYXJrKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rLnN0eWxlLmNvbG9yID0gXCJ2YXIoLS1kYXJrKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2V7IC8qIERlZmF1bHQgVmFsdWVzICovXHJcbiAgICAgICAgICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tbGlnaHQpXCJcclxuICAgICAgICAgICAgICAgIGlmIChsYW5kaW5nVG9wV2lkdGggPiA5MDApe1xyXG4gICAgICAgICAgICAgICAgICAgIGxvZ29Jbm5lci5zdHlsZS5maWxsID0gXCJ2YXIoLS1jdGEpXCJcclxuICAgICAgICAgICAgICAgICAgICBsb2dvT3V0ZXIuc3R5bGUuc3Ryb2tlID0gXCJ2YXIoLS1kYXJrKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rLnN0eWxlLmNvbG9yID0gXCJ2YXIoLS1kYXJrKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihjb250YWN0VG9wIDwgMjAwKXtcclxuICAgICAgICAgICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1kYXJrKVwiXHJcbiAgICAgICAgICAgICAgICBpZiAobGFuZGluZ1RvcFdpZHRoID4gOTAwKXtcclxuICAgICAgICAgICAgICAgICAgICBsb2dvSW5uZXIuc3R5bGUuZmlsbCA9IFwidmFyKC0tY3RhKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbG9nb091dGVyLnN0eWxlLnN0cm9rZSA9IFwidmFyKC0tbGlnaHQpXCJcclxuICAgICAgICAgICAgICAgICAgICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuc3R5bGUuY29sb3IgPSBcInZhcigtLWxpZ2h0KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmxldCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZS1uYXYtLW1lbnUnKVxyXG4gICAgXHJcbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBsZXQgbG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtbmF2IC5sb2dvIC5jJyk7XHJcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgIGxldCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtbmF2X19saW5rcycpO1xyXG4gICAgXHJcbiAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG5cclxuICAgIGlmIChtZW51LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykgPT09IHRydWUpe1xyXG4gICAgICAgIGxvZ28uc3R5bGUuZmlsbCA9IFwidmFyKC0tbGlnaHQpXCI7XHJcbiAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvd1kgPSBcImhpZGRlblwiO1xyXG4gICAgICAgIGxpbmtzLnN0eWxlLm9wYWNpdHkgPSBcIjFcIlxyXG4gICAgICAgIGxpbmtzLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMSlcIlxyXG4gICAgfSBlbHNle1xyXG4gICAgICAgIGNsb3NlVGFiKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjbG9zZVRhYigpe1xyXG4gICAgICAgIGxvZ28uc3R5bGUuZmlsbCA9IFwidmFyKC0tY3RhKVwiXHJcbiAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvd1kgPSBcInZpc2libGVcIjtcclxuICAgICAgICBsaW5rcy5zdHlsZS5vcGFjaXR5ID0gXCIwXCJcclxuICAgICAgICBsaW5rcy5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEsIDApXCJcclxuICAgIH1cclxuICAgIGxpbmtzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChtZW51LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpe1xyXG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBjbG9zZVRhYigpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pXHJcblxyXG5sZXQgYWJvdXRUcmlEZXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0LS1kZXNrdG9wJylcclxubGV0IGFib3V0VHJpTW9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0LS1tb2JpbGUnKVxyXG4gICAgXHJcbmFib3V0VHJpRGVzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5BYm91dCk7IFxyXG5hYm91dFRyaU1vYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIG9wZW5BYm91dCgpO1xyXG4gICAgYm9keU92ZXJmbG93KCk7XHJcbn0pOyBcclxuXHJcbmZ1bmN0aW9uIG9wZW5BYm91dCgpIHtcclxuICAgIGxldCBsb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28gc3ZnIC5jJyk7XHJcbiAgICBsZXQgYWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQnKTtcclxuICAgIGxldCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dF9fY2xvc2UnKTtcclxuICAgIGFib3V0LmNsYXNzTGlzdC5hZGQoJ2Fib3V0LS1hY3RpdmUnKTtcclxuXHJcbiAgICBpZiAoYWJvdXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhYm91dC0tYWN0aXZlJykgPT09IHRydWUpe1xyXG4gICAgICAgIGFib3V0VHJpRGVzay5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQnKVxyXG4gICAgICAgIGxvZ28uc3R5bGUuZmlsbCA9IFwidmFyKC0tbGlnaHQpXCI7XHJcbiAgICB9IGVsc2V7XHJcbiAgICAgICAgbG9nby5zdHlsZS5maWxsID0gXCJ2YXIoLS1jdGEpXCJcclxuICAgICAgICBhYm91dFRyaURlc2suY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0JylcclxuICAgIH1cclxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgYWJvdXQuY2xhc3NMaXN0LnJlbW92ZSgnYWJvdXQtLWFjdGl2ZScpO1xyXG4gICAgICAgIGxvZ28uc3R5bGUuZmlsbCA9IFwidmFyKC0tY3RhKVwiXHJcbiAgICAgICAgYWJvdXRUcmlEZXNrLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpXHJcbiAgICB9KVxyXG59XHJcbmZ1bmN0aW9uIGJvZHlPdmVyZmxvdygpe1xyXG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICBsZXQgYWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQnKTtcclxuICAgIGxldCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dF9fY2xvc2UnKTtcclxuXHJcbiAgICBpZiAoYWJvdXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhYm91dC0tYWN0aXZlJykgPT09IHRydWUpe1xyXG4gICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3dYID0gXCJoaWRkZW5cIlxyXG4gICAgfSBlbHNle1xyXG4gICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3dYID0gXCJ2aXNpYmxlXCJcclxuICAgIH1cclxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvd1ggPSBcInZpc2libGVcIlxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgYm9va29wdXNXb3JrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rb3B1cycpO1xyXG5cclxuYm9va29wdXNXb3Jrcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZldGNoQm9va29wdXNTdHVkeSk7XHJcblxyXG5mdW5jdGlvbiBmZXRjaEJvb2tvcHVzU3R1ZHkoKXtcclxuICAgIGNvbnN0IGNhcmRJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZGltZy0tYm9va29wdXMnKTtcclxuICAgIGNvbnN0IHdvcmtzQXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b3Jrc19fYXJ0aWNsZScpO1xyXG5cclxuICAgIGNvbnN0IGNhc2VIdG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhc2VfX2h0bWwnKTtcclxuICAgIGNvbnN0IGNhc2VCZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXNlX19iZycpO1xyXG4gICAgXHJcbiAgICBjb25zdCBpbmRleCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmRleCcpO1xyXG5cclxuICAgIGZldGNoKCdib29rb3B1cy5odG1sJylcclxuICAgIC50aGVuKChyZXMpID0+IHJlcy50ZXh0KCkpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIGNhc2VIdG1sLmlubmVySFRNTCA9IGRhdGFcclxuICAgIH0pXHJcbiAgICBcclxuICAgIFxyXG4gICAgLy8gY2FyZEltZy5zdHlsZS5hbmltYXRpb24gPSBcInNsaWRlTGVmdCAxLjVzIGN1YmljLWJlemllcigwLjY5LCAwLjAyLCAwLjI5LCAxLjE2KSBmb3J3YXJkcyAxXCI7XHJcbiAgICAvLyB3b3Jrc0FydGljbGUuc3R5bGUuYW5pbWF0aW9uID0gXCJzbGlkZVJpZ2h0IDEuNXMgY3ViaWMtYmV6aWVyKDAuNjksIDAuMDIsIDAuMjksIDEuMTYpIGZvcndhcmRzIDFcIjtcclxuICAgIFxyXG4gICAgY2FyZEltZy5zdHlsZS5vcGFjaXR5ID0gXCIwXCJcclxuICAgIHdvcmtzQXJ0aWNsZS5zdHlsZS5vcGFjaXR5ID0gXCIwXCJcclxuXHJcbiAgICBjYXNlQmcuc3R5bGUub3BhY2l0eSA9IFwiMVwiXHJcbiAgICBjYXNlQmcuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiXHJcblxyXG4gICAgXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gICAgICAgIGNhc2VIdG1sLnN0eWxlLm9wYWNpdHkgPSBcIjFcIlxyXG4gICAgICAgIGNhc2VIdG1sLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIlxyXG4gICAgICAgIGluZGV4LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiXHJcblxyXG4gICAgICAgIGxvZ29Jbm5lci5zdHlsZS5maWxsID0gXCJ2YXIoLS1jdGEpXCJcclxuXHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FzZV9faHRtbCAubWFpbi13cmFwcGVyJykpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbW9ja3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhc2VfX21vY2t1cCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbW9ja3VwSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhc2VfX21vY2t1cCBpbWcnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJvdHRvbU1vY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FzZV9fYm90dG9tJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBib3R0b21Nb2NrSW1nID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FzZV9fYm90dG9tIGltZycpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbW9ja3VwT2Zmc2V0ID0gbW9ja3VwLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcFxyXG4gICAgICAgICAgICAgICAgbGV0IGJvdHRvbU9mZnNldCA9IGJvdHRvbU1vY2suZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlckZsb3cgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyN1c2VyZmxvdyAuc3QwJykpXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1vY2t1cE9mZnNldCA8IDQ1MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9ja3VwSW1nLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gaWYgKG1vY2t1cE9mZnNldCA8IC00MzApe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGZvciAobGV0IHN0MCBpbiB1c2VyRmxvdyl7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHVzZXJGbG93W3N0MF0uY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZScpXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgaWYgKGJvdHRvbU9mZnNldCA8IDQwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW1nIGluIGJvdHRvbU1vY2tJbWcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b21Nb2NrSW1nW2ltZ10uY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QgbW9iaWxlTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZS1uYXYnKTtcclxuICAgICAgICBjb25zdCBjYXNlQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FzZV9fY2xvc2UnKTtcclxuICAgIFxyXG4gICAgICAgIGNhc2VDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlQ2FzZSk7XHJcbiAgICAgICAgbW9iaWxlTmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VDYXNlKTtcclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlQ2FzZSgpIHtcclxuICAgICAgICAgICAgY2FzZUh0bWwuc3R5bGUub3BhY2l0eSA9IFwiMFwiXHJcbiAgICAgICAgICAgIGNhc2VIdG1sLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiXHJcbiAgICAgICAgICAgIGluZGV4LnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIlxyXG4gICAgICAgICAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICAgIFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCB3b3Jrc1RvcCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjYXJkSW1nLnN0eWxlLmFuaW1hdGlvbiA9IFwic2xpZGVMZWZ0QmFjayAxLjVzIGN1YmljLWJlemllcigwLjY5LCAwLjAyLCAwLjI5LCAxLjE2KSBmb3J3YXJkcyAxXCI7XHJcbiAgICAgICAgICAgICAgICAvLyB3b3Jrc0FydGljbGUuc3R5bGUuYW5pbWF0aW9uID0gXCJzbGlkZVJpZ2h0QmFjayAxLjVzIGN1YmljLWJlemllcigwLjY5LCAwLjAyLCAwLjI5LCAxLjE2KSBmb3J3YXJkcyAxXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjYXJkSW1nLnN0eWxlLm9wYWNpdHkgPSBcIjFcIlxyXG4gICAgICAgICAgICAgICAgd29ya3NBcnRpY2xlLnN0eWxlLm9wYWNpdHkgPSBcIjFcIlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjYXNlQmcuc3R5bGUub3BhY2l0eSA9IFwiMFwiXHJcbiAgICAgICAgICAgICAgICBjYXNlQmcuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCJcclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgY2FzZUh0bWwuaW5uZXJIVE1MID0gJyAnXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sIDE1MDApO1xyXG59XHJcbiIsInZhciBWYW5pbGxhVGlsdD1mdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2NsYXNzIHR7Y29uc3RydWN0b3IodCxlPXt9KXtpZighKHQgaW5zdGFuY2VvZiBOb2RlKSl0aHJvd1wiQ2FuJ3QgaW5pdGlhbGl6ZSBWYW5pbGxhVGlsdCBiZWNhdXNlIFwiK3QrXCIgaXMgbm90IGEgTm9kZS5cIjt0aGlzLndpZHRoPW51bGwsdGhpcy5oZWlnaHQ9bnVsbCx0aGlzLmxlZnQ9bnVsbCx0aGlzLnRvcD1udWxsLHRoaXMudHJhbnNpdGlvblRpbWVvdXQ9bnVsbCx0aGlzLnVwZGF0ZUNhbGw9bnVsbCx0aGlzLnVwZGF0ZUJpbmQ9dGhpcy51cGRhdGUuYmluZCh0aGlzKSx0aGlzLnJlc2V0QmluZD10aGlzLnJlc2V0LmJpbmQodGhpcyksdGhpcy5lbGVtZW50PXQsdGhpcy5zZXR0aW5ncz10aGlzLmV4dGVuZFNldHRpbmdzKGUpLHRoaXMucmV2ZXJzZT10aGlzLnNldHRpbmdzLnJldmVyc2U/LTE6MSx0aGlzLmdsYXJlPXRoaXMuaXNTZXR0aW5nVHJ1ZSh0aGlzLnNldHRpbmdzLmdsYXJlKSx0aGlzLmdsYXJlUHJlcmVuZGVyPXRoaXMuaXNTZXR0aW5nVHJ1ZSh0aGlzLnNldHRpbmdzW1wiZ2xhcmUtcHJlcmVuZGVyXCJdKSx0aGlzLmdsYXJlJiZ0aGlzLnByZXBhcmVHbGFyZSgpLHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKX1pc1NldHRpbmdUcnVlKHQpe3JldHVyblwiXCI9PT10fHwhMD09PXR8fDE9PT10fWFkZEV2ZW50TGlzdGVuZXJzKCl7dGhpcy5vbk1vdXNlRW50ZXJCaW5kPXRoaXMub25Nb3VzZUVudGVyLmJpbmQodGhpcyksdGhpcy5vbk1vdXNlTW92ZUJpbmQ9dGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpLHRoaXMub25Nb3VzZUxlYXZlQmluZD10aGlzLm9uTW91c2VMZWF2ZS5iaW5kKHRoaXMpLHRoaXMub25XaW5kb3dSZXNpemVCaW5kPXRoaXMub25XaW5kb3dSZXNpemVCaW5kLmJpbmQodGhpcyksdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsdGhpcy5vbk1vdXNlRW50ZXJCaW5kKSx0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMub25Nb3VzZU1vdmVCaW5kKSx0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIix0aGlzLm9uTW91c2VMZWF2ZUJpbmQpLHRoaXMuZ2xhcmUmJndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5vbldpbmRvd1Jlc2l6ZUJpbmQpfXJlbW92ZUV2ZW50TGlzdGVuZXJzKCl7dGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsdGhpcy5vbk1vdXNlRW50ZXJCaW5kKSx0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMub25Nb3VzZU1vdmVCaW5kKSx0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIix0aGlzLm9uTW91c2VMZWF2ZUJpbmQpLHRoaXMuZ2xhcmUmJndpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5vbldpbmRvd1Jlc2l6ZUJpbmQpfWRlc3Ryb3koKXtjbGVhclRpbWVvdXQodGhpcy50cmFuc2l0aW9uVGltZW91dCksbnVsbCE9PXRoaXMudXBkYXRlQ2FsbCYmY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGVDYWxsKSx0aGlzLnJlc2V0KCksdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpLHRoaXMuZWxlbWVudC52YW5pbGxhVGlsdD1udWxsLGRlbGV0ZSB0aGlzLmVsZW1lbnQudmFuaWxsYVRpbHQsdGhpcy5lbGVtZW50PW51bGx9b25Nb3VzZUVudGVyKHQpe3RoaXMudXBkYXRlRWxlbWVudFBvc2l0aW9uKCksdGhpcy5lbGVtZW50LnN0eWxlLndpbGxDaGFuZ2U9XCJ0cmFuc2Zvcm1cIix0aGlzLnNldFRyYW5zaXRpb24oKX1vbk1vdXNlTW92ZSh0KXtudWxsIT09dGhpcy51cGRhdGVDYWxsJiZjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZUNhbGwpLHRoaXMuZXZlbnQ9dCx0aGlzLnVwZGF0ZUNhbGw9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlQmluZCl9b25Nb3VzZUxlYXZlKHQpe3RoaXMuc2V0VHJhbnNpdGlvbigpLHRoaXMuc2V0dGluZ3MucmVzZXQmJnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJlc2V0QmluZCl9cmVzZXQoKXt0aGlzLmV2ZW50PXtwYWdlWDp0aGlzLmxlZnQrdGhpcy53aWR0aC8yLHBhZ2VZOnRoaXMudG9wK3RoaXMuaGVpZ2h0LzJ9LHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm09XCJwZXJzcGVjdGl2ZShcIit0aGlzLnNldHRpbmdzLnBlcnNwZWN0aXZlK1wicHgpIHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKSBzY2FsZTNkKDEsIDEsIDEpXCIsdGhpcy5nbGFyZSYmKHRoaXMuZ2xhcmVFbGVtZW50LnN0eWxlLnRyYW5zZm9ybT1cInJvdGF0ZSgxODBkZWcpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiLHRoaXMuZ2xhcmVFbGVtZW50LnN0eWxlLm9wYWNpdHk9XCIwXCIpfWdldFZhbHVlcygpe2xldCB0PSh0aGlzLmV2ZW50LmNsaWVudFgtdGhpcy5sZWZ0KS90aGlzLndpZHRoLGU9KHRoaXMuZXZlbnQuY2xpZW50WS10aGlzLnRvcCkvdGhpcy5oZWlnaHQ7cmV0dXJuIHQ9TWF0aC5taW4oTWF0aC5tYXgodCwwKSwxKSxlPU1hdGgubWluKE1hdGgubWF4KGUsMCksMSkse3RpbHRYOih0aGlzLnJldmVyc2UqKHRoaXMuc2V0dGluZ3MubWF4LzItdCp0aGlzLnNldHRpbmdzLm1heCkpLnRvRml4ZWQoMiksdGlsdFk6KHRoaXMucmV2ZXJzZSooZSp0aGlzLnNldHRpbmdzLm1heC10aGlzLnNldHRpbmdzLm1heC8yKSkudG9GaXhlZCgyKSxwZXJjZW50YWdlWDoxMDAqdCxwZXJjZW50YWdlWToxMDAqZSxhbmdsZTpNYXRoLmF0YW4yKHRoaXMuZXZlbnQuY2xpZW50WC0odGhpcy5sZWZ0K3RoaXMud2lkdGgvMiksLSh0aGlzLmV2ZW50LmNsaWVudFktKHRoaXMudG9wK3RoaXMuaGVpZ2h0LzIpKSkqKDE4MC9NYXRoLlBJKX19dXBkYXRlRWxlbWVudFBvc2l0aW9uKCl7bGV0IHQ9dGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO3RoaXMud2lkdGg9dGhpcy5lbGVtZW50Lm9mZnNldFdpZHRoLHRoaXMuaGVpZ2h0PXRoaXMuZWxlbWVudC5vZmZzZXRIZWlnaHQsdGhpcy5sZWZ0PXQubGVmdCx0aGlzLnRvcD10LnRvcH11cGRhdGUoKXtsZXQgdD10aGlzLmdldFZhbHVlcygpO3RoaXMuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm09XCJwZXJzcGVjdGl2ZShcIit0aGlzLnNldHRpbmdzLnBlcnNwZWN0aXZlK1wicHgpIHJvdGF0ZVgoXCIrKFwieFwiPT09dGhpcy5zZXR0aW5ncy5heGlzPzA6dC50aWx0WSkrXCJkZWcpIHJvdGF0ZVkoXCIrKFwieVwiPT09dGhpcy5zZXR0aW5ncy5heGlzPzA6dC50aWx0WCkrXCJkZWcpIHNjYWxlM2QoXCIrdGhpcy5zZXR0aW5ncy5zY2FsZStcIiwgXCIrdGhpcy5zZXR0aW5ncy5zY2FsZStcIiwgXCIrdGhpcy5zZXR0aW5ncy5zY2FsZStcIilcIix0aGlzLmdsYXJlJiYodGhpcy5nbGFyZUVsZW1lbnQuc3R5bGUudHJhbnNmb3JtPWByb3RhdGUoJHt0LmFuZ2xlfWRlZykgdHJhbnNsYXRlKC01MCUsIC01MCUpYCx0aGlzLmdsYXJlRWxlbWVudC5zdHlsZS5vcGFjaXR5PWAke3QucGVyY2VudGFnZVkqdGhpcy5zZXR0aW5nc1tcIm1heC1nbGFyZVwiXS8xMDB9YCksdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwidGlsdENoYW5nZVwiLHtkZXRhaWw6dH0pKSx0aGlzLnVwZGF0ZUNhbGw9bnVsbH1wcmVwYXJlR2xhcmUoKXtpZighdGhpcy5nbGFyZVByZXJlbmRlcil7Y29uc3QgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3QuY2xhc3NMaXN0LmFkZChcImpzLXRpbHQtZ2xhcmVcIik7Y29uc3QgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2UuY2xhc3NMaXN0LmFkZChcImpzLXRpbHQtZ2xhcmUtaW5uZXJcIiksdC5hcHBlbmRDaGlsZChlKSx0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodCl9dGhpcy5nbGFyZUVsZW1lbnRXcmFwcGVyPXRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXRpbHQtZ2xhcmVcIiksdGhpcy5nbGFyZUVsZW1lbnQ9dGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtdGlsdC1nbGFyZS1pbm5lclwiKSx0aGlzLmdsYXJlUHJlcmVuZGVyfHwoT2JqZWN0LmFzc2lnbih0aGlzLmdsYXJlRWxlbWVudFdyYXBwZXIuc3R5bGUse3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix0b3A6XCIwXCIsbGVmdDpcIjBcIix3aWR0aDpcIjEwMCVcIixoZWlnaHQ6XCIxMDAlXCIsb3ZlcmZsb3c6XCJoaWRkZW5cIn0pLE9iamVjdC5hc3NpZ24odGhpcy5nbGFyZUVsZW1lbnQuc3R5bGUse3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix0b3A6XCI1MCVcIixsZWZ0OlwiNTAlXCIsXCJwb2ludGVyLWV2ZW50c1wiOlwibm9uZVwiLFwiYmFja2dyb3VuZC1pbWFnZVwiOmBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNTUsMjU1LDI1NSwwKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwxKSAxMDAlKWAsd2lkdGg6YCR7Mip0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGh9cHhgLGhlaWdodDpgJHsyKnRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aH1weGAsdHJhbnNmb3JtOlwicm90YXRlKDE4MGRlZykgdHJhbnNsYXRlKC01MCUsIC01MCUpXCIsXCJ0cmFuc2Zvcm0tb3JpZ2luXCI6XCIwJSAwJVwiLG9wYWNpdHk6XCIwXCJ9KSl9dXBkYXRlR2xhcmVTaXplKCl7T2JqZWN0LmFzc2lnbih0aGlzLmdsYXJlRWxlbWVudC5zdHlsZSx7d2lkdGg6YCR7Mip0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGh9YCxoZWlnaHQ6YCR7Mip0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGh9YH0pfW9uV2luZG93UmVzaXplQmluZCgpe3RoaXMudXBkYXRlR2xhcmVTaXplKCl9c2V0VHJhbnNpdGlvbigpe2NsZWFyVGltZW91dCh0aGlzLnRyYW5zaXRpb25UaW1lb3V0KSx0aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbj10aGlzLnNldHRpbmdzLnNwZWVkK1wibXMgXCIrdGhpcy5zZXR0aW5ncy5lYXNpbmcsdGhpcy5nbGFyZSYmKHRoaXMuZ2xhcmVFbGVtZW50LnN0eWxlLnRyYW5zaXRpb249YG9wYWNpdHkgJHt0aGlzLnNldHRpbmdzLnNwZWVkfW1zICR7dGhpcy5zZXR0aW5ncy5lYXNpbmd9YCksdGhpcy50cmFuc2l0aW9uVGltZW91dD1zZXRUaW1lb3V0KCgpPT57dGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zaXRpb249XCJcIjt0aGlzLmdsYXJlJiYodGhpcy5nbGFyZUVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbj1cIlwiKX0sdGhpcy5zZXR0aW5ncy5zcGVlZCl9ZXh0ZW5kU2V0dGluZ3ModCl7bGV0IGU9e3JldmVyc2U6ITEsbWF4OjM1LHBlcnNwZWN0aXZlOjFlMyxlYXNpbmc6XCJjdWJpYy1iZXppZXIoLjAzLC45OCwuNTIsLjk5KVwiLHNjYWxlOlwiMVwiLHNwZWVkOlwiMzAwXCIsdHJhbnNpdGlvbjohMCxheGlzOm51bGwsZ2xhcmU6ITEsXCJtYXgtZ2xhcmVcIjoxLFwiZ2xhcmUtcHJlcmVuZGVyXCI6ITEscmVzZXQ6ITB9LGk9e307Zm9yKHZhciBzIGluIGUpaWYocyBpbiB0KWlbc109dFtzXTtlbHNlIGlmKHRoaXMuZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJkYXRhLXRpbHQtXCIrcykpe2xldCB0PXRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRpbHQtXCIrcyk7dHJ5e2lbc109SlNPTi5wYXJzZSh0KX1jYXRjaChlKXtpW3NdPXR9fWVsc2UgaVtzXT1lW3NdO3JldHVybiBpfXN0YXRpYyBpbml0KGUsaSl7ZSBpbnN0YW5jZW9mIE5vZGUmJihlPVtlXSksZSBpbnN0YW5jZW9mIE5vZGVMaXN0JiYoZT1bXS5zbGljZS5jYWxsKGUpKSxlIGluc3RhbmNlb2YgQXJyYXkmJmUuZm9yRWFjaChlPT57XCJ2YW5pbGxhVGlsdFwiaW4gZXx8KGUudmFuaWxsYVRpbHQ9bmV3IHQoZSxpKSl9KX19cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50JiYod2luZG93LlZhbmlsbGFUaWx0PXQsdC5pbml0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS10aWx0XVwiKSkpLHR9KCk7Il19
