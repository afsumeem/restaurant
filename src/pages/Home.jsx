import About from "../components/ui/About";
import HeroSection from "../components/ui/HeroSection";
import PopularFoods from "../components/ui/PopularFoods";
import Testimonial from "../components/ui/Testimonial";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <PopularFoods />
      <Testimonial />
    </div>
  );
};

export default Home;
