import React from "react";
import bannerAbout from "../../assets/banner/bannerAbout.jpg";
import Footer from "../../components/Footer/Footer";
const About = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-10 mt-16">
      <div className="w-[80%] flex flex-col justify-center items-center space-y-5">
        <h1 className="text-8xl font-bold">About us</h1>
        <p>At Timmy we live and breathe trends.</p>
        <p>
          Our contemporary international collections offer ‘can’t-live-without’
          pieces alongside essential wardrobe staples.
        </p>
      </div>
      <div className="w-[80%] flex flex-row justify-center items-center">
        <div className="flex flex-1 h-[550px] flex-col justify-center items-center space-y-5 bg-[#e8dbda]">
          <h1>WHAT WE ARE DOING</h1>
          <p className="text-center mx-5">
            We use the latest Fashion Design Bureau, Fashion Design Institute
            and Fashion Professionals to source all our garments. To make things
            easier for our clients we offer discounts and rebates when you order
            from our range and we also offer special discounted offers for
            special occasions.
          </p>
          <p className="text-center mx-5">
            We provide a range of clothing as well as accessories to our
            customers from womens wear to men's fashion, along with accessories
            to our designer customers. We carry the latest fashion season and
            high fashion season by season.
          </p>
        </div>
        <div className="flex flex-1 flex-col justify-center items-center space-y-5">
          <img src={bannerAbout} alt="" />
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
