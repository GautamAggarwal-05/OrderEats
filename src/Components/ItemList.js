import { useDispatch } from "react-redux";
import { IMG_URL } from "../Utils/links";
import { addItems, removeItem, decreaseQuantity } from "../Utils/cartSlice";
import { toast } from "react-toastify";

function ItemList({ items, incart }) {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItems(item));
    toast.success("Item added successfully");
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
    toast.success("Item removed successfully");
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId));
    toast.success("Item quantity decreased");
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex border-gray-200 border-b-2 justify-between hover:bg-gray-50 p-4 m-2"
        >
          <div className="w-8/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹
                {item.card.info.price
                  ? parseInt(item.card.info.price / 100)
                  : parseInt(item.card.info.defaultPrice / 100)}
              </span>
            </div>
            <p className="text-xs opacity-70 mb-1">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-2 flex flex-col items-center">
            <img
              src={IMG_URL + item.card.info.imageId}
              className="w-full h-32 object-cover rounded-md"
              alt={item.card.info.name}
            />
            <div className="mt-4 flex items-center justify-center gap-1 w-full ">
              <button
                className=" p-1  bg-green-400 shadow-lg rounded-lg w-full "
                onClick={() => handleAddItem(item)}
              >
                Add
              </button>
              {incart && (
                <>
                  <button
                    className=" p-1 bg-yellow-400 shadow-lg rounded-lg w-20 "
                    onClick={() => handleDecreaseQuantity(item.card.info.id)}
                  >
                    Remove
                  </button>
                  <button
                    className="p-1 bg-red-400 shadow-lg rounded-lg w-20 "
                    onClick={() => handleRemoveItem(item.card.info.id)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
            {incart && <p className="text-sm mt-2">Quantity: {item.quantity}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
