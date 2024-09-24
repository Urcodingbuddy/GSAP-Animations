function TextSplitter() {
    var h1 = document.querySelector('h1')
    var h1Text = document.querySelector('h1').textContent
    var splittedText = h1Text.split("")
    var half = splittedText.length / 2
    var clutter = "";
    splittedText.forEach(function (elm, index) {
        if (index < half) {
            clutter += `<span class="left">${elm}</span>`
        } else {
            clutter += `<span class="right">${elm}</span>`
        }
    })
    console.log(clutter)
    h1.innerHTML = clutter
}
TextSplitter();
gsap.from('h1 .left', {
    y: 70,
    opacity: 0,
    duration: 0.7,
    delay: 0.5,
    stagger: 0.15
})

gsap.from('h1 .right', {
    y: 70,
    opacity: 0,
    duration: 0.7,
    delay: 0.5,
    stagger: -0.15
})