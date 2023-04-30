import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => {return acc + curr.price}, 0));
  }, [cart])

  return (
    <div className="max-w-6xl mx-auto">
      {
        cart.length > 0 ? 
        (
          <div className="flex p-2 my-5 gap-7 flex-wrap">
            <div className="w-full md:w-[55%] flex flex-col gap-5">
              {
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index} />;
                })
              }
            </div>

            <div className="flex flex-col justify-between p-7 flex-grow md:w-[30%]">
              <div className="mt-14">
                <div className="font-semibold text-xl text-green-800 uppercase">Your Cart</div>
                <div className="font-semibold text-5xl text-green-700 uppercase">Summary</div>
                <p className="text-xl mt-5">
                  <span className="text-gray-700 font-semibold text-xl">Total Items:</span>
                  {" "}{cart.length}
                </p>
              </div>

              <div className="mb-12">
                <p className="text-xl font-bold"><span className="text-gray-700 font-semibold">Total Amount :</span> ${totalAmount}</p>
                <button
                className="bg-green-700 w-full hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
                  Checkout Now
                </button>
              </div>
            </div>

          </div>
        ) :
        (
          <div className="flex flex-col items-center justify-center min-h-[80vh]">
            <h1 className="text-gray-700 text-xl font-semibold mb-2">Your cart is empty!</h1>
            <Link to='/'>
              <button className="rounded-lg py-3 px-10 bg-green-600 border-2 border-green-600 font-semibold letter tracking-wider text-white hover:text-green-600 hover:bg-purple-50 uppercase transition duration-300 ease-linear mt-5">
                Shop Now
              </button>
            </Link>
          </div>
        )
      }
    </div>
  );
};

export default Cart;
