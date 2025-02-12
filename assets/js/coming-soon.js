/**
 * Hebi.im - Coming Soon Page_Javascript (coming-soon.js)
 *
 * Created by: Minsu Kim <minsu.kim@lunaiz.com> on 2025-02-11
 * Updated by: Minsu Kim <minsu.kim@lunaiz.com> on 2025-02-12
 */

const $hero = document.querySelector('#hero a');
const $banner = document.querySelector('#hero .mask_banner');

// 랜덤으로 배너 이미지 선택 (1 / $bannerList.length * 100 확률)
function pickRandomBanner() {
    const $bannerList = $banner.querySelectorAll('img');
    const randomIndex = Math.floor(Math.random() * $bannerList.length);

    logger.debug('[Coming Soon] Randomly selected banner index:', randomIndex);
    $bannerList[randomIndex].classList.add('active');

    afterImageLoad();
}

function afterImageLoad() {
    logger.debug('[Coming Soon] All images loaded successfully.');
    $banner.classList.remove('loading');

    // Change $hero locale every 10s with fade-in-out effect
    setInterval(() => { 
        const $currentLocale = $hero.querySelector('div.active');
        const $nextLocale = $currentLocale.nextElementSibling || $hero.firstElementChild;

        $currentLocale.classList.remove('active');
        $nextLocale.classList.add('active');

        logger.debug('[Coming Soon] Changed locale:', $nextLocale.dataset.locale);
    }, 10000);

    // Change $bg every 30s with fade-in-out effect
    setInterval(() => { 
        const $currentBanner = $banner.querySelector('img.active');
        const $nextBanner = $currentBanner.nextElementSibling || $banner.firstElementChild;

        $currentBanner.classList.remove('active');
        $nextBanner.classList.add('active');

        logger.debug('[Coming Soon] Changed banner:', $nextBanner.src);
    }, 30000);
}

logger.debug("[Coming Soon] Script loaded successfully.");
window.COMING_SOON = { pickRandomBanner };

(function() {
    pickRandomBanner();
})();