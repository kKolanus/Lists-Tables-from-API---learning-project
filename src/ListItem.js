import React from 'react'
import Item from './Item'

const ListItem = ({item}) => {
    
  return (
        <tr>
            {Object.entries(item).map(([key, value]) => {
            return (<Item
            key={key}
            value={value}/>)
            })}
        </tr>
  )
}

export default ListItem