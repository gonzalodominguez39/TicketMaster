import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styles from "./Profile.module.css";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const { pathname } = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const handleTabClick = (path: string) => {
    navigate(`/profile/${path}`);
  };
  return (
    <div>
      <Link to="/" className={styles.homeLink}>Inicio</Link>
      <div className={styles.tabsContainer}>
        <span
          className={pathname.includes("my-info") ? styles.active : styles.tab}
          onClick={() => handleTabClick("my-info")}
          style={{marginRight:'12px'}}
        >
          Mi informanción
        </span>
        <span
          className={pathname.includes("liked-events") ? styles.active : styles.tab}
          onClick={() => handleTabClick("liked-events")}
        >
          Eventos favoritos
        </span>
      </div>
      <Outlet />
    </div>
  );
};
