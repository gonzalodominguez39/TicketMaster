import type { Event } from '../../../../types/event'
import styles from './EventItem.module.css'

type EventItemProps = {
  event: Event
  onClickedSeeMore: (id: string) => void
}
export const EventItem = ({ event, onClickedSeeMore }: EventItemProps) => {
  const handleSeeMoreClick = (e: any, id: string) => {
    e.stopPropagation()
    onClickedSeeMore(id)
  }

  return (
    <div className={styles.eventItemContainer}>
      <img
        width={200}
        height={200}
        src={event.images[0].url}
        alt={event.name}
      />
      <div className={styles.eventItemInfo}>
        <h2 className={styles.eventName}>{event.name}</h2>
        <p className={styles.eventInfo}>{event.info}</p>
        <button onClick={(e) => handleSeeMoreClick(e, event.id)}>
          ver mas
        </button>
      </div>
    </div>
  )
}
