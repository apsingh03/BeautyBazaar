import BannerCarousel from "@/components/client/HomePage/BannerCarousel";
import { Header } from "@/components/client/Header";
import { SubHeader } from "@/components/client/SubHeader";
import Image from "next/image";
import ProductsRange from "@/components/client/HomePage/ProductsRange/ProductsRange";
import Testimonial from "@/components/client/Testimonial";
import Footer from "@/components/client/Footer";
import VideoPlayer from "@/components/client/VideoPlayer";
import YoutubeTestimonial from "@/components/client/HomePage/YoutubeTestimonial";

export default function Home() {
  const products = [
    {
      id: 0,
      name: "Multani Mitti Face Wash with Multani Mitti & Bulgarian Rose For Oil Control & Acne - 100 ml",
      category: "Face-Wash",
      mrp: 269,
      discountInPercent: 10,
      subTitle: "Gently Cleanses Skin | Hydrates Skin",
      productVariant: [
        { id: 0, name: "50ml" },
        { id: 1, name: "100ml" },
      ],
      images: [
        { id: 0, imageLink: "", imageAlt: "" },
        { id: 1, imageLink: "", imageAlt: "" },
        { id: 2, imageLink: "", imageAlt: "" },
      ],
      offer: "BUY3@899",
    },
    {
      id: 1,
      name: "Aloe Vera Gel with Pure Aloe Vera & Vitamin E for Skin & Hair - 150 ml",
      category: "Skin-Care",
      mrp: 199,
      discountInPercent: 15,
      subTitle: "Soothes Skin | Repairs Hair",
      productVariant: [
        { id: 0, name: "100ml" },
        { id: 1, name: "150ml" },
      ],
      images: [
        { id: 0, imageLink: "", imageAlt: "" },
        { id: 1, imageLink: "", imageAlt: "" },
        { id: 2, imageLink: "", imageAlt: "" },
      ],
      offer: "BUY2GET1",
    },
    {
      id: 2,
      name: "Herbal Shampoo with Neem & Tea Tree Oil for Dandruff-Free Hair - 200 ml",
      category: "Hair-Care",
      mrp: 299,
      discountInPercent: 20,
      subTitle: "Cleanses Scalp | Reduces Dandruff",
      productVariant: [
        { id: 0, name: "200ml" },
        { id: 1, name: "500ml" },
      ],
      images: [
        { id: 0, imageLink: "", imageAlt: "" },
        { id: 1, imageLink: "", imageAlt: "" },
        { id: 2, imageLink: "", imageAlt: "" },
      ],
      offer: "FLAT20%",
    },
    {
      id: 3,
      name: "Vitamin C Serum with Hyaluronic Acid for Radiant Skin - 30 ml",
      category: "Skin-Care",
      mrp: 349,
      discountInPercent: 25,
      subTitle: "Brightens Skin | Reduces Wrinkles",
      productVariant: [
        { id: 0, name: "15ml" },
        { id: 1, name: "30ml" },
      ],
      images: [
        { id: 0, imageLink: "", imageAlt: "" },
        { id: 1, imageLink: "", imageAlt: "" },
        { id: 2, imageLink: "", imageAlt: "" },
      ],
      offer: "BUY1GET1",
    },
    {
      id: 4,
      name: "Rose Water Toner with Pure Rose Extracts for Hydrated Skin - 120 ml",
      category: "Skin-Care",
      mrp: 199,
      discountInPercent: 10,
      subTitle: "Hydrates Skin | Tightens Pores",
      productVariant: [
        { id: 0, name: "120ml" },
        { id: 1, name: "250ml" },
      ],
      images: [
        { id: 0, imageLink: "", imageAlt: "" },
        { id: 1, imageLink: "", imageAlt: "" },
        { id: 2, imageLink: "", imageAlt: "" },
      ],
      offer: "SAVE10",
    },
    {
      id: 5,
      name: "Charcoal Peel-Off Mask for Deep Cleansing - 100 ml",
      category: "Skin-Care",
      mrp: 249,
      discountInPercent: 15,
      subTitle: "Detoxifies Skin | Removes Impurities",
      productVariant: [
        { id: 0, name: "50ml" },
        { id: 1, name: "100ml" },
      ],
      images: [
        { id: 0, imageLink: "", imageAlt: "" },
        { id: 1, imageLink: "", imageAlt: "" },
        { id: 2, imageLink: "", imageAlt: "" },
      ],
      offer: "FLAT15%",
    },
    {
      id: 6,
      name: "Coconut Hair Oil with Pure Coconut Extracts for Shiny Hair - 200 ml",
      category: "Hair-Care",
      mrp: 179,
      discountInPercent: 5,
      subTitle: "Nourishes Hair | Adds Shine",
      productVariant: [
        { id: 0, name: "200ml" },
        { id: 1, name: "500ml" },
      ],
      images: [
        { id: 0, imageLink: "", imageAlt: "" },
        { id: 1, imageLink: "", imageAlt: "" },
        { id: 2, imageLink: "", imageAlt: "" },
      ],
      offer: "FLAT5%",
    },
    {
      id: 7,
      name: "Matte Lipstick with Shea Butter for Smooth Lips - 4g",
      category: "Makeup",
      mrp: 499,
      discountInPercent: 30,
      subTitle: "Long-Lasting | Hydrating",
      productVariant: [
        { id: 0, name: "3g" },
        { id: 1, name: "4g" },
      ],
      images: [
        { id: 0, imageLink: "", imageAlt: "" },
        { id: 1, imageLink: "", imageAlt: "" },
        { id: 2, imageLink: "", imageAlt: "" },
      ],
      offer: "BUY1GET50%",
    },
    {
      id: 8,
      name: "Lavender Body Mist with Essential Oils for a Refreshing Fragrance - 200 ml",
      category: "Fragrance",
      mrp: 399,
      discountInPercent: 20,
      subTitle: "Calming Aroma | Long-Lasting",
      productVariant: [
        { id: 0, name: "100ml" },
        { id: 1, name: "200ml" },
      ],
      images: [
        { id: 0, imageLink: "", imageAlt: "" },
        { id: 1, imageLink: "", imageAlt: "" },
        { id: 2, imageLink: "", imageAlt: "" },
      ],
      offer: "SAVE20",
    },
    {
      id: 9,
      name: "Sunscreen Lotion with SPF 50 for Complete Sun Protection - 100 ml",
      category: "Skin-Care",
      mrp: 299,
      discountInPercent: 15,
      subTitle: "Blocks UV Rays | Moisturizes Skin",
      productVariant: [
        { id: 0, name: "50ml" },
        { id: 1, name: "100ml" },
      ],
      images: [
        { id: 0, imageLink: "", imageAlt: "" },
        { id: 1, imageLink: "", imageAlt: "" },
        { id: 2, imageLink: "", imageAlt: "" },
      ],
      offer: "FLAT15%",
    },
  ];
  return (
    <div className="border border-yellow-400">
      <Header />
      <SubHeader />
      <BannerCarousel />
      <section className="space-y-5">
        <ProductsRange
          category="Skin Care"
          description="Explore 100% toxin-free and safe skincare products by Mamaearth that are formulated with love and the goodness of natural ingredients"
          products={products}
        />
        <ProductsRange
          category="Hair Care"
          description="Explore 100% toxin-free and safe Hair products, formulated with the goodness of natural ingredients and no harmful chemicals."
          products={products}
        />
        <ProductsRange
          category="Baby Care"
          description="Your little bundle of joy deserves nothing but the best. Explore MadeSafe Certified, natural, 100% toxin-free & gentle baby care products by Mamaearth. Give your little one the care they deserve!"
          products={products}
        />
        <ProductsRange
          category="Makeup"
          description="Color with care with our all-new colorcare range that’s 100% toxin-free and formulated with the goodness of natural ingredients. Check out our newly launched products & bring home your new favorites."
          products={products}
        />
      </section>

      <YoutubeTestimonial />

      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
}
