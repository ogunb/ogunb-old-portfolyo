//----------Noise-Background----------//
if(document.querySelector('canvas')){
    let canvas = document.querySelector('.noise');
    let ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {canvas.width = window.innerWidth; canvas.height = window.innerHeight;});

    (function() {
        var buffercanvas = document.createElement('canvas');
        var bufferctx = buffercanvas.getContext('2d');
        var WIDTH = 100;
        var HEIGHT = 100;
        buffercanvas.width = WIDTH;
        buffercanvas.height = HEIGHT;
        buffercanvas.fillStyle = '#000';
    
        function rand(num) {
        return Math.floor(Math.random() * num);
        }
    
        function tvstatic(canvas, ctx, scale) {
        scale = scale || 1;
        var h = canvas.height;
        var w = canvas.width;
    
        bufferctx.clearRect(0, 0, WIDTH, HEIGHT);
        // draw the static on the buffer canvas
        for (var x = 0; x < WIDTH; x+=scale) {
            for (var y = 0; y < HEIGHT; y+=scale) {
            if (Math.round(Math.random()))
                bufferctx.fillRect(x, y, scale, scale);
            }
        }
    
        // repeat it onto the real canvas
        for (var x = 0; x < canvas.width; x += WIDTH) {
            for (var y = 0; y < canvas.height; y += HEIGHT) {
            ctx.drawImage(buffercanvas, x, y);
            }
        }
    
        // draw some horizontal lines on the real canvas
        for (var y = rand(10); y < canvas.height; y += rand(10)) {
            ctx.fillRect(0, y, canvas.width, rand(3));
        }
    
        }
    
        window.tvstatic = tvstatic;
    })();
    window.addEventListener('load', load, false);
    function load() {
        canvas = document.querySelector('.noise');
        ctx = canvas.getContext('2d');
        ctx.fillStyle = '#f7f7f';

        requestAnimationFrame(render);
    }

    function render() {
        requestAnimationFrame(render);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        tvstatic(canvas, ctx, 2);
    }
}

//----------Scroll Effects----------//
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

