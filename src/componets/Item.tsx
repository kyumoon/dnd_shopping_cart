import * as React from 'react'
import { ItemTypes } from './Constants'
import { DragSource } from 'react-dnd'
import { checkPropTypes } from 'prop-types';

const ItemSource = {
  beginDrag(props:any) {
    return {
      position: props.position,
      item: props.item
    }
  },
  
  endDrag(props:any){
    return
  }

}

function collect(connect:any, monitor:any) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }
}

// @ts-ignore
function Item({ connectDragSource, isDragging, item }) {
  return connectDragSource(
    <div className="floatItem draggedItem"
      style={{opacity: isDragging ? 0.5 : 1}}
      data-item={checkPropTypes.name}
    >
      <img className="img" src={item.url}/>
      <div className="name">{item.name}</div>
      <div className="price">{item.price}</div>
    </div>
  )
}

export default DragSource(ItemTypes.Ball, ItemSource, collect)(Item)