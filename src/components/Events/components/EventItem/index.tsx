import type { Event } from '../../../../types/event'
import styles from './EventItem.module.css'
import like from '../../../../assets/like.svg'
import unlike from '../../../../assets/unlike.svg'
import { useLikedEvents } from '../../../../hooks/useLikedEvents'
type EventItemProps = {
  event: Event
  onClickedSeeMore: (id: string) => void
}
export const EventItem = ({ event, onClickedSeeMore }: EventItemProps) => {
  const { isEventLiked, toggleEventLiked} = useLikedEvents(event.id)
  const handleSeeMoreClick = (e: any, id: string) => {
    e.stopPropagation()
    onClickedSeeMore(id)
  }

  return (
    <div className={styles.eventItemContainer}>
      <div className={styles.imageContainer}>
        {isEventLiked ? (
          <img
            src={like}
            onClick={()=>toggleEventLiked()}
            className={styles.hearthLikeContainer}
            alt='like button'
          />
        ) : (
          <img
            src={unlike}
            onClick={()=>toggleEventLiked()}
            className={styles.hearthLikeContainer}
            alt='unlike button'
          />
        )}

        <img
          width={200}
          height={200}
          src={event.images[0].url}
          alt={event.name}
        />
      </div>

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
