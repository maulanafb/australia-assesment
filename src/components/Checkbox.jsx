import styles from "./Checkbox.module.css";

// eslint-disable-next-line react/prop-types
const Checkbox = ({ checked, onChange, page }) => {
  return (
    <span className={styles.item} onClick={() => onChange(!checked)}>
      <span className={styles.title}>{page}</span>
      <div className={styles.checkbox + (checked ? ` ${styles.checked}` : "")}>
        <svg
          width="17"
          height="13"
          viewBox="0 0 17 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.68 6.59199L6.22879 11.5271C6.24925 11.5453 6.28055 11.5437 6.29899 11.5235L16.32 0.519989"
            stroke="currentColor"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </span>
  );
};

export default Checkbox;
