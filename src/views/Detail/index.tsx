import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Detail.module.css'
import type { Event } from '../../types/event'

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
  if(isLoading) return <div>Ha habido un error</div>
  return <div className={styles.container}>
    <div className={styles.mainInfoContainer}>
      <img src={data?.images[0]?.url} alt="" />
    </div>
  </div>
}
