import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:hidden block" />
          in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5}`}>
          Discover and compare the best card offers tailored to your needs in
          just a few clicks. Finding the right deal has never been this quick
          and effortless.
        </p>
        <Button style="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <img
          src={card}
          alt="card"
          className="w-full h-full object-contain pointer-events-none"
        />
      </div>
    </section>
  );
};

export default CardDeal;
