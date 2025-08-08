import { EventItem } from "./components/EventItem";
import type { Event } from "../../types/event";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Events.module.css";

type EventsProps = {
  searchTerm?: string;
  events: Event[];
};

export const Events = ({ searchTerm, events }: EventsProps) => {
  const [render, setRender] = useState(6);
  const navigate = useNavigate();

  const handleEventClicked = (id: string) => {
    navigate(`/detail/${id}`);
  };

  const filteredEvents = searchTerm
    ? events?.filter((event) =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : events;

  const renderItems = filteredEvents
    ?.slice(0, render)
    .map((event) => (
      <EventItem
        key={event.id}
        onClickedSeeMore={handleEventClicked}
        event={event as Event}
      />
    ));

  const hasMoreEvents = filteredEvents && filteredEvents.length > render;

  return (
    <div className={styles.eventsContainer}>
      <div className={styles.eventsHeader}>
        <h2 className={styles.eventsTitle}>
          {searchTerm ? "Resultados de Búsqueda" : "Eventos Destacados"}
        </h2>
        <p className={styles.eventsSubtitle}>
          {filteredEvents?.length || 0} eventos encontrados
        </p>
      </div>

      {searchTerm && (
        <div className={styles.searchResults}>
          <svg
            className={styles.searchIcon}
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
          <p className={styles.searchText}>
            Mostrando resultados para:{" "}
            <span className={styles.searchTerm}>"{searchTerm}"</span>
          </p>
        </div>
      )}

      {filteredEvents && filteredEvents.length > 0 ? (
        <>
          <div className={styles.eventsGrid}>{renderItems}</div>

          {/* Load More Button */}
          {hasMoreEvents && (
            <div className={styles.loadMoreContainer}>
              <button
                className={styles.loadMoreButton}
                onClick={() => setRender((prev) => prev + 6)}
              >
                <span>Cargar más eventos</span>
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>
            </div>
          )}
        </>
      ) : (
        /* Empty State */
        <div className={styles.emptyState}>
          <svg
            className={styles.emptyStateIcon}
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
          <h3 className={styles.emptyStateTitle}>Cargando eventos</h3>
          <p className={styles.emptyStateDescription}>
            {searchTerm
              ? `No hay eventos que coincidan con "${searchTerm}". Intenta con otros términos de búsqueda.`
              : "No hay eventos disponibles en este momento. Vuelve más tarde para ver nuevos eventos."}
          </p>
        </div>
      )}
    </div>
  );
};
