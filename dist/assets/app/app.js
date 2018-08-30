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
var VanillaTilt=function(){"use strict";class t{constructor(t,e={}){if(!(t instanceof Node))throw"Can't initialize VanillaTilt because "+t+" is not a Node.";this.width=null,this.height=null,this.left=null,this.top=null,this.transitionTimeout=null,this.updateCall=null,this.updateBind=this.update.bind(this),this.resetBind=this.reset.bind(this),this.element=t,this.settings=this.extendSettings(e),this.reverse=this.settings.reverse?-1:1,this.glare=this.isSettingTrue(this.settings.glare),this.glarePrerender=this.isSettingTrue(this.settings["glare-prerender"]),this.glare&&this.prepareGlare(),this.addEventListeners()}isSettingTrue(t){return""===t||!0===t||1===t}addEventListeners(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.onWindowResizeBind=this.onWindowResizeBind.bind(this),this.element.addEventListener("mouseenter",this.onMouseEnterBind),this.element.addEventListener("mousemove",this.onMouseMoveBind),this.element.addEventListener("mouseleave",this.onMouseLeaveBind),this.glare&&window.addEventListener("resize",this.onWindowResizeBind)}removeEventListeners(){this.element.removeEventListener("mouseenter",this.onMouseEnterBind),this.element.removeEventListener("mousemove",this.onMouseMoveBind),this.element.removeEventListener("mouseleave",this.onMouseLeaveBind),this.glare&&window.removeEventListener("resize",this.onWindowResizeBind)}destroy(){clearTimeout(this.transitionTimeout),null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.reset(),this.removeEventListeners(),this.element.vanillaTilt=null,delete this.element.vanillaTilt,this.element=null}onMouseEnter(t){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()}onMouseMove(t){null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event=t,this.updateCall=requestAnimationFrame(this.updateBind)}onMouseLeave(t){this.setTransition(),this.settings.reset&&requestAnimationFrame(this.resetBind)}reset(){this.event={pageX:this.left+this.width/2,pageY:this.top+this.height/2},this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",this.glare&&(this.glareElement.style.transform="rotate(180deg) translate(-50%, -50%)",this.glareElement.style.opacity="0")}getValues(){let t=(this.event.clientX-this.left)/this.width,e=(this.event.clientY-this.top)/this.height;return t=Math.min(Math.max(t,0),1),e=Math.min(Math.max(e,0),1),{tiltX:(this.reverse*(this.settings.max/2-t*this.settings.max)).toFixed(2),tiltY:(this.reverse*(e*this.settings.max-this.settings.max/2)).toFixed(2),percentageX:100*t,percentageY:100*e,angle:Math.atan2(this.event.clientX-(this.left+this.width/2),-(this.event.clientY-(this.top+this.height/2)))*(180/Math.PI)}}updateElementPosition(){let t=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=t.left,this.top=t.top}update(){let t=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.axis?0:t.tiltY)+"deg) rotateY("+("y"===this.settings.axis?0:t.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.glare&&(this.glareElement.style.transform=`rotate(${t.angle}deg) translate(-50%, -50%)`,this.glareElement.style.opacity=`${t.percentageY*this.settings["max-glare"]/100}`),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:t})),this.updateCall=null}prepareGlare(){if(!this.glarePrerender){const t=document.createElement("div");t.classList.add("js-tilt-glare");const e=document.createElement("div");e.classList.add("js-tilt-glare-inner"),t.appendChild(e),this.element.appendChild(t)}this.glareElementWrapper=this.element.querySelector(".js-tilt-glare"),this.glareElement=this.element.querySelector(".js-tilt-glare-inner"),this.glarePrerender||(Object.assign(this.glareElementWrapper.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden"}),Object.assign(this.glareElement.style,{position:"absolute",top:"50%",left:"50%","pointer-events":"none","background-image":`linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)`,width:`${2*this.element.offsetWidth}px`,height:`${2*this.element.offsetWidth}px`,transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"}))}updateGlareSize(){Object.assign(this.glareElement.style,{width:`${2*this.element.offsetWidth}`,height:`${2*this.element.offsetWidth}`})}onWindowResizeBind(){this.updateGlareSize()}setTransition(){clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.glare&&(this.glareElement.style.transition=`opacity ${this.settings.speed}ms ${this.settings.easing}`),this.transitionTimeout=setTimeout(()=>{this.element.style.transition="";this.glare&&(this.glareElement.style.transition="")},this.settings.speed)}extendSettings(t){let e={reverse:!1,max:35,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:"1",speed:"300",transition:!0,axis:null,glare:!1,"max-glare":1,"glare-prerender":!1,reset:!0},i={};for(var s in e)if(s in t)i[s]=t[s];else if(this.element.hasAttribute("data-tilt-"+s)){let t=this.element.getAttribute("data-tilt-"+s);try{i[s]=JSON.parse(t)}catch(e){i[s]=t}}else i[s]=e[s];return i}static init(e,i){e instanceof Node&&(e=[e]),e instanceof NodeList&&(e=[].slice.call(e)),e instanceof Array&&e.forEach(e=>{"vanillaTilt"in e||(e.vanillaTilt=new t(e,i))})}}return"undefined"!=typeof document&&(window.VanillaTilt=t,t.init(document.querySelectorAll("[data-tilt]"))),t}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInZlbmRvcnMvdmFuaWxsYS10aWx0Lm1pbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JLQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS1TY3JvbGwgRWZmZWN0cy0tLS0tLS0tLS0vL1xyXG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVybycpKXtcclxuICAgIGxldCBsYW5kaW5nVG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8nKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgbGV0IGxhbmRpbmdUb3BXaWR0aCA9IGxhbmRpbmdUb3Aud2lkdGhcclxuICAgIGxldCBsYW5kaW5nVG9wSGVpZ2h0ID0gbGFuZGluZ1RvcC5oZWlnaHRcclxuICAgIGxldCBsYW5kaW5nVG9wWCA9IGxhbmRpbmdUb3AudG9wXHJcblxyXG4gICAgbGV0IHdvcmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmtzJykuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgIGxldCB3b3Jrc1RvcCA9IHdvcmtzLnRvcFxyXG5cclxuICAgIGxldCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QnKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgbGV0IGNvbnRhY3RUb3AgPSBjb250YWN0LnRvcFxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICAgICAgICBsZXQgY2FyZEl0ZW0gPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkaW1nX19pdGVtJykpXHJcbiAgICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuICAgICAgICBsZXQgbG9nb0lubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28gc3ZnIC5jJylcclxuICAgICAgICBsZXQgbG9nb091dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28gc3ZnIC5kJylcclxuICAgICAgICBsZXQgbGlua3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYgdWwgbGkgYScpKVxyXG5cclxuICAgICAgICBsZXQgd29ya3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29ya3MnKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgICAgIGxldCB3b3Jrc1RvcCA9IHdvcmtzLnRvcFxyXG5cclxuICAgICAgICBsZXQgY29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0JykuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgICAgICBsZXQgY29udGFjdFRvcCA9IGNvbnRhY3QudG9wXHJcblxyXG4gICAgICAgIGlmKHdvcmtzVG9wIDwgNDAwKXtcclxuICAgICAgICAgICAgY2FyZEl0ZW0uZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdjYXJkaW1nLS1yZXZlYWwnKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih3b3Jrc1RvcCA8IDMwMCl7XHJcbiAgICAgICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1ib29rb3B1cylcIlxyXG4gICAgICAgICAgICBpZiAobGFuZGluZ1RvcFdpZHRoID4gOTAwKXtcclxuICAgICAgICAgICAgICAgIGxvZ29Jbm5lci5zdHlsZS5maWxsID0gXCJ2YXIoLS1saWdodClcIlxyXG4gICAgICAgICAgICAgICAgbG9nb091dGVyLnN0eWxlLnN0cm9rZSA9IFwidmFyKC0tZGFyaylcIlxyXG4gICAgICAgICAgICAgICAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmsuc3R5bGUuY29sb3IgPSBcInZhcigtLWRhcmspXCJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXsgLyogRGVmYXVsdCBWYWx1ZXMgKi9cclxuICAgICAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLWxpZ2h0KVwiXHJcbiAgICAgICAgICAgIGlmIChsYW5kaW5nVG9wV2lkdGggPiA5MDApe1xyXG4gICAgICAgICAgICAgICAgbG9nb0lubmVyLnN0eWxlLmZpbGwgPSBcInZhcigtLWN0YSlcIlxyXG4gICAgICAgICAgICAgICAgbG9nb091dGVyLnN0eWxlLnN0cm9rZSA9IFwidmFyKC0tZGFyaylcIlxyXG4gICAgICAgICAgICAgICAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmsuc3R5bGUuY29sb3IgPSBcInZhcigtLWRhcmspXCJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY29udGFjdFRvcCA8IDIwMCl7XHJcbiAgICAgICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1kYXJrKVwiXHJcbiAgICAgICAgICAgIGlmIChsYW5kaW5nVG9wV2lkdGggPiA5MDApe1xyXG4gICAgICAgICAgICAgICAgbG9nb0lubmVyLnN0eWxlLmZpbGwgPSBcInZhcigtLWN0YSlcIlxyXG4gICAgICAgICAgICAgICAgbG9nb091dGVyLnN0eWxlLnN0cm9rZSA9IFwidmFyKC0tbGlnaHQpXCJcclxuICAgICAgICAgICAgICAgIGxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rLnN0eWxlLmNvbG9yID0gXCJ2YXIoLS1saWdodClcIlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmxldCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZS1uYXYtLW1lbnUnKVxyXG4gICAgXHJcbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBsZXQgbG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtbmF2IC5sb2dvIC5jJyk7XHJcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgIGxldCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtbmF2X19saW5rcycpO1xyXG4gICAgXHJcbiAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG5cclxuICAgIGlmIChtZW51LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykgPT09IHRydWUpe1xyXG4gICAgICAgIGxvZ28uc3R5bGUuZmlsbCA9IFwidmFyKC0tbGlnaHQpXCI7XHJcbiAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvd1kgPSBcImhpZGRlblwiO1xyXG4gICAgICAgIGxpbmtzLnN0eWxlLm9wYWNpdHkgPSBcIjFcIlxyXG4gICAgICAgIGxpbmtzLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMSlcIlxyXG4gICAgfSBlbHNle1xyXG4gICAgICAgIGNsb3NlVGFiKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjbG9zZVRhYigpe1xyXG4gICAgICAgIGxvZ28uc3R5bGUuZmlsbCA9IFwidmFyKC0tY3RhKVwiXHJcbiAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvd1kgPSBcInZpc2libGVcIjtcclxuICAgICAgICBsaW5rcy5zdHlsZS5vcGFjaXR5ID0gXCIwXCJcclxuICAgICAgICBsaW5rcy5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEsIDApXCJcclxuICAgIH1cclxuICAgIGxpbmtzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChtZW51LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpe1xyXG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBjbG9zZVRhYigpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pXHJcblxyXG5sZXQgYWJvdXRUcmlEZXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0LS1kZXNrdG9wJylcclxubGV0IGFib3V0VHJpTW9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0LS1tb2JpbGUnKVxyXG4gICAgXHJcbmFib3V0VHJpRGVzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5BYm91dCk7IFxyXG5hYm91dFRyaU1vYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIG9wZW5BYm91dCgpO1xyXG4gICAgYm9keU92ZXJmbG93KCk7XHJcbn0pOyBcclxuXHJcbmZ1bmN0aW9uIG9wZW5BYm91dCgpIHtcclxuICAgIGxldCBsb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28gc3ZnIC5jJyk7XHJcbiAgICBsZXQgYWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQnKTtcclxuICAgIGxldCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dF9fY2xvc2UnKTtcclxuICAgIGFib3V0LmNsYXNzTGlzdC5hZGQoJ2Fib3V0LS1hY3RpdmUnKTtcclxuXHJcbiAgICBpZiAoYWJvdXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhYm91dC0tYWN0aXZlJykgPT09IHRydWUpe1xyXG4gICAgICAgIGFib3V0VHJpRGVzay5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQnKVxyXG4gICAgICAgIGxvZ28uc3R5bGUuZmlsbCA9IFwidmFyKC0tbGlnaHQpXCI7XHJcbiAgICB9IGVsc2V7XHJcbiAgICAgICAgbG9nby5zdHlsZS5maWxsID0gXCJ2YXIoLS1jdGEpXCJcclxuICAgICAgICBhYm91dFRyaURlc2suY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0JylcclxuICAgIH1cclxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgYWJvdXQuY2xhc3NMaXN0LnJlbW92ZSgnYWJvdXQtLWFjdGl2ZScpO1xyXG4gICAgICAgIGxvZ28uc3R5bGUuZmlsbCA9IFwidmFyKC0tY3RhKVwiXHJcbiAgICAgICAgYWJvdXRUcmlEZXNrLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpXHJcbiAgICB9KVxyXG59XHJcbmZ1bmN0aW9uIGJvZHlPdmVyZmxvdygpe1xyXG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICBsZXQgYWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQnKTtcclxuICAgIGxldCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dF9fY2xvc2UnKTtcclxuXHJcbiAgICBpZiAoYWJvdXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhYm91dC0tYWN0aXZlJykgPT09IHRydWUpe1xyXG4gICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3dYID0gXCJoaWRkZW5cIlxyXG4gICAgfSBlbHNle1xyXG4gICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3dYID0gXCJ2aXNpYmxlXCJcclxuICAgIH1cclxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvd1ggPSBcInZpc2libGVcIlxyXG4gICAgfSlcclxufVxyXG5cclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXNlX19tb2NrdXAnKSl7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgbW9ja3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhc2VfX21vY2t1cCcpO1xyXG4gICAgICAgIGNvbnN0IG1vY2t1cEltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXNlX19tb2NrdXAgaW1nJyk7XHJcbiAgICAgICAgY29uc3QgYm90dG9tTW9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXNlX19ib3R0b20nKTtcclxuICAgICAgICBjb25zdCBib3R0b21Nb2NrSW1nID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FzZV9fYm90dG9tIGltZycpKTtcclxuXHJcbiAgICAgICAgbGV0IG1vY2t1cE9mZnNldCA9IG1vY2t1cC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3BcclxuICAgICAgICBsZXQgYm90dG9tT2Zmc2V0ID0gYm90dG9tTW9jay5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3BcclxuXHJcbiAgICAgICAgY29uc3QgdXNlckZsb3cgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyN1c2VyZmxvdyAuc3QwJykpXHJcblxyXG4gICAgICAgIGlmIChtb2NrdXBPZmZzZXQgPCA0NTApe1xyXG4gICAgICAgICAgICBtb2NrdXBJbWcuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZScpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtb2NrdXBPZmZzZXQgPCAtNDMwKXtcclxuICAgICAgICAgICAgZm9yIChsZXQgc3QwIGluIHVzZXJGbG93KXtcclxuICAgICAgICAgICAgICAgIHVzZXJGbG93W3N0MF0uY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJvdHRvbU9mZnNldCA8IDQwMCl7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGltZyBpbiBib3R0b21Nb2NrSW1nKXtcclxuICAgICAgICAgICAgICAgIGJvdHRvbU1vY2tJbWdbaW1nXS5jbGFzc0xpc3QuYWRkKCdhbmltYXRlJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0iLCJ2YXIgVmFuaWxsYVRpbHQ9ZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtjbGFzcyB0e2NvbnN0cnVjdG9yKHQsZT17fSl7aWYoISh0IGluc3RhbmNlb2YgTm9kZSkpdGhyb3dcIkNhbid0IGluaXRpYWxpemUgVmFuaWxsYVRpbHQgYmVjYXVzZSBcIit0K1wiIGlzIG5vdCBhIE5vZGUuXCI7dGhpcy53aWR0aD1udWxsLHRoaXMuaGVpZ2h0PW51bGwsdGhpcy5sZWZ0PW51bGwsdGhpcy50b3A9bnVsbCx0aGlzLnRyYW5zaXRpb25UaW1lb3V0PW51bGwsdGhpcy51cGRhdGVDYWxsPW51bGwsdGhpcy51cGRhdGVCaW5kPXRoaXMudXBkYXRlLmJpbmQodGhpcyksdGhpcy5yZXNldEJpbmQ9dGhpcy5yZXNldC5iaW5kKHRoaXMpLHRoaXMuZWxlbWVudD10LHRoaXMuc2V0dGluZ3M9dGhpcy5leHRlbmRTZXR0aW5ncyhlKSx0aGlzLnJldmVyc2U9dGhpcy5zZXR0aW5ncy5yZXZlcnNlPy0xOjEsdGhpcy5nbGFyZT10aGlzLmlzU2V0dGluZ1RydWUodGhpcy5zZXR0aW5ncy5nbGFyZSksdGhpcy5nbGFyZVByZXJlbmRlcj10aGlzLmlzU2V0dGluZ1RydWUodGhpcy5zZXR0aW5nc1tcImdsYXJlLXByZXJlbmRlclwiXSksdGhpcy5nbGFyZSYmdGhpcy5wcmVwYXJlR2xhcmUoKSx0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCl9aXNTZXR0aW5nVHJ1ZSh0KXtyZXR1cm5cIlwiPT09dHx8ITA9PT10fHwxPT09dH1hZGRFdmVudExpc3RlbmVycygpe3RoaXMub25Nb3VzZUVudGVyQmluZD10aGlzLm9uTW91c2VFbnRlci5iaW5kKHRoaXMpLHRoaXMub25Nb3VzZU1vdmVCaW5kPXRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKSx0aGlzLm9uTW91c2VMZWF2ZUJpbmQ9dGhpcy5vbk1vdXNlTGVhdmUuYmluZCh0aGlzKSx0aGlzLm9uV2luZG93UmVzaXplQmluZD10aGlzLm9uV2luZG93UmVzaXplQmluZC5iaW5kKHRoaXMpLHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLHRoaXMub25Nb3VzZUVudGVyQmluZCksdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLm9uTW91c2VNb3ZlQmluZCksdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsdGhpcy5vbk1vdXNlTGVhdmVCaW5kKSx0aGlzLmdsYXJlJiZ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMub25XaW5kb3dSZXNpemVCaW5kKX1yZW1vdmVFdmVudExpc3RlbmVycygpe3RoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLHRoaXMub25Nb3VzZUVudGVyQmluZCksdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLm9uTW91c2VNb3ZlQmluZCksdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsdGhpcy5vbk1vdXNlTGVhdmVCaW5kKSx0aGlzLmdsYXJlJiZ3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMub25XaW5kb3dSZXNpemVCaW5kKX1kZXN0cm95KCl7Y2xlYXJUaW1lb3V0KHRoaXMudHJhbnNpdGlvblRpbWVvdXQpLG51bGwhPT10aGlzLnVwZGF0ZUNhbGwmJmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlQ2FsbCksdGhpcy5yZXNldCgpLHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSx0aGlzLmVsZW1lbnQudmFuaWxsYVRpbHQ9bnVsbCxkZWxldGUgdGhpcy5lbGVtZW50LnZhbmlsbGFUaWx0LHRoaXMuZWxlbWVudD1udWxsfW9uTW91c2VFbnRlcih0KXt0aGlzLnVwZGF0ZUVsZW1lbnRQb3NpdGlvbigpLHRoaXMuZWxlbWVudC5zdHlsZS53aWxsQ2hhbmdlPVwidHJhbnNmb3JtXCIsdGhpcy5zZXRUcmFuc2l0aW9uKCl9b25Nb3VzZU1vdmUodCl7bnVsbCE9PXRoaXMudXBkYXRlQ2FsbCYmY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGVDYWxsKSx0aGlzLmV2ZW50PXQsdGhpcy51cGRhdGVDYWxsPXJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZUJpbmQpfW9uTW91c2VMZWF2ZSh0KXt0aGlzLnNldFRyYW5zaXRpb24oKSx0aGlzLnNldHRpbmdzLnJlc2V0JiZyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZXNldEJpbmQpfXJlc2V0KCl7dGhpcy5ldmVudD17cGFnZVg6dGhpcy5sZWZ0K3RoaXMud2lkdGgvMixwYWdlWTp0aGlzLnRvcCt0aGlzLmhlaWdodC8yfSx0aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtPVwicGVyc3BlY3RpdmUoXCIrdGhpcy5zZXR0aW5ncy5wZXJzcGVjdGl2ZStcInB4KSByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgc2NhbGUzZCgxLCAxLCAxKVwiLHRoaXMuZ2xhcmUmJih0aGlzLmdsYXJlRWxlbWVudC5zdHlsZS50cmFuc2Zvcm09XCJyb3RhdGUoMTgwZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIix0aGlzLmdsYXJlRWxlbWVudC5zdHlsZS5vcGFjaXR5PVwiMFwiKX1nZXRWYWx1ZXMoKXtsZXQgdD0odGhpcy5ldmVudC5jbGllbnRYLXRoaXMubGVmdCkvdGhpcy53aWR0aCxlPSh0aGlzLmV2ZW50LmNsaWVudFktdGhpcy50b3ApL3RoaXMuaGVpZ2h0O3JldHVybiB0PU1hdGgubWluKE1hdGgubWF4KHQsMCksMSksZT1NYXRoLm1pbihNYXRoLm1heChlLDApLDEpLHt0aWx0WDoodGhpcy5yZXZlcnNlKih0aGlzLnNldHRpbmdzLm1heC8yLXQqdGhpcy5zZXR0aW5ncy5tYXgpKS50b0ZpeGVkKDIpLHRpbHRZOih0aGlzLnJldmVyc2UqKGUqdGhpcy5zZXR0aW5ncy5tYXgtdGhpcy5zZXR0aW5ncy5tYXgvMikpLnRvRml4ZWQoMikscGVyY2VudGFnZVg6MTAwKnQscGVyY2VudGFnZVk6MTAwKmUsYW5nbGU6TWF0aC5hdGFuMih0aGlzLmV2ZW50LmNsaWVudFgtKHRoaXMubGVmdCt0aGlzLndpZHRoLzIpLC0odGhpcy5ldmVudC5jbGllbnRZLSh0aGlzLnRvcCt0aGlzLmhlaWdodC8yKSkpKigxODAvTWF0aC5QSSl9fXVwZGF0ZUVsZW1lbnRQb3NpdGlvbigpe2xldCB0PXRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTt0aGlzLndpZHRoPXRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aCx0aGlzLmhlaWdodD10aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0LHRoaXMubGVmdD10LmxlZnQsdGhpcy50b3A9dC50b3B9dXBkYXRlKCl7bGV0IHQ9dGhpcy5nZXRWYWx1ZXMoKTt0aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtPVwicGVyc3BlY3RpdmUoXCIrdGhpcy5zZXR0aW5ncy5wZXJzcGVjdGl2ZStcInB4KSByb3RhdGVYKFwiKyhcInhcIj09PXRoaXMuc2V0dGluZ3MuYXhpcz8wOnQudGlsdFkpK1wiZGVnKSByb3RhdGVZKFwiKyhcInlcIj09PXRoaXMuc2V0dGluZ3MuYXhpcz8wOnQudGlsdFgpK1wiZGVnKSBzY2FsZTNkKFwiK3RoaXMuc2V0dGluZ3Muc2NhbGUrXCIsIFwiK3RoaXMuc2V0dGluZ3Muc2NhbGUrXCIsIFwiK3RoaXMuc2V0dGluZ3Muc2NhbGUrXCIpXCIsdGhpcy5nbGFyZSYmKHRoaXMuZ2xhcmVFbGVtZW50LnN0eWxlLnRyYW5zZm9ybT1gcm90YXRlKCR7dC5hbmdsZX1kZWcpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKWAsdGhpcy5nbGFyZUVsZW1lbnQuc3R5bGUub3BhY2l0eT1gJHt0LnBlcmNlbnRhZ2VZKnRoaXMuc2V0dGluZ3NbXCJtYXgtZ2xhcmVcIl0vMTAwfWApLHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInRpbHRDaGFuZ2VcIix7ZGV0YWlsOnR9KSksdGhpcy51cGRhdGVDYWxsPW51bGx9cHJlcGFyZUdsYXJlKCl7aWYoIXRoaXMuZ2xhcmVQcmVyZW5kZXIpe2NvbnN0IHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0LmNsYXNzTGlzdC5hZGQoXCJqcy10aWx0LWdsYXJlXCIpO2NvbnN0IGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLmNsYXNzTGlzdC5hZGQoXCJqcy10aWx0LWdsYXJlLWlubmVyXCIpLHQuYXBwZW5kQ2hpbGQoZSksdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHQpfXRoaXMuZ2xhcmVFbGVtZW50V3JhcHBlcj10aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy10aWx0LWdsYXJlXCIpLHRoaXMuZ2xhcmVFbGVtZW50PXRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXRpbHQtZ2xhcmUtaW5uZXJcIiksdGhpcy5nbGFyZVByZXJlbmRlcnx8KE9iamVjdC5hc3NpZ24odGhpcy5nbGFyZUVsZW1lbnRXcmFwcGVyLnN0eWxlLHtwb3NpdGlvbjpcImFic29sdXRlXCIsdG9wOlwiMFwiLGxlZnQ6XCIwXCIsd2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiMTAwJVwiLG92ZXJmbG93OlwiaGlkZGVuXCJ9KSxPYmplY3QuYXNzaWduKHRoaXMuZ2xhcmVFbGVtZW50LnN0eWxlLHtwb3NpdGlvbjpcImFic29sdXRlXCIsdG9wOlwiNTAlXCIsbGVmdDpcIjUwJVwiLFwicG9pbnRlci1ldmVudHNcIjpcIm5vbmVcIixcImJhY2tncm91bmQtaW1hZ2VcIjpgbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjU1LDI1NSwyNTUsMCkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMTAwJSlgLHdpZHRoOmAkezIqdGhpcy5lbGVtZW50Lm9mZnNldFdpZHRofXB4YCxoZWlnaHQ6YCR7Mip0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGh9cHhgLHRyYW5zZm9ybTpcInJvdGF0ZSgxODBkZWcpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiLFwidHJhbnNmb3JtLW9yaWdpblwiOlwiMCUgMCVcIixvcGFjaXR5OlwiMFwifSkpfXVwZGF0ZUdsYXJlU2l6ZSgpe09iamVjdC5hc3NpZ24odGhpcy5nbGFyZUVsZW1lbnQuc3R5bGUse3dpZHRoOmAkezIqdGhpcy5lbGVtZW50Lm9mZnNldFdpZHRofWAsaGVpZ2h0OmAkezIqdGhpcy5lbGVtZW50Lm9mZnNldFdpZHRofWB9KX1vbldpbmRvd1Jlc2l6ZUJpbmQoKXt0aGlzLnVwZGF0ZUdsYXJlU2l6ZSgpfXNldFRyYW5zaXRpb24oKXtjbGVhclRpbWVvdXQodGhpcy50cmFuc2l0aW9uVGltZW91dCksdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zaXRpb249dGhpcy5zZXR0aW5ncy5zcGVlZCtcIm1zIFwiK3RoaXMuc2V0dGluZ3MuZWFzaW5nLHRoaXMuZ2xhcmUmJih0aGlzLmdsYXJlRWxlbWVudC5zdHlsZS50cmFuc2l0aW9uPWBvcGFjaXR5ICR7dGhpcy5zZXR0aW5ncy5zcGVlZH1tcyAke3RoaXMuc2V0dGluZ3MuZWFzaW5nfWApLHRoaXMudHJhbnNpdGlvblRpbWVvdXQ9c2V0VGltZW91dCgoKT0+e3RoaXMuZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uPVwiXCI7dGhpcy5nbGFyZSYmKHRoaXMuZ2xhcmVFbGVtZW50LnN0eWxlLnRyYW5zaXRpb249XCJcIil9LHRoaXMuc2V0dGluZ3Muc3BlZWQpfWV4dGVuZFNldHRpbmdzKHQpe2xldCBlPXtyZXZlcnNlOiExLG1heDozNSxwZXJzcGVjdGl2ZToxZTMsZWFzaW5nOlwiY3ViaWMtYmV6aWVyKC4wMywuOTgsLjUyLC45OSlcIixzY2FsZTpcIjFcIixzcGVlZDpcIjMwMFwiLHRyYW5zaXRpb246ITAsYXhpczpudWxsLGdsYXJlOiExLFwibWF4LWdsYXJlXCI6MSxcImdsYXJlLXByZXJlbmRlclwiOiExLHJlc2V0OiEwfSxpPXt9O2Zvcih2YXIgcyBpbiBlKWlmKHMgaW4gdClpW3NdPXRbc107ZWxzZSBpZih0aGlzLmVsZW1lbnQuaGFzQXR0cmlidXRlKFwiZGF0YS10aWx0LVwiK3MpKXtsZXQgdD10aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS10aWx0LVwiK3MpO3RyeXtpW3NdPUpTT04ucGFyc2UodCl9Y2F0Y2goZSl7aVtzXT10fX1lbHNlIGlbc109ZVtzXTtyZXR1cm4gaX1zdGF0aWMgaW5pdChlLGkpe2UgaW5zdGFuY2VvZiBOb2RlJiYoZT1bZV0pLGUgaW5zdGFuY2VvZiBOb2RlTGlzdCYmKGU9W10uc2xpY2UuY2FsbChlKSksZSBpbnN0YW5jZW9mIEFycmF5JiZlLmZvckVhY2goZT0+e1widmFuaWxsYVRpbHRcImluIGV8fChlLnZhbmlsbGFUaWx0PW5ldyB0KGUsaSkpfSl9fXJldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudCYmKHdpbmRvdy5WYW5pbGxhVGlsdD10LHQuaW5pdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtdGlsdF1cIikpKSx0fSgpOyJdfQ==
