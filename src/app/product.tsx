"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "./productCard";
import axios from "axios";

type Props = {};

const Product = (props: Props) => {
  const [product, setProduct] = useState([]);

  const fetchPrice = async () => {
    const {
      data: {
        price: { data },
      },
    } = await axios.get("api/product");
    setProduct(data);
    console.log(data);
  };

  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then(({ price: { data } }) => {
        console.log(data);
        setProduct(data);
      });

    // fetchPrice();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <h1>
        Subscribe to Our Package Plans and Sign Up for Exclusive Benefits Now!
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {product &&
          product.map((v: any, i: any): any => {
            return <ProductCard key={i} {...v} />;
          })}
      </div>
    </div>
  );
};

export default Product;
