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
