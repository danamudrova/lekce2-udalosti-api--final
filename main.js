// tady je místo pro náš program

//přejetí myší po textu
document.querySelector('#js-paragraph').addEventListener('mouseover',() => {
    document.querySelector('#js-paragraph').style.fontWeight = 'bold'});
document.querySelector('#js-paragraph').addEventListener('mouseout',() => {
    document.querySelector('#js-paragraph').style.fontWeight = 'normal'})



/**
 * Funkce přidá nebo odebere na prvku třídu, která se stará o červenou barvu písma
 * 
 * @param {string} elementId 
 */

document.querySelector('#prepniZcervenani').addEventListener('click', () => {
    document.querySelector('#js-paragraph').classList.toggle('cerveny-text');
});
    

/**
 * Funkce zvětší/změnší písmo v elementu o definovanou velikost
 * 
 * @param {string} elementSelector 
 * @param {int} fontSizeChange 
 */

document.querySelector('#zvetsitPismo').addEventListener('click', () => {
    let element = document.querySelector('#js-paragraph');
    let currentFontSize = parseInt(element.style.fontSize); 
    element.style.fontSize = (currentFontSize + 1) + 'px';
})


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

