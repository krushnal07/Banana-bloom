import Herosection from "./components/herosection";
import BackgroundGradientDemo from "./components/featuredcourses";
import StickyScrollRevealDemo from "./components/whyuseme";
import   InfiniteMovingCardsDemo  from "./components/testimonialcards";
import CardHoverEffectDemo from "./components/upcomingweb";
import AnimatedTooltipPreview from "./components/footer";
import WavyBackgroundDemo from "./components/footerdesign";
import AboutUsWithContact from "./components/about";

export default function Home() {
  return (
  <main>
  <Herosection />
  <BackgroundGradientDemo />
  <StickyScrollRevealDemo />
  <InfiniteMovingCardsDemo />
  <CardHoverEffectDemo />
 
  <WavyBackgroundDemo />
 <AnimatedTooltipPreview />
 <AboutUsWithContact />
  </main>
  );
}
