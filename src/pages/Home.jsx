import About from "../components/ui/About";
import BookingForm from "../components/ui/BookingForm";
import HeroSection from "../components/ui/HeroSection";
import PopularFoods from "../components/ui/PopularFoods";
import Testimonial from "../components/ui/Testimonial";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <PopularFoods />
      <BookingForm />
      <Testimonial />
    </div>
  );
};

export default Home;
