import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductCreate = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [stock, setStock] = useState('');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const product = { name, description, category, price, imageUrl, stock };

        setIsPending(true);

        fetch('http://localhost:8000/products', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(product)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            navigate('/');
        })
        
    }

    return (
        <div className="create">
            <h2>Add a New Product</h2>
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

                {!isPending && <button>Add Product</button>}
                {isPending && <button disabled>Adding blog...</button>}
            </form>
        </div>
    );
}

export default ProductCreate;