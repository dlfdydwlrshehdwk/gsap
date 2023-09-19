// 스크롤 트리거 1단계 기본

let basic_bx1 = $('.basic1 > div')
let trigger1 = basic_bx1.parent()
let basic_bx2 = $('.basic2 > div')
let trigger2 = basic_bx2.parent()
let basic_bx3 = $('.basic3 > div')
let trigger3 = basic_bx3.parent()
let basic_bx4 = $('.basic4 > div')
let trigger4 = basic_bx4.parent()
let basic_bx5 = $('.basic5 > div')
let trigger5 = basic_bx5.parent()
let basic_bx6 = $('.basic6 > div')
let trigger6 = basic_bx6.parent()

// 기본 이동 + 커지기
gsap.to(basic_bx1, {
    duration : 2, // 애니메이션시간
    x : 500, // x축으로 500px이동
    scale : 2, // 2배크게
    scrollTrigger : {
        trigger : trigger1,
        start: "top 40%",
        end: "bottom 20%",
        // markers : true // 인디케이터 보이기
    }
})
// 기본 커지기 + 토글(end값과 토글액션을 이용)
gsap.to(basic_bx2,{
    duration : 2,
    borderRadius : 100,
    scale : 4,
    scrollTrigger : {
        trigger : trigger2,
        start : "top 50%", // 트리거시작위치 시작스크롤러위치
        end : "bottom 50%",// 트리거마지막위치 엔드스크롤러위치(토클할때 end부분을 읽고 리버스가진행됨)
        toggleActions : "play none reverse none",
        // markers : { // 인디케이터보이기 + 색상 및 폰트 들여쓰기 조정가능
        //     startColor: 'orange',
        //     endColor: 'black',
        //     fontSize: '4rem',
        //     indent: 200
        // }
    }
})
// 기본 scrub
gsap.to(basic_bx3,{
    duration : 2, // scrub이 true일때는 duration보다 end값을 조정하는게 duration을 조정하는거라고 보면됨
    x : 500,
    rotation : 360, // 한바퀴회전
    scrollTrigger : {
        trigger : trigger3,
        start : "top 40%",
        end : "100% 60%", // 뷰포트기준임 
        scrub : true, // 애니메이션 부드럽게 - 스크롤내리고 올리고 둘다 애니적용됨 왕복처리
        // markers : true
    }
})
// 기본 pin
gsap.to(basic_bx4,{
    duration : 2,
    x : 1000,
    scrollTrigger : {
        trigger : trigger4,
        start : "top top",
        end : "100% end", 
        scrub : true, 
        pin : true, // pin 을 true로 하면 sticky효과가 있음 start값에 맞춰 고정이됨 end값이되면 고정해제
        // markers : true
    }
})
// 기본 toggleClass
gsap.to(basic_bx5,{
    duration : 2,
    x : 1000,
    scrollTrigger : {
        trigger : trigger5,
        start : "top top",
        end : "100% end", 
        toggleClass : "on", // 토글클래스를 이용하여 트리거가 실행되면 클래스를줌
        id : 'id', // 아이디도 줄 수 있음
        scrub : true, 
        // markers : true
    }
})
// 기본 callback
gsap.to(basic_bx6,{
    duration : 2,
    x : 1000,
    scrollTrigger : {
        trigger : trigger6,
        start : "top 30%",
        end : "bottom 30%", 
        scrub : true, 
        // markers : true,
        onEnter: () => {console.log("onEnter")}, // 애니가 시작되는 순간 한번
        onLeave: () => {console.log("onLeave")}, // 애니가 완료되는 순간 한번
        onEnterBack: () => {console.log("onEnterBack")}, // 애니 밑에서 시작했을때 순간 한번
        onLeaveBack: () => {console.log("onLeaveBack")}, // 애니 밑에서 위로 나갔을때 순간 한번
        onUpdate : (self) => {console.log("onUpdate", self.progress.toFixed(3))}, // 애니 진행율 처음0 ~ 1완료 
        onToggle : (self) => {console.log("onToggle", self.isActive)}, // 애니가 실행중인지 true false
    }
})

















// 예제 1 가로스크롤
// 가로스크롤 되게하기 - 타임라인 + 그냥 연결하여 to 사용해서 함
// let ex = gsap.timeline({ // 타임라인에 추가할 수 있다!
//     scrollTrigger: {
//       trigger: ".news", // trigger 대상
//       pin: true, // trigger 고정 스티키기능 - 가로스크롤할거면 필수
//       start: "top top", // trigger가 viewport 상단에 닿을때 시작
//       end: "+=1500", // 시작지점에서 500px를 스크롤한 후 끝
//       scrub: 1, // 애니메이션 부드럽게 진행
//     }
//   }).to(".news-target",{ // 1500px만큼 스크롤 내렸을때 left의 값은 -40%이다
//     left : '-40%'
//   });


// 예제 2 스크롤하다가 트리거에 걸리면 텍스트박스 보이게하는거 - 타임라인사용
// let ex2 = gsap.timeline({
//     scrollTrigger:{
//       trigger : ".startbanner",
//       // pin : true, // 활성상태에서 트리거 요소 고정
//       duration : 10000,
//       start : "-=100", // 트리거 상단이 뷰포트 상단에 닿을 때
//       end : "+=200", // 시작부분에서 x px 까지 스크롤 한 후 종료
//       scrub : 1, // 부드러운 스크러빙, 스크롤바를 잡는데 1초가 걸린다.
//     }
//   })

//   ex2.from(".startbanner-txtbx", {  y: 100, opacity : 0 ,duration : 1})

















