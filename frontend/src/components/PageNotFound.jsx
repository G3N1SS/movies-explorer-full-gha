import {useNavigate} from "react-router-dom"

export default function PageNotFound() {
  const navigate = useNavigate()
  return (
    <div className="nothing-found">
      <div className="container container_nothing-found">
        <h2 className="nothing-found__title">
          <span className="nothing-found__first-number">4</span>
          <span className="nothing-found__second-number">0</span>
          <span className="nothing-found__third-number">4</span>
        </h2>
        <p className="nothing-found__caption">Страница не найдена</p>
      </div>
      <button onClick={() => navigate(-1)} className="nothing-found__link" type="button">Назад</button>
    </div>
  )
}