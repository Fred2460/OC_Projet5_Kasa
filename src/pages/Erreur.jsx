import { Link } from 'react-router-dom'
import '../styles/main.scss';


function Error() {

  return (
    <div className="main errorMain">
      <h1 className="errorMain__H1">404</h1>
      <h2 className="errorMain__H2">Oups! La page que vous demandez n'existe pas.</h2>
      <Link className="errorMain__Link" to="/">Retournez sur la page d'accueil</Link>
    </div>
  )
}

export default Error
