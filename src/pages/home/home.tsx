import CheckOutOurNew from "@/components/checkoutOurNew/checkoutOurNew"
import AboutSection from "../../components/aboutSection/aboutSection"
import CTABanner from "@/components/ctaBanner/ctaBanner";
import OurServices from "@/components/ourServices/ourServices";

function Home() {
  return (
    <>
      <AboutSection/>
      <CheckOutOurNew />
      <OurServices />
      <CTABanner />
    </>
  );

}

export default Home;
