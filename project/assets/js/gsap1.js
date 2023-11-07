// gsap.to() 움직임이 끝나는 점을 지정
gsap.to(".pink", {rotation: 360, x: 100, duration: 1});

// gsap.from() 움직임의 시작 점을 지정
gsap.from(".orange", {rotation: -360, x: -100, duration: 1});

// 시작 점과 끝나는 점을 지정
gsap.fromTo(".green", {x: -100},{rotation: 360, x: 100, duration: 1});

// 멈춰있기
let tl = gsap.timeline({paused : true})
tl
.to('.box.blue' , { x : 250})

$('.btn.play').click(()=>{
  tl.complete()
})