import '../styles/Team.css'
import pfp1 from '../assets/pfp.avif'
import pfp2 from '../assets/pfp2.avif'
import pfp3 from '../assets/pfp3.avif'
import pfp4 from '../assets/pfp4.avif'

function Team() {
    return (
        <>
            <div className='team-title'><h2>Our Team</h2></div>
            <div className='team-container'>
                <div>
                    <img src={pfp1}></img>
                    <h3>Lindsay Grandy, PhD</h3>
                    <p>Associate Professor <br />
                        Principal Investigator</p>
                </div>
                <div>
                    <img src={pfp2}></img>
                    <h3>Capt Tristan Gauthier</h3>
                    <p><p>Associate Professor <br />
                        Graduate Student</p></p>
                </div>
                <div>
                    <img src={pfp3}></img>
                    <h3>OCdt Chris Locke</h3>
                    <p>Undergraduate Student</p>
                </div>
                <div>
                    <img src={pfp4}></img>
                    <h3>Lorelei Secrieru</h3>
                    <p>Research Assistant</p>
                </div>
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
        </>
    )
}

export default Team