var VanillaTilt=function(){"use strict";class t{constructor(t,e={}){if(!(t instanceof Node))throw"Can't initialize VanillaTilt because "+t+" is not a Node.";this.width=null,this.height=null,this.left=null,this.top=null,this.transitionTimeout=null,this.updateCall=null,this.updateBind=this.update.bind(this),this.resetBind=this.reset.bind(this),this.element=t,this.settings=this.extendSettings(e),this.reverse=this.settings.reverse?-1:1,this.glare=this.isSettingTrue(this.settings.glare),this.glarePrerender=this.isSettingTrue(this.settings["glare-prerender"]),this.glare&&this.prepareGlare(),this.addEventListeners()}isSettingTrue(t){return""===t||!0===t||1===t}addEventListeners(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.onWindowResizeBind=this.onWindowResizeBind.bind(this),this.element.addEventListener("mouseenter",this.onMouseEnterBind),this.element.addEventListener("mousemove",this.onMouseMoveBind),this.element.addEventListener("mouseleave",this.onMouseLeaveBind),this.glare&&window.addEventListener("resize",this.onWindowResizeBind)}removeEventListeners(){this.element.removeEventListener("mouseenter",this.onMouseEnterBind),this.element.removeEventListener("mousemove",this.onMouseMoveBind),this.element.removeEventListener("mouseleave",this.onMouseLeaveBind),this.glare&&window.removeEventListener("resize",this.onWindowResizeBind)}destroy(){clearTimeout(this.transitionTimeout),null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.reset(),this.removeEventListeners(),this.element.vanillaTilt=null,delete this.element.vanillaTilt,this.element=null}onMouseEnter(t){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()}onMouseMove(t){null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event=t,this.updateCall=requestAnimationFrame(this.updateBind)}onMouseLeave(t){this.setTransition(),this.settings.reset&&requestAnimationFrame(this.resetBind)}reset(){this.event={pageX:this.left+this.width/2,pageY:this.top+this.height/2},this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",this.glare&&(this.glareElement.style.transform="rotate(180deg) translate(-50%, -50%)",this.glareElement.style.opacity="0")}getValues(){let t=(this.event.clientX-this.left)/this.width,e=(this.event.clientY-this.top)/this.height;return t=Math.min(Math.max(t,0),1),e=Math.min(Math.max(e,0),1),{tiltX:(this.reverse*(this.settings.max/2-t*this.settings.max)).toFixed(2),tiltY:(this.reverse*(e*this.settings.max-this.settings.max/2)).toFixed(2),percentageX:100*t,percentageY:100*e,angle:Math.atan2(this.event.clientX-(this.left+this.width/2),-(this.event.clientY-(this.top+this.height/2)))*(180/Math.PI)}}updateElementPosition(){let t=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=t.left,this.top=t.top}update(){let t=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.axis?0:t.tiltY)+"deg) rotateY("+("y"===this.settings.axis?0:t.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.glare&&(this.glareElement.style.transform=`rotate(${t.angle}deg) translate(-50%, -50%)`,this.glareElement.style.opacity=`${t.percentageY*this.settings["max-glare"]/100}`),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:t})),this.updateCall=null}prepareGlare(){if(!this.glarePrerender){const t=document.createElement("div");t.classList.add("js-tilt-glare");const e=document.createElement("div");e.classList.add("js-tilt-glare-inner"),t.appendChild(e),this.element.appendChild(t)}this.glareElementWrapper=this.element.querySelector(".js-tilt-glare"),this.glareElement=this.element.querySelector(".js-tilt-glare-inner"),this.glarePrerender||(Object.assign(this.glareElementWrapper.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden"}),Object.assign(this.glareElement.style,{position:"absolute",top:"50%",left:"50%","pointer-events":"none","background-image":`linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)`,width:`${2*this.element.offsetWidth}px`,height:`${2*this.element.offsetWidth}px`,transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"}))}updateGlareSize(){Object.assign(this.glareElement.style,{width:`${2*this.element.offsetWidth}`,height:`${2*this.element.offsetWidth}`})}onWindowResizeBind(){this.updateGlareSize()}setTransition(){clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.glare&&(this.glareElement.style.transition=`opacity ${this.settings.speed}ms ${this.settings.easing}`),this.transitionTimeout=setTimeout(()=>{this.element.style.transition="";this.glare&&(this.glareElement.style.transition="")},this.settings.speed)}extendSettings(t){let e={reverse:!1,max:35,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:"1",speed:"300",transition:!0,axis:null,glare:!1,"max-glare":1,"glare-prerender":!1,reset:!0},i={};for(var s in e)if(s in t)i[s]=t[s];else if(this.element.hasAttribute("data-tilt-"+s)){let t=this.element.getAttribute("data-tilt-"+s);try{i[s]=JSON.parse(t)}catch(e){i[s]=t}}else i[s]=e[s];return i}static init(e,i){e instanceof Node&&(e=[e]),e instanceof NodeList&&(e=[].slice.call(e)),e instanceof Array&&e.forEach(e=>{"vanillaTilt"in e||(e.vanillaTilt=new t(e,i))})}}return"undefined"!=typeof document&&(window.VanillaTilt=t,t.init(document.querySelectorAll("[data-tilt]"))),t}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInZlbmRvcnMvdmFuaWxsYS10aWx0Lm1pbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyTUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tTm9pc2UtQmFja2dyb3VuZC0tLS0tLS0tLS0vL1xyXG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKSl7XHJcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vaXNlJyk7XHJcbiAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDsgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDt9KTtcclxuXHJcbiAgICAoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGJ1ZmZlcmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIHZhciBidWZmZXJjdHggPSBidWZmZXJjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB2YXIgV0lEVEggPSAxMDA7XHJcbiAgICAgICAgdmFyIEhFSUdIVCA9IDEwMDtcclxuICAgICAgICBidWZmZXJjYW52YXMud2lkdGggPSBXSURUSDtcclxuICAgICAgICBidWZmZXJjYW52YXMuaGVpZ2h0ID0gSEVJR0hUO1xyXG4gICAgICAgIGJ1ZmZlcmNhbnZhcy5maWxsU3R5bGUgPSAnIzAwMCc7XHJcbiAgICBcclxuICAgICAgICBmdW5jdGlvbiByYW5kKG51bSkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBudW0pO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIHR2c3RhdGljKGNhbnZhcywgY3R4LCBzY2FsZSkge1xyXG4gICAgICAgIHNjYWxlID0gc2NhbGUgfHwgMTtcclxuICAgICAgICB2YXIgaCA9IGNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgICAgdmFyIHcgPSBjYW52YXMud2lkdGg7XHJcbiAgICBcclxuICAgICAgICBidWZmZXJjdHguY2xlYXJSZWN0KDAsIDAsIFdJRFRILCBIRUlHSFQpO1xyXG4gICAgICAgIC8vIGRyYXcgdGhlIHN0YXRpYyBvbiB0aGUgYnVmZmVyIGNhbnZhc1xyXG4gICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgV0lEVEg7IHgrPXNjYWxlKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgSEVJR0hUOyB5Kz1zY2FsZSkge1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKSlcclxuICAgICAgICAgICAgICAgIGJ1ZmZlcmN0eC5maWxsUmVjdCh4LCB5LCBzY2FsZSwgc2NhbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLy8gcmVwZWF0IGl0IG9udG8gdGhlIHJlYWwgY2FudmFzXHJcbiAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBjYW52YXMud2lkdGg7IHggKz0gV0lEVEgpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBjYW52YXMuaGVpZ2h0OyB5ICs9IEhFSUdIVCkge1xyXG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGJ1ZmZlcmNhbnZhcywgeCwgeSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAvLyBkcmF3IHNvbWUgaG9yaXpvbnRhbCBsaW5lcyBvbiB0aGUgcmVhbCBjYW52YXNcclxuICAgICAgICBmb3IgKHZhciB5ID0gcmFuZCgxMCk7IHkgPCBjYW52YXMuaGVpZ2h0OyB5ICs9IHJhbmQoMTApKSB7XHJcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCB5LCBjYW52YXMud2lkdGgsIHJhbmQoMykpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHdpbmRvdy50dnN0YXRpYyA9IHR2c3RhdGljO1xyXG4gICAgfSkoKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgbG9hZCwgZmFsc2UpO1xyXG4gICAgZnVuY3Rpb24gbG9hZCgpIHtcclxuICAgICAgICBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm9pc2UnKTtcclxuICAgICAgICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gJyNmN2Y3Zic7XHJcblxyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcclxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgICAgIHR2c3RhdGljKGNhbnZhcywgY3R4LCAyKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8tLS0tLS0tLS0tU2Nyb2xsIEVmZmVjdHMtLS0tLS0tLS0tLy9cclxubGV0IGxhbmRpbmdUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVybycpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbmxldCBsYW5kaW5nVG9wV2lkdGggPSBsYW5kaW5nVG9wLndpZHRoXHJcbmxldCBsYW5kaW5nVG9wSGVpZ2h0ID0gbGFuZGluZ1RvcC5oZWlnaHRcclxubGV0IGxhbmRpbmdCb29rb3B1c09mZnNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3b3JrczEnKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3BcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICAgIGxldCBjYXJkSXRlbSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRpbWdfX2l0ZW0nKSlcclxuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXHJcbiAgICBsZXQgY29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0JylcclxuICAgIGxldCBsb2dvSW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nbyBzdmcgLmMnKVxyXG4gICAgbGV0IGxvZ29PdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvIHN2ZyAuZCcpXHJcbiAgICBsZXQgbGlua3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYgdWwgbGkgYScpKVxyXG5cclxuICAgIGlmKHdpbmRvdy5wYWdlWU9mZnNldCArIDQwMCA+IGxhbmRpbmdUb3BIZWlnaHQpe1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjYXJkSXRlbS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGNhcmRJdGVtW2ldLmNsYXNzTGlzdC5hZGQoJ2NhcmRpbWctLXJldmVhbCcpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2hlY2tXb3Jrcygpe1xyXG4gICAgICAgIGlmKHdpbmRvdy5wYWdlWU9mZnNldCArIDEwMCA+IGxhbmRpbmdUb3BIZWlnaHQpe1xyXG4gICAgICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tYm9va29wdXMpXCJcclxuICAgICAgICAgICAgaWYgKGxhbmRpbmdUb3BXaWR0aCA+IDkwMCl7XHJcbiAgICAgICAgICAgICAgICBsb2dvSW5uZXIuc3R5bGUuZmlsbCA9IFwidmFyKC0tbGlnaHQpXCJcclxuICAgICAgICAgICAgICAgIGxvZ29PdXRlci5zdHlsZS5zdHJva2UgPSBcInZhcigtLWRhcmspXCJcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlua3NbaV0uc3R5bGUuY29sb3IgPSBcInZhcigtLWRhcmspXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICAgZWxzZXsgLyogRGVmYXVsdCBWYWx1ZXMgKi9cclxuICAgICAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLWxpZ2h0KVwiXHJcbiAgICAgICAgICAgIGlmIChsYW5kaW5nVG9wV2lkdGggPiA5MDApe1xyXG4gICAgICAgICAgICAgICAgbG9nb0lubmVyLnN0eWxlLmZpbGwgPSBcInZhcigtLWN0YSlcIlxyXG4gICAgICAgICAgICAgICAgbG9nb091dGVyLnN0eWxlLnN0cm9rZSA9IFwidmFyKC0tZGFyaylcIlxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rc1tpXS5zdHlsZS5jb2xvciA9IFwidmFyKC0tZGFyaylcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hlY2tXb3JrcygpO1xyXG4gICAgaWYod2luZG93LnBhZ2VZT2Zmc2V0ICsgY29udGFjdC5zY3JvbGxIZWlnaHQgLSA0NTAgID4gbGFuZGluZ1RvcEhlaWdodCArICBjb250YWN0LnNjcm9sbEhlaWdodCApe1xyXG4gICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1kYXJrKVwiXHJcbiAgICAgICAgaWYgKGxhbmRpbmdUb3BXaWR0aCA+IDkwMCl7XHJcbiAgICAgICAgICAgIGxvZ29Jbm5lci5zdHlsZS5maWxsID0gXCJ2YXIoLS1jdGEpXCJcclxuICAgICAgICAgICAgbG9nb091dGVyLnN0eWxlLnN0cm9rZSA9IFwidmFyKC0tbGlnaHQpXCJcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGxpbmtzW2ldLnN0eWxlLmNvbG9yID0gXCJ2YXIoLS1saWdodClcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfWVsc2UgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCArIDIwMCA+IGxhbmRpbmdUb3BIZWlnaHQgfHwgd2luZG93LnBhZ2VZT2Zmc2V0ICsgY29udGFjdC5zY3JvbGxIZWlnaHQgLSA5MDAgIDwgbGFuZGluZ1RvcEhlaWdodCArICBjb250YWN0LnNjcm9sbEhlaWdodCl7XHJcbiAgICAgICAgY2hlY2tXb3JrcygpO1xyXG4gICAgfVxyXG59KVxyXG5cclxubGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlLW5hdi0tbWVudScpXHJcbiAgICBcclxubWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGxldCBsb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZS1uYXYgLmxvZ28gLmMnKTtcclxuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgbGV0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZS1uYXZfX2xpbmtzJyk7XHJcbiAgICBcclxuICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcblxyXG4gICAgaWYgKG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgbG9nby5zdHlsZS5maWxsID0gXCJ2YXIoLS1saWdodClcIjtcclxuICAgICAgICBib2R5LnN0eWxlLm92ZXJmbG93WSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgbGlua3Muc3R5bGUub3BhY2l0eSA9IFwiMVwiXHJcbiAgICAgICAgbGlua3Muc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgxKVwiXHJcbiAgICB9IGVsc2V7XHJcbiAgICAgICAgY2xvc2VUYWIoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNsb3NlVGFiKCl7XHJcbiAgICAgICAgbG9nby5zdHlsZS5maWxsID0gXCJ2YXIoLS1jdGEpXCJcclxuICAgICAgICBib2R5LnN0eWxlLm92ZXJmbG93WSA9IFwidmlzaWJsZVwiO1xyXG4gICAgICAgIGxpbmtzLnN0eWxlLm9wYWNpdHkgPSBcIjBcIlxyXG4gICAgICAgIGxpbmtzLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMSwgMClcIlxyXG4gICAgfVxyXG4gICAgbGlua3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSl7XHJcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGNsb3NlVGFiKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcbmxldCBhYm91dFRyaURlc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQtLWRlc2t0b3AnKVxyXG5sZXQgYWJvdXRUcmlNb2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQtLW1vYmlsZScpXHJcbiAgICBcclxuYWJvdXRUcmlEZXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlbkFib3V0KTsgXHJcbmFib3V0VHJpTW9iLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgb3BlbkFib3V0KCk7XHJcbiAgICBib2R5T3ZlcmZsb3coKTtcclxufSk7IFxyXG5cclxuZnVuY3Rpb24gb3BlbkFib3V0KCkge1xyXG4gICAgbGV0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nbyBzdmcgLmMnKTtcclxuICAgIGxldCBhYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dCcpO1xyXG4gICAgbGV0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0X19jbG9zZScpO1xyXG4gICAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnYWJvdXQtLWFjdGl2ZScpO1xyXG5cclxuICAgIGlmIChhYm91dC5jbGFzc0xpc3QuY29udGFpbnMoJ2Fib3V0LS1hY3RpdmUnKSA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgYWJvdXRUcmlEZXNrLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodCcpXHJcbiAgICAgICAgbG9nby5zdHlsZS5maWxsID0gXCJ2YXIoLS1saWdodClcIjtcclxuICAgIH0gZWxzZXtcclxuICAgICAgICBsb2dvLnN0eWxlLmZpbGwgPSBcInZhcigtLWN0YSlcIlxyXG4gICAgICAgIGFib3V0VHJpRGVzay5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHQnKVxyXG4gICAgfVxyXG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBhYm91dC5jbGFzc0xpc3QucmVtb3ZlKCdhYm91dC0tYWN0aXZlJyk7XHJcbiAgICAgICAgbG9nby5zdHlsZS5maWxsID0gXCJ2YXIoLS1jdGEpXCJcclxuICAgICAgICBhYm91dFRyaURlc2suY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0JylcclxuICAgIH0pXHJcbn1cclxuZnVuY3Rpb24gYm9keU92ZXJmbG93KCl7XHJcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgIGxldCBhYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dCcpO1xyXG4gICAgbGV0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0X19jbG9zZScpO1xyXG5cclxuICAgIGlmIChhYm91dC5jbGFzc0xpc3QuY29udGFpbnMoJ2Fib3V0LS1hY3RpdmUnKSA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvd1ggPSBcImhpZGRlblwiXHJcbiAgICB9IGVsc2V7XHJcbiAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvd1ggPSBcInZpc2libGVcIlxyXG4gICAgfVxyXG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBib2R5LnN0eWxlLm92ZXJmbG93WCA9IFwidmlzaWJsZVwiXHJcbiAgICB9KVxyXG59XHJcbiIsInZhciBWYW5pbGxhVGlsdD1mdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2NsYXNzIHR7Y29uc3RydWN0b3IodCxlPXt9KXtpZighKHQgaW5zdGFuY2VvZiBOb2RlKSl0aHJvd1wiQ2FuJ3QgaW5pdGlhbGl6ZSBWYW5pbGxhVGlsdCBiZWNhdXNlIFwiK3QrXCIgaXMgbm90IGEgTm9kZS5cIjt0aGlzLndpZHRoPW51bGwsdGhpcy5oZWlnaHQ9bnVsbCx0aGlzLmxlZnQ9bnVsbCx0aGlzLnRvcD1udWxsLHRoaXMudHJhbnNpdGlvblRpbWVvdXQ9bnVsbCx0aGlzLnVwZGF0ZUNhbGw9bnVsbCx0aGlzLnVwZGF0ZUJpbmQ9dGhpcy51cGRhdGUuYmluZCh0aGlzKSx0aGlzLnJlc2V0QmluZD10aGlzLnJlc2V0LmJpbmQodGhpcyksdGhpcy5lbGVtZW50PXQsdGhpcy5zZXR0aW5ncz10aGlzLmV4dGVuZFNldHRpbmdzKGUpLHRoaXMucmV2ZXJzZT10aGlzLnNldHRpbmdzLnJldmVyc2U/LTE6MSx0aGlzLmdsYXJlPXRoaXMuaXNTZXR0aW5nVHJ1ZSh0aGlzLnNldHRpbmdzLmdsYXJlKSx0aGlzLmdsYXJlUHJlcmVuZGVyPXRoaXMuaXNTZXR0aW5nVHJ1ZSh0aGlzLnNldHRpbmdzW1wiZ2xhcmUtcHJlcmVuZGVyXCJdKSx0aGlzLmdsYXJlJiZ0aGlzLnByZXBhcmVHbGFyZSgpLHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKX1pc1NldHRpbmdUcnVlKHQpe3JldHVyblwiXCI9PT10fHwhMD09PXR8fDE9PT10fWFkZEV2ZW50TGlzdGVuZXJzKCl7dGhpcy5vbk1vdXNlRW50ZXJCaW5kPXRoaXMub25Nb3VzZUVudGVyLmJpbmQodGhpcyksdGhpcy5vbk1vdXNlTW92ZUJpbmQ9dGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpLHRoaXMub25Nb3VzZUxlYXZlQmluZD10aGlzLm9uTW91c2VMZWF2ZS5iaW5kKHRoaXMpLHRoaXMub25XaW5kb3dSZXNpemVCaW5kPXRoaXMub25XaW5kb3dSZXNpemVCaW5kLmJpbmQodGhpcyksdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsdGhpcy5vbk1vdXNlRW50ZXJCaW5kKSx0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMub25Nb3VzZU1vdmVCaW5kKSx0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIix0aGlzLm9uTW91c2VMZWF2ZUJpbmQpLHRoaXMuZ2xhcmUmJndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5vbldpbmRvd1Jlc2l6ZUJpbmQpfXJlbW92ZUV2ZW50TGlzdGVuZXJzKCl7dGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsdGhpcy5vbk1vdXNlRW50ZXJCaW5kKSx0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMub25Nb3VzZU1vdmVCaW5kKSx0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIix0aGlzLm9uTW91c2VMZWF2ZUJpbmQpLHRoaXMuZ2xhcmUmJndpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5vbldpbmRvd1Jlc2l6ZUJpbmQpfWRlc3Ryb3koKXtjbGVhclRpbWVvdXQodGhpcy50cmFuc2l0aW9uVGltZW91dCksbnVsbCE9PXRoaXMudXBkYXRlQ2FsbCYmY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGVDYWxsKSx0aGlzLnJlc2V0KCksdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpLHRoaXMuZWxlbWVudC52YW5pbGxhVGlsdD1udWxsLGRlbGV0ZSB0aGlzLmVsZW1lbnQudmFuaWxsYVRpbHQsdGhpcy5lbGVtZW50PW51bGx9b25Nb3VzZUVudGVyKHQpe3RoaXMudXBkYXRlRWxlbWVudFBvc2l0aW9uKCksdGhpcy5lbGVtZW50LnN0eWxlLndpbGxDaGFuZ2U9XCJ0cmFuc2Zvcm1cIix0aGlzLnNldFRyYW5zaXRpb24oKX1vbk1vdXNlTW92ZSh0KXtudWxsIT09dGhpcy51cGRhdGVDYWxsJiZjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZUNhbGwpLHRoaXMuZXZlbnQ9dCx0aGlzLnVwZGF0ZUNhbGw9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlQmluZCl9b25Nb3VzZUxlYXZlKHQpe3RoaXMuc2V0VHJhbnNpdGlvbigpLHRoaXMuc2V0dGluZ3MucmVzZXQmJnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJlc2V0QmluZCl9cmVzZXQoKXt0aGlzLmV2ZW50PXtwYWdlWDp0aGlzLmxlZnQrdGhpcy53aWR0aC8yLHBhZ2VZOnRoaXMudG9wK3RoaXMuaGVpZ2h0LzJ9LHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm09XCJwZXJzcGVjdGl2ZShcIit0aGlzLnNldHRpbmdzLnBlcnNwZWN0aXZlK1wicHgpIHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKSBzY2FsZTNkKDEsIDEsIDEpXCIsdGhpcy5nbGFyZSYmKHRoaXMuZ2xhcmVFbGVtZW50LnN0eWxlLnRyYW5zZm9ybT1cInJvdGF0ZSgxODBkZWcpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiLHRoaXMuZ2xhcmVFbGVtZW50LnN0eWxlLm9wYWNpdHk9XCIwXCIpfWdldFZhbHVlcygpe2xldCB0PSh0aGlzLmV2ZW50LmNsaWVudFgtdGhpcy5sZWZ0KS90aGlzLndpZHRoLGU9KHRoaXMuZXZlbnQuY2xpZW50WS10aGlzLnRvcCkvdGhpcy5oZWlnaHQ7cmV0dXJuIHQ9TWF0aC5taW4oTWF0aC5tYXgodCwwKSwxKSxlPU1hdGgubWluKE1hdGgubWF4KGUsMCksMSkse3RpbHRYOih0aGlzLnJldmVyc2UqKHRoaXMuc2V0dGluZ3MubWF4LzItdCp0aGlzLnNldHRpbmdzLm1heCkpLnRvRml4ZWQoMiksdGlsdFk6KHRoaXMucmV2ZXJzZSooZSp0aGlzLnNldHRpbmdzLm1heC10aGlzLnNldHRpbmdzLm1heC8yKSkudG9GaXhlZCgyKSxwZXJjZW50YWdlWDoxMDAqdCxwZXJjZW50YWdlWToxMDAqZSxhbmdsZTpNYXRoLmF0YW4yKHRoaXMuZXZlbnQuY2xpZW50WC0odGhpcy5sZWZ0K3RoaXMud2lkdGgvMiksLSh0aGlzLmV2ZW50LmNsaWVudFktKHRoaXMudG9wK3RoaXMuaGVpZ2h0LzIpKSkqKDE4MC9NYXRoLlBJKX19dXBkYXRlRWxlbWVudFBvc2l0aW9uKCl7bGV0IHQ9dGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO3RoaXMud2lkdGg9dGhpcy5lbGVtZW50Lm9mZnNldFdpZHRoLHRoaXMuaGVpZ2h0PXRoaXMuZWxlbWVudC5vZmZzZXRIZWlnaHQsdGhpcy5sZWZ0PXQubGVmdCx0aGlzLnRvcD10LnRvcH11cGRhdGUoKXtsZXQgdD10aGlzLmdldFZhbHVlcygpO3RoaXMuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm09XCJwZXJzcGVjdGl2ZShcIit0aGlzLnNldHRpbmdzLnBlcnNwZWN0aXZlK1wicHgpIHJvdGF0ZVgoXCIrKFwieFwiPT09dGhpcy5zZXR0aW5ncy5heGlzPzA6dC50aWx0WSkrXCJkZWcpIHJvdGF0ZVkoXCIrKFwieVwiPT09dGhpcy5zZXR0aW5ncy5heGlzPzA6dC50aWx0WCkrXCJkZWcpIHNjYWxlM2QoXCIrdGhpcy5zZXR0aW5ncy5zY2FsZStcIiwgXCIrdGhpcy5zZXR0aW5ncy5zY2FsZStcIiwgXCIrdGhpcy5zZXR0aW5ncy5zY2FsZStcIilcIix0aGlzLmdsYXJlJiYodGhpcy5nbGFyZUVsZW1lbnQuc3R5bGUudHJhbnNmb3JtPWByb3RhdGUoJHt0LmFuZ2xlfWRlZykgdHJhbnNsYXRlKC01MCUsIC01MCUpYCx0aGlzLmdsYXJlRWxlbWVudC5zdHlsZS5vcGFjaXR5PWAke3QucGVyY2VudGFnZVkqdGhpcy5zZXR0aW5nc1tcIm1heC1nbGFyZVwiXS8xMDB9YCksdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwidGlsdENoYW5nZVwiLHtkZXRhaWw6dH0pKSx0aGlzLnVwZGF0ZUNhbGw9bnVsbH1wcmVwYXJlR2xhcmUoKXtpZighdGhpcy5nbGFyZVByZXJlbmRlcil7Y29uc3QgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3QuY2xhc3NMaXN0LmFkZChcImpzLXRpbHQtZ2xhcmVcIik7Y29uc3QgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2UuY2xhc3NMaXN0LmFkZChcImpzLXRpbHQtZ2xhcmUtaW5uZXJcIiksdC5hcHBlbmRDaGlsZChlKSx0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodCl9dGhpcy5nbGFyZUVsZW1lbnRXcmFwcGVyPXRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXRpbHQtZ2xhcmVcIiksdGhpcy5nbGFyZUVsZW1lbnQ9dGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtdGlsdC1nbGFyZS1pbm5lclwiKSx0aGlzLmdsYXJlUHJlcmVuZGVyfHwoT2JqZWN0LmFzc2lnbih0aGlzLmdsYXJlRWxlbWVudFdyYXBwZXIuc3R5bGUse3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix0b3A6XCIwXCIsbGVmdDpcIjBcIix3aWR0aDpcIjEwMCVcIixoZWlnaHQ6XCIxMDAlXCIsb3ZlcmZsb3c6XCJoaWRkZW5cIn0pLE9iamVjdC5hc3NpZ24odGhpcy5nbGFyZUVsZW1lbnQuc3R5bGUse3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix0b3A6XCI1MCVcIixsZWZ0OlwiNTAlXCIsXCJwb2ludGVyLWV2ZW50c1wiOlwibm9uZVwiLFwiYmFja2dyb3VuZC1pbWFnZVwiOmBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNTUsMjU1LDI1NSwwKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwxKSAxMDAlKWAsd2lkdGg6YCR7Mip0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGh9cHhgLGhlaWdodDpgJHsyKnRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aH1weGAsdHJhbnNmb3JtOlwicm90YXRlKDE4MGRlZykgdHJhbnNsYXRlKC01MCUsIC01MCUpXCIsXCJ0cmFuc2Zvcm0tb3JpZ2luXCI6XCIwJSAwJVwiLG9wYWNpdHk6XCIwXCJ9KSl9dXBkYXRlR2xhcmVTaXplKCl7T2JqZWN0LmFzc2lnbih0aGlzLmdsYXJlRWxlbWVudC5zdHlsZSx7d2lkdGg6YCR7Mip0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGh9YCxoZWlnaHQ6YCR7Mip0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGh9YH0pfW9uV2luZG93UmVzaXplQmluZCgpe3RoaXMudXBkYXRlR2xhcmVTaXplKCl9c2V0VHJhbnNpdGlvbigpe2NsZWFyVGltZW91dCh0aGlzLnRyYW5zaXRpb25UaW1lb3V0KSx0aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbj10aGlzLnNldHRpbmdzLnNwZWVkK1wibXMgXCIrdGhpcy5zZXR0aW5ncy5lYXNpbmcsdGhpcy5nbGFyZSYmKHRoaXMuZ2xhcmVFbGVtZW50LnN0eWxlLnRyYW5zaXRpb249YG9wYWNpdHkgJHt0aGlzLnNldHRpbmdzLnNwZWVkfW1zICR7dGhpcy5zZXR0aW5ncy5lYXNpbmd9YCksdGhpcy50cmFuc2l0aW9uVGltZW91dD1zZXRUaW1lb3V0KCgpPT57dGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zaXRpb249XCJcIjt0aGlzLmdsYXJlJiYodGhpcy5nbGFyZUVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbj1cIlwiKX0sdGhpcy5zZXR0aW5ncy5zcGVlZCl9ZXh0ZW5kU2V0dGluZ3ModCl7bGV0IGU9e3JldmVyc2U6ITEsbWF4OjM1LHBlcnNwZWN0aXZlOjFlMyxlYXNpbmc6XCJjdWJpYy1iZXppZXIoLjAzLC45OCwuNTIsLjk5KVwiLHNjYWxlOlwiMVwiLHNwZWVkOlwiMzAwXCIsdHJhbnNpdGlvbjohMCxheGlzOm51bGwsZ2xhcmU6ITEsXCJtYXgtZ2xhcmVcIjoxLFwiZ2xhcmUtcHJlcmVuZGVyXCI6ITEscmVzZXQ6ITB9LGk9e307Zm9yKHZhciBzIGluIGUpaWYocyBpbiB0KWlbc109dFtzXTtlbHNlIGlmKHRoaXMuZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJkYXRhLXRpbHQtXCIrcykpe2xldCB0PXRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRpbHQtXCIrcyk7dHJ5e2lbc109SlNPTi5wYXJzZSh0KX1jYXRjaChlKXtpW3NdPXR9fWVsc2UgaVtzXT1lW3NdO3JldHVybiBpfXN0YXRpYyBpbml0KGUsaSl7ZSBpbnN0YW5jZW9mIE5vZGUmJihlPVtlXSksZSBpbnN0YW5jZW9mIE5vZGVMaXN0JiYoZT1bXS5zbGljZS5jYWxsKGUpKSxlIGluc3RhbmNlb2YgQXJyYXkmJmUuZm9yRWFjaChlPT57XCJ2YW5pbGxhVGlsdFwiaW4gZXx8KGUudmFuaWxsYVRpbHQ9bmV3IHQoZSxpKSl9KX19cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50JiYod2luZG93LlZhbmlsbGFUaWx0PXQsdC5pbml0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS10aWx0XVwiKSkpLHR9KCk7Il19
