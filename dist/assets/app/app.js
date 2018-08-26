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
            for(let i = 0; i < cardItem.length; i++){
                cardItem[i].classList.add('cardimg--reveal')
            }
        }
        if(worksTop < 300){
            body.style.backgroundColor = "var(--bookopus)"
            if (landingTopWidth > 900){
                logoInner.style.fill = "var(--light)"
                logoOuter.style.stroke = "var(--dark)"
                for(let i = 0; i < links.length; i++){
                    links[i].style.color = "var(--dark)"
                }
            }
        }else{ /* Default Values */
            body.style.backgroundColor = "var(--light)"
            if (landingTopWidth > 900){
                logoInner.style.fill = "var(--cta)"
                logoOuter.style.stroke = "var(--dark)"
                for(let i = 0; i < links.length; i++){
                    links[i].style.color = "var(--dark)"
                }
            }
        }
        if(contactTop < 200){
            body.style.backgroundColor = "var(--dark)"
            if (landingTopWidth > 900){
                logoInner.style.fill = "var(--cta)"
                logoOuter.style.stroke = "var(--light)"
                for(let i = 0; i < links.length; i++){
                    links[i].style.color = "var(--light)"
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
            console.log(mockupOffset)
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInZlbmRvcnMvdmFuaWxsYS10aWx0Lm1pbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hLQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS1TY3JvbGwgRWZmZWN0cy0tLS0tLS0tLS0vL1xyXG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVybycpKXtcclxuICAgIGxldCBsYW5kaW5nVG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8nKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgbGV0IGxhbmRpbmdUb3BXaWR0aCA9IGxhbmRpbmdUb3Aud2lkdGhcclxuICAgIGxldCBsYW5kaW5nVG9wSGVpZ2h0ID0gbGFuZGluZ1RvcC5oZWlnaHRcclxuICAgIGxldCBsYW5kaW5nVG9wWCA9IGxhbmRpbmdUb3AudG9wXHJcblxyXG4gICAgbGV0IHdvcmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmtzJykuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgIGxldCB3b3Jrc1RvcCA9IHdvcmtzLnRvcFxyXG5cclxuICAgIGxldCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QnKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgbGV0IGNvbnRhY3RUb3AgPSBjb250YWN0LnRvcFxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICAgICAgICBsZXQgY2FyZEl0ZW0gPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkaW1nX19pdGVtJykpXHJcbiAgICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuICAgICAgICBsZXQgbG9nb0lubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28gc3ZnIC5jJylcclxuICAgICAgICBsZXQgbG9nb091dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28gc3ZnIC5kJylcclxuICAgICAgICBsZXQgbGlua3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYgdWwgbGkgYScpKVxyXG5cclxuICAgICAgICBsZXQgd29ya3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29ya3MnKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgICAgIGxldCB3b3Jrc1RvcCA9IHdvcmtzLnRvcFxyXG5cclxuICAgICAgICBsZXQgY29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0JykuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgICAgICBsZXQgY29udGFjdFRvcCA9IGNvbnRhY3QudG9wXHJcblxyXG4gICAgICAgIGlmKHdvcmtzVG9wIDwgNDAwKXtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNhcmRJdGVtLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGNhcmRJdGVtW2ldLmNsYXNzTGlzdC5hZGQoJ2NhcmRpbWctLXJldmVhbCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYod29ya3NUb3AgPCAzMDApe1xyXG4gICAgICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tYm9va29wdXMpXCJcclxuICAgICAgICAgICAgaWYgKGxhbmRpbmdUb3BXaWR0aCA+IDkwMCl7XHJcbiAgICAgICAgICAgICAgICBsb2dvSW5uZXIuc3R5bGUuZmlsbCA9IFwidmFyKC0tbGlnaHQpXCJcclxuICAgICAgICAgICAgICAgIGxvZ29PdXRlci5zdHlsZS5zdHJva2UgPSBcInZhcigtLWRhcmspXCJcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlua3NbaV0uc3R5bGUuY29sb3IgPSBcInZhcigtLWRhcmspXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNleyAvKiBEZWZhdWx0IFZhbHVlcyAqL1xyXG4gICAgICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tbGlnaHQpXCJcclxuICAgICAgICAgICAgaWYgKGxhbmRpbmdUb3BXaWR0aCA+IDkwMCl7XHJcbiAgICAgICAgICAgICAgICBsb2dvSW5uZXIuc3R5bGUuZmlsbCA9IFwidmFyKC0tY3RhKVwiXHJcbiAgICAgICAgICAgICAgICBsb2dvT3V0ZXIuc3R5bGUuc3Ryb2tlID0gXCJ2YXIoLS1kYXJrKVwiXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmtzW2ldLnN0eWxlLmNvbG9yID0gXCJ2YXIoLS1kYXJrKVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY29udGFjdFRvcCA8IDIwMCl7XHJcbiAgICAgICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1kYXJrKVwiXHJcbiAgICAgICAgICAgIGlmIChsYW5kaW5nVG9wV2lkdGggPiA5MDApe1xyXG4gICAgICAgICAgICAgICAgbG9nb0lubmVyLnN0eWxlLmZpbGwgPSBcInZhcigtLWN0YSlcIlxyXG4gICAgICAgICAgICAgICAgbG9nb091dGVyLnN0eWxlLnN0cm9rZSA9IFwidmFyKC0tbGlnaHQpXCJcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlua3NbaV0uc3R5bGUuY29sb3IgPSBcInZhcigtLWxpZ2h0KVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5sZXQgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtbmF2LS1tZW51JylcclxuICAgIFxyXG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbGV0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlLW5hdiAubG9nbyAuYycpO1xyXG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICBsZXQgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlLW5hdl9fbGlua3MnKTtcclxuICAgIFxyXG4gICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuXHJcbiAgICBpZiAobWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpID09PSB0cnVlKXtcclxuICAgICAgICBsb2dvLnN0eWxlLmZpbGwgPSBcInZhcigtLWxpZ2h0KVwiO1xyXG4gICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3dZID0gXCJoaWRkZW5cIjtcclxuICAgICAgICBsaW5rcy5zdHlsZS5vcGFjaXR5ID0gXCIxXCJcclxuICAgICAgICBsaW5rcy5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEpXCJcclxuICAgIH0gZWxzZXtcclxuICAgICAgICBjbG9zZVRhYigpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2xvc2VUYWIoKXtcclxuICAgICAgICBsb2dvLnN0eWxlLmZpbGwgPSBcInZhcigtLWN0YSlcIlxyXG4gICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3dZID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgICAgbGlua3Muc3R5bGUub3BhY2l0eSA9IFwiMFwiXHJcbiAgICAgICAgbGlua3Muc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgxLCAwKVwiXHJcbiAgICB9XHJcbiAgICBsaW5rcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBpZiAobWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKXtcclxuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgY2xvc2VUYWIoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxubGV0IGFib3V0VHJpRGVzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dC0tZGVza3RvcCcpXHJcbmxldCBhYm91dFRyaU1vYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dC0tbW9iaWxlJylcclxuICAgIFxyXG5hYm91dFRyaURlc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuQWJvdXQpOyBcclxuYWJvdXRUcmlNb2IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBvcGVuQWJvdXQoKTtcclxuICAgIGJvZHlPdmVyZmxvdygpO1xyXG59KTsgXHJcblxyXG5mdW5jdGlvbiBvcGVuQWJvdXQoKSB7XHJcbiAgICBsZXQgbG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvIHN2ZyAuYycpO1xyXG4gICAgbGV0IGFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0Jyk7XHJcbiAgICBsZXQgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXRfX2Nsb3NlJyk7XHJcbiAgICBhYm91dC5jbGFzc0xpc3QuYWRkKCdhYm91dC0tYWN0aXZlJyk7XHJcblxyXG4gICAgaWYgKGFib3V0LmNsYXNzTGlzdC5jb250YWlucygnYWJvdXQtLWFjdGl2ZScpID09PSB0cnVlKXtcclxuICAgICAgICBhYm91dFRyaURlc2suY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0JylcclxuICAgICAgICBsb2dvLnN0eWxlLmZpbGwgPSBcInZhcigtLWxpZ2h0KVwiO1xyXG4gICAgfSBlbHNle1xyXG4gICAgICAgIGxvZ28uc3R5bGUuZmlsbCA9IFwidmFyKC0tY3RhKVwiXHJcbiAgICAgICAgYWJvdXRUcmlEZXNrLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpXHJcbiAgICB9XHJcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGFib3V0LmNsYXNzTGlzdC5yZW1vdmUoJ2Fib3V0LS1hY3RpdmUnKTtcclxuICAgICAgICBsb2dvLnN0eWxlLmZpbGwgPSBcInZhcigtLWN0YSlcIlxyXG4gICAgICAgIGFib3V0VHJpRGVzay5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHQnKVxyXG4gICAgfSlcclxufVxyXG5mdW5jdGlvbiBib2R5T3ZlcmZsb3coKXtcclxuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgbGV0IGFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0Jyk7XHJcbiAgICBsZXQgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXRfX2Nsb3NlJyk7XHJcblxyXG4gICAgaWYgKGFib3V0LmNsYXNzTGlzdC5jb250YWlucygnYWJvdXQtLWFjdGl2ZScpID09PSB0cnVlKXtcclxuICAgICAgICBib2R5LnN0eWxlLm92ZXJmbG93WCA9IFwiaGlkZGVuXCJcclxuICAgIH0gZWxzZXtcclxuICAgICAgICBib2R5LnN0eWxlLm92ZXJmbG93WCA9IFwidmlzaWJsZVwiXHJcbiAgICB9XHJcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3dYID0gXCJ2aXNpYmxlXCJcclxuICAgIH0pXHJcbn1cclxuXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FzZV9fbW9ja3VwJykpe1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IG1vY2t1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXNlX19tb2NrdXAnKTtcclxuICAgICAgICBjb25zdCBtb2NrdXBJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FzZV9fbW9ja3VwIGltZycpO1xyXG4gICAgICAgIGNvbnN0IGJvdHRvbU1vY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FzZV9fYm90dG9tJyk7XHJcbiAgICAgICAgY29uc3QgYm90dG9tTW9ja0ltZyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhc2VfX2JvdHRvbSBpbWcnKSk7XHJcblxyXG4gICAgICAgIGxldCBtb2NrdXBPZmZzZXQgPSBtb2NrdXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXHJcbiAgICAgICAgbGV0IGJvdHRvbU9mZnNldCA9IGJvdHRvbU1vY2suZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXJGbG93ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjdXNlcmZsb3cgLnN0MCcpKVxyXG5cclxuICAgICAgICBpZiAobW9ja3VwT2Zmc2V0IDwgNDUwKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobW9ja3VwT2Zmc2V0KVxyXG4gICAgICAgICAgICBtb2NrdXBJbWcuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZScpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtb2NrdXBPZmZzZXQgPCAtNDMwKXtcclxuICAgICAgICAgICAgZm9yIChsZXQgc3QwIGluIHVzZXJGbG93KXtcclxuICAgICAgICAgICAgICAgIHVzZXJGbG93W3N0MF0uY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJvdHRvbU9mZnNldCA8IDQwMCl7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGltZyBpbiBib3R0b21Nb2NrSW1nKXtcclxuICAgICAgICAgICAgICAgIGJvdHRvbU1vY2tJbWdbaW1nXS5jbGFzc0xpc3QuYWRkKCdhbmltYXRlJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbiIsInZhciBWYW5pbGxhVGlsdD1mdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2NsYXNzIHR7Y29uc3RydWN0b3IodCxlPXt9KXtpZighKHQgaW5zdGFuY2VvZiBOb2RlKSl0aHJvd1wiQ2FuJ3QgaW5pdGlhbGl6ZSBWYW5pbGxhVGlsdCBiZWNhdXNlIFwiK3QrXCIgaXMgbm90IGEgTm9kZS5cIjt0aGlzLndpZHRoPW51bGwsdGhpcy5oZWlnaHQ9bnVsbCx0aGlzLmxlZnQ9bnVsbCx0aGlzLnRvcD1udWxsLHRoaXMudHJhbnNpdGlvblRpbWVvdXQ9bnVsbCx0aGlzLnVwZGF0ZUNhbGw9bnVsbCx0aGlzLnVwZGF0ZUJpbmQ9dGhpcy51cGRhdGUuYmluZCh0aGlzKSx0aGlzLnJlc2V0QmluZD10aGlzLnJlc2V0LmJpbmQodGhpcyksdGhpcy5lbGVtZW50PXQsdGhpcy5zZXR0aW5ncz10aGlzLmV4dGVuZFNldHRpbmdzKGUpLHRoaXMucmV2ZXJzZT10aGlzLnNldHRpbmdzLnJldmVyc2U/LTE6MSx0aGlzLmdsYXJlPXRoaXMuaXNTZXR0aW5nVHJ1ZSh0aGlzLnNldHRpbmdzLmdsYXJlKSx0aGlzLmdsYXJlUHJlcmVuZGVyPXRoaXMuaXNTZXR0aW5nVHJ1ZSh0aGlzLnNldHRpbmdzW1wiZ2xhcmUtcHJlcmVuZGVyXCJdKSx0aGlzLmdsYXJlJiZ0aGlzLnByZXBhcmVHbGFyZSgpLHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKX1pc1NldHRpbmdUcnVlKHQpe3JldHVyblwiXCI9PT10fHwhMD09PXR8fDE9PT10fWFkZEV2ZW50TGlzdGVuZXJzKCl7dGhpcy5vbk1vdXNlRW50ZXJCaW5kPXRoaXMub25Nb3VzZUVudGVyLmJpbmQodGhpcyksdGhpcy5vbk1vdXNlTW92ZUJpbmQ9dGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpLHRoaXMub25Nb3VzZUxlYXZlQmluZD10aGlzLm9uTW91c2VMZWF2ZS5iaW5kKHRoaXMpLHRoaXMub25XaW5kb3dSZXNpemVCaW5kPXRoaXMub25XaW5kb3dSZXNpemVCaW5kLmJpbmQodGhpcyksdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsdGhpcy5vbk1vdXNlRW50ZXJCaW5kKSx0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMub25Nb3VzZU1vdmVCaW5kKSx0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIix0aGlzLm9uTW91c2VMZWF2ZUJpbmQpLHRoaXMuZ2xhcmUmJndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5vbldpbmRvd1Jlc2l6ZUJpbmQpfXJlbW92ZUV2ZW50TGlzdGVuZXJzKCl7dGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsdGhpcy5vbk1vdXNlRW50ZXJCaW5kKSx0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMub25Nb3VzZU1vdmVCaW5kKSx0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIix0aGlzLm9uTW91c2VMZWF2ZUJpbmQpLHRoaXMuZ2xhcmUmJndpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5vbldpbmRvd1Jlc2l6ZUJpbmQpfWRlc3Ryb3koKXtjbGVhclRpbWVvdXQodGhpcy50cmFuc2l0aW9uVGltZW91dCksbnVsbCE9PXRoaXMudXBkYXRlQ2FsbCYmY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGVDYWxsKSx0aGlzLnJlc2V0KCksdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpLHRoaXMuZWxlbWVudC52YW5pbGxhVGlsdD1udWxsLGRlbGV0ZSB0aGlzLmVsZW1lbnQudmFuaWxsYVRpbHQsdGhpcy5lbGVtZW50PW51bGx9b25Nb3VzZUVudGVyKHQpe3RoaXMudXBkYXRlRWxlbWVudFBvc2l0aW9uKCksdGhpcy5lbGVtZW50LnN0eWxlLndpbGxDaGFuZ2U9XCJ0cmFuc2Zvcm1cIix0aGlzLnNldFRyYW5zaXRpb24oKX1vbk1vdXNlTW92ZSh0KXtudWxsIT09dGhpcy51cGRhdGVDYWxsJiZjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZUNhbGwpLHRoaXMuZXZlbnQ9dCx0aGlzLnVwZGF0ZUNhbGw9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlQmluZCl9b25Nb3VzZUxlYXZlKHQpe3RoaXMuc2V0VHJhbnNpdGlvbigpLHRoaXMuc2V0dGluZ3MucmVzZXQmJnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJlc2V0QmluZCl9cmVzZXQoKXt0aGlzLmV2ZW50PXtwYWdlWDp0aGlzLmxlZnQrdGhpcy53aWR0aC8yLHBhZ2VZOnRoaXMudG9wK3RoaXMuaGVpZ2h0LzJ9LHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm09XCJwZXJzcGVjdGl2ZShcIit0aGlzLnNldHRpbmdzLnBlcnNwZWN0aXZlK1wicHgpIHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKSBzY2FsZTNkKDEsIDEsIDEpXCIsdGhpcy5nbGFyZSYmKHRoaXMuZ2xhcmVFbGVtZW50LnN0eWxlLnRyYW5zZm9ybT1cInJvdGF0ZSgxODBkZWcpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiLHRoaXMuZ2xhcmVFbGVtZW50LnN0eWxlLm9wYWNpdHk9XCIwXCIpfWdldFZhbHVlcygpe2xldCB0PSh0aGlzLmV2ZW50LmNsaWVudFgtdGhpcy5sZWZ0KS90aGlzLndpZHRoLGU9KHRoaXMuZXZlbnQuY2xpZW50WS10aGlzLnRvcCkvdGhpcy5oZWlnaHQ7cmV0dXJuIHQ9TWF0aC5taW4oTWF0aC5tYXgodCwwKSwxKSxlPU1hdGgubWluKE1hdGgubWF4KGUsMCksMSkse3RpbHRYOih0aGlzLnJldmVyc2UqKHRoaXMuc2V0dGluZ3MubWF4LzItdCp0aGlzLnNldHRpbmdzLm1heCkpLnRvRml4ZWQoMiksdGlsdFk6KHRoaXMucmV2ZXJzZSooZSp0aGlzLnNldHRpbmdzLm1heC10aGlzLnNldHRpbmdzLm1heC8yKSkudG9GaXhlZCgyKSxwZXJjZW50YWdlWDoxMDAqdCxwZXJjZW50YWdlWToxMDAqZSxhbmdsZTpNYXRoLmF0YW4yKHRoaXMuZXZlbnQuY2xpZW50WC0odGhpcy5sZWZ0K3RoaXMud2lkdGgvMiksLSh0aGlzLmV2ZW50LmNsaWVudFktKHRoaXMudG9wK3RoaXMuaGVpZ2h0LzIpKSkqKDE4MC9NYXRoLlBJKX19dXBkYXRlRWxlbWVudFBvc2l0aW9uKCl7bGV0IHQ9dGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO3RoaXMud2lkdGg9dGhpcy5lbGVtZW50Lm9mZnNldFdpZHRoLHRoaXMuaGVpZ2h0PXRoaXMuZWxlbWVudC5vZmZzZXRIZWlnaHQsdGhpcy5sZWZ0PXQubGVmdCx0aGlzLnRvcD10LnRvcH11cGRhdGUoKXtsZXQgdD10aGlzLmdldFZhbHVlcygpO3RoaXMuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm09XCJwZXJzcGVjdGl2ZShcIit0aGlzLnNldHRpbmdzLnBlcnNwZWN0aXZlK1wicHgpIHJvdGF0ZVgoXCIrKFwieFwiPT09dGhpcy5zZXR0aW5ncy5heGlzPzA6dC50aWx0WSkrXCJkZWcpIHJvdGF0ZVkoXCIrKFwieVwiPT09dGhpcy5zZXR0aW5ncy5heGlzPzA6dC50aWx0WCkrXCJkZWcpIHNjYWxlM2QoXCIrdGhpcy5zZXR0aW5ncy5zY2FsZStcIiwgXCIrdGhpcy5zZXR0aW5ncy5zY2FsZStcIiwgXCIrdGhpcy5zZXR0aW5ncy5zY2FsZStcIilcIix0aGlzLmdsYXJlJiYodGhpcy5nbGFyZUVsZW1lbnQuc3R5bGUudHJhbnNmb3JtPWByb3RhdGUoJHt0LmFuZ2xlfWRlZykgdHJhbnNsYXRlKC01MCUsIC01MCUpYCx0aGlzLmdsYXJlRWxlbWVudC5zdHlsZS5vcGFjaXR5PWAke3QucGVyY2VudGFnZVkqdGhpcy5zZXR0aW5nc1tcIm1heC1nbGFyZVwiXS8xMDB9YCksdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwidGlsdENoYW5nZVwiLHtkZXRhaWw6dH0pKSx0aGlzLnVwZGF0ZUNhbGw9bnVsbH1wcmVwYXJlR2xhcmUoKXtpZighdGhpcy5nbGFyZVByZXJlbmRlcil7Y29uc3QgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3QuY2xhc3NMaXN0LmFkZChcImpzLXRpbHQtZ2xhcmVcIik7Y29uc3QgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2UuY2xhc3NMaXN0LmFkZChcImpzLXRpbHQtZ2xhcmUtaW5uZXJcIiksdC5hcHBlbmRDaGlsZChlKSx0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodCl9dGhpcy5nbGFyZUVsZW1lbnRXcmFwcGVyPXRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXRpbHQtZ2xhcmVcIiksdGhpcy5nbGFyZUVsZW1lbnQ9dGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtdGlsdC1nbGFyZS1pbm5lclwiKSx0aGlzLmdsYXJlUHJlcmVuZGVyfHwoT2JqZWN0LmFzc2lnbih0aGlzLmdsYXJlRWxlbWVudFdyYXBwZXIuc3R5bGUse3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix0b3A6XCIwXCIsbGVmdDpcIjBcIix3aWR0aDpcIjEwMCVcIixoZWlnaHQ6XCIxMDAlXCIsb3ZlcmZsb3c6XCJoaWRkZW5cIn0pLE9iamVjdC5hc3NpZ24odGhpcy5nbGFyZUVsZW1lbnQuc3R5bGUse3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix0b3A6XCI1MCVcIixsZWZ0OlwiNTAlXCIsXCJwb2ludGVyLWV2ZW50c1wiOlwibm9uZVwiLFwiYmFja2dyb3VuZC1pbWFnZVwiOmBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNTUsMjU1LDI1NSwwKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwxKSAxMDAlKWAsd2lkdGg6YCR7Mip0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGh9cHhgLGhlaWdodDpgJHsyKnRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aH1weGAsdHJhbnNmb3JtOlwicm90YXRlKDE4MGRlZykgdHJhbnNsYXRlKC01MCUsIC01MCUpXCIsXCJ0cmFuc2Zvcm0tb3JpZ2luXCI6XCIwJSAwJVwiLG9wYWNpdHk6XCIwXCJ9KSl9dXBkYXRlR2xhcmVTaXplKCl7T2JqZWN0LmFzc2lnbih0aGlzLmdsYXJlRWxlbWVudC5zdHlsZSx7d2lkdGg6YCR7Mip0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGh9YCxoZWlnaHQ6YCR7Mip0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGh9YH0pfW9uV2luZG93UmVzaXplQmluZCgpe3RoaXMudXBkYXRlR2xhcmVTaXplKCl9c2V0VHJhbnNpdGlvbigpe2NsZWFyVGltZW91dCh0aGlzLnRyYW5zaXRpb25UaW1lb3V0KSx0aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbj10aGlzLnNldHRpbmdzLnNwZWVkK1wibXMgXCIrdGhpcy5zZXR0aW5ncy5lYXNpbmcsdGhpcy5nbGFyZSYmKHRoaXMuZ2xhcmVFbGVtZW50LnN0eWxlLnRyYW5zaXRpb249YG9wYWNpdHkgJHt0aGlzLnNldHRpbmdzLnNwZWVkfW1zICR7dGhpcy5zZXR0aW5ncy5lYXNpbmd9YCksdGhpcy50cmFuc2l0aW9uVGltZW91dD1zZXRUaW1lb3V0KCgpPT57dGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zaXRpb249XCJcIjt0aGlzLmdsYXJlJiYodGhpcy5nbGFyZUVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbj1cIlwiKX0sdGhpcy5zZXR0aW5ncy5zcGVlZCl9ZXh0ZW5kU2V0dGluZ3ModCl7bGV0IGU9e3JldmVyc2U6ITEsbWF4OjM1LHBlcnNwZWN0aXZlOjFlMyxlYXNpbmc6XCJjdWJpYy1iZXppZXIoLjAzLC45OCwuNTIsLjk5KVwiLHNjYWxlOlwiMVwiLHNwZWVkOlwiMzAwXCIsdHJhbnNpdGlvbjohMCxheGlzOm51bGwsZ2xhcmU6ITEsXCJtYXgtZ2xhcmVcIjoxLFwiZ2xhcmUtcHJlcmVuZGVyXCI6ITEscmVzZXQ6ITB9LGk9e307Zm9yKHZhciBzIGluIGUpaWYocyBpbiB0KWlbc109dFtzXTtlbHNlIGlmKHRoaXMuZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJkYXRhLXRpbHQtXCIrcykpe2xldCB0PXRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRpbHQtXCIrcyk7dHJ5e2lbc109SlNPTi5wYXJzZSh0KX1jYXRjaChlKXtpW3NdPXR9fWVsc2UgaVtzXT1lW3NdO3JldHVybiBpfXN0YXRpYyBpbml0KGUsaSl7ZSBpbnN0YW5jZW9mIE5vZGUmJihlPVtlXSksZSBpbnN0YW5jZW9mIE5vZGVMaXN0JiYoZT1bXS5zbGljZS5jYWxsKGUpKSxlIGluc3RhbmNlb2YgQXJyYXkmJmUuZm9yRWFjaChlPT57XCJ2YW5pbGxhVGlsdFwiaW4gZXx8KGUudmFuaWxsYVRpbHQ9bmV3IHQoZSxpKSl9KX19cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50JiYod2luZG93LlZhbmlsbGFUaWx0PXQsdC5pbml0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS10aWx0XVwiKSkpLHR9KCk7Il19
