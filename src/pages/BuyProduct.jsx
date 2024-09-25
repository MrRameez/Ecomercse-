import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from '@ant-design/icons'; // Ensure to import the ShoppingCart icon
import { CartContext } from "../Contaxt/CartContaxt";
import { ThemeContext } from "../Contaxt/ThemeContaxt";

function BuyProduct() {
  const { isItemAdded } = useContext(CartContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("Use Effect Chal gya");
    getProducts();
  }, []);

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        console.log("res->", res);
        setProducts(res);
      });
  };

  const searched = products?.filter(
    (data) => data.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
  );

  console.log("Component Chal gya", search);
  return (
    <div className={`mx-auto p-4 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
    <div className={`container mx-auto p-4 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <h1 className="text-2xl font-bold mb-4">Product Search</h1>
      <input
        placeholder="Search"
        type="search"
        className={`border w-full max-w-md p-2 mb-4 rounded ${theme === "dark" ? "border-gray-700 bg-gray-800" : "border-gray-300 bg-white"}`}
        onChange={(e) => setSearch(e.target.value)}
      />
      {searched.length > 0 ? searched.map((data) => (
        <Link key={data.id} to={`/product/${data.id}`} className="block mb-4">
          <div className={`flex items-center p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 ${theme === "dark" ? "bg-gray-800" : "bg-purple-100"}`}>
            <img className="h-16 w-16 object-cover rounded mr-4" src={data.image} alt={data.title} />
            <div className="flex-grow">
              <h1 className="text-lg font-semibold">{data.id + ") "}{data.title}</h1>
            </div>
            {isItemAdded(data.id) ? <ShoppingCartOutlined className="text-yellow-400 mx-4" /> : null}
          </div>
        </Link>
      )) : (
        <p className="text-center mt-4">No products found.</p>
      )}
    </div>
    </div>
  );
}

export default BuyProduct;
