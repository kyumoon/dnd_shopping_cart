import * as React from 'react'
import { ItemTypes } from './Constants'
import { DragSource } from 'react-dnd'
import { checkPropTypes } from 'prop-types';

const knightSource = {
  beginDrag(props:any) {
    return {
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

//@ts-ignore
function Knight({ connectDragSource, isDragging, item }) {
  return connectDragSource(
    <div className="floatItem draggedItem"
      style={{opacity: isDragging ? 0.5 : 1}}
      data-item={checkPropTypes.name}
    >
      <img className="img" src={item.url}/>
      {item.name}
    </div>
  )
}

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight)