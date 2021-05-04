// tady je místo pro náš program

/**
 * Funkce přidá nebo odebere na prvku třídu, která se stará o červenou barvu písma
 * 
 * @param {string} elementId 
 */
function prepniZcervenani(elementId) {
    document.getElementById(elementId).classList.toggle('cerveny-text');
}

/**
 * Funkce zvětší/změnší písmo v elementu o definovanou velikost
 * 
 * @param {string} elementSelector 
 * @param {int} fontSizeChange 
 */
function zvetsitPismo(elementSelector, fontSizeChange) {
    let element = document.querySelector(elementSelector);
    let currentFontSize = parseInt(element.style.fontSize);
    element.style.fontSize = (currentFontSize + fontSizeChange) + 'px';
}

/*--------------*/
/* AUDIO FUNKCE */
/*--------------*/

document.querySelector('#play').addEventListener('click', () => {
    document.querySelector('#js-audio').play();
});

document.querySelector('#pause').addEventListener('click', () => {
    document.querySelector('#js-audio').pause();
});

document.querySelector('#reset').addEventListener('click', () => {
    document.querySelector('#js-audio').currentTime = 0;
});

document.querySelectorAll('.js-volume').forEach( element => {
    element.addEventListener('click', () => {
        document.querySelector('#js-audio').volume = parseFloat(element.dataset.volume);
    });
});

