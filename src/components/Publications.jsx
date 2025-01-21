import '../styles/Publications.css'
import img1 from '../assets/Localising.jpeg'
import img2 from '../assets/geological.webp'
import img3 from '../assets/scanning.webp'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/Untitled.png'

function Publications() {
    return (
        <>
            <h2 className='publication-title'>Selected Publications</h2>
            <div className='grid-container'>

                <div>
                    <img src={img1}></img>
                    <p>Localising the electrochemistry of corrosion fatigue. (2024)</p>
                    <a href='https://www.sciencedirect.com/science/article/abs/pii/S135902942200067X?via%3Dihub'>Learn More 🢒</a>
                </div>
                <div>
                    <img src={img2}></img>
                    <p>Radiation Induced Corrosion of Copper in Deep Geological Repositories. (2022)</p>
                    <a href='https://www.osti.gov/biblio/23005367'>Learn More 🢒</a>
                </div>
                <div>
                    <img src={img3}></img>
                    <p>Selective Initiation of Corrosion Pits in Stainless Steel Using Scanning Electrochemical Cell Microscopy. (2019)</p>
                    <a href='https://pubs.acs.org/doi/full/10.1021/acs.analchem.3c04637'>Learn More 🢒</a>
                </div>
                <div>
                    <img src={img4}></img>
                    <p>Somthing that accurately describes this graph. its correlation between the lines and the other lines. Lines have colours to differentiate them and why. Something else interesting.</p>
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