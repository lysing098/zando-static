import React, { useEffect, useState, useRef } from "react";
import { FaSort } from "react-icons/fa";
import productData from "../data/Product.json";
import Card from "../components/Card";

const Product = () => {
  const [products, setProducts] = useState([]); // products to show on current page
  const [selectedOption, setSelectedOption] = useState("Product Recommend");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize] = useState(8); // number of products per page

  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);
  const [menuWidth, setMenuWidth] = useState("auto");
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    "Product Recommend",
    "Price: Low to High",
    "Price: High to Low",
    "New items",
  ];

  // Sort products and calculate pagination
  const paginateProducts = () => {
    let sorted = [...productData.products];

    // Sorting
    switch (selectedOption) {
      case "Price: Low to High":
        sorted.sort((a, b) => a.originalPrice - b.originalPrice);
        break;
      case "Price: High to Low":
        sorted.sort((a, b) => b.originalPrice - a.originalPrice);
        break;
      case "New items":
        sorted.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        break;
      default:
        break;
    }

    const total = Math.ceil(sorted.length / pageSize);
    setTotalPages(total);

    // Ensure currentPage is not out of bounds
    const page = currentPage > total ? total : currentPage;
    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    setProducts(sorted.slice(start, end));
  };

  // Recalculate when page or sorting changes
  useEffect(() => {
    paginateProducts();
  }, [currentPage, selectedOption]);

  // Dropdown width
  useEffect(() => {
    if (triggerRef.current) {
      setMenuWidth(`${triggerRef.current.offsetWidth}px`);
    }
  }, [isOpen, selectedOption]);

  return (
    <div>
      <div className="flex justify-between items-center">
        <p>Product ({productData.products.length} items)</p>

        {/* Dropdown */}
        <div ref={dropdownRef} className="relative inline-block text-left">
          <div
            ref={triggerRef}
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 cursor-pointer px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg"
          >
            <FaSort />
            <p className="font-medium whitespace-nowrap">
              Sort by: {selectedOption}
            </p>
          </div>

          {isOpen && (
            <div
              className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg border border-gray-100 z-50"
              style={{ width: menuWidth }}
            >
              <ul className="py-2">
                {options.map((option, i) => (
                  <li
                    key={i}
                    className={`px-4 py-2 cursor-pointer transition ${
                      option === selectedOption
                        ? "bg-gray-100 font-semibold"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => {
                      setSelectedOption(option);
                      // removed setCurrentPage(1)
                      setIsOpen(false);
                    }}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Product Cards */}
      <div className="my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item, index) => (
          <Card
            key={index}
            id={item.id}
            imageUrl={item.imageUrl}
            title={item.title}
            discount={item.discount}
            code={item.code}
            originalPrice={item.originalPrice}
          />
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center gap-2 mt-6">
        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`px-3 py-1 border rounded ${
              currentPage === i + 1 ? "bg-gray-300 font-semibold" : ""
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Product;
