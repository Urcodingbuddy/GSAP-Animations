var main = document.querySelector('#main')
var cursor = document.querySelector('#cursor')


main.addEventListener('mousemove',function(dets){
    gsap.to(cursor, {
        x:dets.x - 10,
        y:dets.y - 12,
        duration:0.6,
        ease:'back.out'
    })
})
var initialPath = `M 0 100 Q 600 -60 1200 100`
var finalPath = `M 0 100 Q 600 100 1200 100`

var string = document.querySelector('#string');
string.addEventListener('mousemove', function(dets) {
    // Get the bounding rectangle of #string
    var stringRect = string.getBoundingClientRect();

    // Calculate mouse position relative to #string
    var relativeX = dets.clientX - stringRect.left;
    var relativeY = dets.clientY - stringRect.top;

    // Create the path based on the relative position
    var path = `M 0 100 Q ${relativeX} ${relativeY } 1200 100`;

    // Animate the path
    gsap.to('svg path', {
        attr: { d: path },
        duration: 0.3,
        ease: 'power3.out'
    });
});

string.addEventListener('mouseleave', function() {
    var path = finalPath;
    gsap.to('svg path', {
        attr: { d: path },
        duration: 1.5,
        ease: 'elastic.out(1.2, 0.2)'
    });
});



