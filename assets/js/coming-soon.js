/**
 * Hebi.im - Coming Soon Page_Javascript (coming-soon.js)
 *
 * Created by: Minsu Kim <minsu.kim@lunaiz.com> on 2025-02-11
 * Updated by: Minsu Kim <minsu.kim@lunaiz.com> on 2025-02-11
 */

const $hero = document.querySelector('#hero a');

// Change $hero locale every 10s with fade-in-out effect
setInterval(() => { 
    const $currentLocale = $hero.querySelector('div.active');
    const $nextLocale = $currentLocale.nextElementSibling || $hero.firstElementChild;

    $currentLocale.classList.remove('active');
    $nextLocale.classList.add('active');
}, 10000);
