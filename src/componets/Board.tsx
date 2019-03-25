import * as React from 'react'

// import Item from './Item'
import Cart from './Cart'
import Item from './Item'
import Sum from './Sum'
import * as _ from 'lodash'
import {items} from './Constants'
import {I_Item} from './interface'


export default class Board extends React.Component {
    state = {
        itemList: items,
        movedList: []
    }

    addItem = (item: I_Item)=>{
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

    removeItem = (item: I_Item)=>{
        let clone = _.cloneDeep(this.state.itemList)
        let clone2 = _.reject(this.state.movedList, {id:item.id});
        //@ts-ignore
        clone.push(item);
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
        return this.state.movedList
    }
    
    
    render() {
        let itemList = this.state.itemList.map((item:any)=>{
            return <Item item={item} key={item.id} position={1}/>
          })
          
        let droppedItems = this.state.movedList.map((item:any)=>{
            return <Item item={item} key={item.id} position={2}/>
        })

        return (
            <div>
                <Cart position={1} moveItem={this.removeItem} itemList={itemList} getItem={this.getItem} cart />
                <Cart position={2} moveItem={this.addItem} itemList={droppedItems} getItem={this.getItem} cart />
                <Sum itemList={this.state.movedList}/>
            </div>
        )
    }
}