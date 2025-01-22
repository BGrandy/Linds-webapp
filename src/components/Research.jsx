import '../styles/Research.css'
import img1 from '../assets/hydrogen.webp'
import img2 from '../assets/defects.webp'
import img3 from '../assets/scanningPub.webp'
import img4 from '../assets/stress.webp'
import img5 from '../assets/corrosionModeling.webp'
import { useCallback, useState } from 'react'

const researchTopics = [{
    title: 'Hydrogen absorption in copper',
    content: (<p>Hydrogen absorption in copper occurs when hydrogen atoms diffuse into the copper lattice. Unlike metals like palladium, copper has low solubility for hydrogen due to its face-centered cubic (FCC) structure, which lacks suitable interstitial sites for hydrogen to occupy. However, under high pressure or in electrochemical environments, some hydrogen can dissolve into grain boundaries or defects in the copper. This can lead to embrittlement or changes in electrical properties, though copper remains relatively resistant to hydrogen uptake compared to other metals.</p>),
    img: img1
},
{
    title: 'Decoupling radiolysis and radiation-induced defects during stainless steel corrosion',
    content: (<p>Stainless steel corrosion in nuclear environments is driven by two key radiation effects: radiolysis and radiation-induced defects. <br />
        <br />
        1. Radiolysis: High-energy radiation splits water molecules into reactive species (e.g., H₂O₂, OH•, H•), which accelerate corrosion by oxidizing the steel surface.<br />
        2. Radiation-Induced Defects: Radiation knocks atoms out of place in the steel, creating vacancies and interstitials that weaken its structure and alter corrosion resistance.<br />
        <br />
        Decoupling these effects means distinguishing their separate contributions. This helps in designing corrosion-resistant alloys and optimizing operating conditions in nuclear reactors. Researchers achieve this by comparing materials exposed to radiation with and without water present, or by simulating defects independently of radiolysis using ion implantation techniques.</p>),
    img: img2
},
{
    title: 'Advancing scanning Kelvin probe technique for localized corrosion analysis',
    content: (<p>The Scanning Kelvin Probe (SKP) is a non-contact technique that measures surface potential variations, revealing early signs of corrosion. Advancing SKP for localized corrosion analysis focuses on: <br />
        <br />
        1. Higher Resolution: Improved probe design and signal processing allow detection of microscopic corrosion sites.<br />
        2. In-Situ Measurements: Real-time monitoring in humid or electrolyte environments enables studying active corrosion processes.<br />
        3. Multi-Modal Integration: Combining SKP with other techniques (e.g., electrochemical impedance spectroscopy, atomic force microscopy) provides deeper insights into corrosion mechanisms.<br />
        <br />
        These advancements help identify vulnerable regions on metal surfaces, leading to better corrosion-resistant materials and protective coatings.</p>),
    img: img3
},
{
    title: 'Simultaneous corrosion and mechanical crack formation in the presence of radiation of stainless steels',
    content: (<p>SCC occurs when stainless steel is exposed to simultaneous mechanical stress and corrosive environments, leading to crack formation and material failure. In radiation environments (e.g., nuclear reactors), SCC becomes more severe due to two key factors: <br />
        <br />
        1. Radiation-Enhanced Corrosion: Radiation splits water molecules (radiolysis), creating aggressive oxidants (H₂O₂, OH•) that accelerate corrosion. <br />
        2. Radiation-Induced Defects: Radiation displaces atoms in the steel, weakening its structure and making it more susceptible to cracking. <br />
        <br />
        The combined effect of these mechanisms causes cracks to initiate and grow faster, threatening structural integrity. Engineers mitigate SCC by optimizing alloy composition, controlling water chemistry, and reducing stress through design modifications.</p>),
    img: img4
},
{
    title: 'Radiolysis and corrosion modelling',
    content: (<p>In radiation environments (e.g., nuclear reactors), water radiolysis and corrosion are tightly linked. Radiolysis occurs when radiation splits water molecules, producing reactive species (e.g., H₂O₂, OH•, H•) that accelerate corrosion by oxidizing metal surfaces.<br />
        <br />
        Modeling these processes involves:<br />
        1. Radiolysis Simulation: Predicting the formation and reactions of radiolytic species using chemical kinetics and transport models.<br />
        2. Corrosion Kinetics: Describing metal oxidation, dissolution, and passivation under radiation.<br />
        3. Coupled Models: Integrating radiolysis and corrosion dynamics to predict long-term material degradation in nuclear systems.<br />
        <br />
        Such models help optimize reactor materials, water chemistry, and safety strategies to extend component lifetimes.</p>),
    img: img5
},
];

function Research() {
    const [visibleIndex, setVisibleIndex] = useState(null);

    const handleResearchClick = useCallback((index) => {
        setVisibleIndex(prevIndex => (prevIndex === index ? null : index));
    },);

    return (
        <div className="research">
            <div className='research-info'>
                <h2>Research</h2>
                <p>We want to gain a fundamental understanding of radiation-induced degradation of metals. We study materials relevant to the nuclear industry, including  copper and stainless steels, using state-of-the-art scanning electrochemical probes. We have unique access to highly ionizing radiation with the SLOWPOKE-2 nuclear reactor.</p>
            </div>
            <div className='research-card'>
                {researchTopics.map((topic, index) =>
                    <div className='research-panel' key={index} onClick={() => handleResearchClick(index)}>
                        <div className='researchTitle-struct'>
                            <h3 className='research-title'>{topic.title}</h3>
                            <div className={`chevron ${visibleIndex === index ? 'down' : ''}`}/>
                        </div>
                        <div className={`research-content ${visibleIndex === index ? 'open' : ''}`}>
                            <img src={topic.img} className='imgStruct' alt={topic.title}></img>
                            {topic.content}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Research