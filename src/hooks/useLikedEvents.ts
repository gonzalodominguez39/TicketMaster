import { useState } from "react"
import { LIKED_EVENTS_STORAGE_KEY } from "../utils/constants"


const checkEventIsLike = (eventId: string) => {
  const likedEventsString = localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)
  const likedEvents: string[] = likedEventsString
    ? JSON.parse(likedEventsString)
    : []
  console.log(likedEvents)
  return likedEvents.includes(eventId)
}

export const useLikedEvents = (eventId: string) => {
  const [isEventLiked, setIsEventLiked] = useState(checkEventIsLike(eventId))

    const toggleEventLiked = () => {
    const likedEventsString = localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)
    let likedEvents: string[] = likedEventsString ? JSON.parse(likedEventsString) : []

    const eventIndex = likedEvents.indexOf(eventId)
    if (eventIndex !== -1) {
      likedEvents.splice(eventIndex, 1)
      setIsEventLiked(false)
    } else {
      likedEvents.push(eventId)
      setIsEventLiked(true)
    }
    localStorage.setItem(LIKED_EVENTS_STORAGE_KEY,JSON.stringify(likedEvents))
}

  return {isEventLiked,toggleEventLiked}
}
