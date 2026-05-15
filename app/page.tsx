import Hero from "@/component/Hero";
import Navbar from "@/component/Navbar";
import Features from "@/component/Features";
import FeaturedJobs from "@/component/Job";
import OurPartners from "@/component/OurPartners";
export default function HomePage() {
  return (
    <div
      id="homepage"
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://as1.ftcdn.net/jpg/02/74/87/60/1000_F_274876022_yQS0EJhwcQvssFuqleKqT5Z7zaZ4cvaQ.jpg')",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=""></div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <FeaturedJobs />
        <OurPartners />
      </div>
    </div>
  );
}
