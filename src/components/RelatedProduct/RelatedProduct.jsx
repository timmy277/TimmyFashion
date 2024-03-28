import React from "react";
import ProductsData from "../../assets/data";
import Item from "../../components/Item/Item";
const RelatedProduct = () => {
  return (
    <div>
      <div className="text-center mb-10 max-w-[600px] mx-auto">
        <p className="text-sm text-primary ">Top Selling Products for you</p>
        <h1 className="text-3xl font-bold">Related Products</h1>
        <hr />
      </div>
      <div className="grid grid-cols-1 gap-5 my-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center">
        {ProductsData.map((item, i) => (
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
