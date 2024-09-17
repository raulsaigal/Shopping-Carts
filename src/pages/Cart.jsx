import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {

 const {cart} = useSelector((state) => state);
 console.log("Print hua kya");
 
 console.log(cart);
 
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="max-w-6xl flex justify-center items-center mx-auto" >
  {
    cart?.length > 0  ? 
    (<div className="flex w-[95%]" >


      <div className="flex flex-col space-y-[1rem]  ">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="max-h-full  mt-6 flex flex-col  w-[35%]">

        <div className="  h-[100%] ">
          <div className="text-green-700 text-xl font-semibold uppercase">Your Cart</div>
          <div className="uppercase font-extrabold text-4xl text-green-800 ">Summary</div>
          <p className="text-lg font-semibold py-5 ">
            <span className="">Total Items: {cart.length}</span>
          </p>
        </div>

        <div className="flex flex-col gap-y-2 mb-7">
          <p className="text-lg">Total Amount: <span className="font-semibold text-lg">${totalAmount}</span> </p>
          <Link to={"/"}>
          <button className="bg-green-900 text-lg text-white rounded-md w-[100%] flex justify-center py-4 px-11 ">
            
            Checkout Now
          </button>
          </Link>
          
        </div>

      </div>


    </div>) : 
    (<div className="flex flex-col justify-center items-center max-w-full gap-y-5 h-screen">
      <h1 className="text-green-800 text-2xl font-bold uppercase font-sans">Cart Empty</h1>
      <Link to={"/"}>
        <button className="text-green-700 text-3xl uppercase font-bold  font-serif">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
