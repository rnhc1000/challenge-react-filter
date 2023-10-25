import './styles.css';
import FilterCard from './FilterCard';
import * as productService from '../../services/product-service';
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

    const [prices, setPrices] = useState<Prices>({
        minimum: 0,
        maximum: Number.MAX_VALUE,
    });

    const { setContextProductCount } = useContext(ContextProductCount);

    useEffect(() => {
        setProducts(productService.findByPrice(prices.minimum, prices.maximum));
        const count = productService.findByPrice(prices.minimum, prices.maximum).length;
        setContextProductCount(count);

    }, [prices.minimum, prices.maximum, setContextProductCount]);

    function handleSearch(min: number, max: number) {

        min === undefined ? min = 0 : min;
        max === undefined ? max = Number.MAX_VALUE : max;

        setPrices(() => ({
            ...prices,
            minimum: min,
            maximum: max
        })
        );

    }

    return (

        <>
            <section id="products-section">
                <FilterCard onSearch={handleSearch} />
                {
                    Object.keys(products).length &&

                    <div className="container-card-products">
                        {
                            products.map(product => <ListOfProducts key={product.id} product={product} />)
                        }
                    </div>
                }
            </section>
        </>

    );

}