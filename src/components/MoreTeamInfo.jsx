import '../styles/MoreTeamInfo.css'

function MoreTeamInfo({ visible, person, children }) {
    if (!visible) return '';

    return (
        <div className='moreInfo'>
            <h2>{person.moreTitle}</h2>
            <div className='moreInfo-Struct'>
                <img src={person.img}></img>
                <div>
                    <h3 className='nameStruct'>{person.name}</h3>
                    {person.moreContent}
                </div>
            </div>
        </div>
    )
}

export default MoreTeamInfo