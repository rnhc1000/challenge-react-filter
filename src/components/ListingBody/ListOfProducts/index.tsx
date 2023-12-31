
import './styles.css';
import { ProductDTO } from '../../../dto/product';
type Props = {
    product: ProductDTO
}

export default function ListOfProducts({ product }: Props) {

    return (
        <>
        {
            Object.keys(product).length && 

            <div className="list-card-products">
                <p>{product.name}</p>
                <h3>R$ {product.price.toFixed(2)}</h3>
            </div>

        }
        </>
    );

}