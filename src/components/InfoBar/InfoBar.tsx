import styles from "./InfoBar.module.scss";

const InfoBar = () => {
  return (
    <section className={styles.container}>
      <p>
        Послушайте плеер.<br></br>
        Выберите птицу из списка
      </p>
    </section>
  );
};

export default InfoBar;
