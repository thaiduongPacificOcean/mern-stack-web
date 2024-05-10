import React, { useState } from 'react'
import CommonSection from './../shared/CommonSection'
import { Container, Col, Row } from 'reactstrap'

import { useLocation } from 'react-router-dom'
import TourCard from './../shared/TourCard'
import Newsletter from './../shared/Newsletter'

const SearchResultList = () => {

  const location = useLocation()

  const [data] = useState(location.state)

  console.log(data)

  return (
    <>
      <CommonSection title={'Tour Search Result'} />
      <section>
        <Container>
          <Row>
            {
              data.length === 0 ? (
                <h4 className='text-center'>Not found</h4>
              ) :
                (
                  data?.map(tour => (
                    <Col className='mb-4' lg='3' key={tour._id}>
                      <TourCard tour={tour} />
                    </Col>
                  ))
                )
            }
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  )
}

export default SearchResultList
