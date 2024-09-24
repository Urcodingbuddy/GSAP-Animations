function wheenX(){
    window.addEventListener('wheel',function(dets){
        if(dets.deltaY>0){
            gsap.to('#marque',{
                // x:'-200%',
                transform:"translateX(-200%)",
                repeat:-1,
                duration:4,
                ease:"none"
            })
            gsap.to('#marque img',{
                rotate:180,
                duration:0.5,
            })
        }else{
            gsap.to('#marque',{
                // x:'0%',
            transform:"translate(0%)",
            repeat:-1,
            duration:4,
            ease:"none"
        })
        gsap.to('#marque img',{
            rotate:0,
            duration:0.5,
        })
    }
})
}
wheenX();