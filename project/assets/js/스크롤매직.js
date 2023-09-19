
let wH = $(window).height()
console.log(wH)


// 스크롤매직을 이용한 이미지 시퀀스
function sq(trele,pinele,start,end,target){


// 1. 빈배열을 만들어서 배열안에 이미지 소스들을 넣어줌 for문활용했음
let image = [] 
// TweenMax는 모든 객체의 속성을 구분할 수 있다. 이 객체를 사용하여 배열을 순환한다
let obj = { curimg : 0 }
for ( let i = start; i < end ; i++ ){
    image.push(`./assets/images/sequence/sequence_${i}.jpg`)
}
// 2. 컨트롤러 생성 - 왜하는지모름
let controller = new ScrollMagic.Controller();

// 3. 애니메이션 오브젝트생성
let tween = TweenMax.to(obj,0.3,{ // 트윈맥스.to( 요소, 시간 ,{ 속성들 }) 근데 여기선 시간 안먹는듯? 다똑같음 스크롤이라그런가
    curimg : image.length - 1, // 애니메이트 속성 curImg 이미지 수로 이동 1 - 175
    roundProps : "curimg", // 배열 인덱스로 사용할 수 있도록 정수만 사용한다는데 뭔지모름
    repeat :0, // 반복할건지 ? 안할거라 0 할거면 숫자 
    immediateRender : false, // 첫번째 이미지 자동 로드할건지?
    ease: Linear.easeNone, // 이징 : 일정하게
    // offset : 150, // 트리거에서 150px밑에서 실행 애니메이션 지연 느낌 
    // duration : 200, // pin이용할거면 duration 지정 근데 잘안되는걸로봐서 scene에서 정하는거같음
    onUpdate : function(){ // 이미지 경로를 업데이트해주나봄 첨봄
        target.attr('src',image[obj.curimg])
    },
    onComplete : ()=>{
        target.css({display : 'none'})
    }
})

// 4. Scene object 생성 - 짜놓은 애니메이션을 실행하기위한 셋팅
let scene = new ScrollMagic.Scene({
    triggerElement : trele, // 트리거 요소명 - 이벤트시작지점
    duration : wH, // 이벤트 끝나는지점 설정 단순숫자 300 -> 300px아래 지점, %단위 '50%' 요소의 50%지점
    triggerHook: 0 // 트리거 위치 조정 0 맨위 기본값 화면중앙 
})
.setTween(tween) // 애니메이션 오브젝트 tween을 장착
.setPin(pinele , {pushFollowers : false}) 
// 요소 고정가능하다고함 특정지점이후로는 따라오지않게 하려면 속성에서 duration지정
// pushFollowers : false 하면 핀-스페이서 안생긴다고함
.addTo(controller) // 컨트롤러 장착 - 무슨역할인지모름
// .addIndicators(); // trigger위치 표시

}


// sq("#trigger1","#pin1",1,176)





// 먼저해볼거 -> 이미지구역1 - 빈공간100vh - 이미지구역2 - 빈공간100vh - 이미지구역3 - 빈공간100vh

// 컨트롤러를 생성 - 트윈생성( sqimg를 보이게한 후에! sq함수호출 ) - 컨트롤러셋팅
let controller2 = new ScrollMagic.Controller();

let tween_on = TweenMax.to('.sqimg1',1,{
    display : 'block',
    onComplete : sq("#trigger1","#pin1",1,176,$('.sqimg1'))
});

let scene = new ScrollMagic.Scene({
    triggerElement : "#trigger1",
    duration : wH,
    triggerHook : 0.0
})
.setTween(tween_on)
.addTo(controller2)
// .addIndicators({
//     name : 'on!'
// })

//  다시해봄 이번엔 2구역에
let controller3 = new ScrollMagic.Controller();

let tween_on2 = TweenMax.to('.sqimg2',1,{
    display : 'block',
    onComplete : sq("#trigger2","#pin2",176,351,$('.sqimg2'))
});

let scene2 = new ScrollMagic.Scene({
    triggerElement : "#trigger2",
    duration : wH,
    triggerHook : 0.0
})
.setTween(tween_on2)
.addTo(controller3)
// .addIndicators({
//     name : 'on!2'
// })

//  다시해봄 이번엔 3구역에
let controller4 = new ScrollMagic.Controller();

