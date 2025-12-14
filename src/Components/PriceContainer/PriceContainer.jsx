import './Price.css'

export default function PriceContainer({name, Price, width, height, BorderRadius})
{

    const Styles = {
        height: height,
        width: width,
        borderRadius: BorderRadius
   
    }

    return (
        <div className='price-container' style={Styles}>
            <p>{name}</p>
            <p>{Price}</p>
        </div>
    )
}