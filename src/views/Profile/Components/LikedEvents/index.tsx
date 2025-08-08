import { use, useEffect, useState } from "react";
import { LIKED_EVENTS_STORAGE_KEY } from "../../../../utils/constants";
import type { Event } from "../../../../types/event";
import { EventItem } from "../../../../components/Events/components/EventItem";
import { useNavigate } from "react-router-dom";

export const LikedEvents = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
 const navigate = useNavigate()
  const handleEventClicked = (id: string) => {
    navigate(`/detail/${id}`)
  }

  useEffect(() => {
    const fetchEventsDetail = async () => {
      try {
        const dataJson = localStorage.getItem(LIKED_EVENTS_STORAGE_KEY);
        const likedEvents = dataJson ? JSON.parse(dataJson) : [];
        console.log(likedEvents);
        const results = [];
        if (!likedEvents) return;
        for (const eventId of likedEvents) {
          console.log("eventId", eventId);

          const url = `https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${apiKey}`;
          const response = await fetch(url);
          const data = await response.json();
          results.push(data);
          setIsLoading(false);
        }
        if (results) {
          setEvents(results);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchEventsDetail();
  }, []);
  if (isLoading) return <div>Cargando...</div>;
  if (!events) return <div>No hay eventos favoritos</div>;
  console.log(events);
  return <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"20px", marginTop:"20px"}} >{events.map((event: Event) => (<EventItem key={`liked-event-item-${event.id}`}event={event} onClickedSeeMore={()=>{handleEventClicked(event.id)}} ></EventItem>))}</div>;
};
