import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import Item from "../../components/Item/Item";
import CategoryNavbar from "../../components/CategoryNavbar/CategoryNavbar";

const ShopCategory = (props) => {
  const { ProductsData } = useContext(ShopContext);
  return (
    <div className="container flex flex-col justify-center items-center mt-16 gap-10">
      <CategoryNavbar />
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 place-items-center my-10 gap-10">
          {ProductsData.map((item, i) => {
            if (props.category === item.category)
            {
              return (
                <div key={i} className="flex justify-center items-center flex-row">
                  <Item key={i} id={item.id} image={item.img} name={item.name} new_price={item.new_price} old_price={item.old_price} rating={item.rating}/>
                </div>
              );
            }
            else
            {
              return null;
            }
          })}
        </div>
    </div>
  );
};

export default ShopCategory;
