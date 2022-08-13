import styles from '../css/Landing.module.css';
import { Link } from 'react-router-dom';
export default function Landing() {

    return (
        <div className={styles.backlanding}>
            <div className={styles.buttoncontainer}>
                <h1>HENRY FOOD APP</h1>
                <Link to='/home'><span className={styles.enterButton}>Enter</span></Link>
                <p>by Nahuel Scarpelli</p>
            </div>

        </div>
    );
};