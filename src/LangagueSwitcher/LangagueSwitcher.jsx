export default function LangagueSwitcher({onLangagueChange}) {
    const handleLangChange = (e) =>{
        e.preventDefault()
        onLangagueChange(e.currentTarget.dataset.lang)
         
    }
    return <>
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <a href="#" className="nav-link active" data-lang='FR' onClick={handleLangChange}> FR</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link" data-lang='ENG' onClick={handleLangChange}> ANG</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link" data-lang='ESP' onClick={handleLangChange}> ESP</a>
            </li>
        </ul>
    </>
}