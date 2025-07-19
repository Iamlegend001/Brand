import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { NavLink } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  User,
  Heart,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentPath, setCurrentPath] = useState("/");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [currentPath]);

  const categories = [
    { name: "Skincare", href: "/shop/skincare" },
    { name: "Hair Care", href: "/shop/haircare" },
    { name: "Fragrances", href: "/shop/fragrances" },
    { name: "Body Care", href: "/shop/bodycare" },
    { name: "Grooming", href: "/shop/grooming" },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop", hasDropdown: true },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <NavLink
              to="/"
              className="flex items-center space-x-2"
              onClick={() => setCurrentPath("/")}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                The Man Company
              </span>
            </NavLink>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() =>
                  link.hasDropdown && setActiveDropdown(link.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <NavLink
                  to={link.href}
                  className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-amber-600 ${
                    location.pathname === link.href
                      ? "text-amber-600"
                      : "text-gray-700"
                  }`}
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </NavLink>

                {/* Dropdown Menu */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                      >
                        {categories.map((category) => (
                          <NavLink
                            key={category.name}
                            to={category.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                          >
                            {category.name}
                          </NavLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-gray-600 hover:text-amber-600 transition-colors"
            >
              <Search className="w-5 h-5" />
            </motion.button>

            {/* Wishlist */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-gray-600 hover:text-amber-600 transition-colors relative"
            >
              <Heart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                2
              </span>
            </motion.button>

            {/* Cart */}
            <NavLink to="/cart">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 text-gray-600 hover:text-amber-600 transition-colors relative"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  3
                </span>
              </motion.button>
            </NavLink>

            {/* User Account */}
            <NavLink to="/login">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 text-gray-600 hover:text-amber-600 transition-colors"
              >
                <User className="w-5 h-5" />
              </motion.button>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-amber-600"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Navigation Links */}
              <div className="space-y-4">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <NavLink
                      to={link.href}
                      className={`block text-lg font-medium transition-colors ${
                        location.pathname === link.href
                          ? "text-amber-600"
                          : "text-gray-700"
                      }`}
                      onClick={() => !link.hasDropdown && setIsOpen(false)}
                    >
                      {link.name}
                    </NavLink>
                    {link.hasDropdown && (
                      <div className="mt-2 pl-4 space-y-2">
                        {categories.map((category) => (
                          <NavLink
                            key={category.name}
                            to={category.href}
                            className="block text-sm text-gray-600 hover:text-amber-600"
                            onClick={() => setIsOpen(false)}
                          >
                            {category.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Actions */}
              <div className="flex items-center justify-around pt-4 border-t border-gray-100">
                <button className="flex flex-col items-center space-y-1 text-gray-600">
                  <Search className="w-6 h-6" />
                  <span className="text-xs">Search</span>
                </button>
                <button className="flex flex-col items-center space-y-1 text-gray-600 relative">
                  <Heart className="w-6 h-6" />
                  <span className="text-xs">Wishlist</span>
                  <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                    2
                  </span>
                </button>
                <NavLink
                  to="/cart"
                  className="flex flex-col items-center space-y-1 text-gray-600 relative"
                >
                  <ShoppingCart className="w-6 h-6" />
                  <span className="text-xs">Cart</span>
                  <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                    3
                  </span>
                </NavLink>
                <NavLink
                  to="/login"
                  className="flex flex-col items-center space-y-1 text-gray-600"
                >
                  <User className="w-6 h-6" />
                  <span className="text-xs">Account</span>
                </NavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
