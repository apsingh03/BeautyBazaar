"use client";
import Footer from "@/components/client/Footer";
import { Header } from "@/components/client/Header";
import { SubHeader } from "@/components/client/SubHeader";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const OrderTrack = () => {
  const validationSchema = Yup.object().shape({
    orderId: Yup.number()
      .min(2, "Too Short!")
      .max(20, "Too Long!")
      .required("*Required"),
  });

  return (
    <>
      <Header />

      <SubHeader />

      <section className="font-sans  flex flex-col justify-center items-center ">
        <div className="py-4 bg-[--primary-color] flex flex-col gap-4 w-full items-center text-white">
          <p className="text-5xl font-medium ">Order Track</p>
          <p className="text-xs font-medium uppercase ">Home / order track</p>
        </div>

        <div className="p-3">
          <Formik
            initialValues={{
              orderId: "",
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {}}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <div className="flex flex-row items-center">
                    <label htmlFor="orderId">
                      Please enter your Order Id here
                    </label>
                    <p className="px-3 text-xs text-red-700 font-normal">
                      {errors.orderId && touched.orderId && errors.orderId}
                    </p>
                  </div>

                  <input
                    type="number"
                    className=" border w-full text-sm p-2 text-[#1D1D1D]"
                    id="orderId"
                    name="orderId"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.orderId}
                  />
                </div>

                <button
                  type="submit"
                  className="text-center uppercase px-36 py-2 bg-[--primary-color] text-sm text-white  rounded-md"
                  disabled={isSubmitting}
                >
                  Track Order
                </button>
              </form>
            )}
          </Formik>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default OrderTrack;
