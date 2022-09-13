import React from 'react'
import ListItem from './ListItem';

const List = ({items}) => {
  return (
    <table>
        <tbody>
            {items.map(item=>(
                <ListItem key={item.id} item={item}
                />
                ))}
        </tbody>        
    </table>
  )
}

export default List