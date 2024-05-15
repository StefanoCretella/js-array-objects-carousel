document.addEventListener('DOMContentLoaded', function () {
    const carouselData = [
        {
            image: 'img/01.webp',
            title: "Marvel's Spiderman: Miles Morales",
            text: 'Segui l\'ascesa di Miles Morales come il nuovo eroe che padroneggia incredibili e esplosivi nuovi poteri per diventare il suo Spider-Man.'
        },
        {
            image: 'img/02.webp',
            title: 'Ratchet & Clank: Rift Apart',
            text: 'Esplora dimensioni diverse con Ratchet e Clank mentre affrontano un malvagio imperatore proveniente da un\'altra realtà.'
        },
        {
            image: 'img/03.webp',
            title: 'Fortnite',
            text: 'Raccogli tutti i tuoi amici e tuffati nell\'epico Fortnite di Epic Games, uno scontro massiccio a 100 giocatori che combina saccheggi, artigianato, sparatorie e caos.'
        },
        {
            image: 'img/04.webp',
            title: 'Stray',
            text: 'Perso, ferito e solo, un gatto randagio deve districare un antico mistero per fuggire da una città dimenticata da tempo.'
        },
        {
            image: 'img/05.webp',
            title: "Marvel's Avengers",
            text: 'Marvel\'s Avengers è un gioco d\'azione e avventura epico in terza persona che unisce una storia originale e cinematografica con gameplay single-player e cooperativo.'
        }
    ];

    const itemsContainer = document.querySelector('.items');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentIndex = 0;
    const totalItems = carouselData.length;

    function populateCarousel() {
        carouselData.forEach((item, index) => {
            const newItem = document.createElement('div');
            newItem.classList.add('item');
            if (index === 0) {
                newItem.classList.add('active');
            }

            const image = document.createElement('img');
            image.src = item.image;

            const carouselContent = document.createElement('div');
            carouselContent.classList.add('carousel-content');
            const title = document.createElement('h2');
            title.textContent = item.title;
            const text = document.createElement('p');
            text.textContent = item.text;
            carouselContent.appendChild(title);
            carouselContent.appendChild(text);

            newItem.appendChild(image);
            newItem.appendChild(carouselContent);
            itemsContainer.appendChild(newItem);
        });
    }

    populateCarousel();

    function updateActiveItem() {
        const items = document.querySelectorAll('.item');
        items.forEach((item, index) => {
            if (index === currentIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    function prevImage() {
        currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
        updateActiveItem();
    }

    function nextImage() {
        currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
        updateActiveItem();
    }

    prevButton.addEventListener('click', prevImage);
    nextButton.addEventListener('click', nextImage);
});
