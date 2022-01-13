const coverSection = document.getElementById('hero')
const menuTrigger = document.getElementById('menu-trigger')
const overRayHeader = document.getElementById('overray-header')


// viewport height取得
let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty('--vh', `${vh}px`)

window.addEventListener('resize',function() {
	let vh = window.innerHeight * 0.01
	document.documentElement.style.setProperty('--vh', `${vh}px`)
},false);


function navClose() {
	overRayHeader.classList.remove('active')
}

window.addEventListener('scroll',function() {
	headerChange()
},false);

// ヘッダーのテキスト色を変更
function headerChange() {
  let heroHeight = coverSection.clientHeight
  let scrollTop = window.pageYOffset
  if(scrollTop < heroHeight) {
    document.body.classList.add('home')
  } else {
    document.body.classList.remove('home')
  }
}

menuTrigger.onclick = function() {
  if(overRayHeader.className === 'active'){
    overRayHeader.classList.remove('active')
  } else {
    overRayHeader.classList.add('active')
  }
};

var scroll = new SmoothScroll('a[href*="#"]', {
  header: '#header'
});

var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  centeredSlidesBounds: false,
  spaceBetween: 0,
  pagination: {
    el: '#swiper-pagination',
  },
  navigation: {
    nextEl: '#swiper-button-next',
    prevEl: '#swiper-button-prev',
  }
})
