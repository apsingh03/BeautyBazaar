import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  calculateProductDiscount,
  convertInInr,
} from "../../../../utils/productDiscountCalculate";

interface Image {
  id: number;
  imageLink: string;
  imageAlt: string;
}

interface ProductProps {
  id: number;
  name: string;
  category: string;
  mrp: number;
  discountInPercent: number;
  subTitle: string;
  // productVariant: [];
  images: Image[];
  offer: string;
}

const Product: React.FC<ProductProps> = ({
  id,
  name,
  category,
  mrp,
  discountInPercent,
  subTitle,
  images,
  offer,
}) => {
  return (
    <div className="border  rounded-md">
      <div>
        <Link href={`/product/${name}`}>
          <Image
            src={
              "https://images.mamaearth.in/catalog/product/1/-/1-wid-ingredients.jpg?format=auto&width=400&height=400"
            }
            width={200}
            height={200}
            style={{ objectFit: "cover" }} // Replace objectFit
            loading="lazy"
            alt="Ubtan Facewash"
          />
        </Link>
      </div>

      <div className="text-center p-2 space-y-3 ">
        <h6 className="limitToTwoLines text-base font-medium text-[--text-dark-shade] ">
          {name}
        </h6>
        <p className=" text-sm text-[#4B8B0B]">{subTitle}</p>
        <p className="text-sm text-[--text-dark-shade]">100 ml</p>
        <div className="flex flex-row gap-3 text-base justify-center text-[--text-dark-shade] ">
          <p className="">
            {" "}
            {calculateProductDiscount(mrp, discountInPercent)}{" "}
          </p>
          <p className="text-[--text--light-gray] line-through ">
            {" "}
            {convertInInr(mrp)}{" "}
          </p>
          <p className="bg-[--lime-green] p-1 text-xs">15 % Off</p>
        </div>
      </div>
      <button className="bg-[--primary-color] uppercase text-white p-3 w-full font-semibold rounded-md">
        add to cart
      </button>
    </div>
  );
};

export default Product;
