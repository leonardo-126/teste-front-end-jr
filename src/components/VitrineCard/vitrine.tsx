import { useEffect, useRef, useState } from 'react';
import './vitrine.scss'
import menos from '../../assets/minus.png'
import mais from '../../assets/plus.png'
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

interface CardVitrineProps {
    productName: string,
    descriptionShort: string,
    photo: string,
    price: number
}

const list = [
    {
      "productName": "Iphone 11 PRO MAX BRANCO 1",
      "descriptionShort": "Iphone 11 PRO MAX BRANCO 1",
      "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
      "price": 15000
    },
    {
      "productName": "IPHONE 13 MINI 1",
      "descriptionShort": "IPHONE 13 MINI 1",
      "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
      "price": 9000
    },
    {
      "productName": "Iphone 11 PRO MAX BRANCO 2",
      "descriptionShort": "Iphone 11 PRO MAX BRANCO 2",
      "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
      "price": 14990
    },
    {
      "productName": "IPHONE 13 MINI 2",
      "descriptionShort": "IPHONE 13 MINI 2",
      "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
      "price": 12000
    },
    {
      "productName": "Iphone 11 PRO MAX BRANCO 3",
      "descriptionShort": "Iphone 11 PRO MAX BRANCO 3",
      "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
      "price": 4550
    },
    {
      "productName": "IPHONE 13 MINI 3",
      "descriptionShort": "IPHONE 13 MINI 3",
      "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
      "price": 38000
    },
    {
      "productName": "Iphone 11 PRO MAX BRANCO 4",
      "descriptionShort": "Iphone 11 PRO MAX BRANCO 4",
      "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
      "price": 42000
    },
    {
      "productName": "IPHONE 13 MINI 4",
      "descriptionShort": "IPHONE 13 MINI 4",
      "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
      "price": 520
    },
    {
      "productName": "Iphone 11 PRO MAX BRANCO 5",
      "descriptionShort": "Iphone 11 PRO MAX BRANCO 5",
      "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
      "price": 149990
    },
    {
      "productName": "IPHONE 13 MINI 5",
      "descriptionShort": "IPHONE 13 MINI 5",
      "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
      "price": 100000
    }
  ]


const CardVitrineProps = (props: CardVitrineProps) => {
    const [modal, setModal] = useState(false)
    const [value, setValue] = useState(1)

    const decrementValue = () => {
        setValue(value - 1)
    }

    const incrementValue = () => {
        if(value >= 1){
            setValue(value + 1)
        }
    }
    return (
        <>
        {modal == true ? 
        <>
            <div className="backmodal" onClick={() => {setModal(false)}}/>
            <div className="card-modal">
                <div className='card-modal-img'>
                    <img src={props.photo} alt={props.productName} />
                </div>
                <div className='card-modal-content'>
                    <div className="card-modal-content-close" onClick={() => {setModal(false)}}>
                        <IoMdClose size={'30px'}/>
                    </div>
                    <h1 className='modaltitle'>{props.productName}</h1>
                    <span className='modalprice'>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(props.price)}</span>
                    <p className='modaltext'>Many desktop publishing packages and web page editors now many desktop publishing</p>
                    <a href="" className='link'>Veja mais detalhes do produto <IoIosArrowForward/></a>
                    <form action="" className='form'>
                        <img src={menos} alt="menos" onClick={decrementValue}/>
                            <span>{value}</span>
                        <img src={mais} alt="mais" onClick={incrementValue} />
                    </form>
                    <button className='modal-button'>COMPRAR</button>
                </div>
            </div>
        </>
        :<></>}
        <li className="card">
            <img src={props.photo} alt={props.productName} />
            <div className="card-content">
                <h1 className='title'>{props.productName}</h1>
                <span className='promo'>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.price + (props.price * 0.1))}</span>
                <span className='value'>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(props.price)}</span>
                <p className='parse'>ou 2x de {new Intl.NumberFormat('pt-BR', {currency: 'BRL'}).format(props.price / 2)} sem juros</p>
                <span className='frete'>Frete grátis</span>
                <button className='button-product' onClick={() => {setModal(true)}}>Comprar</button>
            </div>
        </li>
        </>
    )
}

export const Vitrine = () => {
    const carrossel = useRef<HTMLDivElement>(null);
    const [start, setStart] = useState(true)
    const [end, setEnd] = useState(false) 
    let i = -1

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
        <div className="vitrine">
            <div className="vitrine-container">
                <div className="vitrine-container-arrows" onClick={handleLeft} style={{ visibility: start ? 'hidden' : 'visible' }}>
                    <IoIosArrowBack size={'60PX'}/>
                </div>
                <div ref={carrossel} className='vitrine-container-list'>
                    {list.map((list: any) => {
                        i++
                        return <CardVitrineProps key={i} photo={list.photo} productName={list.productName} descriptionShort={list.productName} price={list.price}/>
                    })}
                </div>
                <div className="vitrine-container-arrows" onClick={handleRight} style={{ visibility: end ? 'hidden' : 'visible' }}>
                    <IoIosArrowForward size={'60PX'}/>
                </div>
            </div>
        </div>
    )
}