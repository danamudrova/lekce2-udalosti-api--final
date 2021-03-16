// tady je místo pro náš program

/**
 * Funkce přidá nebo odebere na prvku třídu, která se stará o červenou barvu písma
 * 
 * @param {string} elementId 
 */
function prepniZcervenani(elementId) {
    document.getElementById(elementId).classList.toggle('cerveny-text');
}