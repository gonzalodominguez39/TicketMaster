import type { Event } from "../../../../types/event";
import styles from "./EventItem.module.css";
import { useLikedEvents } from "../../../../hooks/useLikedEvents";
import { HeartIcon } from "../../../../icons/HeartIcon";

type EventItemProps = {
  event: Event;
  onClickedSeeMore: (id: string) => void;
};

export const EventItem = ({ event, onClickedSeeMore }: EventItemProps) => {
  const { isEventLiked, toggleEventLiked } = useLikedEvents(event.id);

  const handleSeeMoreClick = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    onClickedSeeMore(id);
  };

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleEventLiked();
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "Fecha por confirmar";
    try {
      return new Date(dateString).toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return "Fecha por confirmar";
    }
  };

  const getVenueName = () => {
    return event._embedded?.venues?.[0]?.name || "Venue por confirmar";
  };

  const getPrice = () => {
    const priceRange = event.priceRanges?.[0];
    if (priceRange) {
      return `Desde $${priceRange.min} ${priceRange.currency}`;
    }
    return "Precio por confirmar";
  };

  const getStatusBadge = () => {
    const status = event.dates?.status?.code;
    if (!status) return null;

    const statusConfig = {
      onsale: { text: "En Venta", class: "onsale" },
      cancelled: { text: "Cancelado", class: "cancelled" },
      postponed: { text: "Pospuesto", class: "postponed" },
      rescheduled: { text: "Reprogramado", class: "postponed" },
    };

    const config = statusConfig[status as keyof typeof statusConfig];
    if (!config) return null;

    return (
      <span className={`${styles.statusBadge} ${styles[config.class]}`}>
        {config.text}
      </span>
    );
  };

  const getGenre = () => {
    return event.classifications?.[0]?.genre?.name;
  };

  return (
    <div className={styles.eventItemContainer}>
      <div className={styles.imageContainer}>
        {getStatusBadge()}

        <div className={styles.hearthLikeContainer}>
          <HeartIcon
            size={26}
            color="#6500e0"
            filled={isEventLiked}
            onClick={handleLikeClick}
            className="transition-all duration-200"
          />
        </div>
        <img
          src={event.images?.[0]?.url}
          alt={event.name}
          onError={(e) => {
            e.currentTarget.src =
              "https://via.placeholder.com/400x200/1e293b/64748b?text=Evento";
          }}
        />
      </div>

      <div className={styles.eventItemInfo}>
        <h2 className={styles.eventName}>{event.name}</h2>

        <div className={styles.eventDetails}>
          <div className={styles.eventDetail}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{formatDate(event.dates?.start?.localDate || "")}</span>
          </div>

          <div className={styles.eventDetail}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>{getVenueName()}</span>
          </div>
        </div>

        {getGenre() && <span className={styles.genreBadge}>{getGenre()}</span>}

        {event.info && <p className={styles.eventInfo}>{event.info}</p>}

        <div className={styles.eventFooter}>
          <p className={styles.eventPrice}>{getPrice()}</p>

          <button
            className={styles.seeMoreButton}
            onClick={(e) => handleSeeMoreClick(e, event.id)}
          >
            <span>Ver más</span>
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              width="16"
              height="16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
