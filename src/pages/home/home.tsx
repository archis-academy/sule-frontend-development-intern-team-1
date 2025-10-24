import CheckOutOurNew from "@/components/checkoutOurNew/checkoutOurNew";
import About from "../../components/aboutSection/aboutSection"
import CTABanner from "@/components/ctaBanner/ctaBanner";
import OurServices from "@/components/ourServices/ourServices";
import Locations from "@/components/locations/locations";

function Home() {
  return (
    <>
      <About/>
      <CheckOutOurNew />
      <OurServices />
      <CTABanner />
      <Locations />
    </>
  );
}

export default Home;
