import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Badge, Button } from 'antd';
import { LogoutOutlined, MoonOutlined, ShoppingCartOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { ThemeContext } from "../Contaxt/ThemeContaxt";
import { UserContext } from '../Contaxt/UserContaxt';
import { CartContext } from '../Contaxt/CartContaxt';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';

function Header() {
  const { user } = useContext(UserContext);
  const { cartItems } = useContext(CartContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const goToHomePage = () => navigate("/");

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/");
  };

  const themeClasses = theme === 'light'
    ? 'text-black bg-gray-300'
    : 'text-white bg-gray-900';

  return (
    <header className={`${themeClasses} body-font`}>
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-blue-500 hover:text-blue-300">
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <img
                src="https://cdn-icons-png.flaticon.com/128/3146/3146124.png"
                alt="Logo"
                className="w-10 h-10"
              />
            )}
          </Link>
          <Button
            onClick={goToHomePage}
            icon={<ArrowLeftOutlined />}
            className="hidden md:block bg-gray-500 text-white hover:bg-gray-700 focus:outline-none rounded-full"
          />
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/Weather" className="hover:text-blue-400">Weather</Link>
          <Link to="/BuyProduct" className="hover:text-blue-400">Buy Product</Link>
          <Link to="/Box" className="hover:text-blue-400">Customize Box</Link>

          {user?.isLogin ? (
            <div className="flex items-center space-x-4">
              <Link to="/Profile" className="mx-2">{user.username}</Link>
              <Button
                shape="circle"
                icon={<LogoutOutlined />}
                onClick={handleSignOut}
              />
            </div>
          ) : (
            <Link to="/LoginUp" className="rounded-lg block px-4 py-2 underline hover:text-blue-400">Login</Link>
          )}

          <Link to={'/cart'}>
            <Badge count={cartItems.length} className="mx-4">
              <Button
                icon={<ShoppingCartOutlined />}
                shape="circle"
              />
            </Badge>
          </Link>

          <Button
            icon={<MoonOutlined />}
            shape="circle"
            onClick={toggleTheme}
            className="transition-all hover:bg-gray-700 bg-gray-600 text-white"
          />
        </div>

        {/* Hamburger Icon for Mobile */}
        <button className="md:hidden text-gray-400 focus:outline-none" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className={`md:hidden ${theme === 'light' ? 'bg-gray-300' : 'bg-gray-800'} ${theme === 'light' ? 'text-black' : 'text-white'} transition-transform transform duration-300 ease-in-out`}>
          <Link to="/Weather" className="block px-4 py-2 hover:bg-blue-700">Weather</Link>
          <Link to="/BuyProduct" className="block px-4 py-2 hover:bg-blue-700">Buy Product</Link>
          <Link to="/Box" className="block px-4 py-2 hover:bg-blue-700">Customize Box</Link>

          {user?.isLogin ? (
            <div className="flex items-center px-4 py-2">
              <Link to="/Profile" className="mx-2">{user.username}</Link>
              <Button
                shape="circle"
                icon={<LogoutOutlined />}
                onClick={handleSignOut}
                className="text-white hover:bg-red-500 transition-all"
              />
            </div>
          ) : (
            <Link to="/LoginUp" className="block px-4 py-2 hover:text-blue-400">Login</Link>
          )}

          <Link to={'/cart'} className="block px-4 py-2">
            <Badge count={cartItems.length}>
              <Button
                icon={<ShoppingCartOutlined />}
                shape="circle"
              />
            </Badge>
          </Link>

          <Button
            icon={<MoonOutlined />}
            shape="circle"
            onClick={toggleTheme}
            className="w-full mt-2 bg-gray-600 text-white hover:bg-gray-700 transition-all"
          />

          <Button
            onClick={goToHomePage}
            icon={<ArrowLeftOutlined />}
            className="bg-gray-500 text-white w-full hover:bg-gray-700 mt-2 rounded-full transition-all"
          />
        </div>
      )}
    </header>
  );
}

export default Header;
