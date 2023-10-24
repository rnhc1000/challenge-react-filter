import FilterCard from './FilterCard';
import * as productService from '../../services/product-service';
import './styles.css';
import { useContext, useEffect, useState } from 'react';
import { ProductDTO } from '../../dto/product';
import { ContextProductCount } from '../../utils/products-context';
import ListOfProducts from './ListOfProducts';

type Prices = {
    minimum: number,
    maximum: number
}

export default function ListingBody() {

    const [products, setProducts] = useState<ProductDTO[]>([]);
    const { setContextProductCount } = useContext(ContextProductCount);
    const [prices, setPrices] = useState<Prices>({
        minimum: 0,
        maximum: Number.MAX_VALUE
    });


    useEffect(() => {
        setProducts(productService.findByPrice(prices.minimum, prices.maximum));
        const count = productService.findByPrice(prices.minimum, prices.maximum).length;
        setContextProductCount(count);

    }, [prices.maximum, prices.minimum, products, setContextProductCount]);

    function handleSearch(minimum: number, maximum: number) {

        setPrices(prices => ({
            ...prices,
            minimum,
            maximum
        })
        );

    }

    return (

        <>
            <section id="products-section">
            <FilterCard onSearch={handleSearch} />
                <div className="container-card-products">
                        {
                            products.map(product => <ListOfProducts key={product.id} product={product} />)
                        }
                    </div>
            </section>
        </>

    );
}