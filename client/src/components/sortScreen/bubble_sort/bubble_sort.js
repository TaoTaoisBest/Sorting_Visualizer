import React, { Component } from 'react';
import '../bars.css';
import '../bars_container.css';

class BubbleSort extends Component {
    constructor(props) {
        super(props);
        this.state={
            arr : this.props.contentArray.map((value) => 
                <li className='bars' id={value} key={value} style={{width : value}}>
                    {value}
                </li>
            ),
        };
        console.log(this.props.contentArray);
    }

    sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    swap(val1, val2) {
        let arr = [...this.state.arr];
        let element1 = {...arr[val1]};
        let element2 = {...arr[val2]};
        arr[val1]=element2;
        arr[val2]=element1;
        this.setState({arr});
    }

    bubble_sort() {
        var n = this.state.arr.length;
        var i, j;
        for(i = 1; i < n; i++) {
            for(j = 0; j < n-i; j++) {
                if(parseInt(this.state.arr[j].key) > parseInt(this.state.arr[j+1].key) ) {
                    this.sleep(1000).then(this.swap(j, j+1));
                }
            }
        }
    }

    render(){
        console.log("IN bubble_sort.js");
        return(
            <div>
                <ul className='bars_container'>
                    {this.state.arr}
                    {this.bubble_sort()}
                </ul>
            </div>
        )
    }

}

export default BubbleSort;