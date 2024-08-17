import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header id='header'>
            <h1>FutGrife</h1>
            <nav>
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/produtos'><li>Produtos</li></Link>
                    <Link to='/ofertas'><li>Ofertas</li></Link>
                </ul>
            </nav>

        </header>
    )
}