import './categoria.scss'

interface CategoryProps {
    title: string,
    subTitle: string
}

const CategoryProps = (props: CategoryProps) => {
    return (
        <div className="category-title">
            <div className="category-title-content">
                <div className='category-title-border'></div>
                <h1>{props.title}</h1>
                <div className='category-title-border'></div>
            </div>
            <div className="category-title-sub"><p>{props.subTitle}</p></div>
        </div>
    )
}


export const Category = () => {
    return (
        <div className="category">
            <CategoryProps title='Produtos relacionados' subTitle=''/>
            <nav className='category-nav'>
                <ul>
                    <li><a href="#" className='active'>celular</a></li>
                    <li><a href="#">acessórios</a></li>
                    <li><a href="#">tablets</a></li>
                    <li><a href="#">NOTEBOOKS</a></li>
                    <li><a href="#">TVs</a></li>
                    <li><a href="#">Ver todos</a></li>
                </ul>
            </nav>
        </div>
    )
} 