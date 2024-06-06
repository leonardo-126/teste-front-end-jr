import { CardPro } from '../cards/CardPro.tsx'
import './products.scss'
import parceiros from '../../assets/backIamgePro/Parceiros.png'
import produtos from '../../assets/backIamgePro/Produtos.png'
import { Category } from '../category/category.tsx'

interface ProductProps {
    title: string,
    subTitle: string
}

const ProductProps = (props: ProductProps) => {
    return (
        <div className="products-title">
            <div className="products-title-content">
                <div className='products-title-border'></div>
                <h1>{props.title}</h1>
                <div className='products-title-border'></div>
            </div>
            <button className='products-title-sub'>{props.subTitle}</button>
        </div>
    )
}


export const Products= () => {
    return (
        <div className="products">
            <ProductProps title='produtos relacionados' subTitle=''/>
            <Category/>
            <div className="Products-cards">
                <div className="products-cards-content">
                    <CardPro 
                    title='Parceiros' 
                    text='Lorem ipsum dolor sit amet, consectetur'
                    buttonText='Confira'
                    width={575}
                    height={350}
                    borderRadius={20}
                    background={parceiros}
                    />
                    <CardPro 
                    title='Parceiros' 
                    text='Lorem ipsum dolor sit amet, consectetur'
                    buttonText='Confira'
                    width={575}
                    height={350}
                    borderRadius={20}
                    background={parceiros}
                    />
                </div>
                <ProductProps title='produtos relacionados' subTitle='Ver todos'/>
                <div className="products-cards-content">
                    <CardPro 
                    title='Produtos' 
                    text='Lorem ipsum dolor sit amet, consectetur'
                    buttonText='Confira'
                    width={575}
                    height={280}
                    borderRadius={10}
                    background={produtos}
                    />
                    <CardPro 
                    title='Produtos' 
                    text='Lorem ipsum dolor sit amet, consectetur'
                    buttonText='Confira'
                    width={575}
                    height={280}
                    borderRadius={10}
                    background={produtos}
                    />
                </div>
            </div>
        </div>
    )
} 