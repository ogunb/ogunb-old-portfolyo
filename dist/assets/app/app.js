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

// fetch('bookopus.html')
//     .then((res) => res.text())
//     .then((data) => {
//         document.getElementById('content').innerHTML = data
//     })


var VanillaTilt=function(){"use strict";class t{constructor(t,e={}){if(!(t instanceof Node))throw"Can't initialize VanillaTilt because "+t+" is not a Node.";this.width=null,this.height=null,this.left=null,this.top=null,this.transitionTimeout=null,this.updateCall=null,this.updateBind=this.update.bind(this),this.resetBind=this.reset.bind(this),this.element=t,this.settings=this.extendSettings(e),this.reverse=this.settings.reverse?-1:1,this.glare=this.isSettingTrue(this.settings.glare),this.glarePrerender=this.isSettingTrue(this.settings["glare-prerender"]),this.glare&&this.prepareGlare(),this.addEventListeners()}isSettingTrue(t){return""===t||!0===t||1===t}addEventListeners(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.onWindowResizeBind=this.onWindowResizeBind.bind(this),this.element.addEventListener("mouseenter",this.onMouseEnterBind),this.element.addEventListener("mousemove",this.onMouseMoveBind),this.element.addEventListener("mouseleave",this.onMouseLeaveBind),this.glare&&window.addEventListener("resize",this.onWindowResizeBind)}removeEventListeners(){this.element.removeEventListener("mouseenter",this.onMouseEnterBind),this.element.removeEventListener("mousemove",this.onMouseMoveBind),this.element.removeEventListener("mouseleave",this.onMouseLeaveBind),this.glare&&window.removeEventListener("resize",this.onWindowResizeBind)}destroy(){clearTimeout(this.transitionTimeout),null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.reset(),this.removeEventListeners(),this.element.vanillaTilt=null,delete this.element.vanillaTilt,this.element=null}onMouseEnter(t){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()}onMouseMove(t){null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event=t,this.updateCall=requestAnimationFrame(this.updateBind)}onMouseLeave(t){this.setTransition(),this.settings.reset&&requestAnimationFrame(this.resetBind)}reset(){this.event={pageX:this.left+this.width/2,pageY:this.top+this.height/2},this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",this.glare&&(this.glareElement.style.transform="rotate(180deg) translate(-50%, -50%)",this.glareElement.style.opacity="0")}getValues(){let t=(this.event.clientX-this.left)/this.width,e=(this.event.clientY-this.top)/this.height;return t=Math.min(Math.max(t,0),1),e=Math.min(Math.max(e,0),1),{tiltX:(this.reverse*(this.settings.max/2-t*this.settings.max)).toFixed(2),tiltY:(this.reverse*(e*this.settings.max-this.settings.max/2)).toFixed(2),percentageX:100*t,percentageY:100*e,angle:Math.atan2(this.event.clientX-(this.left+this.width/2),-(this.event.clientY-(this.top+this.height/2)))*(180/Math.PI)}}updateElementPosition(){let t=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=t.left,this.top=t.top}update(){let t=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.axis?0:t.tiltY)+"deg) rotateY("+("y"===this.settings.axis?0:t.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.glare&&(this.glareElement.style.transform=`rotate(${t.angle}deg) translate(-50%, -50%)`,this.glareElement.style.opacity=`${t.percentageY*this.settings["max-glare"]/100}`),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:t})),this.updateCall=null}prepareGlare(){if(!this.glarePrerender){const t=document.createElement("div");t.classList.add("js-tilt-glare");const e=document.createElement("div");e.classList.add("js-tilt-glare-inner"),t.appendChild(e),this.element.appendChild(t)}this.glareElementWrapper=this.element.querySelector(".js-tilt-glare"),this.glareElement=this.element.querySelector(".js-tilt-glare-inner"),this.glarePrerender||(Object.assign(this.glareElementWrapper.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden"}),Object.assign(this.glareElement.style,{position:"absolute",top:"50%",left:"50%","pointer-events":"none","background-image":`linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)`,width:`${2*this.element.offsetWidth}px`,height:`${2*this.element.offsetWidth}px`,transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"}))}updateGlareSize(){Object.assign(this.glareElement.style,{width:`${2*this.element.offsetWidth}`,height:`${2*this.element.offsetWidth}`})}onWindowResizeBind(){this.updateGlareSize()}setTransition(){clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.glare&&(this.glareElement.style.transition=`opacity ${this.settings.speed}ms ${this.settings.easing}`),this.transitionTimeout=setTimeout(()=>{this.element.style.transition="";this.glare&&(this.glareElement.style.transition="")},this.settings.speed)}extendSettings(t){let e={reverse:!1,max:35,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:"1",speed:"300",transition:!0,axis:null,glare:!1,"max-glare":1,"glare-prerender":!1,reset:!0},i={};for(var s in e)if(s in t)i[s]=t[s];else if(this.element.hasAttribute("data-tilt-"+s)){let t=this.element.getAttribute("data-tilt-"+s);try{i[s]=JSON.parse(t)}catch(e){i[s]=t}}else i[s]=e[s];return i}static init(e,i){e instanceof Node&&(e=[e]),e instanceof NodeList&&(e=[].slice.call(e)),e instanceof Array&&e.forEach(e=>{"vanillaTilt"in e||(e.vanillaTilt=new t(e,i))})}}return"undefined"!=typeof document&&(window.VanillaTilt=t,t.init(document.querySelectorAll("[data-tilt]"))),t}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInZlbmRvcnMvdmFuaWxsYS10aWx0Lm1pbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3S0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tU2Nyb2xsIEVmZmVjdHMtLS0tLS0tLS0tLy9cclxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8nKSl7XHJcbiAgICBsZXQgbGFuZGluZ1RvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvJykuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgIGxldCBsYW5kaW5nVG9wV2lkdGggPSBsYW5kaW5nVG9wLndpZHRoXHJcbiAgICBsZXQgbGFuZGluZ1RvcEhlaWdodCA9IGxhbmRpbmdUb3AuaGVpZ2h0XHJcbiAgICBsZXQgbGFuZGluZ1RvcFggPSBsYW5kaW5nVG9wLnRvcFxyXG5cclxuICAgIGxldCB3b3JrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b3JrcycpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICBsZXQgd29ya3NUb3AgPSB3b3Jrcy50b3BcclxuXHJcbiAgICBsZXQgY29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0JykuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgIGxldCBjb250YWN0VG9wID0gY29udGFjdC50b3BcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGNhcmRJdGVtID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZGltZ19faXRlbScpKVxyXG4gICAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXHJcbiAgICAgICAgbGV0IGxvZ29Jbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvIHN2ZyAuYycpXHJcbiAgICAgICAgbGV0IGxvZ29PdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvIHN2ZyAuZCcpXHJcbiAgICAgICAgbGV0IGxpbmtzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2IHVsIGxpIGEnKSlcclxuXHJcbiAgICAgICAgbGV0IHdvcmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmtzJykuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgICAgICBsZXQgd29ya3NUb3AgPSB3b3Jrcy50b3BcclxuXHJcbiAgICAgICAgbGV0IGNvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdCcpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICAgICAgbGV0IGNvbnRhY3RUb3AgPSBjb250YWN0LnRvcFxyXG5cclxuICAgICAgICBpZih3b3Jrc1RvcCA8IDQwMCl7XHJcbiAgICAgICAgICAgIGNhcmRJdGVtLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnY2FyZGltZy0tcmV2ZWFsJylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYod29ya3NUb3AgPCAzMDApe1xyXG4gICAgICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tYm9va29wdXMpXCJcclxuICAgICAgICAgICAgaWYgKGxhbmRpbmdUb3BXaWR0aCA+IDkwMCl7XHJcbiAgICAgICAgICAgICAgICBsb2dvSW5uZXIuc3R5bGUuZmlsbCA9IFwidmFyKC0tbGlnaHQpXCJcclxuICAgICAgICAgICAgICAgIGxvZ29PdXRlci5zdHlsZS5zdHJva2UgPSBcInZhcigtLWRhcmspXCJcclxuICAgICAgICAgICAgICAgIGxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rLnN0eWxlLmNvbG9yID0gXCJ2YXIoLS1kYXJrKVwiXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7IC8qIERlZmF1bHQgVmFsdWVzICovXHJcbiAgICAgICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1saWdodClcIlxyXG4gICAgICAgICAgICBpZiAobGFuZGluZ1RvcFdpZHRoID4gOTAwKXtcclxuICAgICAgICAgICAgICAgIGxvZ29Jbm5lci5zdHlsZS5maWxsID0gXCJ2YXIoLS1jdGEpXCJcclxuICAgICAgICAgICAgICAgIGxvZ29PdXRlci5zdHlsZS5zdHJva2UgPSBcInZhcigtLWRhcmspXCJcclxuICAgICAgICAgICAgICAgIGxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rLnN0eWxlLmNvbG9yID0gXCJ2YXIoLS1kYXJrKVwiXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGNvbnRhY3RUb3AgPCAyMDApe1xyXG4gICAgICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tZGFyaylcIlxyXG4gICAgICAgICAgICBpZiAobGFuZGluZ1RvcFdpZHRoID4gOTAwKXtcclxuICAgICAgICAgICAgICAgIGxvZ29Jbm5lci5zdHlsZS5maWxsID0gXCJ2YXIoLS1jdGEpXCJcclxuICAgICAgICAgICAgICAgIGxvZ29PdXRlci5zdHlsZS5zdHJva2UgPSBcInZhcigtLWxpZ2h0KVwiXHJcbiAgICAgICAgICAgICAgICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluay5zdHlsZS5jb2xvciA9IFwidmFyKC0tbGlnaHQpXCJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5sZXQgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtbmF2LS1tZW51JylcclxuICAgIFxyXG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbGV0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlLW5hdiAubG9nbyAuYycpO1xyXG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICBsZXQgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlLW5hdl9fbGlua3MnKTtcclxuICAgIFxyXG4gICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuXHJcbiAgICBpZiAobWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpID09PSB0cnVlKXtcclxuICAgICAgICBsb2dvLnN0eWxlLmZpbGwgPSBcInZhcigtLWxpZ2h0KVwiO1xyXG4gICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3dZID0gXCJoaWRkZW5cIjtcclxuICAgICAgICBsaW5rcy5zdHlsZS5vcGFjaXR5ID0gXCIxXCJcclxuICAgICAgICBsaW5rcy5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEpXCJcclxuICAgIH0gZWxzZXtcclxuICAgICAgICBjbG9zZVRhYigpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2xvc2VUYWIoKXtcclxuICAgICAgICBsb2dvLnN0eWxlLmZpbGwgPSBcInZhcigtLWN0YSlcIlxyXG4gICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3dZID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgICAgbGlua3Muc3R5bGUub3BhY2l0eSA9IFwiMFwiXHJcbiAgICAgICAgbGlua3Muc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgxLCAwKVwiXHJcbiAgICB9XHJcbiAgICBsaW5rcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBpZiAobWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKXtcclxuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgY2xvc2VUYWIoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxubGV0IGFib3V0VHJpRGVzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dC0tZGVza3RvcCcpXHJcbmxldCBhYm91dFRyaU1vYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dC0tbW9iaWxlJylcclxuICAgIFxyXG5hYm91dFRyaURlc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuQWJvdXQpOyBcclxuYWJvdXRUcmlNb2IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBvcGVuQWJvdXQoKTtcclxuICAgIGJvZHlPdmVyZmxvdygpO1xyXG59KTsgXHJcblxyXG5mdW5jdGlvbiBvcGVuQWJvdXQoKSB7XHJcbiAgICBsZXQgbG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvIHN2ZyAuYycpO1xyXG4gICAgbGV0IGFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0Jyk7XHJcbiAgICBsZXQgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXRfX2Nsb3NlJyk7XHJcbiAgICBhYm91dC5jbGFzc0xpc3QuYWRkKCdhYm91dC0tYWN0aXZlJyk7XHJcblxyXG4gICAgaWYgKGFib3V0LmNsYXNzTGlzdC5jb250YWlucygnYWJvdXQtLWFjdGl2ZScpID09PSB0cnVlKXtcclxuICAgICAgICBhYm91dFRyaURlc2suY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0JylcclxuICAgICAgICBsb2dvLnN0eWxlLmZpbGwgPSBcInZhcigtLWxpZ2h0KVwiO1xyXG4gICAgfSBlbHNle1xyXG4gICAgICAgIGxvZ28uc3R5bGUuZmlsbCA9IFwidmFyKC0tY3RhKVwiXHJcbiAgICAgICAgYWJvdXRUcmlEZXNrLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpXHJcbiAgICB9XHJcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGFib3V0LmNsYXNzTGlzdC5yZW1vdmUoJ2Fib3V0LS1hY3RpdmUnKTtcclxuICAgICAgICBsb2dvLnN0eWxlLmZpbGwgPSBcInZhcigtLWN0YSlcIlxyXG4gICAgICAgIGFib3V0VHJpRGVzay5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHQnKVxyXG4gICAgfSlcclxufVxyXG5mdW5jdGlvbiBib2R5T3ZlcmZsb3coKXtcclxuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgbGV0IGFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0Jyk7XHJcbiAgICBsZXQgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXRfX2Nsb3NlJyk7XHJcblxyXG4gICAgaWYgKGFib3V0LmNsYXNzTGlzdC5jb250YWlucygnYWJvdXQtLWFjdGl2ZScpID09PSB0cnVlKXtcclxuICAgICAgICBib2R5LnN0eWxlLm92ZXJmbG93WCA9IFwiaGlkZGVuXCJcclxuICAgIH0gZWxzZXtcclxuICAgICAgICBib2R5LnN0eWxlLm92ZXJmbG93WCA9IFwidmlzaWJsZVwiXHJcbiAgICB9XHJcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3dYID0gXCJ2aXNpYmxlXCJcclxuICAgIH0pXHJcbn1cclxuXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FzZV9fbW9ja3VwJykpe1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IG1vY2t1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXNlX19tb2NrdXAnKTtcclxuICAgICAgICBjb25zdCBtb2NrdXBJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FzZV9fbW9ja3VwIGltZycpO1xyXG4gICAgICAgIGNvbnN0IGJvdHRvbU1vY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FzZV9fYm90dG9tJyk7XHJcbiAgICAgICAgY29uc3QgYm90dG9tTW9ja0ltZyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhc2VfX2JvdHRvbSBpbWcnKSk7XHJcblxyXG4gICAgICAgIGxldCBtb2NrdXBPZmZzZXQgPSBtb2NrdXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXHJcbiAgICAgICAgbGV0IGJvdHRvbU9mZnNldCA9IGJvdHRvbU1vY2suZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXJGbG93ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjdXNlcmZsb3cgLnN0MCcpKVxyXG5cclxuICAgICAgICBpZiAobW9ja3VwT2Zmc2V0IDwgNDUwKXtcclxuICAgICAgICAgICAgbW9ja3VwSW1nLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobW9ja3VwT2Zmc2V0IDwgLTQzMCl7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHN0MCBpbiB1c2VyRmxvdyl7XHJcbiAgICAgICAgICAgICAgICB1c2VyRmxvd1tzdDBdLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChib3R0b21PZmZzZXQgPCA0MDApe1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbWcgaW4gYm90dG9tTW9ja0ltZyl7XHJcbiAgICAgICAgICAgICAgICBib3R0b21Nb2NrSW1nW2ltZ10uY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG4vLyBmZXRjaCgnYm9va29wdXMuaHRtbCcpXHJcbi8vICAgICAudGhlbigocmVzKSA9PiByZXMudGV4dCgpKVxyXG4vLyAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuLy8gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmlubmVySFRNTCA9IGRhdGFcclxuLy8gICAgIH0pXHJcblxyXG4iLCJ2YXIgVmFuaWxsYVRpbHQ9ZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtjbGFzcyB0e2NvbnN0cnVjdG9yKHQsZT17fSl7aWYoISh0IGluc3RhbmNlb2YgTm9kZSkpdGhyb3dcIkNhbid0IGluaXRpYWxpemUgVmFuaWxsYVRpbHQgYmVjYXVzZSBcIit0K1wiIGlzIG5vdCBhIE5vZGUuXCI7dGhpcy53aWR0aD1udWxsLHRoaXMuaGVpZ2h0PW51bGwsdGhpcy5sZWZ0PW51bGwsdGhpcy50b3A9bnVsbCx0aGlzLnRyYW5zaXRpb25UaW1lb3V0PW51bGwsdGhpcy51cGRhdGVDYWxsPW51bGwsdGhpcy51cGRhdGVCaW5kPXRoaXMudXBkYXRlLmJpbmQodGhpcyksdGhpcy5yZXNldEJpbmQ9dGhpcy5yZXNldC5iaW5kKHRoaXMpLHRoaXMuZWxlbWVudD10LHRoaXMuc2V0dGluZ3M9dGhpcy5leHRlbmRTZXR0aW5ncyhlKSx0aGlzLnJldmVyc2U9dGhpcy5zZXR0aW5ncy5yZXZlcnNlPy0xOjEsdGhpcy5nbGFyZT10aGlzLmlzU2V0dGluZ1RydWUodGhpcy5zZXR0aW5ncy5nbGFyZSksdGhpcy5nbGFyZVByZXJlbmRlcj10aGlzLmlzU2V0dGluZ1RydWUodGhpcy5zZXR0aW5nc1tcImdsYXJlLXByZXJlbmRlclwiXSksdGhpcy5nbGFyZSYmdGhpcy5wcmVwYXJlR2xhcmUoKSx0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCl9aXNTZXR0aW5nVHJ1ZSh0KXtyZXR1cm5cIlwiPT09dHx8ITA9PT10fHwxPT09dH1hZGRFdmVudExpc3RlbmVycygpe3RoaXMub25Nb3VzZUVudGVyQmluZD10aGlzLm9uTW91c2VFbnRlci5iaW5kKHRoaXMpLHRoaXMub25Nb3VzZU1vdmVCaW5kPXRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKSx0aGlzLm9uTW91c2VMZWF2ZUJpbmQ9dGhpcy5vbk1vdXNlTGVhdmUuYmluZCh0aGlzKSx0aGlzLm9uV2luZG93UmVzaXplQmluZD10aGlzLm9uV2luZG93UmVzaXplQmluZC5iaW5kKHRoaXMpLHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLHRoaXMub25Nb3VzZUVudGVyQmluZCksdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLm9uTW91c2VNb3ZlQmluZCksdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsdGhpcy5vbk1vdXNlTGVhdmVCaW5kKSx0aGlzLmdsYXJlJiZ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMub25XaW5kb3dSZXNpemVCaW5kKX1yZW1vdmVFdmVudExpc3RlbmVycygpe3RoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLHRoaXMub25Nb3VzZUVudGVyQmluZCksdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLm9uTW91c2VNb3ZlQmluZCksdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsdGhpcy5vbk1vdXNlTGVhdmVCaW5kKSx0aGlzLmdsYXJlJiZ3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMub25XaW5kb3dSZXNpemVCaW5kKX1kZXN0cm95KCl7Y2xlYXJUaW1lb3V0KHRoaXMudHJhbnNpdGlvblRpbWVvdXQpLG51bGwhPT10aGlzLnVwZGF0ZUNhbGwmJmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlQ2FsbCksdGhpcy5yZXNldCgpLHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSx0aGlzLmVsZW1lbnQudmFuaWxsYVRpbHQ9bnVsbCxkZWxldGUgdGhpcy5lbGVtZW50LnZhbmlsbGFUaWx0LHRoaXMuZWxlbWVudD1udWxsfW9uTW91c2VFbnRlcih0KXt0aGlzLnVwZGF0ZUVsZW1lbnRQb3NpdGlvbigpLHRoaXMuZWxlbWVudC5zdHlsZS53aWxsQ2hhbmdlPVwidHJhbnNmb3JtXCIsdGhpcy5zZXRUcmFuc2l0aW9uKCl9b25Nb3VzZU1vdmUodCl7bnVsbCE9PXRoaXMudXBkYXRlQ2FsbCYmY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGVDYWxsKSx0aGlzLmV2ZW50PXQsdGhpcy51cGRhdGVDYWxsPXJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZUJpbmQpfW9uTW91c2VMZWF2ZSh0KXt0aGlzLnNldFRyYW5zaXRpb24oKSx0aGlzLnNldHRpbmdzLnJlc2V0JiZyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZXNldEJpbmQpfXJlc2V0KCl7dGhpcy5ldmVudD17cGFnZVg6dGhpcy5sZWZ0K3RoaXMud2lkdGgvMixwYWdlWTp0aGlzLnRvcCt0aGlzLmhlaWdodC8yfSx0aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtPVwicGVyc3BlY3RpdmUoXCIrdGhpcy5zZXR0aW5ncy5wZXJzcGVjdGl2ZStcInB4KSByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgc2NhbGUzZCgxLCAxLCAxKVwiLHRoaXMuZ2xhcmUmJih0aGlzLmdsYXJlRWxlbWVudC5zdHlsZS50cmFuc2Zvcm09XCJyb3RhdGUoMTgwZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIix0aGlzLmdsYXJlRWxlbWVudC5zdHlsZS5vcGFjaXR5PVwiMFwiKX1nZXRWYWx1ZXMoKXtsZXQgdD0odGhpcy5ldmVudC5jbGllbnRYLXRoaXMubGVmdCkvdGhpcy53aWR0aCxlPSh0aGlzLmV2ZW50LmNsaWVudFktdGhpcy50b3ApL3RoaXMuaGVpZ2h0O3JldHVybiB0PU1hdGgubWluKE1hdGgubWF4KHQsMCksMSksZT1NYXRoLm1pbihNYXRoLm1heChlLDApLDEpLHt0aWx0WDoodGhpcy5yZXZlcnNlKih0aGlzLnNldHRpbmdzLm1heC8yLXQqdGhpcy5zZXR0aW5ncy5tYXgpKS50b0ZpeGVkKDIpLHRpbHRZOih0aGlzLnJldmVyc2UqKGUqdGhpcy5zZXR0aW5ncy5tYXgtdGhpcy5zZXR0aW5ncy5tYXgvMikpLnRvRml4ZWQoMikscGVyY2VudGFnZVg6MTAwKnQscGVyY2VudGFnZVk6MTAwKmUsYW5nbGU6TWF0aC5hdGFuMih0aGlzLmV2ZW50LmNsaWVudFgtKHRoaXMubGVmdCt0aGlzLndpZHRoLzIpLC0odGhpcy5ldmVudC5jbGllbnRZLSh0aGlzLnRvcCt0aGlzLmhlaWdodC8yKSkpKigxODAvTWF0aC5QSSl9fXVwZGF0ZUVsZW1lbnRQb3NpdGlvbigpe2xldCB0PXRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTt0aGlzLndpZHRoPXRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aCx0aGlzLmhlaWdodD10aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0LHRoaXMubGVmdD10LmxlZnQsdGhpcy50b3A9dC50b3B9dXBkYXRlKCl7bGV0IHQ9dGhpcy5nZXRWYWx1ZXMoKTt0aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtPVwicGVyc3BlY3RpdmUoXCIrdGhpcy5zZXR0aW5ncy5wZXJzcGVjdGl2ZStcInB4KSByb3RhdGVYKFwiKyhcInhcIj09PXRoaXMuc2V0dGluZ3MuYXhpcz8wOnQudGlsdFkpK1wiZGVnKSByb3RhdGVZKFwiKyhcInlcIj09PXRoaXMuc2V0dGluZ3MuYXhpcz8wOnQudGlsdFgpK1wiZGVnKSBzY2FsZTNkKFwiK3RoaXMuc2V0dGluZ3Muc2NhbGUrXCIsIFwiK3RoaXMuc2V0dGluZ3Muc2NhbGUrXCIsIFwiK3RoaXMuc2V0dGluZ3Muc2NhbGUrXCIpXCIsdGhpcy5nbGFyZSYmKHRoaXMuZ2xhcmVFbGVtZW50LnN0eWxlLnRyYW5zZm9ybT1gcm90YXRlKCR7dC5hbmdsZX1kZWcpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKWAsdGhpcy5nbGFyZUVsZW1lbnQuc3R5bGUub3BhY2l0eT1gJHt0LnBlcmNlbnRhZ2VZKnRoaXMuc2V0dGluZ3NbXCJtYXgtZ2xhcmVcIl0vMTAwfWApLHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInRpbHRDaGFuZ2VcIix7ZGV0YWlsOnR9KSksdGhpcy51cGRhdGVDYWxsPW51bGx9cHJlcGFyZUdsYXJlKCl7aWYoIXRoaXMuZ2xhcmVQcmVyZW5kZXIpe2NvbnN0IHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0LmNsYXNzTGlzdC5hZGQoXCJqcy10aWx0LWdsYXJlXCIpO2NvbnN0IGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLmNsYXNzTGlzdC5hZGQoXCJqcy10aWx0LWdsYXJlLWlubmVyXCIpLHQuYXBwZW5kQ2hpbGQoZSksdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHQpfXRoaXMuZ2xhcmVFbGVtZW50V3JhcHBlcj10aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy10aWx0LWdsYXJlXCIpLHRoaXMuZ2xhcmVFbGVtZW50PXRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXRpbHQtZ2xhcmUtaW5uZXJcIiksdGhpcy5nbGFyZVByZXJlbmRlcnx8KE9iamVjdC5hc3NpZ24odGhpcy5nbGFyZUVsZW1lbnRXcmFwcGVyLnN0eWxlLHtwb3NpdGlvbjpcImFic29sdXRlXCIsdG9wOlwiMFwiLGxlZnQ6XCIwXCIsd2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiMTAwJVwiLG92ZXJmbG93OlwiaGlkZGVuXCJ9KSxPYmplY3QuYXNzaWduKHRoaXMuZ2xhcmVFbGVtZW50LnN0eWxlLHtwb3NpdGlvbjpcImFic29sdXRlXCIsdG9wOlwiNTAlXCIsbGVmdDpcIjUwJVwiLFwicG9pbnRlci1ldmVudHNcIjpcIm5vbmVcIixcImJhY2tncm91bmQtaW1hZ2VcIjpgbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjU1LDI1NSwyNTUsMCkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMTAwJSlgLHdpZHRoOmAkezIqdGhpcy5lbGVtZW50Lm9mZnNldFdpZHRofXB4YCxoZWlnaHQ6YCR7Mip0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGh9cHhgLHRyYW5zZm9ybTpcInJvdGF0ZSgxODBkZWcpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiLFwidHJhbnNmb3JtLW9yaWdpblwiOlwiMCUgMCVcIixvcGFjaXR5OlwiMFwifSkpfXVwZGF0ZUdsYXJlU2l6ZSgpe09iamVjdC5hc3NpZ24odGhpcy5nbGFyZUVsZW1lbnQuc3R5bGUse3dpZHRoOmAkezIqdGhpcy5lbGVtZW50Lm9mZnNldFdpZHRofWAsaGVpZ2h0OmAkezIqdGhpcy5lbGVtZW50Lm9mZnNldFdpZHRofWB9KX1vbldpbmRvd1Jlc2l6ZUJpbmQoKXt0aGlzLnVwZGF0ZUdsYXJlU2l6ZSgpfXNldFRyYW5zaXRpb24oKXtjbGVhclRpbWVvdXQodGhpcy50cmFuc2l0aW9uVGltZW91dCksdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zaXRpb249dGhpcy5zZXR0aW5ncy5zcGVlZCtcIm1zIFwiK3RoaXMuc2V0dGluZ3MuZWFzaW5nLHRoaXMuZ2xhcmUmJih0aGlzLmdsYXJlRWxlbWVudC5zdHlsZS50cmFuc2l0aW9uPWBvcGFjaXR5ICR7dGhpcy5zZXR0aW5ncy5zcGVlZH1tcyAke3RoaXMuc2V0dGluZ3MuZWFzaW5nfWApLHRoaXMudHJhbnNpdGlvblRpbWVvdXQ9c2V0VGltZW91dCgoKT0+e3RoaXMuZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uPVwiXCI7dGhpcy5nbGFyZSYmKHRoaXMuZ2xhcmVFbGVtZW50LnN0eWxlLnRyYW5zaXRpb249XCJcIil9LHRoaXMuc2V0dGluZ3Muc3BlZWQpfWV4dGVuZFNldHRpbmdzKHQpe2xldCBlPXtyZXZlcnNlOiExLG1heDozNSxwZXJzcGVjdGl2ZToxZTMsZWFzaW5nOlwiY3ViaWMtYmV6aWVyKC4wMywuOTgsLjUyLC45OSlcIixzY2FsZTpcIjFcIixzcGVlZDpcIjMwMFwiLHRyYW5zaXRpb246ITAsYXhpczpudWxsLGdsYXJlOiExLFwibWF4LWdsYXJlXCI6MSxcImdsYXJlLXByZXJlbmRlclwiOiExLHJlc2V0OiEwfSxpPXt9O2Zvcih2YXIgcyBpbiBlKWlmKHMgaW4gdClpW3NdPXRbc107ZWxzZSBpZih0aGlzLmVsZW1lbnQuaGFzQXR0cmlidXRlKFwiZGF0YS10aWx0LVwiK3MpKXtsZXQgdD10aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS10aWx0LVwiK3MpO3RyeXtpW3NdPUpTT04ucGFyc2UodCl9Y2F0Y2goZSl7aVtzXT10fX1lbHNlIGlbc109ZVtzXTtyZXR1cm4gaX1zdGF0aWMgaW5pdChlLGkpe2UgaW5zdGFuY2VvZiBOb2RlJiYoZT1bZV0pLGUgaW5zdGFuY2VvZiBOb2RlTGlzdCYmKGU9W10uc2xpY2UuY2FsbChlKSksZSBpbnN0YW5jZW9mIEFycmF5JiZlLmZvckVhY2goZT0+e1widmFuaWxsYVRpbHRcImluIGV8fChlLnZhbmlsbGFUaWx0PW5ldyB0KGUsaSkpfSl9fXJldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudCYmKHdpbmRvdy5WYW5pbGxhVGlsdD10LHQuaW5pdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtdGlsdF1cIikpKSx0fSgpOyJdfQ==
