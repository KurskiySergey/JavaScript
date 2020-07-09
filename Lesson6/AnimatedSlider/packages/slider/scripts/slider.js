document.head.insertAdjacentHTML("afterbegin", '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">');

let slider = document.querySelector('.slider');

let isAnimated = false; // Проверка на наличие анимации

// Создаем иконку загрузки
let loadIcon = document.createElement('i');
loadIcon.classList.add('fas', 'fa-spinner', 'fa-spin');
slider.insertAdjacentElement("afterbegin", loadIcon);

// Создаем левую стрелку
let leftArrow = document.createElement('i');
leftArrow.classList.add('fas', 'fa-chevron-circle-left', 'slider-leftArrow');
slider.insertAdjacentElement("beforeend", leftArrow);

// Создаем правую стрелку
let rightArrow = document.createElement('i');
rightArrow.classList.add('fas', 'fa-chevron-circle-right', 'slider-rightArrow');
slider.insertAdjacentElement("beforeend", rightArrow);

// Ждем когда весь контент целиком загрузится
window.addEventListener('load', function () {
    leftArrow.addEventListener('click', function () {
        images.setNextLeftImage();
    });

    rightArrow.addEventListener('click', function () {
        images.setNextRightImage();
    });

    // Инициализация слайдера
    images.init();
    // Скрываем иконку загрузки
    hideLoadIcon(loadIcon);
});

/**
 * Функция скрывает иконку загрузки
 * @param {HTMLElement} loadIcon 
 */
function hideLoadIcon(loadIcon) {
    loadIcon.style.display = "none";
}

/**
 * Функция берет у элемента слайдера его data-атрибуты размеров,
 * и если они определены, то самому слайдеру меняет размеры.
 * @param {HTMLDivElement} slider 
 */
function setSizes(slider) {
    let width = slider.getAttribute("data-width");
    let height = slider.getAttribute("data-height");
    if (width !== null && width !== "") {
        slider.style.width = width;
    }
    if (height !== null && height !== "") {
        slider.style.height = height;
    }
}
setSizes(slider);

// Анимируем движение картинки
function animatePhoto(element , direction) {

    isAnimated = true;
    let date = Date.now();
    let startPosLeft = element.style.left;
    let startZIndex = element.style.zIndex;
    element.style.zIndex = '2'; // Чтобы анимация каждой картинки была видна

    let timer = setInterval( function () {

        let timePassed = Date.now() - date;

        if (timePassed >= 3000) {
            clearInterval(timer);
            element.classList.add("hidden-slide");
            element.style.left = startPosLeft;
            element.style.zIndex = startZIndex;
            isAnimated = false;
            return;
        }

        draw(timePassed , element, direction)

    }, 20)
}

function draw(timePassed , element, direction) {

    if (direction == 'right') {
        element.style.left = timePassed / 5 + "px";
    } else {
        element.style.left = - timePassed / 5 + "px";
    }
    
}

// Объект слайдера
let images = {
    /* {int} Номер текущего изображения */
    currentIdx: 0,

    /* {HTMLDivElement[]} slides элементы слайдов */
    slides: [],
    
    /** Получаем все слайды и показываем первый слайд. */
    init() {
        this.slides = document.querySelectorAll('.slider-item');
        this.showImageWithCurrentIdx();
    },

    /** Берем слайд с текущим индексом и убираем у него класс
     * hidden-slide. */
    showImageWithCurrentIdx() {
        this.slides[this.currentIdx].classList.remove('hidden-slide');
    },

    /** Всем слайдам добавляем класс hidden-slide. */
    hideVisibleImage(direction) {

        animatePhoto(document.querySelector(".slider-item:not(.hidden-slide)"), direction);
    },

    /** Переключиться на предыдущее изображение. */
    setNextLeftImage() {
        if( !isAnimated ) {
            this.hideVisibleImage('left');
            if (this.currentIdx == 0) {
                this.currentIdx = this.slides.length - 1;
            } else {
                this.currentIdx--;
            }
            this.showImageWithCurrentIdx();
        }
        
    },

    /** Переключиться на следующее изображение. */
    setNextRightImage() {

        if ( !isAnimated ) {
            this.hideVisibleImage('right');
            if (this.currentIdx == this.slides.length - 1) {
                this.currentIdx = 0;
            } else {
                this.currentIdx++;
            }
            this.showImageWithCurrentIdx();
        }
        
    },
}
