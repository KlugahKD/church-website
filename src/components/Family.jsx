import { apple, familypraise, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="family" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={familypraise} alt="family" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      24 FAMILY WAYS,  <br className="sm:block hidden" /> A FATHER'S BLESSING  &
      A MOTHER'S BLESSING
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      At Hoobank we place a high emphasis on family Through Bible study, discussions, sharing, prayer, and hangouts, we learn together to live out the teachings of God’s Word in our daily livesgroups because we believe that it is in these smaller settings that we are able to meet with God, building meaningful relationships, and develop biblical accountability. Family groups meet on a weekly basis at various places. Through Bible study, discussions, sharing, prayer, and hangouts, we learn together to live out the teachings of God’s Word in our daily lives

      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
);

export default Billing;
