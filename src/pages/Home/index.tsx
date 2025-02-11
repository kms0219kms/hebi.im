import { styled } from "goober";

import { MaskBanner, BannerDescription } from "../../styles/home";

const Hero = styled("section")`
  width: 100%;
  height: 100%;
`;

export function Home() {
  return (
    <Hero>
      <MaskBanner>
        <MaskBanner.Image
          src="https://cdn.devayaan.me/hebi-im-images/banner/20240211_night-sky-patrol-of-tomorrow_001.webp"
          alt=""
          $active
        />
        <MaskBanner.Image
          src="https://cdn.devayaan.me/hebi-im-images/banner/20240211_night-sky-patrol-of-tomorrow_002.webp"
          alt=""
        />
      </MaskBanner>

      <a
        href="https://youtu.be/gMjU5XJnc7E?si=P1gYM8CKKfaSXsBO"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BannerDescription $active>
          <BannerDescription.Heading>
            アスノヨゾラ哨戒班
          </BannerDescription.Heading>
          <BannerDescription.Paragraph>
            <img
              src="https://cdn.simpleicons.org/youtube/white"
              width="20"
              height="20"
              alt="YouTubeで見る"
            />{" "}
            私の３年間の思いを込めて歌いました
          </BannerDescription.Paragraph>
        </BannerDescription>

        <BannerDescription>
          <BannerDescription.Heading>
            내일의 밤하늘 초계반
          </BannerDescription.Heading>
          <BannerDescription.Paragraph>
            <img
              src="https://cdn.simpleicons.org/youtube/white"
              width="20"
              height="20"
              alt="YouTube에서 보기"
            />{" "}
            떨어져 있던 3년간의 마음을 담아 준비했어요
          </BannerDescription.Paragraph>
        </BannerDescription>

        <BannerDescription>
          <BannerDescription.Heading>
            Night Sky Patrol of Tomorrow
          </BannerDescription.Heading>
          <BannerDescription.Paragraph>
            <img
              src="https://cdn.simpleicons.org/youtube/white"
              width="20"
              height="20"
              alt="Watch in YouTube"
            />{" "}
            It's a labor of love after three years apart.
          </BannerDescription.Paragraph>
        </BannerDescription>
      </a>
    </Hero>
  );
}
