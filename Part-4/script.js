var main = document.querySelector('#main')
var cursor = document.querySelector('#cursor')
var imageDiv = document.querySelector('#image')

main.addEventListener('mousemove',function(dets){
    gsap.to(cursor, {
        x:dets.x - 10,
        y:dets.y - 12,
        duration:0.6,
        ease:'back.out'
    })
})

imageDiv.addEventListener('mouseenter',function(){
    cursor.innerHTML = "Unsplash Image"
    gsap.to(cursor, {
        width:"160px",
        height:"30px",
        borderRadius:"50px",
        backgroundColor:"rgba(0, 255, 0, 0.5)"
    })
})

imageDiv.addEventListener('mouseleave',function(){
    cursor.innerHTML = ""
    gsap.to(cursor, {
        height: "20px",
        width: '20px'
    })
})