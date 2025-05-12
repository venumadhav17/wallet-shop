import Banner from "./_Components/Banner";
import Companies from "./_Components/Companies";
import CreativeDesign from "./_Components/CreativeDesign";
import Digital from "./_Components/Digital";
import Supports from "./_Components/Supports";

// Added a Basic Next.js Starter Project
export default function Home() {
  return (
    <div>
      <Banner />
      <Companies />
      <Supports />
      <CreativeDesign />
      <Digital />
    </div>
  );
}
