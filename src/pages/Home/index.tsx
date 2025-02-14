import { useEffect, useState } from "preact/hooks";
import { styled } from "goober";
import { MaskBanner, BannerDescription } from "../../styles/home";

import {
  IMAGE_CDN_URL,
  LOCAL_IMAGE_URL,
  SHOULD_USE_CDN,
} from "../../constants/cdn";
import { WATCH_ON_YOUTUBE } from "../../constants/description";

const BANNERS = [
  "20240211_night-sky-patrol-of-tomorrow_001.webp",
  "20240211_night-sky-patrol-of-tomorrow_002.webp",
];

const DESCRIPTIONS = {
  ja: {
    heading: "アスノヨゾラ哨戒班",
    paragraph: "私の３年間の思いを込めて歌いました",
  },
  ko: {
    heading: "내일의 밤하늘 초계반",
    paragraph: "떨어져 있던 3년간의 마음을 담아 준비했어요",
  },
  en: {
    heading: "Night Sky Patrol of Tomorrow",
    paragraph: "It's a labor of love after three years apart.",
  },
};

const Hero = styled("section")`
  width: 100%;
  height: 100%;
`;

export default function Home() {
  const [currentImage, setCurrentImage] = useState<number>(-1);
  const [currentLocale, setCurrentLocale] = useState<string>("ja");

  function changeImage() {
    setCurrentImage((currentImage + 1) % BANNERS.length);
  }

  // DESCRIPTIONS의 Key가 currentLocale로 변경되도록 구현
  function changeLocale() {
    const currentLocaleIndex = Object.keys(DESCRIPTIONS).indexOf(currentLocale);
    const nextLocaleIndex =
      (currentLocaleIndex + 1) % Object.keys(DESCRIPTIONS).length;

    setCurrentLocale(Object.keys(DESCRIPTIONS)[nextLocaleIndex]);
  }

  useEffect(() => {
    const randomImage = Math.floor(Math.random() * BANNERS.length);
    setCurrentImage(randomImage);

    const bannerInterval = setInterval(changeImage, 3 * 10 * 1000);
    return () => clearInterval(bannerInterval);
  }, []);

  useEffect(() => {
    const localeInterval = setInterval(changeLocale, 10 * 1000);
    return () => clearInterval(localeInterval);
  }, []);

  return (
    <Hero>
      <MaskBanner $loading={currentImage === -1}>
        {BANNERS.map((banner, index) => (
          <MaskBanner.Image
            key={`banner-${index.toString()}`}
            src={`${
              SHOULD_USE_CDN ? IMAGE_CDN_URL : LOCAL_IMAGE_URL
            }/banner/${banner}`}
            alt=""
            $active={currentImage === index}
          />
        ))}
      </MaskBanner>

      <a
        href="https://youtu.be/gMjU5XJnc7E?si=P1gYM8CKKfaSXsBO"
        target="_blank"
        rel="noopener noreferrer"
        title={WATCH_ON_YOUTUBE[currentLocale]}
      >
        {Object.keys(DESCRIPTIONS).map((locale) => (
          <BannerDescription $active={currentLocale === locale} key={locale}>
            <BannerDescription.Heading>
              {DESCRIPTIONS[locale].heading}
            </BannerDescription.Heading>
            <BannerDescription.Paragraph>
              <img
                src="https://cdn.simpleicons.org/youtube/white"
                width="20"
                height="20"
                alt={WATCH_ON_YOUTUBE[locale]}
              />{" "}
              {DESCRIPTIONS[locale].paragraph}
            </BannerDescription.Paragraph>
          </BannerDescription>
        ))}
      </a>
    </Hero>
  );
}
