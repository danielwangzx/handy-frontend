import React , {Component} from 'react'
import {Route, Link, Redirect,Switch} from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'
import MyAccount from '../myAccount/MyAccount'
import './dashboard.scss'
export default class Dashboard extends Component {
    render(){
        return (
           <div className="dashboard__container">
               
               <Sidebar/>
              
               <div>
                   <Switch>
                        <Route path="/users/services" render={props=><div>hello i am services</div>}/>
                       

                       <Route path="/users/edit" component={MyAccount}/>
                       <Route path="/users/orders" component={()=><div>I am orders </div>}/>
                   </Switch>
               </div>
          </div>
        )
    }
}