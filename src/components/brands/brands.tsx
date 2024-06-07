import './brands.scss'
import Vtex from '../../assets/VTEX.png'
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import { useEffect, useRef, useState } from 'react';

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
    const carrossel = useRef<HTMLDivElement>(null);
    const [start, setStart] = useState(true)
    const [end, setEnd] = useState(false) 

    const scrollWhidth = () => {
        if (carrossel.current) {
            setStart(carrossel.current.scrollLeft === 0)
            setEnd(carrossel.current.scrollLeft + carrossel.current.offsetWidth >= carrossel.current.scrollWidth)
        }
    }

    useEffect (() => {
        scrollWhidth();
    }, [])
    const handleLeft = () => {
        if (carrossel.current) {
            carrossel.current.scrollLeft -= 200;
            scrollWhidth();
        }
    };

    const handleRight = () => {
        if (carrossel.current) {
            carrossel.current.scrollLeft += 200;
            scrollWhidth()
        }
    };
    return (
        <div className="brands">
            <div className="brands-content">
                <div className="brands-content-title">
                    <h1>Navegue por marcas</h1>
                </div>
                <div className="brands-content-c">
                    <div className="brands-content-c-arrows" onClick={handleLeft} style={{ visibility: start ? 'hidden' : 'visible' }}>
                        <IoIosArrowBack size={'60px'} color='#4e4e4e'/>
                    </div>
                    <div className="brands-content-c-box" ref={carrossel}>
                        <BrandsBox img={Vtex} alt='VTEX LOGO'/>
                        <BrandsBox img={Vtex} alt='VTEX LOGO'/>
                        <BrandsBox img={Vtex} alt='VTEX LOGO'/>
                        <BrandsBox img={Vtex} alt='VTEX LOGO'/>
                        <BrandsBox img={Vtex} alt='VTEX LOGO'/>
                        <BrandsBox img={Vtex} alt='VTEX LOGO'/>
                        <BrandsBox img={Vtex} alt='VTEX LOGO'/>
                        <BrandsBox img={Vtex} alt='VTEX LOGO'/>
                        <BrandsBox img={Vtex} alt='VTEX LOGO'/>
                    </div>
                    <div className="brands-content-c-arrows" onClick={handleRight} style={{ visibility: end ? 'hidden' : 'visible' }}>
                        <IoIosArrowForward size={'60px'} color='#4e4e4e' />
                    </div>
                </div>
            </div>
        </div>
    )
}