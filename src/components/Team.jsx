import '../styles/Team.css'
import pfp1 from '../assets/pfp.avif'
import pfp2 from '../assets/pfp2.avif'
import pfp3 from '../assets/pfp3.avif'
import pfp4 from '../assets/pfp4.avif'
import MoreTeamInfo from './MoreTeamInfo.jsx'
import { useCallback, useState } from 'react'


const teamInfo = [
    {
        img: pfp1,
        name: 'Lindsay Grandy, PhD',
        title: (<>Associate Professor<br />
            Principal Investigator</>),
        moreTitle: 'Principal Investigator',
        moreContent: (<><p style={{ fontWeight: 'bold' }}>About Lindsay</p>
            <p style={{fontSize: '16px'}}>Assistant Professor at RMC in the Department of Chemistry and Chemical Engineering and the SLOWPOKE-2 Nuclear Reactor Manager
                in training with research interests in materials degradation, localized electrochemistry, surface analysis, and radiation-induced processes.
                Personal research motivation is to ensure we can lean on nuclear energy during the transition to a sustainable green-energy society and a fundamental
                interest in ionizing radiation. I also have a vested interest in understanding and improving EDI in STEM in universities and in the workforce</p>
            <p style={{ fontWeight: 'bold' }}>Teaching</p>
            <p style={{fontSize: '16px'}}>CCE101 Introductory Chemistry</p>
            <p style={{ fontWeight: 'bold' }}>Education</p>
            <p style={{fontSize: '16px'}}>Post-Doctoral Fellow (McGill University, 2021-2023, Janine Mauzeroll)<br />
                Ph.D. (Western University, 2021, Jungsook Clara Wren) <br />
                B.Sc. (Wilfrid Laurier University, 2015)</p>
            <p style={{ fontWeight: 'bold' }}>Contact</p>
            <p style={{fontSize: '16px'}}>Email: lindsay.grandy@rmc.ca <br />
                Phone: (613) 541-6000 ext. 6989<br />
                Office: Sawyer Mod 5, Room 2517<br />
                LinkedIn: https://www.linkedin.com/in/lindsaygrandy/</p><br /></>),

    }, {
        img: pfp2,
        name: 'Capt Tristan Gauthier',
        title: (<>Master&apos;s Student</>),
        moreTitle: (<>Master&apos;s Student</>),
        moreContent: 'Application of the RMC SLOWPOKE-2 Nuclear Reactor in the Investigation of PFAS Defluorination as a function of Solvated Electrons',
    }, {
        img: pfp3,
        name: 'OCdt Chris Locke',
        title: 'Undergraduate Student',
        moreTitle: 'Undergraduate Student',
        moreContent: 'Corrosion Effects of Radiation-Produced H2 Absorption in Copper',
    }, {
        img: pfp4,
        name: 'Lorelei Secrieru',
        title: 'Research Assistant',
        moreTitle: 'Research Assistant',
        moreContent: 'Quantification of Relationship Between Neutron Flux and Dislocation Density in Copper and Steel',
    },]

function Team() {
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [selectedPerson, setSelectedPerson] = useState(null);

    const handleTeamClick = useCallback((person = null) => {
        setOverlayVisible(prev => !prev);
        if (person) {
            setSelectedPerson(person)
        }
    }, []);

    return (
        <>
            <h2 className='team-title'>Our Team</h2>
            <div className='team-container'>
                {teamInfo.map((person) => (
                    <div key={person.name} onClick={() => handleTeamClick(person)} className='person-info'>
                        <img src={person.img}></img>
                        <h3>{person.name}</h3>
                        <p>{person.title}</p>
                    </div>
                ))}
            </div>
            <div className='team-title'><h2>Lab Alumni</h2></div>
            <div className='labAlumbi-panel'>
                <div className='labAlumbi-info'>
                    <h4>NCdt William Stewart</h4>
                    <p>, Summer Intern 2024</p></div>
                <div className='labAlumbi-info'>
                    <h4>OCdt Liam Howlett</h4>
                    <p>, Summer Intern 2024</p> </div>
            </div>
            <div className={`overlay  ${overlayVisible ? 'visible' : ''}`} onClick={() => handleTeamClick()}>
                <MoreTeamInfo visible={overlayVisible} person={selectedPerson} />
            </div>
        </>
    )
}

export default Team