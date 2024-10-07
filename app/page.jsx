import HomeBanner from "@/components/HomeBanner";
import Hero from "@/components/Hero";
import VideoGallery from "@/components/VideoGallery";
import SponsorMarquee from "@/components/SponsorMarquee";
import { sponsors } from "@/constants";
import Featured from "@/components/Featured";

export default function Home() {
  return (
    <div>
      <Hero />
      <div>
        <h2 className="text-3xl font-bold mt-10 text-center">Featured</h2>
        <Featured />
      </div>
      <HomeBanner />
      <div>
        <h2 className="text-3xl font-bold mt-10 text-center">
          Featured Videos
        </h2>
        <VideoGallery />
      </div>

      <SponsorMarquee sponsors={sponsors} />
    </div>
  );
}
