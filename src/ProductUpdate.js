import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProductUpdate = () => {
    const location = useLocation();
    const product = location.state.product;

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [stock, setStock] = useState('');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if(product){
            setName(product.name)
            setDescription(product.description)
            setCategory(product.category)
            setPrice(product.price)
            setImageUrl(product.imageUrl)
            setStock(product.stock)
        }
    }, [product])

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedProduct = { name, description, category, price, imageUrl, stock };

        fetch('http://localhost:8000/products/' + product.id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedProduct)
        }).then(() => {
            console.log('Product Updated')
            setIsPending(false)
            navigate('/')
        })
    }

    return (
        <div className="create">
            <h2>Update Product</h2>
            <form onSubmit={handleSubmit}>
                <label>Product Name:</label>
                <input 
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                />

                <label>Product Description:</label>
                <textarea 
                    type="text"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} 
                />

                <label>Product Category:</label>
                <select 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)} 
                >
                    <option value="Electronics">Electronics</option>
                    <option value="Home Appliances">Home Appliances</option>
                    <option value="Fitness">Fitness</option>
                    <option value="Footwear">Footwear</option>
                    <option value="Kitchen">Kitchen</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Personal Care">Personal Care</option>
                </select>

                <label>Product Price:</label>
                <input 
                    type="number"
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)} 
                />

                <label>Product Image:</label>
                <input 
                    type="text"
                    required
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)} 
                />

                <label>In Stock:</label>
                <input 
                    type="number"
                    required
                    value={stock}
                    onChange={(e) => setStock(e.target.value)} 
                />

                {!isPending && <button>Update Product</button>}
                {isPending && <button disabled>Updating blog...</button>}
            </form>
        </div>
    );
}
 
export default ProductUpdate;