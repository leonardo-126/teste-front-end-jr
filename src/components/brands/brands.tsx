import './brands.scss'
import Vtex from '../../assets/VTEX.png'

interface BrandsBox {
    img: string,
    alt: string
}

const BrandsBox = (props: BrandsBox) => {
    return (
        <div className="box">
            <img src={props.img} alt={props.alt} />
        </div>
    )
}

export const Brands = () => {
    return (
        <div className="brands">
            <div className="brands-content">
                <div className="brands-content-title">
                    <h1>Navegue por marcas</h1>
                </div>
                <div className="brands-content-box">
                    <BrandsBox img={Vtex} alt='VTEX LOGO'/>
                    <BrandsBox img={Vtex} alt='VTEX LOGO'/>
                    <BrandsBox img={Vtex} alt='VTEX LOGO'/>
                    <BrandsBox img={Vtex} alt='VTEX LOGO'/>
                    <BrandsBox img={Vtex} alt='VTEX LOGO'/>
                </div>
            </div>
        </div>
    )
}