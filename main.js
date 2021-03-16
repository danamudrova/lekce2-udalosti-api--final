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

function prehraj(elementSelector) {
    document.querySelector(elementSelector).play();
}
function pauzni(elementSelector) {
    document.querySelector(elementSelector).pause();
}
function upravHlasitost(elementSelector, volumeValue) {
    document.querySelector(elementSelector).volume = volumeValue;
}
function resetuj(elementSelector) {
    document.querySelector(elementSelector).currentTime = 0;
}