import '../styles/Publications.css'
import img1 from '../assets/img1.gif'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/Untitled.png'

function Publications() {
    return (
        <>
            <div className='publication-title'><h2>Selected Publications</h2></div>
            <div className='grid-container'>

                <div>
                    <img src={img1}></img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed augue  elementum, porttitor odio nec, accumsan magna. Sed vel mi vitae odio  suscipit rhoncus in nec nunc.</p>
                    <a href='/'>Learn More 🢒</a>
                </div>
                <div>
                    <img src={img2}></img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed augue  elementum, porttitor odio nec, accumsan magna. Sed vel mi vitae odio  suscipit rhoncus in nec nunc.</p>
                    <a>Learn More 🢒</a>
                </div>
                <div>
                    <img src={img3}></img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed augue  elementum, porttitor odio nec, accumsan magna. Sed vel mi vitae odio  suscipit rhoncus in nec nunc.</p>
                    <a>Learn More 🢒</a>
                </div>
                <div>
                    <img src={img4}></img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed augue  elementum, porttitor odio nec, accumsan magna. Sed vel mi vitae odio  suscipit rhoncus in nec nunc.</p>
                    <a>Learn More 🢒</a>
                </div>
                <div>
                    <img src={img5}></img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed augue  elementum, porttitor odio nec, accumsan magna. Sed vel mi vitae odio  suscipit rhoncus in nec nunc.</p>
                    <a>Learn More 🢒</a>
                </div>
            </div>

        </>
    )
}

export default Publications