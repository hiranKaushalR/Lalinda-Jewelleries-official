import React from 'react'
import { contactDetails } from '../../Constant'

function ContactBody() {
  return (
    <div  className='contact-container--body'>
        <div className='contact-container--body--contact-details'>
            {
                contactDetails.map ((contactDetail) => (
                    <div>
                        <p>{contactDetail.type}</p>
                        <p>{contactDetail.detail}</p>
                    </div>
                ))
            }
        </div>
        <form >

        </form>
    </div>
  )
}

export default ContactBody