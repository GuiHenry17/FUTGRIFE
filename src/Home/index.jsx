import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import Header from "../components/Header/Header";
import Footer from '../components/Footer/Footer';   
import '../global.css'



export default function Home() {

    const [listaProdutos, setProdutos] = useState([
        {
            id: 1,
            item: "Camiseta do Palmeiras",
            imagem: "https://images.tcdn.com.br/img/img_prod/311840/180_camisa_puma_palmeiras_i_2022_96864_1_4bf862f00e34ab550ee800add46408f1.jpg",
            preco: "R$ 149,90"
        },
        {
            id: 2,
            item: "Camiseta do Cruzeiro",
            imagem: "https://images.tcdn.com.br/img/img_prod/311840/180_camisa_adidas_cruzeiro_i_2022_95157_1_2f63d664584f86b24ac9849935f8dd7d.jpg",
            preco: "R$ 210,99"
        },
        {
            id: 3,
            item: "Camiseta do Grêmio",
            imagem: "https://images.tcdn.com.br/img/img_prod/311840/180_camisa_umbro_gremio_i_2023_115645_1_e9ccd887cd874e276ea793bc522cd9bd.jpg",
            preco: "R$ 210,99"
        },
        {
            id: 4,
            item: "Camiseta do Santos",
            imagem: "https://images.tcdn.com.br/img/img_prod/311840/180_camisa_umbro_santos_ii_2021_juvenil_88980_1_0ef759c545a97055bf0f9736f50d2b15.jpg",
            preco: "R$ 219,90"
        },
        {
            id: 5,
            item: "Camiseta do São Paulo",
            imagem: "https://images.tcdn.com.br/img/img_prod/311840/180_camisa_new_balance_sao_paulo_i_2024_patch_libertadores_135067_1_be81b65ca9721aba8769ff4d605614de.jpg",
            preco: "R$ 199,90"
        },
        {
            id: 6,
            item: "Camiseta do Botafogo",
            imagem: 'https://images.tcdn.com.br/img/img_prod/311840/180_camisa_reebok_botafogo_i_2023_patch_libertadores_135072_1_045c1988bcaacd184a2393733feaa8f2.jpg',
            preco: 'R$ 169,90'
        },
        {
            id: 7,
            item: 'Camiseta do Corinthians',
            imagem: 'https://images.tcdn.com.br/img/img_prod/311840/180_camisa_polo_corinthians_1990_retro_preta_120579_1_1a2cbd4cb6c66657b4fc275644d84314.jpg',
            preco: '239,90'
        },
        {
            id: 8,
            item: 'Camiseta do Paysandu',
            imagem: 'https://images.tcdn.com.br/img/img_prod/311840/180_camisa_lobo_paysandu_concentracao_atleta_2024_127323_1_bd5428d6529ff070632aa4513ef0994f.jpg',
            preco: '209,90'
        }   
    ]);

    const [listaPedidos, setPedidos] = useState([]);

    const adicionarPedido = (item) => {
        toast("Produto Adicionado!");
        setPedidos([...listaPedidos, item]);
    };

    const removerPedido = (id) => {
        let removeu = false
        let listaAux = listaPedidos.filter((produto) => {
            if (removeu == false) {
                if (produto.id !== id) {
                    return produto
                } else {
                    removeu = true;
                    return null
                }
            } else {
                return produto
            }
        });
        setPedidos(listaAux);
        toast("Produto Removido!")
    };

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
                <div className='imagem2'>
                    <img className='imagem2' src="/imagem2.jpeg" />
                </div>
                <div className="imagem3">
                    <img className="imagem3" src='/imagem3.jpeg' />
                </div>
            </Carousel>
            <br />

            <div className="bloco-principal">
                <div className="bloco-produtos">
                    {listaProdutos.map((p) => (
                        <div key={p.id}>
                            <img className='fotoprodutos' src={p.imagem} alt={p.item} />
                            <p>{p.item}</p>
                            <p>{p.preco}</p>
                            <button onClick={() => adicionarPedido(p)}>ADICIONAR</button>
                        </div>
                    ))}
                </div>
                
                <ToastContainer />
                <Footer/>
            </div>
        </>
    );
}