import styles from "./css/NavComponent.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function NavComponent({ tittle, comment, page }) {
  const [highlight, setHighlight] = useState(false);
  const router = useRouter();

  // Use useEffect to update highlight state based on current_page
  useEffect(() => {
    const current_page = window.location.pathname;
    setHighlight(current_page === page);
  }, [page]);

  const goToPage = () => {
    router.push(page);
    // make the page to navigate to the page after the routers are done
  };

  return (
    <div
      className={`${styles.navComponent} ${highlight ? styles.current : styles.hover}`}
      onClick={() => goToPage()}
    >
      <h1>{tittle}</h1>
      <p>{comment}</p>
    </div>
  );
}

