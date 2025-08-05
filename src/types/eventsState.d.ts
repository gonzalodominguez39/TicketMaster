export type EventsState = {
  data: Welcome | null
  error: any
  isLoading: boolean
  fetchEvents: (params?: fetchEvents) => Promise<void>
}