function openLightbox(imgSrc) {
    document.getElementById('lightbox-img').src = imgSrc;
    document.getElementById('lightbox').style.display = 'block';
}
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}