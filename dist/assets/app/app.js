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
        buffer32[i] = ((255 * Math.random()) |0) << 24;
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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tTm9pc2UtQmFja2dyb3VuZC0tLS0tLS0tLS0vL1xyXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm9pc2UnKTtcclxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDsgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDt9KTtcclxuXHJcbmZ1bmN0aW9uIG5vaXNlKGN0eCl7XHJcbiAgICBsZXQgdyA9IGN0eC5jYW52YXMud2lkdGg7XHJcbiAgICBsZXQgaCA9IGN0eC5jYW52YXMuaGVpZ2h0O1xyXG4gICAgY29uc3QgbmRhdGEgPSBjdHguY3JlYXRlSW1hZ2VEYXRhKHcsIGgpO1xyXG4gICAgY29uc3QgYnVmZmVyMzIgPSBuZXcgVWludDMyQXJyYXkobmRhdGEuZGF0YS5idWZmZXIpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnVmZmVyMzIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBidWZmZXIzMltpXSA9ICgoMjU1ICogTWF0aC5yYW5kb20oKSkgfDApIDw8IDI0O1xyXG4gICAgfVxyXG4gICAgY3R4LnB1dEltYWdlRGF0YShuZGF0YSwgMCwgMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvb3AoKXtcclxuICAgIGxldCB0b2dnbGUgPSB0cnVlO1xyXG4gICAgdG9nZ2xlID0gIXRvZ2dsZTtcclxuICAgIGlmICh0b2dnbGUpe1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9IFxyXG4gICAgbm9pc2UoY3R4KTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcclxufVxyXG5sb29wKCk7XHJcblxyXG4iXSwiZmlsZSI6ImFwcC5qcyJ9
