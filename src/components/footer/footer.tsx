import './footer.scss'
import face from '../../assets/icones/facebook.png'
import insta from '../../assets/icones/instagram.png'
import youtube from '../../assets/icones/youtube.png'
import visa from '../../assets/pagamentos/Group 1351.png'
import elo from '../../assets/pagamentos/elo.png'
import alelo from '../../assets/pagamentos/alelo.png'
import dinners from '../../assets/pagamentos/dinners.png'
import ifood from '../../assets/pagamentos/ifood.png'
import master from '../../assets/pagamentos/mastercard.png'
import pix from '../../assets/pagamentos/pix.png'
import american from '../../assets/pagamentos/amex.png'
import ticket from '../../assets/pagamentos/ticket.png'
import sodexo from '../../assets/pagamentos/sodexo.png'
import econ from '../../assets/Grupo 1999.png'
import vtex from '../../assets/Group 35.png'


export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-container-content">
                    <div className="footer-container-content-sobre">
                        <div className="footer-container-content-sobre-text">
                            <h1>Sobre nós</h1>
                            <ul>
                                <li><a href="#">Conheça</a></li>
                                <li><a href="#">COMO COMPRAR</a></li>
                                <li><a href="#">Indicação e Desconto</a></li>
                            </ul>
                        </div>
                        <div className='footer-container-content-sobre-icons'>
                            <img src={face} alt="facebook" />
                            <img src={insta} alt="Intagram" />
                            <img src={youtube} alt="facebook" />
                        </div>
                    </div>
                    <div className="footer-container-content-info">
                        <h1 className='title'>INFORMAÇÕES ÚTEIS</h1>
                        <div className='footer-container-content-info-text'>
                            <ul>
                                <li><a href="#">FALE CONOSCO</a></li>
                                <li><a href="#">DÚVIDAS</a></li>
                                <li><a href="#">Prazos de Entrega</a></li>
                                <li><a href="">Formas de Pagamento</a></li>
                                <li><a href="">Política de privacidade</a></li>
                                <li><a href="">Trocas e Devoluções</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-container-content-pag">
                        <h1 className='title'>FORMAS DE PAGAMENTO</h1>
                        <div className='footer-container-content-pag-icones'>
                            <img src={visa} alt="Visa" />
                            <img src={elo} alt="Elo" />
                            <img src={alelo} alt="Alelo" />
                            <img src={dinners} alt="Dinners" />
                            <img src={ifood} alt="Ifood" />
                            <img src={master} alt="Mastercard" />
                            <img src={pix} alt="Pix" />
                            <img src={american} alt="American express" />
                            <img src={ticket} alt="Ticket" />
                            <img src={sodexo} alt="Sodexo" />
                        </div>
                    </div>
                </div>
                <div className="footer-container-register">
                    <div className="footer-container-register-content">
                        <h2>Cadastre-se e Receba nossas</h2>
                        <h3>novidades e promoções</h3>
                        <p>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
                        <form action="">
                            <input type="email" placeholder='Seu e-mail'/>
                            <button>OK</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer-border"></div>
            <div className="footer-copy">
                <div className="footer-copy-container">
                    <p>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.  
                    É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>
                    <div className="footer-copy-container-logo">
                        <img src={econ} alt="Econverce" />
                        <img src={vtex} alt="Vtex" />
                    </div>
                </div>
                
            </div>
        </div>
    )
}