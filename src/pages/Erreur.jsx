import { Link } from 'react-router-dom'
import '../styles/main.scss';


function Error() {

  return (
    <div className="main errorMain">
      <h1 className="errorH1">404</h1>
      <h2 className="errorH2">Oups! La page que vous demandez n'existe pas.</h2>
      <Link className="errorLink" to="/">Retournez sur la page d'accueil</Link>
    </div>
  )
}

export default Error
