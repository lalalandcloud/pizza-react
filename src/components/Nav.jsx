import './nav.css'
import logo from '../assets/img/ph-logo-white.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

export default function Nav() {

    return(
        <>
        <nav>
            <img src={logo} alt="" />
            <div className="d-flex align-items-center gap-3">
                <div className="d-flex align-items-center h-100">
                    <button>Se connecter</button>
                </div>
                <div className="d-flex h-100 align-items-center">
                    FR&nbsp;<FontAwesomeIcon icon={faAngleDown} />
                </div>
            </div>
        </nav>
        </>
    )
}