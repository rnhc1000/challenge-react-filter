import './styles.css';
import { ProductDTO } from '../../../dto/product';
type Props = {
    product: ProductDTO
}

export default function ProductCard({ product }: Props) {
    return (
        <>
        <section id="products-section">
            <div className="container-card-products">                  
                <div className="list-card-products">                 
                    <p>{product.name}</p>
                    <h3>R$ {product.price.toFixed(2)}</h3>
                </div>
            </div>
        </section>
        </>
    );
}