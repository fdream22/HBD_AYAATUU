
const coverPage = document.querySelector('.cover');
const contentPages = document.querySelectorAll('.content');
let currentPage = 0;

coverPage.addEventListener('click', () => {
    coverPage.style.transform = 'rotateY(-180deg)';
    contentPages[currentPage].style.display = 'block';
});

document.querySelector('.next-page').addEventListener('click', () => {
    contentPages[currentPage].style.display = 'none';
    currentPage = (currentPage + 1) % contentPages.length;
    contentPages[currentPage].style.display = 'block';
});

document.querySelector('.prev-page').addEventListener('click', () => {
    contentPages[currentPage].style.display = 'none';
    currentPage = (currentPage - 1 + contentPages.length) % contentPages.length;
    contentPages[currentPage].style.display = 'block';
});
