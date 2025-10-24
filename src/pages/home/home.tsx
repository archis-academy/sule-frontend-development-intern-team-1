import CheckOutOurNew from "@/components/checkoutOurNew/checkoutOurNew"
import AboutSection from "@/components/aboutSection/aboutSection"
import CTABanner from "@/components/ctaBanner/ctaBanner";
import OurServices from "@/components/ourServices/ourServices";
import Locations from "@/components/locations/locations";
import HeroLeft from "@/components/heroLeft/heroLeft";

function Home() {
  return (
    <>
      <HeroLeft/>
      <AboutSection/>
      <CheckOutOurNew />
      <OurServices />
      <CTABanner />
      <Locations />
    </>
  );
}

export default Home;
