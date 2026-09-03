const btn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav-links');
if(btn&&nav){btn.addEventListener('click',()=>{nav.classList.toggle('open');btn.setAttribute('aria-expanded',nav.classList.contains('open'))})}
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>nav&&nav.classList.remove('open')));

const modal=document.getElementById('carousel-modal');
const modalTitle=document.getElementById('carousel-modal-title');
const modalScroll=document.getElementById('carousel-modal-scroll');
function closeModal(){if(!modal)return;modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');if(modalScroll)modalScroll.innerHTML='';}
function openCarousel(button){if(!modal||!modalScroll)return;const slug=button.dataset.carousel;const pages=Number(button.dataset.pages||0);const title=button.dataset.title||'Carousel';modalTitle.textContent=title;modalScroll.innerHTML='';for(let i=1;i<=pages;i++){const img=document.createElement('img');img.loading=i<3?'eager':'lazy';img.alt=`${title}, slide ${i} of ${pages}`;img.src=`assets/carousels/${slug}/${String(i).padStart(2,'0')}.webp`;modalScroll.appendChild(img);}modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');modalScroll.scrollTop=0;}
document.querySelectorAll('[data-carousel]').forEach(b=>b.addEventListener('click',()=>openCarousel(b)));
document.querySelectorAll('[data-close-modal]').forEach(b=>b.addEventListener('click',closeModal));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
