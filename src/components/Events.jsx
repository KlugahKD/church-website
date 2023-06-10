import { church } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Happening <br className="sm:block hidden" /> This week!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Sunday Services
Sunday

7:30 AM, 9:30 AM, & 11:30 AM,  

LifeNight
Wednesday

6:00 PM, 


Divine Encounter Friday 6:00 PM.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={church} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
