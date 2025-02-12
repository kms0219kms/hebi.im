const CDN_BASEURL = "https://cdn.devayaan.me/hebi-im-images/";
const PROD_URLS = ["hebi.im", "hebi-im.pages.dev"];

function redirectImageToCdn(ele, field) {
  // 이미지 경로가 절대경로 일 수 있으므로 이에 대응
  const cdnUrl = CDN_BASEURL + ele[field].split("/assets/images/")[1];

  if (!PROD_URLS.some((url) => location.hostname.includes(url))) {
    logger.debug(`[Image CDN] ${ele[field]} won't be replaced.`);
  } else {
    logger.debug(`[Image CDN] ${ele[field]} will be replaced to ${cdnUrl}`);
    ele[field] = cdnUrl;
  }
}

function redirectAllImages() {
  // src 속성이 /assets/images/로 시작하는 모든 이미지를 CDN URL로 교체
  document.querySelectorAll('*[src^="/assets/images/"]').forEach((ele) => {
    redirectImageToCdn(ele, "src");
  });

  // href 속성이 /assets/images/로 시작하는 모든 이미지를 CDN URL로 교체
  document.querySelectorAll('*[href^="/assets/images/"]').forEach((ele) => {
    redirectImageToCdn(ele, "href");
  });

  // content 속성이 /assets/images/로 시작하는 모든 이미지를 CDN URL로 교체
  document.querySelectorAll('*[content^="/assets/images/"]').forEach((ele) => {
    redirectImageToCdn(ele, "content");
  });
}

logger.debug("[Image CDN] Script loaded successfully.");
window.IMAGE_CDN = { redirectAllImages, redirectImageToCdn };

(function () {
  document.addEventListener("DOMContentLoaded", () => redirectAllImages());
})();
