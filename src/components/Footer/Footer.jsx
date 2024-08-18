import { FaFacebookF, FaInstagram, FaTwitter, } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer id='footer'>
            <div className='secoes'>
                <div className='secao' id='secaocontato'>
                    <h4>CONTATO</h4>
                    <p>Email: futgrife.contatofc@gmail.com</p>
                    <p>Telefone: (67) 99889-1326</p>
                </div>

                <div className='secao'>
                    <h4>REDES SOCIAIS</h4>
                    <div className='social-icons'>
                        <a href="https://www.facebook.com"><FaFacebookF /></a>
                        <a href="https://www.instagram.com"><FaInstagram /></a>
                        <a href="https://www.twitter.com"><FaTwitter /></a>
                    </div>
                </div>
            </div>
            <div className='copy'>
                <p>© 2024 Futgrife. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
