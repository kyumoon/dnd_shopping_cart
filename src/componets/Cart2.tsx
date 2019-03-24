import * as React from 'react';
// import Square from './Square';
// import { canMoveKnight, moveKnight } from './Game';
import { ItemTypes } from './Constants';
import { DropTarget } from 'react-dnd';

let droppedItems: any;
const squareTarget = {
  drop(props: any, monitor: any) {
    if (props.cart) {
      console.log('moved', props, monitor.getItem());
      props.addItem(monitor.getItem().item);
    }
    if(!props.itemList){
      droppedItems = props.getItem();
    }
    
  }
};

function collect(connect: any, monitor: any) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

//@ts-ignore
function BoardSquare({ x, y, itemList, connectDropTarget, isOver, children }) {
  return connectDropTarget(
    <div style={{
      position: 'relative',
      width: '100%',
      height: '2em'
    }}>
      {isOver &&
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          zIndex: 1,
          opacity: 0.5,
          backgroundColor: 'yellow',
        }} />
      }
      {itemList||droppedItems}
    </div>
  );
}

export default DropTarget(ItemTypes.KNIGHT, squareTarget, collect)(BoardSquare);