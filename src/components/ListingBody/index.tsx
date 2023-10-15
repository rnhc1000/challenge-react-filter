import './styles.css';

export default function ListingBody() {
    return (
        <section>
            <div className="container-card-filter">

                <div className="input-filter">
                    <p>Preço mínimo</p>

                </div>
                <div className="input-filter">
                    <p>Preço máximo</p>

                </div>
                <div className="filter">
                    <p>Filtrar</p>

                </div>

            </div>
            <div className="container-card-products">
                <div className="list-card-products">
                    <p>Pc Gamer Pro</p>
                    <h3>R$ 1200.00</h3>
                </div>
                <div className="list-card-products">
                    <p>Pc Gamer Pro</p>
                    <h3>R$ 1200.00</h3>
                </div>
                <div className="list-card-products">
                    <p>Pc Gamer Pro</p>
                    <h3>R$ 1200.00</h3>
                </div>
                <div className="list-card-products">
                    <p>Pc Gamer Pro</p>
                    <h3>R$ 1200.00</h3>
                </div>
                <div className="list-card-products">
                    <p>Pc Gamer Pro</p>
                    <h3>R$ 1200.00</h3>
                </div>
            </div>
        </section>

    );
}