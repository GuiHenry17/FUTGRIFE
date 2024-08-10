import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Header from "../components/Header";
import '../style.css';


export default function Home() {
    return (
        <>
            <h1>Loja do GuizinhoPlays123</h1>
            <Carousel
            infiniteLoop
            useKeyboardArrows
            autoPlay
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            dynamicHeight>
                <div>
                    <img id='imagem1' src="/imagem1.jpeg" /> 
                </div>
                <div>
                    <img id='imagem2' src="/imagem2.jpeg" />
                </div>
            </Carousel>
            <Header />
        </>
    );
}