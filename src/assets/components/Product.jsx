export default function Product (props){
    return(
        <>
                <div className="product-card">
                    <p>Product Name: {props.name}</p>
                    <p>Product Price: {props.price}</p>
                    <p>Product Quantity: {props.quantity}</p>
                </div>
        </>
    )
}