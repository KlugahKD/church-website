import { testimonies } from "../constants";
import styles from "../style";

const Testimonies = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {testimonies.map((testimonies) => (
        <div key={testimonies.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
          <img src={testimonies.logo} alt="testimonie_logo" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
      ))}
    </div>
  </section>
);

export default Testimonies;
