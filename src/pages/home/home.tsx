import CheckOutOurNew from "@/components/checkoutOurNew/checkoutOurNew";

import About from "../../components/abaoutSection/aboutSection"
import CTABanner from "@/components/ctaBanner/ctaBanner";
import OurServices from "@/components/ourServices/ourServices";

function Home() {
  return (
    <>
      <About/>
      <CheckOutOurNew />
      <OurServices />
      <CTABanner />
    </>
  );

}

export default Home;
