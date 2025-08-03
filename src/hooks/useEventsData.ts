import { useState } from 'react'
import type { Welcome } from '../types/event'

type fetchEvents = {
  term?: string
  page?: string
}
export const useEventsData = () => {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<Welcome>()
  const apiKey = import.meta.env.VITE_API_KEY


  const fetchEvents = async (params?: fetchEvents) => {
    let keyword = ''
    let pagination = ''
    if (params?.term) keyword = `&keyword=${params.term}`
    if (params?.page) pagination = `&page=${params.page}`
    console.log(keyword)
    try {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}${keyword}${pagination}`
      )
      const data = await response.json()
      setData(data)
      setIsLoading(false)
    } catch (e: any) {
      setError(e.message)
    }
  }

  return {
    events: data?._embedded?.events,
    error,
    isLoading,
    fetchEvents,
    page: data?.page || {},
  }
}
