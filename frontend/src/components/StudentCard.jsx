export default function StudentCard({name, description, age, role, reversed,img, ghLink}){
  return(
    <div className={`student__info ${reversed&& 'student__info_reversed'}`}>
      <div className="student__info-about">
        <h2 className="student__name">{name}</h2>
        <p className="student__profession">{role}, {age} лет</p>
        <p className="student__about">{description}</p>
        {/* <a href={ghLink} className="student__github link">Github</a> */}
      </div>
      <img src={img} alt="studentImage" className="student__info-img" />
    </div>
  )
}