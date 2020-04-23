let logoImg = document.getElementById('logoImg')
let logoSpin = gsap.to(logoImg, {rotationY: 360, duration: 2, paused: true})
document.querySelector('#logoImg').onmouseover = () => logoSpin.restart()

let heroText = document.getElementById('heroText')
let raise = gsap.from(heroText, { duration: 5, ease: "circ.out", y: -75,})
