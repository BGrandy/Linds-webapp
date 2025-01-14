import '../styles/LandingPage.css'
import { Link } from 'react-router-dom';
import useWindowDimensions from '../hooks/useWindowDimensions';
import RMCMap from '../assets/RMCMap.png'


function LandingPage() {
    const { height } = useWindowDimensions();

    const handleClick = () => {
        window.scrollTo(0, height)
    }
    
    return (
        <>
            <section
                className='hero'
                style={{
                    '--dynamic-height': `${height}px`,
                }}>
                <div className='content'>
                    <h1>The Grandy Lab</h1>
                    <a className='arrow' onClick={handleClick}>↓</a>
                </div>
            </section>
            <section className='about-us'>
                <div className='info'>
                    <h1>About Us</h1>
                    <h2>We investigate corrosion and other materials degradation in the presence of ionizing radiation.</h2>
                    <p>The long-term objective is to predict the impact of a constant flux of  ionizing radiation on metal degradation to improve the confidence in and lifetime of nuclear-related materials. With the use of advanced and  unique tools, including localized electrochemical probes and the  SLOWPOKE-2 nuclear reactor, our team determines corrosion rates and  mechanisms to develop long-term modeling for accurate degradation  mechanisms. We are a diverse and interdisciplinary team of chemists, engineers, metallurgists and physics, who do both fundamental and applied science research.</p>
                    <Link to='/Research'>Learn More</Link>
                    <div className='divider'></div>
                </div>
                <div className='info'>
                    <h1>Grandy Lab is Recruiting!</h1>
                    <h2>There are currently MSc and PhD positions available.</h2>
                    <p>{`Students with a science or engineering background who are interested in  developing knowledge in electrochemistry, radiation, chemical modelling, and surface analysis are encouraged to apply. Please send an email with your CV and which project you're interested in.`}</p>
                    <Link to='mailto:lindsay.grandy@rmc.ca'>Contact</Link>
                    <div className='divider'></div>
                </div>
                <div className='contact-us'>
                    <div className='contactus-info'>
                        <h1>Contact us</h1>
                        <h2>Grandy Lab</h2>
                        <p>Royal Military College of Canada<br />
                            Sawyer Mod 5, Room 2517 (office)<br />
                            Sawyer Mod #, Room # (lab)</p>
                        <h2>Lindsay Grandy, PhD</h2>
                        <p><Link to='mailto:lindsay.grandy@rmc.ca' className='email'>lindsay.grandy@rmc.ca</Link><br />
                            613-541-6000 ext. 6989<br />
                            11 General Crerar Crescent, Kingston, ON, K7K 7B4</p>
                    </div>
                    <div className='contactus-img'>
                        <img src={RMCMap} alt='RMCMAP'></img>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LandingPage