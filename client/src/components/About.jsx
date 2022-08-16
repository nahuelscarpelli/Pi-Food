import styles from "../css/About.module.css";

export default function About() {

    return (
        <div>
            <h2 className={styles.abouttitle}>About Nahuel Scarpelli</h2>
            <h3 className={styles.about}>Proyecto individual creado a partir de especificaciones y exigencias de Soy Henry. Elaborado en las con las siguiente tecnologías: Javascript, React, Redux, Express, Sequelize - Postgres, HTML, CSS, NodeJS, npm.</h3>
        </div>
    );
};