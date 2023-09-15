import React, { useState } from 'react'


const ProductList = ({ filters,data }) => {

//   const [products, setProducts] = useState(data);
//   const [filteredProducts, setFilteredProducts] = useState(data);
//   const [filters, setFilters] = useState({ category: [], color: [] });

//   const applyFilters = (newFilters) => {
//     // Update the filters
//     setFilters(newFilters);

//     // Filter the products based on the selected filters
//     let filteredData = productData;

//     if (newFilters.category.length > 0 && !newFilters.category.includes("all")) {
//       filteredData = filteredData.filter((item) =>
//         newFilters.category.includes(item.category)
//       );
//     }

//     if (newFilters.color.length > 0) {
//       filteredData = filteredData.filter((item) =>
//         newFilters.color.includes(item.color)
//       );
//     }

//     setFilteredProducts(filteredData);
//   };

//   useEffect(() => {
//     // Apply filters when filters change
//     applyFilters(filters);
//   }, [filters]);
  const { category, color } = filters;

  // Filter the data based on the selected category and color
  const filteredProducts = data.filter((item) => {
    if (
      (category.length === 0 || category.includes('all') || category.includes(item.category)) &&
      (color.length === 0 || color.includes(item.color))
    ) {
      return true;
    }
    return false;
  });  
  
  console.log(filteredProducts);
  
  return (
    
    <>
    <div className='container-fluid'>
    <div className='row'>

{
    filteredProducts.map((item)=>{
        return (
<div className='col-4' >
            <div className='card m-2'>
                <div className='p-2 text-center'>
            <img src={item.img} className="image-size" alt="..." />
            <h5 className="card-title">{item.title}</h5>
            </div>
            </div>
        </div>
        
        )
    })
}
        
</div>

    </div>
    </>
  );
}

export default ProductList