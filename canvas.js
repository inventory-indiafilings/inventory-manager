/* ─── NETWORK CANVAS ANIMATION (Login & Welcome) ─── */
function makeNetworkCanvas(canvasId){
  const canvas=document.getElementById(canvasId);
  if(!canvas) return;
  const ctx=canvas.getContext('2d');
  let nodes=[],W,H,animId;
  const NODE_COUNT=80,MAX_DIST=130;
  function resize(){W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight;}
  function init(){resize();nodes=Array.from({length:NODE_COUNT},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-0.5)*0.5,vy:(Math.random()-0.5)*0.5,r:Math.random()*2+1,hue:Math.random()<0.7?186:270,alpha:Math.random()*0.5+0.3}));}
  function draw(){
    ctx.clearRect(0,0,W,H);
    for(let i=0;i<nodes.length;i++){for(let j=i+1;j<nodes.length;j++){const a=nodes[i],b=nodes[j];const dx=a.x-b.x,dy=a.y-b.y,dist=Math.sqrt(dx*dx+dy*dy);if(dist<MAX_DIST){const alpha=(1-dist/MAX_DIST)*0.2;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.strokeStyle=`rgba(0,212,255,${alpha})`;ctx.lineWidth=0.5;ctx.stroke();}}}
    nodes.forEach(n=>{ctx.beginPath();ctx.arc(n.x,n.y,n.r,0,Math.PI*2);ctx.fillStyle=`hsla(${n.hue},100%,70%,${n.alpha})`;ctx.shadowColor=`hsla(${n.hue},100%,70%,0.8)`;ctx.shadowBlur=6;ctx.fill();ctx.shadowBlur=0;});
    nodes.forEach(n=>{n.x+=n.vx;n.y+=n.vy;if(n.x<0||n.x>W)n.vx*=-1;if(n.y<0||n.y>H)n.vy*=-1;});
    animId=requestAnimationFrame(draw);
  }
  init();draw();
  window.addEventListener('resize',()=>{resize();});
}
makeNetworkCanvas('login-canvas');
function initNetworkCanvas(){makeNetworkCanvas('network-canvas');}

/* ─── RESTORE SESSION ON REFRESH ─── (moved after data init) ─── */