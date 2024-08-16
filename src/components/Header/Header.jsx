import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header id='header'>
            <h1>Cachorro Mal</h1>
            <nav>
            <ul>
                <Link to='/produtos'><li>Produtos</li></Link>
                <Link to='/ofertas'><li>Ofertas</li></Link>
            </ul>
            </nav>
    
        </header>
    )
}