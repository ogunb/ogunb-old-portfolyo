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

