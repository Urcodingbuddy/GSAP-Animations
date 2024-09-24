var menu = document.querySelector('#nav i')
var cross = document.querySelector('#full i')
var tl =  gsap.timeline()
tl.to('#nav i',{
    opacity:0
})
tl.to('#full', {
    right:0,
    duration:0.45,
})

tl.from('#full h4', {
    x:150,
    duration:0.2,
    stagger:0.1,
    opacity:0
})
tl.from('#full i',{
    rotate:180,
    opacity:0,
})
tl.pause()

menu.addEventListener("click", function(){
    tl.play() 
})

cross.addEventListener('click',function(){
    tl.reverse()
})

// ----------Cursor Tracker---------- 
var main = document.querySelector('#main')
var cursor = document.querySelector('#cursor')
var imageDiv = document.querySelector('#image')
main.addEventListener('mousemove',function(dets){
    gsap.to(cursor, {
        x:dets.x - 15,
        y:dets.y - 24,
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