import { Link } from "react-router-dom";

const ProductList = ({products, name}) => {
    
    return (
        <div className="blog-list">
            <h2>{name}</h2>
            {products.map((product) => (
                <div className="product-preview" key={product.id}>
                    <Link to={`/products/${product.id}`}>
                        <h2>{product.name}</h2>
                        <p>${product.price}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default ProductList;