function page1Animation(){
    var tl = gsap.timeline()
    tl.from('nav h1,nav h4, nav button',{
        y:-30,
    opacity:0,
    duration:0.5,
    stagger:0.2,
})

tl.from('.center-part1 h1',{
    x:-100,
    opacity:0,
    duration:0.4
},'-=0.3')

tl.from('.center-part1 p',{
    x:-100,
    opacity:0,
    duration:0.4
})

tl.from('.center-part1 button',{
    x:-100,
    opacity:0,
    duration:0.5
},'-=0.1')

tl.from('.center-part2 img',{
    x:200,
    opacity:0,
    duration:0.5
},'-=0.8')

tl.from('.section1bottom img',{
    y:50,
    opacity:0,
    stagger:0.15
},'-=0.5')
}
page1Animation()

function page2Animation(){

    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:'.section2',
            scroller:'body',
            // markers:true,
            start:'top 50%',
            end:'top 0',
            scrub:2,
        }
    })
    
    tl2.from('.services',{
        y:30,
        opacity:0,
        duration:0.5
    })
    
    tl2.from('.elem.line1.left',{
        x:-500,
        opacity:0,
        duration:1
    },'line1')
    
    tl2.from('.elem.line1.right',{
        x:500,
        opacity:0,
        duration:1
    },'line1')

    tl2.from('.elem.line2.left',{
        x:-500,
        opacity:0,
        duration:1
    },'line2')
    
    tl2.from('.elem.line2.right',{
        x:500,
        opacity:0,
        duration:1
    },'line2')
}
page2Animation()