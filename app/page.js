import AboutUs from "./_Components/AboutUs";
import Banner from "./_Components/Banner";
import Companies from "./_Components/Companies";
import CreativeDesign from "./_Components/CreativeDesign";
import Digital from "./_Components/Digital";
import Footer from "./_Components/Footer";
import Subscribe from "./_Components/Subscribe";
import Supports from "./_Components/Supports";
import Testimonials from "./_Components/Testimonials";

// Added a Basic Next.js Starter Project
export default function Home() {
  return (
    <div>
      <Banner />
      <div className='container mx-auto px-10'>
        <Companies />
        <Supports />
        <CreativeDesign />
        <Digital />
      </div>
      <AboutUs />
      <div className='container mx-auto px-10'>
        <Testimonials />
        <Subscribe />
      </div>
    </div>
  );
}
