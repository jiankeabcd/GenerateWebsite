// JavaScript code for interactions can be added here
// Animate header logo
anime({
    targets: 'header .logo img',
    translateX: [-50, 0],
    opacity: [0, 1],
    duration: 1500,
    easing: 'easeOutExpo'
});

// Animate About Section
anime({
    targets: '.about-section .intro h1',
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 1500,
    delay: 500,
    easing: 'easeOutExpo'
});

anime({
    targets: '.about-section .intro p',
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 1500,
    delay: 1000,
    easing: 'easeOutExpo'
});

anime({
    targets: '.about-section .portrait img',
    scale: [0.8, 1],
    opacity: [0, 1],
    duration: 1500,
    delay: 1500,
    easing: 'easeOutExpo'
});

// Animate Work Section
anime({
    targets: '.work-section h2',
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 1500,
    delay: 500,
    easing: 'easeOutExpo'
});

anime({
    targets: '.work-item',
    scale: [0.8, 1],
    opacity: [0, 1],
    duration: 1000,
    delay: anime.stagger(200, { start: 1000 }),
    easing: 'easeOutExpo'
});

// Animate Contact Section
anime({
    targets: '.contact-section',
    opacity: [0, 1],
    duration: 2000,
    delay: 2000,
    easing: 'easeOutExpo'
});
