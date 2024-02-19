import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Logos = (props) => {
    const {Icon, ClassName} = props
  return (
    <div>
        <span className={`${ClassName} text-3xl  mr-1 pt-2`}>
        <FontAwesomeIcon icon={Icon} />
        </span>
    </div>
  )
}

export default Logos