function ProductItem({title,price}){
    return(
        <div>
            <h3> Name Item: {title}</h3>
            <p>Price:  ₹{price}</p>
        </div>
       
    );
};
export default ProductItem;