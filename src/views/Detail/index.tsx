import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import styles from './Detail.module.css'
import type { Event } from '../../types/event'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { Navbar } from '../../components/Navbar'

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
  }, [detailId, apiKey])

  const formatEventDate = (dateString: string) => {
    if (!dateString) return 'Fecha por confirmar'
    try {
      return format(new Date(dateString), 'd LLLL yyyy H:mm', { locale: es })
    } catch {
      return 'Fecha por confirmar'
    }
  }

  const getVenueName = () => {
    return data?._embedded?.venues?.[0]?.name || 'Venue por confirmar'
  }

  const getPriceRange = () => {
    const priceRange = data?.priceRanges?.[0]
    if (priceRange) {
      return `$${priceRange.min} - $${priceRange.max} ${priceRange.currency}`
    }
    return 'Precio por confirmar'
  }

  if (isLoading) {
    return (
      <>
        <Navbar onSearch={() => {}} />
        <div className={styles.loadingContainer}>
          <div className={styles.loadingSpinner}></div>
          <p className={styles.loadingText}>Cargando detalles del evento...</p>
        </div>
      </>
    )
  }

  if (error) {
    return (
      <>
        <Navbar onSearch={() => {}} />
        <div className={styles.errorContainer}>
          <svg className={styles.errorIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className={styles.errorTitle}>Error al cargar el evento</h2>
          <p className={styles.errorText}>
            Hubo un problema al cargar los detalles del evento. Por favor, intenta de nuevo.
          </p>
          <Link to="/" className={styles.buyTicketsButton} style={{ marginTop: '20px' }}>
            <svg className={styles.ticketIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Volver al inicio
          </Link>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar onSearch={() => {}} />
      <div className={styles.container}>
        <div className={styles.mainInfoContainer}>
          <div style={{ position: 'relative' }}>
            <img
              className={styles.heroImage}
              src={data?.images?.[0]?.url}
              alt={data?.name}
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/800x400/2d1b69/f8f9fa?text=Evento'
              }}
            />
            <div className={styles.imageOverlay}></div>
          </div>
          
          <div className={styles.contentSection}>
            <h1 className={styles.eventName}>{data?.name}</h1>
            
            {data?.info && (
              <p className={styles.infoGraph}>{data.info}</p>
            )}

            <div className={styles.dateSection}>
              <svg className={styles.dateIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className={styles.dateParagraph}>
                {formatEventDate(data?.dates?.start?.dateTime || '')} hrs
              </p>
            </div>

            <div className={styles.dateSection}>
              <svg className={styles.dateIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className={styles.dateParagraph}>
                {getVenueName()}
              </p>
            </div>

            {data?.classifications?.[0]?.genre?.name && (
              <div className={styles.dateSection}>
                <svg className={styles.dateIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
                <p className={styles.dateParagraph}>
                  {data.classifications[0].genre.name}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className={styles.seatInfoContainer}>
          <h2 className={styles.seatMapTitle}>Información del Evento</h2>
          
          {data?.seatmap?.staticUrl && (
            <>
              <h3 className={styles.seatMapTitle} style={{ fontSize: '1.2rem', marginBottom: '16px' }}>
                Mapa del Venue
              </h3>
              <img
                className={styles.seatMapImage}
                src={data.seatmap.staticUrl}
                alt="Mapa del evento"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </>
          )}

          {data?.pleaseNote && (
            <div className={styles.pleaseNoteLegend}>
              <strong>Información importante:</strong><br />
              {data.pleaseNote}
            </div>
          )}

          <div className={styles.priceSection}>
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
            <p className={styles.priceText}>{getPriceRange()}</p>
          </div>

          {data?.url && (
            <a 
              href={data.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.buyTicketsButton}
            >
              <svg className={styles.ticketIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
              Comprar Boletos
            </a>
          )}

          <Link to="/" className={styles.buyTicketsButton} style={{ 
            background: 'rgba(101, 0, 224, 0.2)', 
            marginTop: '16px',
            fontSize: '16px'
          }}>
            <svg className={styles.ticketIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver a Eventos
          </Link>
        </div>
      </div>
    </>
  )
}
