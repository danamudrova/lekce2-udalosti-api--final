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