import '../styles/Research.css'

import img1 from '../assets/img1.gif'

import img2 from '../assets/img2.jpg'

import img3 from '../assets/img3.jpg'

import img4 from '../assets/img4.jpg'

import img5 from '../assets/Untitled.png'





function Research() {



    const researchTopics = [{

        title: 'Hydrogen absorption in copper',

        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed augue  elementum, porttitor odio nec, accumsan magna. Sed vel mi vitae odio  suscipit rhoncus in nec nunc.',

        img: img1

    },

    {

        title: 'Decoupling radiolysis and radiation-induced defects during stainless steel corrosion',

        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed augue  elementum, porttitor odio nec, accumsan magna. Sed vel mi vitae odio  suscipit rhoncus in nec nunc.',

        img: img2

    },

    {

        title: 'Decoupling radiolysis and radiation-induced defects during stainless steel corrosion',

        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed augue  elementum, porttitor odio nec, accumsan magna. Sed vel mi vitae odio  suscipit rhoncus in nec nunc.',

        img: img3

    },

    {

        title: 'Decoupling radiolysis and radiation-induced defects during stainless steel corrosion',

        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed augue  elementum, porttitor odio nec, accumsan magna. Sed vel mi vitae odio  suscipit rhoncus in nec nunc.',

        img: img4

    },

    {

        title: 'Decoupling radiolysis and radiation-induced defects during stainless steel corrosion',

        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed augue  elementum, porttitor odio nec, accumsan magna. Sed vel mi vitae odio  suscipit rhoncus in nec nunc.',

        img: img5

    },

    ];



    return (

        <>

            <div className="research">

                <div className='research-info'>

                    <h2>Research</h2>

                    <p>We want to  gain a fundamental understanding of radiation-induce degradation of  metals. We study materials relevant to the nuclear industry, including  copper and stainless steels, using state-of-the-art scanning  electrochemical probes. We have unique access to highly ionizing  radiation with the SLOWPOKE-2 nuclear reactor.</p>

                </div>

                <div className='research-card'>

                    {researchTopics.map((topic, idx) =>

                        <div className='research-panel' key={idx}>

                            <div>

                                <img src={topic.img} className='imgStruct' alt={topic.title}></img>

                            </div>

                            <div>

                                <h4>{topic.title}</h4>

                                <p>{topic.content}</p>

                            </div>

                        </div>

                    )}

                </div>



            </div>

        </>

    )

}



export default Research

