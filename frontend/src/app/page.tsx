import BannerCarousel from "@/components/client/HomePage/BannerCarousel";
import { Header } from "@/components/client/Header";
import { SubHeader } from "@/components/client/SubHeader";
import Image from "next/image";
import ProductsRange from "@/components/client/HomePage/ProductsRange/ProductsRange";
import Testimonial from "@/components/client/Testimonial";
import Footer from "@/components/client/Footer";
import VideoPlayer from "@/components/client/VideoPlayer";
import YoutubeTestimonial from "@/components/client/HomePage/YoutubeTestimonial";
import { productsArray } from "../utils/ProductsArray";

export default function Home() {
  return (
    <>
      <Header />
      <SubHeader />
      <BannerCarousel />
      <section className="space-y-5">
        <ProductsRange
          category="Skin Care"
          description="Explore 100% toxin-free and safe skincare products by Mamaearth that are formulated with love and the goodness of natural ingredients"
          products={productsArray}
        />
        <ProductsRange
          category="Hair Care"
          description="Explore 100% toxin-free and safe Hair products, formulated with the goodness of natural ingredients and no harmful chemicals."
          products={productsArray}
        />
        <ProductsRange
          category="Baby Care"
          description="Your little bundle of joy deserves nothing but the best. Explore MadeSafe Certified, natural, 100% toxin-free & gentle baby care products by Mamaearth. Give your little one the care they deserve!"
          products={productsArray}
        />
        <ProductsRange
          category="Makeup"
          description="Color with care with our all-new colorcare range that’s 100% toxin-free and formulated with the goodness of natural ingredients. Check out our newly launched products & bring home your new favorites."
          products={productsArray}
        />
      </section>

      <YoutubeTestimonial />

      {/* <Testimonial /> */}
      <Footer />
    </>
  );
}
