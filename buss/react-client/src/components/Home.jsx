import React, { Component } from 'react'
import axios from 'axios'
export default class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        axios.get('/api').then(res=>{
            this.setState({
                data:res.data
            })
        })
    }
    render() {
        const {data}=this.state
        return (
            <div className='home'>
        <ul>
            {console.log(this.state.data)}
            {data.map(e=>{
                return( 
                <div key={e.id}>
          <li className="feed-list-item" >   
        <div className="feed-list-item-byline"><span className="feed-list-item-byline-author">{e.name}</span></div>
        <img src={e.imageUrl}  className="feed-list-item-image"/>
        <span className="feed-list-item-lede">{e.descrption} </span>
        <button type="button" onClick={()=>alert('we will contact you in 5 min !')}>Get</button>
                </li>
                </div>)
            })}
        
      </ul>
            </div>
        )
    }
}
