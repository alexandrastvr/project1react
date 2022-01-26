import React from "react";
import UserItem from "./UserItem";
import './UserList.css';

class UserList extends React.Component{ 
    constructor(props){
        super(props);
        this.state = {};
    }

    linkFunctionToDeleteUser(id){
        this.props.deleteUser(id);
    }

    render(){
        return(
            <div className="user-list">
                <h1>Lista de utilizatori:</h1>
                <div className="flex">
                {
                    this.props.users.map((user, index)=>{
                        return  <UserItem 
                                        id = {user.id}       
                                        name = {user.name}
                                        image = {user.image}
                                        email={user.email}
                                        salary = {user.salary}
                                        isGoldClient = {user.isGoldClient}
                                        key = {index}
                                        linkFunction = {(id) => {this.linkFunctionToDeleteUser(id)}}
                                    />
                    })
                }
                </div>
            </div>
        )}
}
export default UserList;

