import { useState } from "react";
import "./styles.css";
import { Link} from "react-router-dom";

type NavbarProps = {
  onSearch: (term: string) => void;
};
export const Navbar = ({ onSearch }: NavbarProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(searchTerm);
    }
  };
  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.currentTarget.value);
  };
  return (
    <div className="navBar">
      <section>
        <Link  className={"Boletera"} to='/'>🎫 Mi Boletera</Link>
      </section>
      <section className="search">
        <div className="searchContainer">
          <svg
            className="searchIcon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Busca tu evento favorito..."
            onChange={handleChangeSearch}
            onKeyDown={handleInputKeyDown}
            value={searchTerm}
          />
        </div>
        <Link to="/profile/my-info" className="profileLink">
          <svg
            className="profileIcon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          Mi Perfil
        </Link>
      </section>
    </div>
  );
};
