import { useState } from "react";
import Header from "../Header/Header";
import Footer from '../Footer/Footer'
import ListarProdutos from "../ListarProdutos/ListarProdutos";

export default function Produtos() {

    const [listaProdutos] = useState([
        {
            id: 1,
            item: "Camiseta Palmeiras",
            imagem: "https://images.tcdn.com.br/img/img_prod/311840/180_camisa_puma_palmeiras_i_2022_96864_1_4bf862f00e34ab550ee800add46408f1.jpg",
            preco: "R$149,90",
            oferta: false,
            tags: ['Puma', 'Palmeiras', '2022', 'Home', 'Camisa', 'Esporte']
        },
        {
            id: 2,
            item: "Camiseta Cruzeiro",
            imagem: "https://images.tcdn.com.br/img/img_prod/311840/180_camisa_adidas_cruzeiro_i_2022_95157_1_2f63d664584f86b24ac9849935f8dd7d.jpg",
            preco: "R$210,99",
            oferta: false,
            tags: ['Adidas', 'Cruzeiro', '2022', 'Home', 'Camisa', 'Esporte']
        },
        {
            id: 3,
            item: "Camiseta Grêmio",
            imagem: "https://images.tcdn.com.br/img/img_prod/311840/180_camisa_umbro_gremio_i_2023_115645_1_e9ccd887cd874e276ea793bc522cd9bd.jpg",
            preco: "R$210,99",
            oferta: false,
            tags: ['Umbro', 'Grêmio', '2023', 'Home', 'Camisa', 'Esporte']
        },
        {
            id: 4,
            item: "Camiseta Santos",
            imagem: "https://images.tcdn.com.br/img/img_prod/311840/180_camisa_umbro_santos_ii_2021_juvenil_88980_1_0ef759c545a97055bf0f9736f50d2b15.jpg",
            preco: "R$219,90",
            oferta: false,
            tags: ['Umbro', 'Santos', '2021', 'Juvenil', 'Camisa', 'Esporte']
        },
        {
            id: 5,
            item: "Camiseta São Paulo",
            imagem: "https://images.tcdn.com.br/img/img_prod/311840/180_camisa_new_balance_sao_paulo_i_2024_patch_libertadores_135067_1_be81b65ca9721aba8769ff4d605614de.jpg",
            preco: "R$199,90",
            precodesconto: 'R$179,90',
            oferta: false,
            tags: ['New Balance', 'São Paulo', '2024', 'Home', 'Libertadores', 'Camisa']
        },
        {
            id: 6,
            item: "Camiseta Botafogo",
            imagem: 'https://images.tcdn.com.br/img/img_prod/311840/180_camisa_reebok_botafogo_i_2023_patch_libertadores_135072_1_045c1988bcaacd184a2393733feaa8f2.jpg',
            preco: 'R$169,90',
            precodesconto: 'R$149,90',
            oferta: true,
            tags: ['Reebok', 'Botafogo', '2023', 'Libertadores', 'Camisa', 'Esporte']
        },
        {
            id: 7,
            item: 'Camiseta Corinthians',
            imagem: 'https://images.tcdn.com.br/img/img_prod/311840/180_camisa_polo_corinthians_1990_retro_preta_120579_1_1a2cbd4cb6c66657b4fc275644d84314.jpg',
            preco: 'R$239,90',
            precodesconto: 'R$219,90',
            oferta: true,
            tags: ['Polo', 'Corinthians', '1990', 'Retro', 'Camisa', 'Esporte']
        },
        {
            id: 8,
            item: 'Camiseta Paysandu',
            imagem: 'https://images.tcdn.com.br/img/img_prod/311840/180_camisa_lobo_paysandu_i_2024_127319_1_5c5a8c593d83c7cf8b9b3bef9da47066.jpg',
            preco: 'R$209,90',
            precodesconto: 'R$189,90',
            oferta: true,
            tags: ['Paysandu', '2024', 'Atleta', 'Camisa', 'Esporte', 'Treino']
        },
        {
            id: 9,
            item: 'Camiseta Internacional',
            imagem: 'https://images.tcdn.com.br/img/img_prod/311840/180_camisa_adidas_internacional_ii_2023_libertadores_125231_1_23bf3aac30b70964ab8f204c5014199d.jpg',
            preco: 'R$259,90',
            precodesconto: 'R$239,90',
            oferta: true,
            tags: ['Adidas', 'Internacional', '2023', 'Libertadores', 'Camisa', 'Esporte']
        },
        {
            id: 10,
            item: 'Camiseta Bahia',
            imagem: 'https://images.tcdn.com.br/img/img_prod/311840/180_camisa_esquadrao_bahia_ii_2024_142765_1_8868608b9ca0c06ac17d6ceea127cebd.jpg',
            preco: 'R$229,90',
            precodesconto: 'R$209,90',
            oferta: true,
            tags: ['Bahia', '2024', 'Esquadrão', 'Camisa', 'Esporte', 'Coleção']
        },
        {
            id: 11,
            item: 'Camiseta Vasco',
            imagem: 'https://images.tcdn.com.br/img/img_prod/311840/180_camisa_vasco_panoramic_branca_134822_1_14232178e761d3b27e26a4f255985f41.jpg',
            preco: 'R$239,90',
            precodesconto: 'R$219,90',
            oferta: true,
            tags: ['Vasco', 'Panoramic', 'Branca', 'Camisa', 'Esporte', 'Coleção']
        },
        {
            id: 12,
            item: 'Camiseta Ceará',
            imagem: 'https://images.tcdn.com.br/img/img_prod/311840/180_camisa_vozao_ceara_i_2024_132280_1_f5925d837ffec54b97f40964cafb96b3.jpg',
            preco: 'R$199,90',
            precodesconto: 'R$179,90',
            oferta: true,
            tags: ['Ceará', '2024', 'Home', 'Camisa', 'Esporte', 'Coleção']
        },
        {
            id: 13,
            item: 'Camiseta Sport Recife',
            imagem: 'https://images.tcdn.com.br/img/img_prod/311840/180_camisa_umbro_sport_recife_i_2023_115817_1_655b494fbc6a5ceaf6e0ff93a7926ffa.jpg',
            preco: 'R$189,90',
            precodesconto: 'R$169,90',
            oferta: true,
            tags: ['Umbro', 'Sport Recife', '2023', 'Home', 'Camisa', 'Esporte']
        },
        {
            id: 14,
            item: 'Camiseta do Flamengo',
            imagem: 'https://images.tcdn.com.br/img/img_prod/311840/180_camisa_adidas_flamengo_i_2024_patch_libertadores_135073_1_cf7cec88261d19a941e133d8cb52f866.jpg',
            preco: 'R$169,90',
            precodesconto: 'R$149,90',
            oferta: true,
            tags: ['Adidas', 'Flamengo', '2024', 'Libertadores', 'Camisa', 'Esporte']
        },
        {
            id: 15,
            item: 'Camiseta Coritiba',
            imagem: 'https://images.tcdn.com.br/img/img_prod/311840/180_camisa_coritiba_classic_verde_133997_1_eaa7fed3ee68f94be7e866c5d6348ba2.jpg',
            preco: 'R$199,90',
            precodesconto: 'R$179,90',
            oferta: true,
            tags: ['Coritiba', 'Classic', 'Verde', 'Camisa', 'Esporte', 'Coleção']
        }
    ]);

    return (
        <>
            <Header id='headerprod' />


            <div className="bloco-principal">
                <div className="pagename">
                    <h1>Produtos</h1>
                </div>
                <ListarProdutos listaProdutos={listaProdutos} />
            </div>
            <Footer />
        </>
    );
}