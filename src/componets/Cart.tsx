import * as React from 'react';
// import Square from './Square';
// import { canMoveKnight, moveKnight } from './Game';
import { ItemTypes } from './Constants';
import { DropTarget } from 'react-dnd';
import { PositionProperty } from 'csstype';

let dragPosition:any;
const squareTarget = {
  drop(props: any, monitor: any) {
    if (props.cart && dragPosition !== props.position) {
      console.log('moved', props, monitor.getItem());
      props.moveItem(monitor.getItem().item);
    }
  }
};

function collect(connect: any, monitor: any) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    props: monitor.getItem()
  };
}

//@ts-ignore
function BoardSquare({ itemList, position, connectDropTarget, isOver, props }) {
  dragPosition = props?props.position:null;
  const cart = {
        position: 'relative' as PositionProperty,
        width: '100%',
        height: '15em'
  }

  const dropTarget = {
    position: 'absolute' as PositionProperty,
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: 1,
    opacity: 0.5,
    backgroundColor: 'yellow',
  }

  return connectDropTarget(
    <div>
      <div style={cart}>
        {isOver && position !== props.position  &&
          <div style={dropTarget} />
        }
        {itemList}
      </div>
    </div>
  );
}

export default DropTarget(ItemTypes.Ball, squareTarget, collect)(BoardSquare);