let tween_on3 = TweenMax.to('.sqimg3',1,{
    display : 'block',
    // delay : 0, // 주면 휠 2 3 번정도 늦게 시작됨
    onComplete : sq("#trigger3","#pin3",351,526,$('.sqimg3'))
});

let scene3 = new ScrollMagic.Scene({
    triggerElement : "#trigger3",
    duration : wH,
    triggerHook : 0
})
.setTween(tween_on3)
.addTo(controller4)
// .addIndicators({
//     name : 'on!3'
// })






// 위 스크롤 시퀀스 작업중

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////// 경  계  선 ///////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
 
// 아래 텍스트 스크롤 작업중

function initColor (target){ // 타겟의 다른 형제요소들의 color 를 수정
    target.css({color : '#f3f3f3'})
}

function fixbx(target){ // 박스멈춰!
    let controller = new ScrollMagic.Controller();
    let tween = TweenMax.to(target, .001, { // 요소, 애니시간, 속성
        onStart : ()=>{console.log('박스멈춰!')},
        onUpdate : ()=>{},
	});
    let scene = new ScrollMagic.Scene({
		triggerElement: target,
		duration:'100%',// 스크롤 길이 조정 - 요소위치가 기준 - 소수점안됨
        triggerHook : 0 // 뷰포트기준 트리거위치 소수점됨
	})
	.setTween(tween)
	.addTo(controller)
    .setPin(target) // 핀플로워안쓰는게낫다
	.addIndicators(
        {name : '박스멈춰!'}
    );
}
fixbx('#trigger10') // 박스가 멈추면 스크롤이 안내려감 

// 나의시도
$(window).scroll(function(){
    // 윈도우 스크롤값
    let wH = $(window).scrollTop()
    // dom에서 윗대가리값 일방적으로 7698 끝나면 8981
    let a = $('#trigger10').offset().top
    let b = wH - a
    let c = $('#trigger10').height() // 변하진않는듯
    let d = $('.page3').offset().top
    let e = a - d;
    console.log(wH,a,b,c,d,e)
    if(b == 0){
        // 여기가 1차조건 = 박스멈춰! 가 되는 구역
        if(e > 0 && e < c / 3 * 1){
            // 여기가 시작후 첫글씨색바뀌어야 되는부분
            // console.log('첫글씨바낌')
            $('.t1 .txt1').siblings().removeClass('on')
            $('.t1 .txt1').addClass('on')
        }
        else if(e > c / 3 * 1 && e < c / 3 * 2){
            // 첫글씨가 회색이되면서 두번째 글씨가 바뀌어야 하는부분
            // console.log('두번째글씨바낌')
            $('.t1 .txt2').siblings().removeClass('on')
            $('.t1 .txt2').addClass('on')
        }
        else{
            // 첫글씨가 회색이되면서 두번째 글씨가 바뀌어야 하는부분
            // console.log('세번째글씨바낌')
            $('.t1 .txt3').siblings().removeClass('on')
            $('.t1 .txt3').addClass('on')
        }
        // 마지막글씨부분 100vh넘어가면 회색되기 - 글씨 한번씩 다 번쩎고나서 회색되게하기
        if ( e > c ){
            target.find('.txt').removeClass('on')
        }
        // 박스멈추는게 끝나면 글씨 회색
        if( e == 0 ){
            target.find('.txt3').find('.txt').removeClass('on')
        }
    }
    else {
        // console.log('글씨 다바꿔!')
        $('.txt').removeClass('on')
    }
})



















// 스크롤매직 기본틀
// https://greensock.com/docs/v3/GSAP/Tween - 트윈맥스 속성값
// $(function(){
// 	var controller = new ScrollMagic.Controller();	// 1. ScrollMagic 컨트롤러 생성

// 	var tween = TweenMax.to('#animate', 0.5, {	//2. animation object 생성
// 		backgroundColor: "#6431ff",
// 		scale: 2.5,
// 		rotation: 360,
// 		x: 600,
// 		y: 500
// 	});

// 	var scene = new ScrollMagic.Scene({	//3. Scene object 생성
// 		triggerElement: '#trigger1',	//스크롤 애니메이션 시작 지점 설정
// 		duration: '100%',	//애니메이션 재생 시간 '100%'지정하면 화면 높이에 따라 유동적으로 end위치가 정해짐
// 	})
// 	.setTween(tween)	//4. 2번을 3번에 추가
// 	.addTo(controller)	//5. 1번(controller)을 3번에 추가
// 	.addIndicators();
// });