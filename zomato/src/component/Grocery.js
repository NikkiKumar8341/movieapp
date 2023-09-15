import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import Contact from './Contact';

const Grocery = () => {

  const [productData,setProductData]=useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const itemsPerPage = 5;

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData=async()=>{
    try{

      const data=await fetch(`https://dummyjson.com/products`,{
      method:'GET',
      mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    });
    const result=await data.json();
    setProductData(result);

    console.log(result);

    setTotalPages(Math.ceil(productData?.products?.length/ itemsPerPage))

   

    }
    catch(error){
      setProductData(error);
      setTotalPages(error)
    }

    
  }

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = productData?.products?.slice(startIndex, endIndex);

  const handlePageChange = ({selected}) => {
    setCurrentPage(selected);
  };

 console.log(subset,"set");
  return (
    <>

<div className="grid grid-cols-3">
        {subset?.length > 0 ? (
          subset.map((item) => (
            <div
              className="m-5 p-5 w-[300px] shadow-lg hover:shadow-[#FC8019]  hover:bg-slate-50"
              key={item.id}
            >
              
              <img
              className="rounded-lg h-28 w-80 hover:scale-110 hover:border-1 border-rose-600" 
              src={item.thumbnail}
              alt={item.title}
              />
              <h1 className='my-3'>{item.title}</h1>
              <h3>price:{item.price}</h3>
              <div className='flex'>
             
              <svg xmlns="http://www.w3.org/2000/svg" style={item.rating  >= 4.5 ? {color:"green"} : item.rating >= 4.3 ? {color: 'orange'} :{color:'red'} }   fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
<h3 style={item.rating  >= 4.5 ? {color:"green"} : item.rating >= 4.3 ? {color: 'orange'} :{color:'red'} }>{item.rating}</h3>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>

      {
        productData?.products?.length >  0 && (
          // <div  className='flex flex-row'>
          <ReactPaginate
          previousLabel={'previous'}
          nextLabel={"Next"}
          pageCount={totalPages}
          onPageChange={handlePageChange}
          containerClassName={'flex flex-row p-2 m-2 justify-center paginationBttns'}
          previousLinkClassName={'previousBttns'}
          nextLinkClassName={'nextBttn'}
          activeClassName={'bg-slate-100 text-zinc-500'}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          breakLabel={'...'}
          />

          // </div>
        )
      }
    </>
  )
}

export default Grocery