import { feedback } from "../constants";
import styles from "../style";
import Feedback from "./Feedback";

const Testimonials = () => (
  <section id="testimonies" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        What People are <br className="sm:block hidden" /> Experiencing in Christ
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
        A Christian testimony can be about a person's journey to becoming a Christian—also known as a conversion story—or it can be a way in which God has shown up in a person's life. 
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <Feedback key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;
