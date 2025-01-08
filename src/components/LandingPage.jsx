import '../styles/LandingPage.css'
import useWindowDimensions from './useWindowDimensions';
import RMCMap from '../assets/RMCMap.png'


function LandingPage() {
    const { width, height } = useWindowDimensions();

    return (
        <>
            <section
                className='hero'
                style={{
                    '--dynamic-height': `${height}px`,
                }}>
                <div className='content'>
                    <h1>The Grandy Lab</h1>
                    width: {width} ~ height: {height}
                    <h2 className='arrow' >↓</h2>
                </div>
            </section>
            <section className='about-us'>
                <div className='info'>
                    <h1>About Us</h1>
                    <h2>We investigate corrosion and other materials degradation in the presence of ionizing radiation.</h2>
                    <p>The long-term objective is to predict the impact of a constant flux of  ionizing radiation on metal degradation to improve the confidence in and lifetime of nuclear-related materials. With the use of advanced and  unique tools, including localized electrochemical probes and the  SLOWPOKE-2 nuclear reactor, our team determines corrosion rates and  mechanisms to develop long-term modeling for accurate degradation  mechanisms. We are a diverse and interdisciplinary team of chemists, engineers, metallurgists and physics, who do both fundamental and applied science research.</p>
                    <a href=''>Learn More</a>
                    <div className='divider'></div>
                </div>
                <div className='info'>
                    <h1>Grandy Lab is Recruiting!</h1>
                    <h2>There are currently MSc and PhD positions available.</h2>
                    <p>{`Students with a science or engineering background who are interested in  developing knowledge in electrochemistry, radiation, chemical modelling, and surface analysis are encouraged to apply. Please send an email with your CV and which project you're interested in.`}</p>
                    <a href=''>Contact</a>
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
                        <p>lindsay.grandy@rmc.ca<br />
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