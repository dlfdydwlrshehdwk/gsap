// 간단한 예시래요
// gsap.to('.sq',{
//     scrollTrigger  :'.sq',
//     x : 500,
// })




























    // gsap.registerPlugin(ScrollTrigger);
    let array = new Array();
    for ( let i = 0 ; i < 176 ; i++) {
        array.push(`./assets/images/sequence/sequence_${i}.jpg`)
    }
    let i = 0

    let frame_count = array.length
    // console.log(frame_count)
    gsap.to(i,{
        // 애니코드
        
        // 스크롤트리거 사용
        scrollTrigger : {
            trigger : '#trigger',
            pin : true,
            start : "top top",
            end : "+=1000",
            scrub : true,
            markers :{
                startColor :'yellow',
                endColor : 'black',
                fontSize : '4rem',
                indent : 200 // 안쪽(오른쪽끝에서 왼쪽)으로들여쓰기
                },
            },
        })


































    /////////////////////////////////////////////////////////
    /////////////////// 실패한 코드 /////////////////////////
    //////////////////////////////////////////////////////////

    
    // const $avataImgSqc = new Array();

    // for (let i = 1; i < 176; i++) {
    //     $avataImgSqc.push(`./assets/images/sequence/sequence_${i}.jpg`);
    // }
    
    // function preloading(preImgs) {
    //     let imgTotal = preImgs.length;
    //     for (let i = 0; i < imgTotal; i++) {
    //         let img = new Image();
    //         img.src = preImgs[i];
    //     }
    // }
    
    // preloading($avataImgSqc)
    
    
    // const img = { curImg: 0 }
         
    
    // let tween = TweenMax.to(img, 1, {
    //     crntImg: $avataImgSqc.length - 1,
    //     roundProps: 'curImg',
    //     // repeat : 0,
    //     immediateRender: true,
    //     onUpdate: function () {
    //         $('.sq').attr('src', $avataImgSqc[img.curImg])
    //     }
    // });
    
    // const controller = new ScrollMagic.Controller();

    // new ScrollMagic.Scene({
    //     duration: 5000,
    //     triggerElement: '#trigger',
    //     triggerHook: 0
    // })
    //     .setTween(tween)
    //     .setPin('.pinned')
    //     .addTo(controller)
    //     .addIndicators();

