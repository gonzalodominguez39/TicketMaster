import { create } from 'zustand'
import type { fetchEvents } from '../types/fetchEvents'
import type { Welcome } from '../types/event'
import type {EventsState} from '../types/eventsState'
const apiKey = import.meta.env.VITE_API_KEY
export const useEventsResults = create<EventsState>((set) => ({
  data:[],
  error: {},
  isLoading: false,
  fetchEvents: async (params?: fetchEvents) => {
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
      await set(() => ({ data, isLoading: false }))
    } catch (e: any) {
      await  set({ error: e, isLoading: false })
    }
  },
}))
