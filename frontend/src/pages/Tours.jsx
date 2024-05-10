import React, { useEffect, useState } from 'react'
import CommonSection from '../shared/CommonSection'
import '../styles/tour.css'
import TourCard from './../shared/TourCard'
import Newsletter from './../shared/Newsletter'
import SearchBar from './../shared/SearchBar'
import { Container, Col, Row } from 'reactstrap'
import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'


const Tours = () => {

  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(0)

  const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours?page=${page}`)
  const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`)

  useEffect(() => {
    const pages = Math.ceil(tourCount / 8)
    setPageCount(pages);
    window.scrollTo(0, 0)
  }, [page, tourCount, tours])


  return (
    <>
      <CommonSection title={'All Tours'} />

      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            {
              tours?.map(tour => (
                <Col key={tour._id} lg='3' className='mb-4'>
                  <TourCard tour={tour} />
                </Col>
              ))
            }
            <Col lg='12'>
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map(number => (
                  <span key={number}
                    onClick={() => setPage(number)}
                    className={page === number ? 'active__page' : ''}
                  >{number + 1}</span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Newsletter />

    </>
  )
}

export default Tours
