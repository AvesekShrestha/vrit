let currentIndex = 0;
const cards = document.querySelectorAll(".card");
const windowHeight = window.innerHeight;

function scrollToCard(index) {

    cards.forEach(card => card.classList.remove("current"));
    const card = cards[index];
    card.classList.add("current");

    // Scrolling to next card
    window.scrollTo({
        top: card.offsetTop - (windowHeight / 2) + (card.offsetHeight / 2),
        behavior: "smooth"
    });
}

window.addEventListener("scroll", (e) => {
    e.preventDefault();

    const cardHeight = cards[0].offsetHeight;
    const scrollPosition = window.scrollY + windowHeight / 2; //calcualting scroll by user


    if (scrollPosition >= cards[currentIndex].offsetTop + cardHeight) {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            scrollToCard(currentIndex);
        }
    } else if (scrollPosition <= cards[currentIndex].offsetTop) {
        if (currentIndex > 0) {
            currentIndex--;
            scrollToCard(currentIndex);
        }
    }
});

scrollToCard(currentIndex);
