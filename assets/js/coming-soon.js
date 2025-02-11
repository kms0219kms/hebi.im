/**
 * Hebi.im - Coming Soon Page_Javascript (coming-soon.js)
 *
 * Created by: Minsu Kim <minsu.kim@lunaiz.com> on 2025-02-11
 * Updated by: Minsu Kim <minsu.kim@lunaiz.com> on 2025-02-11
 */

const $hero = document.querySelector('#hero a');
const $banner = document.querySelector('#hero .mask_banner');

// 랜덤으로 배너 이미지 선택 (1 / $bannerList.length * 100 확률)
document.addEventListener('DOMContentLoaded', () => {
    const $bannerList = $banner.querySelectorAll('img');

    const randomIndex = Math.floor(Math.random() * $bannerList.length);
    $bannerList[randomIndex].classList.add('active');
});

// Change $hero locale every 10s with fade-in-out effect
setInterval(() => { 
    const $currentLocale = $hero.querySelector('div.active');
    const $nextLocale = $currentLocale.nextElementSibling || $hero.firstElementChild;

    $currentLocale.classList.remove('active');
    $nextLocale.classList.add('active');
}, 10000);

// Change $bg every 30s with fade-in-out effect
setInterval(() => { 
    const $currentBanner = $banner.querySelector('img.active');
    const $nextBanner = $currentBanner.nextElementSibling || $banner.firstElementChild;

    $currentBanner.classList.remove('active');
    $nextBanner.classList.add('active');
}, 30000);
