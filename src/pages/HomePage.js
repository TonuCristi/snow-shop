import DescriptionSections from "../components/DescriptionSection/DescriptionSections";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import LatestProductsSection from "../components/LatestProductsSection/LatestProductsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DescriptionSections />
      <LatestProductsSection />
      <Footer />
    </>
  );
}
