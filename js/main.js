

//banner slider
const swiper = new Swiper('.slider', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  
  });

//banner trailer

const ss1 = document.querySelector('.slider .swiper-wrapper .ss1');
const ss2 = document.querySelector('.slider .swiper-wrapper .ss2');
const ss3 = document.querySelector('.slider .swiper-wrapper .ss3');
const trailerContainer = document.querySelector('.trailer_container');
const videoElement = document.querySelector('.trailer_video video');

ss1.addEventListener('click', () => {
    videoElement.src = "img/Concrete_Utopia_1280720.mp4"; // 여기에 첫 번째 비디오의 경로를 입력하세요.
    trailerContainer.classList.add('active');
});

ss2.addEventListener('click', () => {
    videoElement.src = "img/A_Man_of_Reason_1280720.mp4"; // 여기에 두 번째 비디오의 경로를 입력하세요.
    trailerContainer.classList.add('active');
});

ss3.addEventListener('click', () => {
    videoElement.src = "img/Ransomed_1280720.mp4"; // 여기에 세 번째 비디오의 경로를 입력하세요.
    trailerContainer.classList.add('active');
});

const trailerBtn = document.querySelector('.trailerbtn');

trailerBtn.addEventListener('click',()=>{
  trailerContainer.classList.remove('active');
})


  //movie

  const swiper2 = new Swiper('.swiper-container2', {
    loop: true,
    slidesPerView:4,
    spaceBetween:10,
    breakpoints: {
      
      0: {
        slidesPerView: 1.4,
        spaceBetween: 24
      },
      // 뷰포터의 넓이 >= 0px
      600: {
        slidesPerView: 2,
        spaceBetween: 24
      },
      // 뷰포터의 넓이 >= 600px
      768: {
        slidesPerView: 3,
        spaceBetween: 24
      },
      960: {
        slidesPerView: 4,
        spaceBetween: 24
      }
    }
  
  });

  //movie tab menu
  let movBtn=$('.movie_title ul li')
  let movCont=$('.movie_chart>div')

  movCont.hide().eq(0).show()
  movBtn.click(function(e){
    e.preventDefault()
    let target=$(this)//클릭한 li
    let index=target.index()//클릭한 li의 index번호 추출
    console.log(index)
    movCont.hide().eq(index).show()//모두 지우고 해당 index번호의 슬라이드 보이기
    movBtn.removeClass('active')//모든 li에 active지우기
    target.addClass('active')//클릭한 li에 active넣기
  })

// 공지사항 notice
let tabmenu = $('.notice');
tabmenu.find('ul>li>ul').hide();
tabmenu.find('ul>li.active>ul').show();

tabmenu.find('ul>li>a').click(function(e){
  e.preventDefault();
  let target=$(this);
  //.next()--->나의 바로 아래 동생
  //.nextAll()--> 나의 아래 동생들
  tabmenu.find('ul>li>a').next().hide()
  target.next().show();
  tabmenu.find('ul>li').removeClass('active');
  //.parent() 상위요소(부모)
  //.parents() 상위요소들
  target.parent().addClass('active')

})
