import styles from './navBar.module.css';

import {Link} from 'react-router-dom';
import Container from './container';
import logo from '../../img/costs_logo.png';
function NavBar(){
    return(
        <nav className={styles.navBar}>
            <Container>
                <Link to="/"> 
                    <img src={logo} alt="Logo"/>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Home</Link></li>
                    <li className={styles.item}><Link to="/project">Projeto</Link></li>
                    <li className={styles.item}><Link to="/company">Empresa</Link></li>
                    <li className={styles.item}> <Link  to="/contact">Contato</Link></li>
                   
                </ul>
            </Container>
        </nav>
    )
}

export default NavBar