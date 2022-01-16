import React, { Component } from 'react';
import './frame.css';

class Frame extends Component {

<<<<<<< HEAD
=======
    getBarType = (value) => {
        if(value === 0)
            return 'bars'
        else if(value === 1)
            return 'bars_current'
        else
            return 'bars_done'
    }

>>>>>>> f79b5b18e1efddde39adc5bd971c02c4392b2a94
    render() {
        // console.log("In Frames")
        return(

            // display the bars 
            <div className="frame">
                <ul className='bars_container'>
<<<<<<< HEAD
                    {this.props.videos.map((value) => 
                        <li className='bars' id={value} key={value} style={{width : `${3 * value}px`}}>
                            {value}
=======
                    {this.props.videos.map((elem, idx) => 
                        <li className = {this.getBarType(elem.barType)} 
                            key = {idx}
                            value = {elem.key}
                            style={{width : `${3 * elem.key}px`}}
                        >
                            {elem.key}
>>>>>>> f79b5b18e1efddde39adc5bd971c02c4392b2a94
                        </li>
                    )}
                </ul>

            </div>

        );
    }

}

export default Frame;