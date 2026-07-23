/* Shared behavior for individual project pages: photo lightbox + scroll reveal. */

(function(){
  const box=document.getElementById('photoLightbox');
  const img=document.getElementById('photoLightboxImg');
  if(!box||!img) return;
  function open(src,alt){
    img.src=src;
    img.alt=alt||'';
    box.classList.add('open');
    box.setAttribute('aria-hidden','false');
  }
  function close(){
    box.classList.remove('open');
    box.setAttribute('aria-hidden','true');
    img.src='';
  }
  document.querySelectorAll('img.zoomable').forEach(el=>{
    el.addEventListener('click',()=>open(el.src,el.alt));
  });
  box.querySelectorAll('[data-photo-close]').forEach(el=>el.addEventListener('click',close));
  document.addEventListener('keydown',e=>{if(e.key==='Escape') close();});
})();

const io=new IntersectionObserver((es)=>{
  es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
