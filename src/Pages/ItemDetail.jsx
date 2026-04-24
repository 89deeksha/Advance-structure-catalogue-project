import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ItemDetail() {
  const { state: item } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="p-6">
      
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">
        {item.itemname}
      </h1>

      {/* Category */}
      <p className="text-gray-600 mb-4">
        Category: {item.category}
      </p>

      {/* Image */}
      <img
        src={item.image}
        alt={item.itemname}
        className="w-full max-w-md rounded-lg mb-6"
      />

      {/* Dynamic Properties */}
      <h2 className="text-xl font-semibold mb-3">
        Specifications
      </h2>

      <div className="bg-gray-100 p-4 rounded-lg space-y-2">
        {item.itemprops.map((prop, index) => (
          <div
            key={index}
            className="flex justify-between border-b pb-1"
          >
            <span className="font-medium">{prop.label}</span>
            <span>{prop.value}</span>
          </div>
          
        ))}
        
      </div>
      <button
  onClick={() => navigate(-1)}
  className="mb-4 bg-black text-white px-4 py-2 rounded"
>
  ← Back
</button>
      

    </div>
  );
}

export default ItemDetail;