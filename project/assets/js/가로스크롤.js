$(()=>{
    let ex = gsap.timeline({ // 타임라인에 추가할 수 있다!
        scrollTrigger: {
          trigger: ".container", // trigger 대상
          pin: true, // trigger 고정 스티키기능 - 가로스크롤할거면 필수
          start: "top top", // trigger가 viewport 상단에 닿을때 시작
          end: "+=1000", // 시작지점에서 1000px를 스크롤한 후 끝
          scrub: true, // 애니메이션 부드럽게 진행
          markers :{
            startColor :'yellow',
            endColor : 'black',
            fontSize : '4rem',
            indent : 200 // 안쪽(오른쪽끝에서 왼쪽)으로들여쓰기
          },
        //   snap: {
        //     snapTo: "labels", // 타임라인에서 가장 가까운 라벨에 스냅
        //     duration: {min: 0.2, max: 3}, // 최소 0.2 최대 3초 동안
        //     delay: 0.2, // 스냅을 하기 전 0.2초동안 지연
        //     ease: "power1.inOut" // 변화속도
        //   }
        }
      }).to(".slidebx",{
        left : '-50%'
        // opacity : 0,
      });
})