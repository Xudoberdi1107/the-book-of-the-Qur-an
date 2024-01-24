import { Link } from "react-router-dom";
import styles from "./style.module.scss";
type props = {
  number?: number;
  numberOfAyahs?: number;
  name?: string;
  englishName?: string;
  url?: string;
};
const SurahCard: React.FC<props> = ({
  englishName,
  name,
  number,
  numberOfAyahs,
  url,
}) => {
  return (
    <Link to={url ? url : "/"} className={styles.cart}>
      <div className={styles.stytle}>
        <span>
          <p>Sura: </p>
          <h4>{number}</h4>
        </span>
        <h2>
          <span>Ayatlar: </span>
          {numberOfAyahs}
        </h2>
      </div>
      <div className={styles.name}>
        <h3>{name}</h3>
        <h4>{englishName}</h4>
      </div>
    </Link>
  );
};
export default SurahCard;
