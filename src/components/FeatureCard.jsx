import styles from "../style";

const FeatureCard = ({ id, icon, title, content }) => {
  return (
    <div
      className={`flex p-6 rounded-[20px] ${
        id !== id.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
    >
      <div
        className={`w-16 h-16 rounded-full ${styles.flexCenter} bg-dim-blue`}
      >
        <img
          src={icon}
          alt="icon"
          className="w-[50%] h-[50%] object-contain pointer-events-none"
        />
      </div>

      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
          {title}
        </h4>
        <p className="font-poppins text-dim-white text-[16px] leading-6 mb-1">
          {content}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
