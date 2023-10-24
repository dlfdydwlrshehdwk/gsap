// to,from,fromTo 쓸 때
// gsap.to(요소명,{
    // duration : 2, // 애니메이션시간
    // x : 1000, // 애니메이션 액션
    // scrollTrigger : { // 스크롤트리거 쓸거야~
        // trigger : 트리거요소명, // 트리거 요소설정
        // start : "top 30%", // 트리거시작위치 시작스크롤러위치
        // end : "bottom 30%", // 트리거마지막위치 엔드스크롤러위치(토클할때 end부분을 읽고 리버스가진행됨)
        // scrub : true, // 애니메이션 부드럽게 - 스크롤내리고 올리고 둘다 애니적용됨 왕복처리
        // pin : true, // pin 을 true로 하면 sticky효과가 있음 start값에 맞춰 고정이됨 end값이되면 고정해제
        // toggleActions : "play none reverse none", // 시작하는 위치에 따른 애니메이션 어떻게 실행
        // toggleClass : "클래스명", // 토글클래스를 이용하여 트리거가 실행되면 클래스를줌
        // id : 'id명', // 아이디도 줄 수 있음
        // markers : { // 인디케이터보이기 + 색상 및 폰트 들여쓰기 조정가능
        //     startColor: 'orange',
        //     endColor: 'black',
        //     fontSize: '4rem',
        //     indent: 200
        // }
        // markers :true; // 인디케이터 보이기
        // onEnter: () => {console.log("onEnter")}, // 애니가 시작되는 순간 한번
        // onLeave: () => {console.log("onLeave")}, // 애니가 완료되는 순간 한번
        // onEnterBack: () => {console.log("onEnterBack")}, // 애니 밑에서 시작했을때 순간 한번
        // onLeaveBack: () => {console.log("onLeaveBack")}, // 애니 밑에서 위로 나갔을때 순간 한번
        // onUpdate : (self) => {console.log("onUpdate", self.progress.toFixed(3))}, // 애니 진행율 처음0 ~ 1완료 
        // onToggle : (self) => {console.log("onToggle", self.isActive)}, // 애니가 실행중인지 true false
    // }
// })

// 스크롤트리거 따로 만들어 사용할때
// let a = gsap.to('요소',{x:100})
// ScrollTrigger.create({
//     animation : a,// 트윈명 
//     trigger : 트리거될요소명,
//     start : 숫자, 문자, 함수 함수쓸때 return조심,
//     end : start와 같음
//     pin : true,0,1 고정할건지
//     anticipatePin : 핀을 부드럽게 고정시켜주는기능
//     scrub : 애니메이션을 부드럽게 보여줄건지 Boolean,0~4
//     markers : boolean , 함수 {startColor : xx,endColor : xx,fontSize : 'xxpx',fontWeight:'bold',indent:"들여쓰기 숫자"}
//     once : 애니메이션 한번만실행 kill해줌 그러나 애니메이션은 남아있음 토글액션을 play none none none 해준상태
//     pinSpacing : boolean,string 패딩제거 false가 제거
//     toggleClass : 스크롤트리거 활성화할때 실행 string - 트리거에게 클래스를줌 'active', object - {타겟 : '.target',className : 'active'}

// })

// 스크롤트리거를 미디어쿼리처럼 실행하고싶다면... ScrollTrigger.matchMedia()
// ScrollTrigger.matchMedia({
//     "(min-width : xxpx)" : () => {
//         let tween = gsap.timeline()
//         .to('요소',{})

//         scrollTrigger.create() 
//     }
// })