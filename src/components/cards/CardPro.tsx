import './CardPro.scss'

interface CardProps {
    width: string | number;
    height: string | number;
    title: string;
    text: string;
    background: string;
    borderRadius: string | number;
    buttonText: string;
}

export const CardPro: React.FC<CardProps> = ({width, height, title, text, background, borderRadius,buttonText}) => {
    const cardStyle: React.CSSProperties = {
        width, 
        height,
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%), url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius,
    }
    return (
        <div className='card' style={cardStyle}>
            <div className="card-content">
                <h1 className='card-title'>{title}</h1>
                <p className='card-sub'>{text}</p>
                <button>{buttonText}</button>
            </div>
        </div>
    )
}