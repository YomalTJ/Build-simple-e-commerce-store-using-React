import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const ProductDetails = () => {
    const {id} = useParams();
    const {data: product, isPending, error} = useFetch('http://localhost:8000/products/' + id);
    const navigate = useNavigate();

    const handleDelete = () => {
        fetch('http://localhost:8000/products/' + product.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        });
    }

    const handleUpdate = () => {
        navigate('/update', {state: { product }})
    }

    return (
        <div className="product-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {product && (
                <article>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>In stock: {product.stock}</p>
                    <button onClick={handleDelete}>Delete</button>
                    <button onClick={handleUpdate}>Update</button>
                </article>
            )}
        </div>
    );
}
 
export default ProductDetails;