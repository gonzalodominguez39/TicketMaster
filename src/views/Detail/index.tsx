import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Detail.module.css'
import type { Event } from '../../types/event'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

export const Detail = () => {
  const { detailId } = useParams()
  const [data, setData] = useState<Event>()
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const apiKey = import.meta.env.VITE_API_KEY
  useEffect(() => {
    const fetchEventsData = async () => {
      const url = `https://app.ticketmaster.com/discovery/v2/events/${detailId}?apikey=${apiKey}`
      try {
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
        setIsLoading(false)
      } catch (error: any) {
        setError(error)
        setIsLoading(false)
      }
    }
    fetchEventsData()
  }, [])
  console.log(data)
  if (isLoading) return <div>Cargando...</div>
  if (error) return <div>Hubo un Error</div>
  return (
    <div className={styles.container}>
      <div className={styles.mainInfoContainer}>
        <img
          src={data?.images?.[0].url}
          alt={data?.name}
        />
        <h4 className={styles.eventName}>{data?.name}</h4>
        <p className={styles.infoGraph}>{data?.info}</p>
        <p className={styles.dateParagraph}>
          {format(
            new Date(
              data?.dates.start.dateTime ? data.dates.start.dateTime : ''
            ),
            'd LLLL yyyy H:mm',
            { locale: es }
          )}{' '}
          hrs
        </p>
      </div>
      <div className={styles.seatInfoContainer}>
        <h6 className={styles.seatMapTitle}>Mapa del evento</h6>
        <img
          src={data?.seatmap?.staticUrl}
          alt='seatmap event'
        />
        <p className={styles.pleaseNoteLegend}>{data?.pleaseNote}</p>
        <p>
          {data?.priceRanges?.[0].min}-{data?.priceRanges?.[0].max}
        </p>
      </div>
      <a href={data?.url}>Ir por tus boletos </a>
    </div>
  )
}
