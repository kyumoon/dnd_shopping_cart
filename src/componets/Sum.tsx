import * as React from 'react'
import {I_Item} from './interface'

export default function Sum(props:any){
    console.log(props);
    let sum = 0;
    props.itemList.map((item:I_Item)=>{
        sum += item.price;
    })
    return (
        <div>합계: {sum}</div>
    )
}