import styles from "../style"
import {discount, robot} from "../assets"

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col px-6 sm:px-16 xl:px-0`}>
      <div className="flex flex-row items-center py-1.5 px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-8 h-8" />
        <p className={`${styles.paragraph} ml-2`}>
        <span className="text-white">20%</span> Discount For &nbsp; 
        <span className="text-white">1 Month</span> Account 
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1>The Next Generation Payment Method</h1>
      </div>
    </div>
  </section>
)

export default Hero