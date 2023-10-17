import { useContext } from 'react';
import './styles.css';
import { ContextProductCount } from '../../utils/products-context';

export default function Header() {



    const {contextProductCount} = useContext(ContextProductCount);

    return (
        <>
            <header className="header-container">
                <div className="header-container-content">
                    <h1>DSFilter</h1>
                    <p>{contextProductCount} Produto(s)</p>
                </div>
            </header>
        </>
    );
}