import HeroSlider from "../components/HeroSlider";
import StatsSection from "../components/StatsSection";
import ProductsSection from "../components/ProductsSection";
import Features from "../components/Features";
import ClientsSection from "../components/ClientsSection";
import Header from "./Header";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <ProductsSection />
      <Features />
      <StatsSection />
      <ClientsSection />
    </div>
  );
}
