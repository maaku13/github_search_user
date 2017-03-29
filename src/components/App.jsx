import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Search from './github/Search.jsx';
import UserList from './github/UserList.jsx';
import Profile from './github/Profile.jsx';

class App extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            searchResults: {
                total_count: 0
            },
            maximumResults: 40,
            selectedUser: 'maaku13',
            userData: [],
            userRepos: [],
            perPage: 10
        }
    }
    
    // Get user repos from github
    getUserRepos() {
        $.ajax({
            url: 'https://api.github.com/users/'+this.state.selectedUser+'/repos?per_page='+this.state.perPage+'&client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret+'&sort=created',
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({userRepos: data});
                
                // Show the profile
                $('#profile').css('display', 'block');
                // Hide the last result of search
                $('#userList').css('display', 'none');
            }.bind(this),
            error: function(xhr, status, err){
                this.setState({username: null});
                alert(err);
            }.bind(this)
            
        });
    }
    
    // Get user data
    getUserData() {
        $.ajax({
            url: 'https://api.github.com/users/'+this.state.selectedUser+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({userData: data});
            }.bind(this),
            error: function(xhr, status, err){
                this.setState({userData: null});
                alert(err);
            }.bind(this)
            
        });
        
    }
    
    // Get user list
    getUserList() {
        $.ajax({
            // https://api.github.com/search/users?q=tom
            url: 'https://api.github.com/search/users?q='+this.state.username+'&client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
            //url: 'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({searchResults:data});
            }.bind(this),
            error: function(xhr, status, err){
                this.setState({searchResults: null});
                alert(err);
            }.bind(this)
            
        });
    }
    
    handleFormSubmit(username) {
        this.setState({username: username},function(){
            this.getUserList();
        });
    }
    
    componentDidMount() {
        
    }
    
    handleUserClick(username) {
        this.setState({selectedUser: username},function(){
            this.getUserData();
            this.getUserRepos();
        });
    }
    
    render() {
        return(
            <div>
                <Search onFormSubmit = {this.handleFormSubmit.bind(this)} />
                <UserList {...this.state} onClickUser = {this.handleUserClick.bind(this)} />
                <Profile {...this.state} />
            </div>
        )
    }
}

App.propTypes = {
    clientId: React.PropTypes.string,
    clientSecret: React.PropTypes.string
};

App.defaultProps = {
    clientId: '5b5f05b81836e49ed4cd',
    clientSecret: '21fd9f6e3d6be98533fbe360a1a9cf6cc55affeb'
}

export default App