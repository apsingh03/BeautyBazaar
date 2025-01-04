import {
  calculateProductDiscount,
  convertInInr,
} from "@/utils/productDiscountCalculate";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { MdOutlineChevronRight } from "react-icons/md";

interface Image {
  id: number;
  imageLink: string;
  imageAlt: string;
}

interface ProductVariant {
  id: number;
  name: string;
}

interface Product {
  id: number;
  name: string;
  category: string;
  mrp: number;
  discountInPercent: number;
  subTitle: string;
  productVariant: ProductVariant[];
  images: Image[];
  offer: string;
}

interface ProductDetailsRightSideProsp {
  product: Product;
}

const ProductDetailsRightSide: React.FC<ProductDetailsRightSideProsp> = ({
  product,
}) => {
  //   console.log("product - ", product);

  return (
    <div className="flex flex-col space-y-2  bg-white font-sans ">
      <div className=" py-1 flex flex-row gap-2 items-center">
        <Link
          href={"/"}
          className="text-[--primary-color] text-sm font-medium "
        >
          Home
        </Link>
        <span>
          <MdOutlineChevronRight size={16} color="#000" />
        </span>
        <Link
          href={"#"}
          className="text-[--primary-color] text-sm capitalize font-medium "
        >
          {product?.category}
        </Link>
        <span>
          <MdOutlineChevronRight size={16} color="#000" />
        </span>
        <p className="text-[#777777] text-sm capitalize font-medium ">
          {product?.name}
        </p>
      </div>

      <h1 className=" text-xl font-medium  text-[--text-dark-shade]">
        {product?.name}
      </h1>
      <p className="text-lg text-[#3D3D3D] font-normal">{product?.subTitle}</p>

      <p className="text-base text-[#59A30E] font-semibold ">Special Price</p>

      <div className="flex flex-row gap-2">
        <p className="text-xl text-[--text-dark-shade] font-semibold">
          {calculateProductDiscount(product?.mrp, product?.discountInPercent)}
          .00
        </p>
        <p className="text-xl text-red-600 font-semibold">
          {product?.discountInPercent} % Off
        </p>
      </div>

      <p className="text-xs text-[--text-gray1] font-normal">
        M.R.P.: ₹269(Inclusive of all taxes)
      </p>
      <p className="text-xs text-[--text-gray1] font-normal">
        Net content:
        <span className="text-sm"> 100ml </span>
        {"( "}USP: <span className="text-sm"> ₹2.35/ml </span>
        {" )"}
      </p>

      <div>
        <p className="text-base text-[--text-gray1] font-semibold">
          Select Variant
        </p>

        <div className="flex flex-row gap-2 p-3 justify-start">
          {product?.productVariant.map((data, idx) => {
            return (
              <div className="border  rounded-xl w-52">
                {/* bg-green-600 #59a30e  */}
                <div className="p-2 border bg-[--lightGray-bg-color] rounded-t-xl  ">
                  <p className="text-sm font-normal text-[--text-dark-shade] ">
                    Single
                  </p>
                </div>
                <div className="flex flex-col gap-2 p-3">
                  <div className="flex flex-row justify-between ">
                    <p className="text-base text-[--text-dark-shade] font-semibold">
                      {calculateProductDiscount(
                        product?.mrp,
                        product?.discountInPercent
                      )}
                      .00
                    </p>
                    <p className="text-base text-[--text--light-gray] font-semibold line-through">
                      {convertInInr(product?.mrp)}
                    </p>
                    <p className="text-base text-red-600 font-semibold">
                      {product?.discountInPercent} % off
                    </p>
                  </div>

                  <p className="text-base text-[#427a08] font-semibold">
                    {calculateProductDiscount(
                      product?.mrp,
                      product?.discountInPercent
                    )}{" "}
                    / XXX ml
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <Image
          src={"https://images.mamaearth.in/wysiwyg/goodness-icons.png"}
          width={250}
          height={200}
          style={{ objectFit: "cover", width: "auto", height: "auto" }} // Replace objectFit
          loading="lazy"
          alt="Ubtan Facewash"
        />
      </div>
    </div>
  );
};

export default ProductDetailsRightSide;
