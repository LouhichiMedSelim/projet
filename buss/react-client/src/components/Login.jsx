import React, { Component } from 'react'
import axios from 'axios'
export default class Login extends Component {
   constructor(props){
       super(props)
       this.state={
           email:"",
           password:"",
           data:"",

       }
   }
   componentDidMount(){
    axios.get('/api/').then(res=>{
        this.setState({
            data:res.data
        })
    })
}
    render() {
        return (
            
            <div className='Login'>
                 {console.log(this.state.data)}
                <h4>Login</h4>
                    <label>email:      <input type="email" name="email"></input></label><br></br>
          <label>password:    <input type="password" name="password"></input></label><br></br>
          <button type="submit" onClick={()=>alert('welcome')} >Login</button>
            </div>
        )
    }
}
