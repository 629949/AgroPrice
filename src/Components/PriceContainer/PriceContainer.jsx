import './Price.css'

export default function PriceContainer({name, Price, width, height})
{

    const Styles = {
        height: height,
        width: width
    }

    return (
        <div className='price-container' style={Styles}>
            <p>{name}</p>
            <p>{Price}</p>
        </div>
    )
}