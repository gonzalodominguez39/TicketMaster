import { useEffect, useState } from 'react'
import { Navbar } from '../../components/Navbar'
import { Events } from '../../components/Events'
import ReactPaginate from 'react-paginate'
import type { Page } from '../../types/event'
import styles from './Home.module.css'
import { useEventsResults } from '../../state/events.results'

export const Home = () => {
  const [search, setSearch] = useState<string>('')
  const { data, error, isLoading, fetchEvents } = useEventsResults()
  const events = data?._embedded?.events || []
  const page = data?.page || {}
  const [selectedPage, setSelectedPage] = useState('')

  const handleSearch = (term: string) => {
    setSearch(term)
  }

  useEffect(() => {
    fetchEvents({ term: search || '', page: selectedPage || '' })
  }, [search, selectedPage])

  const renderEvents = () => {
    if (Object.keys(error || {}).length > 0)
      return <p>Hubo un problema al cargar los eventos</p>
    console.log()
    if (isLoading) return <p>Cargando..</p>
    if (!isLoading && events) {
      return (
        <div>
          <Events
            searchTerm={search}
            events={events}
          />
          <ReactPaginate
            breakLabel='...'
            className={styles.pagination}
            nextClassName={styles.next}
            previousClassName={styles.previus}
            pageClassName={styles.page}
            activeClassName={styles.active}
            disabledClassName={styles.disabled}
            nextLabel='>'
            onPageChange={(e) => setSelectedPage(`${e.selected}`)}
            pageRangeDisplayed={5}
            pageCount={(page as Page).totalPages}
            previousLabel='<'
            renderOnZeroPageCount={null}
          />
        </div>
      )
    }
  }

  return (
    <>
      <Navbar onSearch={handleSearch} />
      {renderEvents()}
    </>
  )
}
