import React from 'react'
import { services } from '../../Constant'

function ServiceBody() {
  return (
    <div className='service-container--body'>
        {
            services.map ((service) => (
                <div key={service.id} className='service-container--body--child'>
                    <img src={service.img} alt="" />
                    <p>{service.description}</p>
                </div>
            ))
        }
    </div>
  )
}

export default ServiceBody