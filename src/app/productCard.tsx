"use client";

import React, { useState } from "react";
import axios from "axios";

type Props = {
  nickname: string;
  unit_amount: number;
  id: string;
  lookup_key: string;
};

const ProductCard = ({ nickname, unit_amount, id, lookup_key }: Props) => {
  const handlePayment = async (e: any, id: string) => {
    e.preventDefault();
    // let idx = await id;
    console.log(id);
    await axios
      .post(
        "/api/product",
        {
          price: id,
        },
        {
          headers: {
            // Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res, "res");
        window.location.assign(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex flex-col gap-4 p-4 border border-solid border-red-600 rounded-lg">
      <h3 className="text-white font-bold text-lg">{nickname}</h3>
      <p className="text-white">
        {(unit_amount / 100).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>
      <button
        className="p-2 rounded-lg bg-red-600 text-white"
        onClick={(e) => handlePayment(e, id)}
      >
        Subscribe
      </button>
    </div>
  );
};

export default ProductCard;
