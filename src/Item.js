import React from 'react'

const Item = ({value}) => {
  return (
    <th>
        {JSON.stringify(value)};
    </th>
  )
}

export default Item