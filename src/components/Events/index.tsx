import { EventItem } from './components/EventItem'
import type { Event } from '../../types/event'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

type EventsProps = {
  searchTerm?: string

  events: Event[]
}
export const Events = ({ searchTerm, events }: EventsProps) => {
  const [render, setRender] = useState(2)
  const navigate = useNavigate()

  const handleEventClicked = (id: string) => {
    navigate(`/detail/${id}`)
  }

  const filteredEvents = searchTerm
    ? events?.filter((event) =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : events

  const renderItems = filteredEvents?.slice(0, render).map((event) => (
    <EventItem
      key={event.id}
      onClickedSeeMore={handleEventClicked}
      event={event as Event}
    />
  ))

  return (
    <div>
      <h4> Events </h4>
      {renderItems}
      <button
        onClick={() => {
          setRender((prev) => prev + 2)
        }}>
        Cargar mas
      </button>
    </div>
  )
}
