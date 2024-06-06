import './header.scss'
import shieldCheck from '../../assets/header/ShieldCheck.png';
import truck from '../../assets/header/Truck.png';
import card from '../../assets/header/CreditCard.png';
import logo from '../../assets/logo.png'
import search from '../../assets/header/search.png'
import caixa from '../../assets/header/caixa.png'
import heart from '../../assets/header/heart.png'
import user from '../../assets/header/UserCircle.png'
import cart from '../../assets/header/ShoppingCart.png'
import crown from '../../assets/header/CrownSimple.png'
import { Banner } from '../baner/banner';

export const Header = () => {
    return (
        <>
        <div className="header">
            <div className="header-info">
                <div className="header-info-content">
                    <img src={shieldCheck} alt='Shield Check'/><p>Compra </p><span>100% segura</span>
                </div>
                <div className="header-info-content">
                    <img src={truck} alt='Shield Check'/><span>Frete grátis </span><p>acima de R$ 200</p>
                </div>
                <div className="header-info-content">
                    <img src={card} alt='Credit Card'/><span>Parcele </span><p>suas compras</p>
                </div>
            </div>
            <div className="header-nav">
                <div className='header-nav-logo'>
                    <img src={logo} alt="Logo VTex"/>
                </div>
                <div className="header-nav-search">
                    <p>O que você está buscando?</p>
                    <img src={search} alt="Pesquisar" />
                </div>
                <div className="header-nav-container">
                    <img src={caixa} alt="Envios" />
                    <img src={heart} alt="Curtidos" />
                    <img src={user} alt="Perfil" />
                    <img src={cart} alt="Carrinho" />
                </div>
            </div>
            <div className="header-content">
                <ul>
                    <li>
                        <a href="#">Todas Categorias</a>
                    </li>
                    <li>
                        <a href="#">Supermercado</a>
                    </li>
                    <li>
                        <a href="#">Livros</a>
                    </li>
                    <li>
                        <a href="#">Moda</a>
                    </li>
                    <li>
                        <a href="#">Lançamentos</a>
                    </li>
                    <li className='active'>
                        <a href="#">Ofertas do dia</a>
                    </li>
                    <li >
                        <a href="#"><img src={crown} alt="Coroa" />Assinatura</a>
                    </li>
                </ul>
            </div>
        </div>
        <Banner/>
        </>
    )
}