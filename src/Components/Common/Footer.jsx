import React from "react";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowRight,
  Heart,
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
      { name: "Blog", href: "/blog" },
    ],
    customer: [
      { name: "Contact Us", href: "/contact" },
      { name: "FAQ", href: "/faq" },
      { name: "Shipping Info", href: "/shipping" },
      { name: "Returns", href: "/returns" },
      { name: "Size Guide", href: "/size-guide" },
    ],
    categories: [
      { name: "Skincare", href: "/shop/skincare" },
      { name: "Hair Care", href: "/shop/haircare" },
      { name: "Fragrances", href: "/shop/fragrances" },
      { name: "Body Care", href: "/shop/bodycare" },
      { name: "Grooming", href: "/shop/grooming" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "#",
      color: "hover:text-blue-600",
    },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "hover:text-pink-600",
    },
    { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-red-600" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-400">
                Get the latest grooming tips, product launches, and exclusive
                offers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-700 text-white rounded-lg font-medium flex items-center justify-center space-x-2 hover:from-amber-700 hover:to-orange-800 transition-all duration-300"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 mb-6"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                The Man Company
              </span>
            </motion.div>

            <p className="text-gray-400 mb-6 max-w-md">
              Premium men's grooming essentials crafted with natural ingredients
              to enhance your daily routine and boost your confidence.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-600" />
                <span className="text-gray-400">support@themancompany.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-600" />
                <span className="text-gray-400">+91 8000-123-456</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-amber-600" />
                <span className="text-gray-400">
                  Mumbai, Maharashtra, India
                </span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Customer Care</h4>
            <ul className="space-y-3">
              {footerLinks.customer.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Categories</h4>
            <ul className="space-y-3">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Payment */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 font-medium">Follow Us:</span>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`text-gray-400 ${social.color} transition-colors duration-300`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconComponent className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 font-medium">We Accept:</span>
              <div className="flex space-x-3">
                {["Visa", "Mastercard", "PayPal", "GPay"].map((payment) => (
                  <div
                    key={payment}
                    className="px-3 py-1 bg-gray-800 rounded text-xs text-gray-300 border border-gray-700"
                  >
                    {payment}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>© 2024 The Man Company. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>in India. All rights reserved.</span>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6">
              {footerLinks.legal.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
