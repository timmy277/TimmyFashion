import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import Item from "../../components/Item/Item";
import Slider from "react-slick";

const ShopCategory = (props) => {
  const { ProductsData } = useContext(ShopContext);

  var settings = {
    dots: true,
    arrows: false,
    infinity: true,
    speed: 800,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 4000,
    // slidesToShow: 1,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className="container flex flex-col justify-center items-center gap-10">
      <img src={props.banner} alt="" className=" my-10 w-[1200px]" />
      <Slider {...settings}>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center my-10 gap-10">
          {ProductsData.map((item, i) => {
            if (props.category === item.category) {
              return (
                <div
                  key={i}
                  className="flex justify-center items-center flex-row"
                >
                  <Item
                    key={i}
                    id={item.id}
                    image={item.img}
                    name={item.name}
                    new_price={item.new_price}
                    old_price={item.old_price}
                  />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </Slider>
    </div>
  );
};

export default ShopCategory;
