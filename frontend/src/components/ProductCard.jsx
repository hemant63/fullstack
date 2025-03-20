import './component.css';

const ProductCard = ({product, index}) =>{
    return(
        <div key={index} className="product-card">
            <img src={product?.thumbnail} alt={`Product${product?.id}`} />
            <div className="product-card-info">
                <p>{product?.title}</p>
                <p>Rs. {Math.ceil(product?.price * 100)}</p>
            </div>
        </div>
    )
}

export default ProductCard;