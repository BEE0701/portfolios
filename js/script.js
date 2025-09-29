// av-portfolios-box 자체를 pin (스크롤 내려도 박스는 고정)
ScrollTrigger.create({
  pin:".av-portfolios-box",
  trigger: ".av-portfolios",
  start: "top 300 top",
  end: "bottom bottom",   // 박스가 고정되는 구간 길이 (파일 개수에 맞게 조절)
  pinSpacing: false
});

// 파일들 순서대로 보이게
const cards = gsap.utils.toArray(".av-box-portfolio");

cards.forEach((card, i) => {
  gsap.to(card, 
    
    { y: 10, opacity: 0 },
  {
      y: 100, opacity: 1,
      zIndex: i + 4,
      scrollTrigger: {
        trigger: ".av-portfolios",
        start: () => "top100+=" + (i * window.innerHeight),
        end: () => "+20=" + window.innerHeight,
        scrub: true
      }
    }
  );
});



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
});
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
  
};
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
  };
    window.addEventListener('scroll', toggleBtn);

        $('.btnTop').on("click",function(){
        $('html, body').animate({
            scrollTop : 0
        },2000)
    });

});


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
let currentIndex = 0;
let isAnimating = false;

// 카드 위치 업데이트
function updatePositions() {
  portfolios.forEach((card, i) => {
    const order = (i - currentIndex + portfolios.length) % portfolios.length;

    gsap.to(card, {
      y: order * 40,                     // 카드 간격
      scale: order === 0 ? 1 : 0.9,      // 맨 앞 카드만 크게
      opacity: order > 3 ? 0 : 1,        // 4장까지만 보이도록
      zIndex: portfolios.length - order,
      duration: 0.6,
      ease: "power3.out"
    });
  });
}

// 다음 카드
function showNext() {
  if (isAnimating) return;
  isAnimating = true;
  currentIndex = (currentIndex + 1) % portfolios.length;
  updatePositions();
  setTimeout(() => (isAnimating = false), 700);
}

// 이전 카드
function showPrev() {
  if (isAnimating) return;
  isAnimating = true;
  currentIndex = (currentIndex - 1 + portfolios.length) % portfolios.length;
  updatePositions();
  setTimeout(() => (isAnimating = false), 700);
}

// 휠 이벤트
window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    showNext();
  } else {
    showPrev();
  }
}, { passive: true });

// 초기 세팅
updatePositions();







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
