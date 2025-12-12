import './Price.css'

export default function PriceContainer({name, Price})
{
    return (
        <div className='price-container'>
            <p>{name}</p>
            <p>{Price}</p>
        </div>
    )
}