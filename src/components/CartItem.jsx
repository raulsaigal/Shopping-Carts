import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { remove } from "../redux/Slices/cartSlice";


const CartItem = ({item,itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () =>{
    dispatch(remove(item.id));
    toast.success("Item Removed")

  }
  return(
  
   <div className=" mt-4 mb-4 w-full ">
    <div className=" flex space-x-8  max-w-[60%] border-b-4 py-6">
    <div className=" ">
      <img src={item.image} width={170} height={170} />
    </div>
    <div className=" space-y-8 max-w-fit">
      <h1 className="font-bold">{item.title}</h1>
      <h1>{item.description.split(" ").slice(0,12).join(" ") + "..."} </h1>

      <div className="flex justify-between">
        <p className="font-extrabold text-lg text-green-500">${item.price}</p>
        <div className="text-xl bg-pink-200 rounded-full flex items-center justify-center text-red-900"
        onClick={removeFromCart}>
        <MdDelete />
        </div>
         
      </div>
      </div>
    </div>
  </div>
  );
};

export default CartItem;
