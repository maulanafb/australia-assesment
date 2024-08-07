import { useState } from "react";
import Checkbox from "./Checkbox";
import styles from "./PageSelector.module.css";

const pages = ["Page 1", "Page 2", "Page 3", "Page 4"];

const PageSelector = () => {
  const [selectedPages, setSelectedPages] = useState([]);

  const togglePage = (page) => {
    setSelectedPages((prev) =>
      prev.includes(page) ? prev.filter((p) => p !== page) : [...prev, page]
    );
  };

  const toggleAllPages = () => {
    if (selectedPages.length === pages.length) {
      setSelectedPages([]);
    } else {
      setSelectedPages(pages);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Checkbox
          page={"All pages"}
          checked={selectedPages.length === pages.length}
          onChange={toggleAllPages}
        />
      </div>
      <hr />
      {pages.map((page) => (
        <div key={page} className={styles.item}>
          <Checkbox
            className={styles.item}
            page={page}
            checked={selectedPages.includes(page)}
            onChange={() => togglePage(page)}
          />
        </div>
      ))}
      <hr />
      <button className={styles.doneButton}>Done</button>
    </div>
  );
};

export default PageSelector;
