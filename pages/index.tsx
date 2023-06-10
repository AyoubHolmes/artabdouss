import Image from "next/image";
import { Test } from "../styles/EmotionStyles";
import styles from "../styles/Home.module.css";
import homeImage from "public/assets/images/61a23b69768b8481bf4248b5_katie-osullivan-hero-image copy-p-1600.jpeg"
const HomePage = () => {
  return (
    <div className={styles.container}>
      <Test>
        Home
      </Test>
     <Image  src={homeImage} alt={""} height={700} width={700}/>
    </div>
  );
};

export default HomePage;
