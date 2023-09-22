"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "./productCard";

type Props = {};

const Product = (props: Props) => {
  const [product, setProduct] = useState([]);
  const [period, setPeriod] = useState("monthly");

  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then(({ price: { data } }) => {
        if (period === "monthly") {
          setProduct(data);
        } else {
          setProduct(data);
        }
        console.log(data);
      });
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-center">
        Subscribe to Our Package Plans and Sign Up for Exclusive Benefits Now!
      </h1>

      <div className=" flex gap-4 items-center my-4 max-w-sm mx-auto">
        <button
          className={`px-4 py-2 rounded-lg bg-gray-500 text-black text-lg flex-1 ${
            period === "monthly" ? "bg-green-400 font-bold" : ""
          }`}
          onClick={() => setPeriod("monthly")}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 rounded-lg bg-gray-500 text-black text-lg flex-1 ${
            period === "yearly" ? "bg-green-400 font-bold" : ""
          }`}
          onClick={() => setPeriod("yearly")}
        >
          Yearly
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {product &&
          product
            ?.filter((v: any) => v.lookup_key?.includes(period))
            .map((v: any, i: any): any => {
              return <ProductCard key={i} {...v} />;
            })}
      </div>
    </div>
  );
};

export default Product;
