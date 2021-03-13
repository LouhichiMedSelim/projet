import React, { Component } from 'react'
import axios from 'axios'
export default class Signup extends Component {
   constructor(props){
       super(props)
       this.state={
           username:"",
           email:"",
           password:"",
           phNu:"",
       }
this.addpost=this.addpost.bind(this)  
 }
   addpost(e){
       e.preventDefault()
       axios.post('/api',this.state).then(respons=>{
           console.log(respons)
           this.setState({[this.state]:respons.data})
       }).catch(err=>{
           console.log(err)
       })
   }
    render() {
        return (
            <div className='signup'>
             
              <h4>Signup</h4>
        
          <label>username:        <input name='username' onChange={(e)=>this.setState({username:e.target.value})} ></input></label><br></br>
          
          <label>email:      <input name='email'  onChange={(e)=>this.setState({email:e.target.value})}></input></label><br></br>
          <label>password:    <input type="password" name='password' onChange={(e)=>this.setState({userpasswordname:e.target.value})}></input></label><br></br>
          <label>phone number: <input name='phNu' onChange={(e)=>this.setState({phNu:e.target.value})}></input></label><br></br>
          <button type="submit" onClick={(e)=>{this.addpost(e,alert('welcome'))}}>Signup</button>
         
        
            </div>
        )
    }
}
