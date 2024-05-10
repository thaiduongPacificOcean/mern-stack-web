import React from 'react'
import ServiceCard from './ServiceCard'
import {Col} from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesDate = [
  {
    imgUrl : weatherImg,
    title : "Calculate Weather",
    desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nesciunt. Quos veritatis quia similique, itaque natus, eos eius libero illo pariatur nulla deserunt tenetur assumenda provident nemo. Eligendi, vel iure?'
  },
  {
    imgUrl : guideImg,
    title : "Best Tour Guide",
    desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nesciunt. Quos veritatis quia similique, itaque natus, eos eius libero illo pariatur nulla deserunt tenetur assumenda provident nemo. Eligendi, vel iure?'
  },
  {
    imgUrl : customizationImg,
    title : "Customization",
    desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nesciunt. Quos veritatis quia similique, itaque natus, eos eius libero illo pariatur nulla deserunt tenetur assumenda provident nemo. Eligendi, vel iure?'
  },

]
const ServiceList = () => {
  return (
   <>
    {
      servicesDate.map((item, index) => 
      <Col lg= '3' key={index}>
        <ServiceCard item={item}/>
      </Col>
      )
    }
   </>
  )
}

export default ServiceList
