import { useEffect, useState } from 'react'
import { Navbar } from '../../components/Navbar'
import { Events } from '../../components/Events'
import { useEventsData } from '../../hooks/useEventsData'
import ReactPaginate from 'react-paginate'
import type { Page } from '../../types/event'
import styles from './Home.module.css'

export const Home = () => {
  const [search, setSearch] = useState<string>('')
  const { events, error, isLoading, fetchEvents, page } = useEventsData()
  const [selectedPage, setSelectedPage] = useState('')
  const [pageCount, setPageCount] = useState(0)

  const handleSearch = (term: string) => {
    setSearch(term)
  }


  useEffect(() => {
    fetchEvents({ term:search || '',page: selectedPage||'' })
  }, [search,selectedPage ])

  const renderEvents = () => {
    if (error) return <p>Hubo un problema al cargar los eventos</p>
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
