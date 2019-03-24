import * as React from 'react'
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Item from './Item'
import Cart from './Cart'
import * as _ from 'lodash'
import {items} from './Constants'


export default class Board extends React.Component {
    state = {
        itemList: items,
        movedList: []
    }

    addItem = (item: any)=>{
        let clone = _.reject(this.state.itemList, {id:item.id});
        let clone2 = _.cloneDeep(this.state.movedList)
        //@ts-ignore
        clone2.push(item);
        this.setState(Object.assign(this.state, {
            itemList: clone
        }));

        this.setState(Object.assign(this.state, {
            //@ts-ignore
            movedList: clone2
        }));
        console.log(this.state);
    }

    

    getItem = ()=>{
        return this.state.movedList.map((item:any)=>{
            return <div className="floatItem" key={item.index}><img className="img" src={item.url}/>{item.name}</div>
        });
    }
    
    render() {
        let itemList = this.state.itemList.map((item:any) => {
            return <Item item={item} key={item.index} itemList={this.state.itemList} addItem={this.addItem}/>
        });
        return (
            <DragDropContextProvider backend={HTML5Backend}>
                <div style={{height:'3em'}}>
                    {itemList}
                </div>
                <Cart addItem={this.addItem} getItem={this.getItem} cart />
            </DragDropContextProvider>
        )
    }
}