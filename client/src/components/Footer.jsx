import styles from '../css/Footer.module.css'
import Logo from '../img/Logoapp.png'

export default function Footer() {
    return (
        <div>
            <div className={styles.footer}>
                <div><img className={styles.imgfooter} src={Logo} alt="logoapp" /></div>
         
                <div>All rights reserved</div>
           
            </div>
            
        </div>
    )
}