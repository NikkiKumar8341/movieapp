import React, { useState } from "react";
import product from "../db/data";

const Filter = (props) => {
    const { onFilterChange } = props;

    const [categoryFilter, setCategoryFilter] = useState([]);
    const [colorFilter, setColorFilter] = useState([]);
  
    const handleColorChange = (e) => {
      const selectedColor = e.target.value;
  
      if (colorFilter.includes(selectedColor)) {
        setColorFilter(colorFilter.filter((color) => color !== selectedColor));
      } else {
        setColorFilter([...colorFilter, selectedColor]);
      }
    };
  
    const handleCategoryChange = (e) => {
      const selectedCategory = e.target.value;
  
      if (selectedCategory === "all") {
        // Handle the "All" category separately
        if (categoryFilter.includes("all")) {
          // Deselect "All" if it's already selected
          setCategoryFilter(categoryFilter.filter((category) => category !== "all"));
        } else {
          // Select "All" and deselect other categories
          setCategoryFilter(["all"]);
        }
      } else {
        // Handle other categories
        if (categoryFilter.includes("all")) {
          // Deselect "All" if it's selected when selecting other categories
          setCategoryFilter([selectedCategory]);
        } else {
          // Toggle the selection of the category
          if (categoryFilter.includes(selectedCategory)) {
            setCategoryFilter(categoryFilter.filter((category) => category !== selectedCategory));
          } else {
            setCategoryFilter([...categoryFilter, selectedCategory]);
          }
        }
      }
    };
  
    const applyFilters = () => {
      onFilterChange({ category: categoryFilter, color: colorFilter });
    };
  
    // To get unique categories from the product data (without "All")
    function getUniqueCategories(arr, parameter) {
      const uniqueCategories = new Set();
  
      arr.forEach((item) => {
        uniqueCategories.add(item[parameter]);
      });
  
      return Array.from(uniqueCategories); // Convert Set to an array
    }
  
    // To get unique colors from the product data
    const uniqueColor = getUniqueCategories(product, "color");
  
    // To get unique categories (including "All" as an option)
    const uniqueCategories = ["all", ...getUniqueCategories(product, "category")];
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="colorDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Color
                </a>
                <ul className="dropdown-menu" aria-labelledby="colorDropdown">
                  {uniqueColor.map((item) => (
                    <li key={item}>
                      <label>
                        <input
                          type="checkbox"
                          name="color"
                          value={item}
                          checked={colorFilter.includes(item)}
                          onChange={handleColorChange}
                        />
                        {item}
                      </label>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="categoryDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </a>
                <ul className="dropdown-menu" aria-labelledby="categoryDropdown">
                  {uniqueCategories.map((item) => (
                    <li key={item}>
                      <label>
                        <input
                          type="checkbox"
                          name="category"
                          value={item}
                          checked={categoryFilter.includes(item)}
                          onChange={handleCategoryChange}
                        />
                        {item === "all" ? "All" : item}
                      </label>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
            <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" onClick={applyFilters}>
                Apply
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Filter;
