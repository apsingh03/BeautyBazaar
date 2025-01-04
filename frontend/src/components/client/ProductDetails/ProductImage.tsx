import Image from "next/image";
import React from "react";

interface Image {
  id: number;
  imageLink: string;
  imageAlt: string;
}

interface ProductImageProps {
  images: Image[];
}

const ProductImage: React.FC<ProductImageProps> = ({ images }) => {
  return (
    <div className="flex flex-col gap-1 ">
      <div className="border w-[360px] h-[360px] overflow-hidden rounded-lg">
        <Image
          src={
            "https://images.mamaearth.in/catalog/product/1/-/1-wid-ingredients.jpg?format=auto&width=400&height=400"
          }
          width={360}
          height={10}
          style={{ objectFit: "cover" }} // Replace objectFit
          loading="lazy"
          alt="Ubtan Facewash"
        />
      </div>

      <div className="grid grid-cols-5 gap-1 ">
        {["", "", "", "", ""].map((_, idx) => {
          return (
            <div className=" w-[68px] h-[68px] border border-[#5C5C5C] hover:border-[red]  cursor-pointer ">
              <Image
                src={
                  "https://images.mamaearth.in/catalog/product/1/-/1-wid-ingredients.jpg?format=auto&width=400&height=400"
                }
                width={70}
                height={70}
                style={{ objectFit: "cover" }} // Replace objectFit
                loading="lazy"
                alt="Ubtan Facewash"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductImage;
