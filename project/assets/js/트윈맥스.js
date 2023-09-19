// function mytween(){
//     gsap.to('타겟요소',애니시간,{
//         각종애니효과, 
//         예를들어,
//         marginLeft : 300,
//         borderRadius : 30,
//         그리고 부가효과,
//         repeat : 3, // 몇회반복할건지(횟수) -1 무한반복
//         repeatDelay : 2, // 반복 지연시간 설정 (초 단위)
//         delay : 2, // 몇초 뒤에 시작할건지 지연시간
//         yoyo : true or false, // 애니메이션을 앞뒤로 반복하여 실행함
//         reversed : true or false, // 애니메이션 역방향에 대한 설정 

//     })
// }

function tweenStaggerTo(){ // 하나씩 불러와 배열화를 시킨모습
	var m0 = document.getElementById("e0");
	var m1 = document.getElementById("e1");
	var m2 = document.getElementById("e2");
	var m3 = document.getElementById("e3");
	var m4 = document.getElementById("e4");
	TweenMax
    .staggerTo([m0, m1, m2, m3, m4], 1, { rotation:180 }, 0.5);	
    //TweenMax.staggerTo([객체1, 객체2, 객체3], 시간, {트윈 모션}, 모션 사이의 딜레이 시간);
}

function tweenStaggerFrom(){
    // console.log($('.tweenbox2')) // 이렇게 해도 배열화가 되기때문
    TweenMax.staggerFrom('.tweenbox2', 1, { // 타겟요소 , 애니시간
        ease: Back.easeOut, // 애니메이션 조건 중 하나
        opacity: 0, // 애니메이션 조건 중 하나
        y: -200, // 애니메이션 조건 중 하나
        delay: 0.2 // 몇초뒤에 시작
    }, 0.2); // 각 애니메이션 간 텀
}

function timelineMax(){
    var timeLine = new TimelineMax(); // 새로운 생성자함수를 만들어주고
    timeLine // 밑에있는 애들을 순서에 맞게 실행 타겟, 시간, { 효과 }
    .to('.tweenbox', 1, { backgroundColor: '#ddd' })
	.to('.tweenbox', 1, { backgroundColor: 'cyan' })
	.to('.tweenbox', 1, { backgroundColor: '#ccc' });
}


// 변수에 애니메이션 집어너어서 사용가능
let action;
action = gsap.to('요소명',2,{
    x : 0,
    color : 'blue'
})
function 대충이름(){
    // tween 제어방법모음
    action.start() // 시작함
    /* 
        action.pause() - 현재위치에서 일시 중지
        action.resume() - 현재위치에서 재시작
        action.restart() - 처음부터 다시 시작

        action.reverse() - 역방향으로 설정 (fromTo에서만되는건가..?)

        isActive()
        if(action.isActive()){ 코드 } - 트윈의 활성화여부 
        
        seek( 숫자 ) - 트윈을 지정한 위치로 이동 설정
        action.seek(3); // 지정한 위치로 이동(3초 위치로)

        timeScale( 숫자 ) - 증감 감속 설정, 기본값1 작으면감속 크면 배속
        action.timeScale(0.5) - 최초속도의 절반느려짐
    */
}