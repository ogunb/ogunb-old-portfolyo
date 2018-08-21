//----------Noise-Background----------//
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
        if(window.pageYOffset + 50 > canvas.height){
            body.style.backgroundColor = "var(--bookopus)"
            if (canvas.width > 900){
                logoInner.style.fill = "var(--light)"
                logoOuter.style.stroke = "var(--dark)"
                for(let i = 0; i < links.length; i++){
                    links[i].style.color = "var(--dark)"
                }
            }
        }    else{ /* Default Values */
            body.style.backgroundColor = "var(--light)"
            if (canvas.width > 900){
                logoInner.style.fill = "var(--cta)"
                logoOuter.style.stroke = "var(--dark)"
                for(let i = 0; i < links.length; i++){
                    links[i].style.color = "var(--dark)"
                }
            }
        }
    }
    checkWorks();
    if(window.pageYOffset + contact.scrollHeight - 450  > canvas.height +  contact.scrollHeight ){
        body.style.backgroundColor = "var(--dark)"
        if (canvas.width > 900){
            logoInner.style.fill = "var(--cta)"
            logoOuter.style.stroke = "var(--light)"
            for(let i = 0; i < links.length; i++){
                links[i].style.color = "var(--light)"
            }
        }
    }else if (window.pageYOffset + 200 > canvas.height || window.pageYOffset + contact.scrollHeight - 900  < canvas.height +  contact.scrollHeight){
        checkWorks();
    }
})

let menu = document.querySelector('.mobile-nav--menu')
    
menu.addEventListener('click', () => {
    let logo = document.querySelector('.mobile-nav .logo .c');
    let body = document.querySelector('body');
    let links = document.querySelector('.mobile-nav__links')
    
    menu.classList.toggle('active');
    if (menu.classList.contains('active') === true){
        logo.style.fill = "var(--light)";
        body.style.overflowY = "hidden";
        links.style.opacity = "1"
        links.style.transform = "scale(1)"
    } else{
        logo.style.fill = "var(--cta)"
        body.style.overflowY = "visible";
        links.style.opacity = "0"
        links.style.transform = "scale(1, 0)"
    }
})    