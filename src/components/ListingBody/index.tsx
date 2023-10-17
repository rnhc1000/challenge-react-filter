import FilterCard from './FilterCard';
import * as productService from '../../services/product-service';
import './styles.css';
import { useEffect, useState } from 'react';
import { ProductDTO } from '../../dto/product';
import ProductCard from './ProductCard';
type Prices = {
    minimum: number,
    maximum: number
}
export default function ListingBody() {

    const [products, setProducts] = useState<ProductDTO[]>([]);

    const [prices, setPrices] = useState<Prices>({
        minimum: 0,
        maximum: Number.MAX_VALUE
    });


    useEffect(() => {

        setProducts(productService.findByPrice(prices.minimum, prices.maximum))
        
    },[products]);


    function handleSearch(minimum: number, maximum: number ) {

        setPrices(prices => ({
            ...prices,
            minimum,
            maximum
        }));
        console.log(minimum);
        console.log(maximum);

    }
    return (
        <main className="listing-body">
            <FilterCard onSearch={handleSearch}/>
            {
                // productService.findAll().map(product => <CatalogCard key={product.id} product={product} />)
                products.map(product => <ProductCard key={product.id} product={product} />)

            }

        </main>

    );
}