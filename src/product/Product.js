import React, { useEffect } from "react";
import logoNike from "../assets/nike.png";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { GetProductAction } from "../redux/action/ProductAction";

function Product() {
  const navigate = useNavigate;
  const dispatch = useDispatch();
  const localtion = useLocation();
  const url = localtion.pathname;
  const data = useSelector((state) => state.product.product);

  useEffect(() => {
    dispatch(GetProductAction());
  }, []);

  const handleClickId = (id) => {
    navigate(`${url}/detail/${id}`);
  };

  return (
    <div className="w-full max-w-[900px] mx-auto">
      <div className="grid grid-cols-2 gap-[40px] ">
        <div className="bg-white p-4 rounded-2xl shadow-lg shadow-gray-300 hover:shadow-2xl max-h-[100vh] relative overflow-y-scroll">
          <div className="mb-28">
            <div className=" absolute bg-[#F6C90E] ab w-[130px] h-[230px] top-[-70px] left-[-5px] rounded-r-full "></div>
            <img
              srcSet={logoNike}
              className="w-[80px] h-[80px] absolute  object-contain top-[-10px] "
              alt="Nike Logo"
            />

            <h1 className=" absolute text-3xl font-bold mt-12">Our Products</h1>
          </div>
          {data.map((product) => (
            <div className="mb-10 relative">
              <div
                key={product.id}
                style={{ backgroundColor: product.color }}
                className="rounded-3xl p-6"
              >
                <img
                  srcSet={product.image}
                  alt={product.name}
                  className="w-full h-full object-content"
                />
                <h3 className="mt-5 font-extrabold text-xl">{product.name}</h3>
                <p className="mt-6 text-sm text-[#777777]">
                  {product.description}
                </p>
                <div className="flex item-start justify-between mt-7">
                  <div className="flex flex-col items-start">
                    <span className="text-lg text-black font-bold">
                      ${product.price}
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <button className="bg-[#d5b63b] hover:bg-[#6f5b08]  focus:outline-none focus:ring  focus:ring-yellow-400  text-sm rounded-xl font-bold text-black py-2 px-4 w-full transition-all">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-lg shadow-gray-300 hover:shadow-2xl max-h-[100vh] relative overflow-y-scroll">
          <div className="mb-28">
            <div className=" absolute bg-[#F6C90E] ab w-[130px] h-[230px] top-[-70px] left-[-5px] rounded-r-full "></div>
            <img
              srcSet={logoNike}
              className="w-[80px] h-[80px] absolute  object-contain top-[-10px] "
              alt="Nike Logo"
            />

            <h1 className=" absolute text-3xl font-bold mt-12">Your Cart</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
