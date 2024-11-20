export default function FilterButton({isCheck, changeShort, firstEntrance}) {
  return(
  <div className="search-bar__shortfilms-box">
    <button className={`search-bar__shortfilms-button ${isCheck ? "search-bar__shortfilms-button_active" : ''}`} type="button" onClick={() => changeShort()} disabled={firstEntrance}/>
    <p className="search-bar__shortfilms-caption">Короткометражки</p>
  </div>
)
}