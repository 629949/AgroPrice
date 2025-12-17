export default function sideNav({height,width}) 
{

    const style ={
        height:"screen",
        width:"400px",
        color: 'black'
    }


    return (
        <>
            <div style={style}>
                <nav>
                    <ol>
                        <li>Home</li>
                        <li>AddCrop</li>
                        <li></li>
                        <li></li>
                    </ol>
                </nav>
            </div>
        
        </>
    )
}