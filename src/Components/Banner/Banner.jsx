import NetflixBannerLogo from "../../assets/image/logo.png";
import { Play,Info} from 'lucide-react'
import styles from './Banner.module.css';


function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.contents}>
        {/* netflix image */}
        <img className={styles.logoImg} src={NetflixBannerLogo} alt="Netflix logo" />

        {/* title */}
<h1>Bridgerton</h1>
        {/* description */}
<h1 className={styles.description}>
    shondaland's Emmy-winning series brings Julia Quinn's novels
    to life,
    as eight sibilings seek their perfect match amid London's
    scandals and 
    stories.
</h1>
        {/* buttons */}
        <div className={styles.buttonContainer}>
            <button className={styles.button}>
                <Play size={30}/>
                Play
                </button>
            <button className={styles.button}>
                <Info size={30}/>
                My list
                </button>
        </div>
      </div>
      {/* fading */}
      <div className={styles.fadeBottom}>

      </div>
    </div>
  );
}

export default Banner;
