
var tl = gsap.timeline()

    tl.from('h2',{
        y:-30,
        opacity:0,
        duration:0.8
    })

    tl.from('h4',{
        y:-30,
        opacity:0,
        duration:0.8,
        stagger:0.3
    })
    tl.from('h1',{
        y:20,
        opacity:0,
        scale:0.2,
        duration:0.8
    })

// tl.to('#box1',{
//     x:1200,
//     duration:2,
//     delay:0.5,
//     rotate:360,
//     repeat:1,
//     yoyo:true

// })

// tl.to('#box2',{
//     x:1200,
//     duration:2,
//     delay:0.5,
//     rotate:360,
//     repeat:1,
//     yoyo:true

// })

// tl.to('#box3',{
//     x:1200,
//     duration:2,
//     delay:0.5,
//     rotate:360,
//     repeat:1,
//     yoyo:true

// })


