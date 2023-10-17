import { useContext, useState } from 'react';
import './styles.css';
import { ContextProductCount } from '../../../utils/products-context';
import * as productService from '../../../services/product-service';

type FormData = {
    minPrice?: number,
    maxPrice?: number
}

type Props = {
    onSearch: Function;
}

export default function FilterCard({ onSearch }: Props) {

    const [formData, setFormData] = useState<FormData>({
        minPrice: undefined,
        maxPrice: undefined
    })

    function handleInputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        onSearch(formData.minPrice, formData.maxPrice);
        const count = productService.findByPrice(formData.minPrice,formData.maxPrice).length;
        setContextProductCount(count);
        
    }

    const {setContextProductCount} = useContext(ContextProductCount);

    return (
        <section id="filter-section">
            <div className="container-card-filter">
                <form onSubmit={handleSubmit} >

                    <input
                        className="input-filter"
                        name="minPrice"
                        value={formData.minPrice ?? ""}
                        type="text"
                        placeholder="Preço Mínimo"
                        onChange={handleInputChange}
                    />
                    <input
                        className="input-filter"
                        name="maxPrice"
                        value={formData.maxPrice ?? ""}
                        type="text"
                        placeholder="Preço Máximo"
                        onChange={handleInputChange}
                    />

                    <button className="filter" type="submit">Filtrar</button>

                </form>
            </div>
        </section>
    )
}



// function onSearch(minPrice: number | undefined, maxPrice: number | undefined) {
//     throw new Error('Function not implemented.');
// }
