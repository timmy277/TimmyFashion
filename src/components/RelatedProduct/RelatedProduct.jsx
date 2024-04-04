import React from "react";
import Item from "../../components/Item/Item";

import Woman1 from "../../assets/women/women1.png";
import Woman2 from "../../assets/women/women2.png";
import Woman3 from "../../assets/women/women3.png";
import Woman4 from "../../assets/women/women4.png";

const RelatedProd = [
  {
      id: 1,
      img: Woman1,
      name: "Women Ethnic",
      rating: 5.0,
      color: "White",
      aosDelay: "0",
      category: "Women",
      old_price: 20,
      new_price: 15,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
      id: 2,
      img: Woman2,
      name: "Women Western",
      rating: 4.4,
      color: "Red",
      aosDelay: "200",
      category: "Men",
      old_price: 30,
      new_price: 25,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
      id: 3,
      img: Woman3,
      name: "Goggle",
      rating: 4.7,
      color: "Brown",
      aosDelay: "400",
      category: "Men",
      old_price: 50,
      new_price: 35,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
      id: 4,
      img: Woman4,
      name: "Printed T-shirt",
      rating: 4.5,
      color: "Pink",
      aosDelay: "800",
      category: "Kids",
      old_price: 10,
      new_price: 8,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
      id: 5,
      img: Woman2,
      name: "Fashion T-shirt",
      rating: 4.5,
      color: "Teal",
      aosDelay: "600",
      category: "Women",
      old_price: 60,
      new_price: 45,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const RelatedProduct = () => {
  return (
    <div>
      <div className="text-center mb-10 max-w-[600px] mx-auto">
        <p className="text-sm text-primary ">Top Selling Products for you</p>
        <h1 className="text-3xl font-bold">Related Products</h1>
        <hr />
      </div>
      <div className="grid grid-cols-1 gap-5 my-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center">
        {RelatedProd.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            image={item.img}
            name={item.name}
            rating={item.rating}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
