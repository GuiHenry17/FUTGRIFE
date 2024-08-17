import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-toastify/dist/ReactToastify.css';
import Header from "../components/Header/Header";
import Footer from '../components/Footer/Footer';
import ListarProdutos from "../components/ListarProdutos/ListarProdutos";
import '../global.css'


export default function Home() {

    const [listaProdutos, setProdutos] = useState([
        {
            id: 1,
            item: "Camiseta Botafogo",
            imagem: 'https://images.tcdn.com.br/img/img_prod/311840/180_camisa_reebok_botafogo_i_2023_patch_libertadores_135072_1_045c1988bcaacd184a2393733feaa8f2.jpg',
            preco: 'R$169,90',
            oferta: true,
            tags: ['Reebok', 'Botafogo', '2023', 'Libertadores', 'Camisa', 'Esporte']
        },
        {
            id: 2,
            item: 'Camiseta Corinthians',
            imagem: 'https://images.tcdn.com.br/img/img_prod/311840/180_camisa_polo_corinthians_1990_retro_preta_120579_1_1a2cbd4cb6c66657b4fc275644d84314.jpg',
            preco: 'R$239,90',
            oferta: true,
            tags: ['Polo', 'Corinthians', '1990', 'Retro', 'Camisa', 'Esporte']
        },
        {
            id: 3,
            item: 'Camiseta Paysandu',
            imagem: 'https://images.tcdn.com.br/img/img_prod/311840/180_camisa_lobo_paysandu_concentracao_atleta_2024_127323_1_bd5428d6529ff070632aa4513ef0994f.jpg',
            preco: 'R$209,90',
            oferta: true,
            tags: ['Paysandu', '2024', 'Atleta', 'Camisa', 'Esporte', 'Treino']
        },
        {
            id: 4,
            item: 'Camiseta Internacional',
            imagem: 'https://images.tcdn.com.br/img/img_prod/311840/180_camisa_adidas_internacional_ii_2023_libertadores_125231_1_23bf3aac30b70964ab8f204c5014199d.jpg',
            preco: 'R$259,90',
            oferta: true,
            tags: ['Adidas', 'Internacional', '2023', 'Libertadores', 'Camisa', 'Esporte']
        },
        {
            id: 5,
            item: 'Camiseta Bahia',
            imagem: 'https://images.tcdn.com.br/img/img_prod/311840/180_camisa_esquadrao_bahia_ii_2024_142765_1_8868608b9ca0c06ac17d6ceea127cebd.jpg',
            preco: 'R$259,90',
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
                <div className='imagem1'>
                    <img className='imagem1' src="/imagem1.jpeg" />
                </div>
                <div className='imagem2' >
                    <img className='imagem2' src="/imagem2.jpeg" />
                </div>
                <div className="imagem3">
                    <img className="imagem3" src='/imagem3.jpeg' />
                </div>
            </Carousel>
            <br />

            <div className="bloco-principal">
                <ListarProdutos listaProdutos={listaProdutos} />
            </div>
            <Footer />
        </>
    );
}