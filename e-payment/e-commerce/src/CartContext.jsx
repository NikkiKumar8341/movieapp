import { createContext,useState } from "react";
import { productsArray ,getProductData } from "./productsStore";


export const CartContext=createContext({
    items:[],
    getProductQuatity:()=>{},
    addOneToCart:()=>{},
    removeOneFromCart:()=>{},
    deleteFromCart:()=>{},
    getTotalCost:()=>{}
});


export function CartProvider({children}){

    const [cartProducts,setCartProducts]=useState([])

    //[{id:1,quantity:2} , {id:2,qantity:1}]

    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;
        
        if (quantity === undefined) {
            return 0;
        }

        return quantity;
    }


    function addOneToCart(id){

        const quantity= getProductQuantity(id);


        if(quantity === 0){ //product is not in cart

            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id:id,
                        quantity:1
                    }
                ]
            )

        }else{// product is in cart
            // [....{id:1,quantity:3},{id:2,quantity:1+1}]

            setCartProducts(
                cartProducts.map(
                    (product)=> product.id === id                   //if statement
                    ? {...product,quantity:product.quantity +1}     //if statement is true 
                    : product                                       //if statement is false   
                )
            )
        }

    }


    function deleteFromCart(id){

        //[] if an object meets a condtion ,add the object to array
        //[product1,product2,product3]
        //if we want delete product of item of id 2 it wiil add the products of remaninig id's

        setCartProducts(
            cartProduct=>
            cartProduct.filter(currentProduct =>{
                return currentProduct.id !=id;
            })
        )
         
    }

    function removeOneFromCart(id){
        const quantity= getProductQuantity(id);

        if(quantity == 1){
            deleteFromCart(id);
        }
        else{
            setCartProducts.map(
                product =>
                product.id ==id                              //if condition
                ?{...product,quantity:product.quantity-1}    //if statement is true
                :product                                     //if statement is false
            )
        }
    }

    function getTotalCost(){
        let totalCost=0;

        cartProducts.map((cartItem)=>{
            const productData=getProductData(cartItem.id);
            totalCost +=(productData.price * cartItem.quantity)
        })

        return totalCost;
    }

    const contextValue={
    items:cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost

    }


    return(
        <CartContext.Provider  value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;


//code Down Here


//context (cart,addToCart,removeCart)
//provider -> gives your react app access to all the things in your context