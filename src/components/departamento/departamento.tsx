import './departamento.scss'
import tecnologia from '../../assets/dep/monitorar.png'
import supermercado from '../../assets/dep/supermercados 1.png'
import bebidas from '../../assets/dep/whiskey.png'
import Ferramentas from '../../assets/dep/ferramentas 1.png'
import Saude from '../../assets/dep/saude.png'
import Esportes from '../../assets/dep/corrida 1.png'
import Moda from '../../assets/dep/moda 1.png'

interface DepProps {
    title: string,
    img: string,
    description: string,
    classimg?: string,
    classContent?: string

}
const DepProps = (props: DepProps) => {
    return (
        <div className="box">
            <div className={"container " + props.classimg}>
                <img src={props.img} alt={props.description}/>
            </div>
            <div className={props.classContent}>
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}

export const Departamento = () => {
    return (
        <div className="departamento">
            <DepProps title="Tecnologia" img={tecnologia} description='Tecnologia' classimg='active' classContent='active-p'/>
            <DepProps title='Supermercado' description='Supermercado' img={supermercado} classimg='container' classContent='content'/>
            <DepProps title='Bebidas' description='Bebidas' img={bebidas} classimg='container' classContent='content'/>
            <DepProps title='Ferramentas' description='Ferramentas' img={Ferramentas} classimg='container' classContent='content'/>
            <DepProps title='Saúde' description='Saúde' img={Saude} classimg='container' classContent='content'/>
            <DepProps title='Esportes e Fitness' description='Esportes e Fitness' img={Esportes} classimg='container' classContent='content'/>
            <DepProps title='Moda' description='Moda' img={Moda} classimg='container' classContent='content'/>
        </div>
    )
}