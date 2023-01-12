import { IBirdInfo } from "../../types/interfaces";
import styles from "./InfoBar.module.scss";

interface IInfoBird {
  birdInfo: IBirdInfo;
}

const InfoBar = ({ birdInfo }: IInfoBird) => {
  return (
    <section className={styles.container}>
      {birdInfo.isBegin === true ? (
        <p>
          Послушайте плеер.<br></br>
          Выберите птицу из списка
        </p>
      ) : (
        <div className={styles.infoBar_table}>
          <div className={styles.infoBar_table_box_one}>
            <img
              className={styles.image}
              src={birdInfo.bird?.image}
              alt={birdInfo.bird?.name}
            />
            <div className={styles.infoBar_table_box_two}>
              <h3>{birdInfo.bird?.name}</h3>
              <h5>{birdInfo.bird?.species}</h5>
              <audio src={birdInfo.bird?.audio} controls></audio>
            </div>
          </div>
          <p>{birdInfo.bird?.description}</p>
        </div>
      )}
    </section>
  );
};

export default InfoBar;
