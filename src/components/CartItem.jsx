import {MdDeleteForever} from 'react-icons/md';
import './Spinner.css';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-hot-toast';

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from cart!");
  }

  return (
    <div className='flex justify-between p-7 last:border-b-0 border-b-2 border-slate-500'>
      <div className='w-[30%]'>
        <img 
          src={item.image} 
          alt='cart-item' 
          className='object-cover'
        />
      </div>

      <div className='flex flex-col gap-5 w-[60%]'>
        <h1 className='text-xl text-slate-700 font-semibold'>{item.title}</h1>
        <h1 className='text-base text-slate-700 font-medium'>{item.description.split(" ").slice(0,15).join(" ")+"..."}</h1>
        <div className='flex items-center justify-between'>
          <p className='font-bold text-lg text-green-600'>${item.price}</p>
          <div
          onClick={removeFromCart}
          className=' bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3'>
            <MdDeleteForever className='text-red-800 group-hover:text-white text-lg' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
