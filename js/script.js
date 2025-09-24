$(function(){
  let lastScrollY = 0;
  $(window).on("scroll",function(){
    let currentScroll = $(this).scrollTop();
    if(currentScroll > lastScrollY){
      $("header").slideUp(300)
    }else{
      $("header").slideDown(300)
    }
  })
})
// 1) 랜덤 흩어짐 값 적용
document.querySelectorAll('.cell img').forEach(img => {
  const tx = (Math.random() - 0.5) * 80;  // -40 ~ +40vw
  const ty = (Math.random() - 0.5) * 80;  // -30 ~ +30vh
  const rot = (Math.random() - 0.5) * 60; // -30 ~ +30deg
  img.style.setProperty('--tx', `${tx}vw`);
  img.style.setProperty('--ty', `${ty}vh`);
  img.style.setProperty('--rot', `${rot}deg`);
});

// 2) 스크롤에 따라 aligned 토글
const section = document.querySelector('.firstSec');
const container = section.querySelector('.container');
const ALIGN_TRIGGER = 0;
const TRIGGER = 0.1; // 뷰포트 높이의 50% 지점

function onScroll() {
  const rect = container.getBoundingClientRect();
  section.classList.toggle('aligned', rect.top <= -ALIGN_TRIGGER);
  
}
window.addEventListener('scroll', onScroll);
onScroll();





    document.addEventListener('DOMContentLoaded', () => {   
  const btnTop = document.querySelector('.btnTop');
  
  function toggleBtn() {
    if (window.scrollY > 3000) {
      btnTop.classList.remove('oacityEffect');
    } else {
      btnTop.classList.add('oacityEffect');
    }
  }
    window.addEventListener('scroll', toggleBtn);

        $('.btnTop').on("click",function(){
        $('html, body').animate({
            scrollTop : 0
        },2000)
    });

})


document.querySelectorAll(".portfolioImg img").forEach(img => {
  const px = (Math.random() - 0.5) * 80;
  const py = (Math.random() - 0.1) * 100;
  const rotP = (Math.random() -0.1) * 60;
img.style.setProperty('--tx', `${px}vw`);
img.style.setProperty('--ty', `${py}vh`);
img.style.setProperty('--rot', `${rotP}deg`);
});

  
const PORTFOLIO_TRIGGER = 1200; // 포트폴리오 정렬 지점(px)
const firstSecImg = document.querySelector('.firstSecImg');




const portfolios = document.querySelectorAll(".av-box-portfolio");
let current = 0;

// 기본 카드 크기
const baseWidth = 550;
const baseHeight = 300;

// 랜덤 오프셋 저장 (-15px ~ +15px)
const randomOffsets = Array.from({ length: portfolios.length }, () =>
  Math.floor(Math.random() * 30 - 15)
);


function updatePositions() {
  portfolios.forEach((el, i) => {
    let order = (i - current + portfolios.length) % portfolios.length;

    // 기본 크기
    let width = baseWidth;
    let height = baseHeight;

    // 맨 앞 카드만 20px 더 크게
    if (order === -1) {
      width += 60;
      height += 280;
      let height = baseHeight + (4 - order) * 300; // 뒤로 갈수록 100px씩 줄어듦
    }
    
    // 랜덤 높이 편차 적용
    let offsetY = randomOffsets[i];
    el.style.width = width + "px";
    el.style.height = height + "px";
    el.style.transform = `translate3d(-50%, ${offsetY}px, 0)`;
    el.style.zIndex = portfolios.length - order;
    el.style.opacity = order > 4 ? "0" : "1";

    // 카드마다 다른 테두리 색
  
  });
}



function showNext() {
  current = (current + 1) % portfolios.length;
  updatePositions();
}

function showPrev() {
  current = (current - 1 + portfolios.length) % portfolios.length;
  updatePositions();
}

let isScrolling = false;
window.addEventListener("wheel", (e) => {
  if (isScrolling) return;
  isScrolling = true;

  if (e.deltaY > 1) {
    showNext(200);
  } else {  
    showPrev(200);
  }

  setTimeout(() => {
    isScrolling = false;
  }, 500);
});

// 초기 배치
updatePositions();

gsap.registerPlugin(ScrollTrigger);

// av-portfolios-box 자체를 pin (스크롤 내려도 박스는 고정)
ScrollTrigger.create({
  trigger: ".av-portfolios",
  start: "top top",
  end: "+=400%",   // 박스가 고정되는 구간 길이 (파일 개수에 맞게 조절)
  pin: ".av-portfolios-box",
  pinSpacing: true
});

// 파일들 순서대로 보이게
const cards = gsap.utils.toArray(".av-box-portfolio");

cards.forEach((card, i) => {
  gsap.to(card, {
    scrollTrigger: {
      trigger: ".av-portfolios",
      start: () => "top top+=" + (i * window.innerHeight * 0.8),
      end: () => "+=" + window.innerHeight * 0.8,
      scrub: true
    },
    opacity: 1,
    y: 0,
    zIndex: i + 5,
    duration: 1
  });
});
  AOS.init();

  
$(document).ready(function(){
 
  function scrollDisable(){ // body 스크롤 비활성화
 $(".about").addClass('scroll-disable').on('scroll touchmove mousewheel', function(e){
      e.preventDefault();
 });
}
function scrollAble(){ // body 스크롤 활성화
 $(".about").removeClass('scroll-disable').off('scroll touchmove mousewheel');
}
 $(".introduction").click(function(){
    $(this).find(".modal").toggleClass("addModal")
    if($(".modal").hasClass("addModal")){
      scrollDisable();
    }else{
      scrollAble();
    }

  })
    
 $(".aboutIcon  ").click(function(){
    $(this).find(".modal").toggleClass("addModal");
     $(".aboutIcon").not(this).find(".modal").removeClass("addModal");
    if($(".modal").hasClass("addModal")){
      scrollDisable();
    }else{
      scrollAble();
    }

  })
  
 
}) //jquery end



