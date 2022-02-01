import React from 'react';
import UserList from '../components/UserList';
import PostList from '../components/PostList';
import UserAddForm from '../components/UserAddForm';

class Home extends React.Component{
    constructor(){
      super();
      this.state = {
        background: '#C6D57E',
        textColor: '#443742',
        users: [],
        posts:[],
        displayUsers: true
      };
    }
  
    componentDidMount(){
      //////////////////////////////////USERS//////////////////////////////////
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          return response.json();
        })
        .then((json)=>{
          const filteredJson = json.filter(user => user.id < 10);
          filteredJson.forEach(element => {
            element.isGoldClient = false;
          });
          this.setState({users: filteredJson});
        });
      ////////////////////////////////IMAGES///////////////////////////////////
            fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => { return response.json() })
            .then((images) => {
              const usersWithPhotos = this.state.users;
              usersWithPhotos.forEach((element,index) => {
                element.image = images[index].url;
              })
              this.setState({users: usersWithPhotos});
            })
      //////////////////////////////////POSTS//////////////////////////////////
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          return response.json();
        })
        .then((jsonPosts) => {
          const filteredJsonPosts = jsonPosts.filter(el => el.id < 10);
          this.setState({posts: filteredJsonPosts});
        });
      }
   
    updateUsersList(user){
      this.setState((previousState) => {
        return{
          users:[...previousState.users,user]
        }
      });
    }
  
    deleteUser(idUser){
      const updatedUsersList = this.state.users.filter((element) => element.id != idUser);
      this.setState({users:updatedUsersList});
    }
  
    handleBackgroundChange(event){
      const userBackground = event.target.value;
      this.setState({background: userBackground});
    }
  
    handleTextColorChange(event){
      const userTextColor = event.target.value;
      this.setState({textColor: userTextColor});
    }
  
    displayPostsFcn = () => {
      this.setState({displayUsers:false})
    }
  
    displayUsersFcn = () => {
      this.setState({displayUsers:true})
    }
  
    render(){
      return(
        <div className='App' style={{background:this.state.background, color:this.state.textColor}}>
          <header style={{background:this.state.background}}>
              <div className='buttons'>
                <div className='left-btn'>
                  <button onClick={this.displayUsersFcn}>Utilizatori</button>
                  <button onClick={this.displayPostsFcn} id='post'>Postari</button>
                </div>
                <h1>PROIECT 1 React</h1>
                <div className='right-btn'>
                  <label htmlFor="bkgColor">Background Color</label>
                  <input type="color" id="bkgColor"  value='#B5BA72'
                    onChange={(event) => this.handleBackgroundChange(event)}/>
          
                  <label htmlFor="txtColor">Text Color</label>
                  <input type="color" id="txtColor"  value='#443742'
                    onChange={(event) => this.handleTextColorChange(event)}/>
                </div>
              </div>
          </header>
  
          <div className='content'>
            <UserAddForm updateUsersList = {(user) => {this.updateUsersList(user)}}
                         background = {this.state.background}
                         color = {this.state.textColor}
            />
          {
            (this.state.displayUsers)
              ? <UserList users={this.state.users}
                          deleteUser = {(user) => {this.deleteUser(user)}}
                />
              : <PostList posts={this.state.posts} />
          }
          </div>
        </div>
  
      )  
    }
  }
  
  export default Home;
