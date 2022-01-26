import React from 'react';
import './UserAddForm.css';

class UserAddForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            salary: '',
            image: '',
            isGoldClient: false,
            errors:false,
        };
    }

    handleNameChange(event){
        this.setState({name:event.target.value});
        
    }
    handleEmailChange(event){
        this.setState({email:event.target.value});
    }
    handleSalaryChange(event){
        this.setState({salary:event.target.value});
    }
    handleImageChange(event){
        this.setState({image:event.target.value});
        console.log(this.state.image);
    }
    handleIsGoldClient(event){
        this.setState({isGoldClient:event.target.checked});
    }
    handleFormSubmit(event){
        event.preventDefault();
/////////////////VALILDARE/////////////////////////////////
        if( (this.state.email.indexOf('.') == -1) ||(this.state.name.length < 5) ){
            this.setState({errors:true});
        }else{
            this.setState({errors:false});
            const newUser = {
                name:this.state.name,
                email:this.state.email,
                salary:this.state.salary,
                image: this.state.image,
                isGoldClient:this.state.isGoldClient
            }
            this.props.updateUsersList(newUser);
        }

    }
    render(){
        return(
            <aside>
                <form className='user-add-form' onSubmit={(event) => {this.handleFormSubmit(event)}}
                style={{background:this.props.color, color:this.props.background}}
                >
                    <h2>Adauga utilizatori:</h2>

                    <label htmlFor='name'>Nume:</label>
                    <input type='text'name='name' value={this.state.name} onChange={(event)=>{this.handleNameChange(event)}}/>

                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email' value={this.state.email} onChange={(event)=>{this.handleEmailChange(event)}}/>

                    <label htmlFor='salary'>Salariu:</label>
                    <input type='text'name='salary' value={this.state.salary} onChange={(event)=>{this.handleSalaryChange(event)}}/>

                    <label htmlFor='image'>URL poza:</label>
                    <input type='text'name='image' value={this.state.image} onChange={(event)=>{this.handleImageChange(event)}}/>
                   
                    <label htmlFor='gold-client'>Client GOLD:</label>
                    <input type='checkbox' name='gold-client' id='gold-client' checked={this.state.isGoldClient} onChange={(event)=>{this.handleIsGoldClient(event)}}/>
                   
                    <input type='submit' id = 'submit-btn' value='Trimite!'/>
                    
                        {
                            (this.state.errors) ? <p>Scrie, bre, corect!</p> : null
                        }
                    
                </form>
                </aside>
        )
    }
}
export default UserAddForm;