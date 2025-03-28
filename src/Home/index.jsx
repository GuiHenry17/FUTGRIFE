import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import Header from "../components/Header/Header";
import Footer from '../components/Footer/Footer';
import { Link } from "react-router-dom";
import ListarProdutos from "../components/ListarProdutos/ListarProdutos";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";

export default function Home() {

    const [listaProdutos] = useState([
        {
            id: 1,
            item: "Camiseta Botafogo",
            imagem: 'https://static.dafiti.com.br/p/retr%C3%B4mania-camisa-botafogo-retr%C3%B4-1910-escudo-3678-55174121-1-zoom.jpg',
            preco: 'R$169,90',
            precodesconto: 'R$149,90',
            oferta: true,
            tags: ['Reebok', 'Botafogo', '2023', 'Libertadores', 'Camisa', 'Esporte']
        },
        {
            id: 2,
            item: 'Camiseta Corinthians',
            imagem: 'https://images.tcdn.com.br/img/img_prod/311840/180_camisa_polo_corinthians_1990_retro_preta_120579_1_1a2cbd4cb6c66657b4fc275644d84314.jpg',
            preco: 'R$239,90',
            precodesconto: 'R$219,90',
            oferta: true,
            tags: ['Polo', 'Corinthians', '1990', 'Retro', 'Camisa', 'Esporte']
        },
        {
            id: 3,
            item: 'Camiseta Paysandu',
            imagem: 'https://images.tcdn.com.br/img/img_prod/311840/180_camisa_lobo_paysandu_i_2024_127319_1_5c5a8c593d83c7cf8b9b3bef9da47066.jpg',
            preco: 'R$209,90',
            precodesconto: 'R$189,90',
            oferta: true,
            tags: ['Paysandu', '2024', 'Atleta', 'Camisa', 'Esporte', 'Treino']
        },
        {
            id: 4,
            item: 'Camiseta Internacional',
            imagem: 'https://images.tcdn.com.br/img/img_prod/311840/180_camisa_adidas_internacional_ii_2023_libertadores_125231_1_23bf3aac30b70964ab8f204c5014199d.jpg',
            preco: 'R$259,90',
            precodesconto: 'R$239,90',
            oferta: true,
            tags: ['Adidas', 'Internacional', '2023', 'Libertadores', 'Camisa', 'Esporte']
        },
        {
            id: 5,
            item: 'Camiseta Bahia',
            imagem: 'https://images.tcdn.com.br/img/img_prod/311840/180_camisa_esquadrao_bahia_ii_2024_142765_1_8868608b9ca0c06ac17d6ceea127cebd.jpg',
            preco: 'R$259,90',
            precodesconto: 'R$239,90',
            oferta: true,
            tags: ['Bahia', '2024', 'Esquadrão', 'Camisa', 'Esporte', 'Coleção']
        }
    ]);


    return (
        <> <Header />
            <Carousel
                infiniteLoop
                useKeyboardArrows
                autoPlay
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                dynamicHeight
            >
                <Link to='/ofertas'> <div className='imagem1'>
                    <img className='imagem1' src="/imagem1.jpeg" />
                </div></Link>
                <Link to='/ofertas'><div className='imagem2' >
                    <img className='imagem2' src="/imagem2.jpeg" />
                </div></Link>
                <Link to='/ofertas'><div className="imagem3">
                    <img className="imagem3" src='/imagem3.jpeg' />
                </div></Link>
            </Carousel>
            <br />

            <div className="bloco-principal">
                <ListarProdutos listaProdutos={listaProdutos} />
            </div>
            <Footer />
        </>
    );
}