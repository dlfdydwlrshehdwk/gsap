// 1. 애니메이션 미리만들기
let ani1 = gsap.timeline(); // 타임라인을만듦

ani1.to("#sc1 > div", { rotation : 720, scale : 0, borderRadius : 100})
    .to("#sc1 > div", { rotation : 0, scale : 1, borderRadius : 0})

    ScrollTrigger.create({
        animation : ani1,
        trigger : "#sc1",
        start : "top top",
        end : "100%",
        scrub : true,
        pin : true,
        anticipatePin : 1, // 핀 효과를 조금 더 자연스럽게 연출하기 위한 속성 (예상하다)
        // markers : true
    })



let ani2 = gsap.timeline();

ani2
.from(".sc21",{y : -100, autoAlpha :0})
.from(".sc22",{y : 100, autoAlpha :0})
.from(".sc23",{y : -100, autoAlpha :0})

ScrollTrigger.create({
    animation : ani2,
    trigger : "#sc2",
    start : "top top",
    end : "bottom 0%",
    scrub : true,
    pin : true,
    anticipatePin : 1,
    // markers : true
})

let ani3 = gsap.timeline();
ani3
.from(".sc3", {
    autoAlpha : 0,
    y : -100,
    ease : "back.out(4)",
    stagger : { // 단일 애니메이션에서 여러 대상의 시작 시간을 설정, 객체를 포함할 수 있다.
        // each : // 각 애니메이션의 시작 사이값(기본값)
        amount : 3, // 모든 애니메이션의 재생시간 값
        from : "random" // 애니메이션을 시작하는 순서 center - 가운데에서시작, end - 뒤에서시작, edges - 양 사이드에서 시작
    }
})

ScrollTrigger.create({
    animation : ani3,
    trigger : "#sc3",
    start : "top top",
    end : "100%",
    scrub : true,
    pin : true,
    anticipatePin : 1,
    // markers : true
})


let ani4 = gsap.timeline();
ani4.from(".sc4",{
    autoAlpha : 0,
    scale : 5,
    width : '100vw',
    height : '100vh'
})

ScrollTrigger.create({
    animation : ani4,
    trigger : "#sc4",
    start : "top top",
    end : "200%",
    scrub : true,
    pin : true,
    anticipatePin : 1,
    // markers : true
})


let ani5 = gsap.timeline();
ani5
.to(".sc51",{xPercent : 300}, "text") // 동시에 요소를 움직이고 싶다면 '문자열' 랜덤으로 같이적으면 됨
.to(".sc52",{xPercent : -300}, "text")
.to(".sc53",{xPercent : 300}, "text")
.to(".sc54",{xPercent : -300}, "text")

ScrollTrigger.create({
    animation : ani5,
    trigger : "#sc5",
    start : "top top",
    end : "100%",
    scrub : true,
    pin : true,
    anticipatePin : 1,
    // markers : true
})

let ani6 = gsap.timeline();
ani6
.to(".sc6",{scale : 50,duration : 2})
.to(".sc6",{autoAlpha : 0}) // 애니끝나면 투명하게할려고 따로 넣어줌
// 근데 이거넣으니까 이벤트 끝나면 빈공간이 생김 그래서빼놈
ScrollTrigger.create({
    animation : ani6,
    trigger : "#sc6",
    start : "top top",
    end : "200%", // 이건 진짜 %로주니까 이상함 왠진 몰?루
    scrub : true,
    pin : true,
    anticipatePin : 1,
    markers : true
})


let ani7 = gsap.timeline();
ani7
.from(".sc71", {autoAlpha : 0, y : 100},"+=1")
.from(".sc72", {autoAlpha : 0, y : 100},"+=1")
.from(".sc73", {autoAlpha : 0, y : 100},"+=1")
.from(".sc74", {autoAlpha : 0, y : 100},"+=1")
.from(".sc75", {autoAlpha : 0, y : 100},"+=1")
.from(".sc76", {autoAlpha : 0, y : 100},"+=1")
.from(".sc77", {autoAlpha : 0, y : 100},"+=1")
.from(".sc78", {autoAlpha : 0, y : 100},"+=1")
.from(".sc79", {autoAlpha : 0, y : 100},"+=1")
.from(".sc710", {autoAlpha : 0, y : 100},"+=1")

ScrollTrigger.create({
    animation : ani7,
    trigger : "#sc7",
    start : "top top",
    end : "100%",
    scrub : true,
    pin : true,
    anticipatePin : true,
    markers : true
})