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
                    <a href=""><img src={logo} alt="Logo VTex"/></a>
                </div>
                    <form action="">
                        <input type="text" placeholder='O que você está buscando?'/>
                        <img src={search} alt="Pesquisar"/>
                    </form>
                <div className="header-nav-container">
                    <ul>
                        <li>
                            <img src={caixa} alt="Envios" />
                        </li>
                        <li>
                            <img src={heart} alt="Curtidos" />
                        </li>
                        <li>
                            <img src={user} alt="Perfil" />
                        </li>
                        <li>
                            <img src={cart} alt="Carrinho" />
                        </li>
                    </ul>
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