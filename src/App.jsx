import Hero from "./component/hero";
import Navbar from "./component/navbar";
import Popular from "./component/popular";
import Tutorial from "./component/tutorial";
import UserGuide from "./component/userGuide";
import { StarRating } from "./utilities/button";
import Dropdown from "./utilities/dropdown";
import TestimonialsSection from "./component/testimonial";
import FAQ from "./component/faq";
import Footers from "./component/info_footer";
import CopyRightFooter from "./component/copyRIghtFooter";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Popular />
      <Tutorial />
      <TestimonialsSection />
      <FAQ />
      <Footers />
      <CopyRightFooter />
    </>
  );
}

export default App;
