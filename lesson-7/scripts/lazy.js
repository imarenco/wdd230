const imgs = document.querySelectorAll('[data-src]');

function preloadImage(img) {
    const src = img.getAttribute('data-src');
    if (!src) {
        return;
    }

    img.src = src;
}

const imgOptions = {
    threshold: 1,


};

const intersect = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                preloadImage(entry.target);
                io.unobserve(entry.target);
            }
        })
    },
    imgOptions
);

imgs.forEach(img => {
    intersect.observe(img);
})