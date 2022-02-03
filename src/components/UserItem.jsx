import React from 'react';
import './UserItem.css';

class UserItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    handleDeleteUser(){
        this.props.linkFunction(this.props.id);
    }

       render(){
           return(
               <div className='user-item'>
                   <h2>{ this.props.name }</h2>
                   <div className='div-img'>
                        <img src = {this.props.image} width="150px"/>
                   </div>
                   <p>{ this.props.email }</p>
                   <p>Salariu: {(this.props.id != null) ? ((2800+this.props.id*1400) + 'RON') : (this.props.salary + 'RON')} </p>
                   { 
                       this.props.isGoldClient
                         ? <p><em>Client GOLD</em></p>
                         : null
                   }
                   <button onClick= { () => {this.handleDeleteUser()}}>Sterge</button>
               </div>
           );

       }
}

export default UserItem;

