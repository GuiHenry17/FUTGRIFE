import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header id='header'>
            <Link to='/'><img src='/public/imagem4.png' id='imagem4' /></Link>
            <nav id='navg'>
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/produtos'><li>Produtos</li></Link>
                    <Link to='/ofertas'><li>Ofertas</li></Link>
                </ul>
            </nav>

        </header>
    )
}