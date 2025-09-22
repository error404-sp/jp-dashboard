import React from "react";
import styles from "./table.module.css";
import ThemeIcon from "../../ui/ThemeIcon";
import {
  KeyboardArrowLeftRounded,
  KeyboardArrowRightRounded,
} from "@mui/icons-material";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages < 1) return null;

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) onPageChange(page);
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <button
        key={i}
        onClick={() => goToPage(i)}
        className={`${styles.pageButton} ${
          i === currentPage ? styles.active : ""
        }`}
      >
        {i}
      </button>
    );
  }

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className={styles.navButton}
      >
        <ThemeIcon icon={KeyboardArrowLeftRounded} width={20} height={20} />
      </button>
      {pages}
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={styles.navButton}
      >
        <ThemeIcon icon={KeyboardArrowRightRounded} width={20} height={20} />
      </button>
    </div>
  );
};

export default Pagination;
