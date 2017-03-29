import React, {Component} from 'react';
import RepoList from './RepoList.jsx';

class Profile extends Component{
    
    onClickBack() {
        // Hide the profile
        $('#profile').css('display', 'none');
        // Show the last result of search
        $('#userList').css('display', 'block');
    }
    
    render() {
        return(
            <div id="profile" className="content" style={{"display": "none"}}>
                <br />
                <div className="row">
                    <div className="col-md-12" id="profile-data" style={{"paddingBottom": "10px"}}>
                        
                        <div className="panel panel-default">
                          <div className="panel-heading">
                            <h3 className="panel-title">Name: {this.props.userData.name}</h3>
                          </div>
                          <div className="panel-body">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={this.props.userData.avatar_url} className="thumbnail" style={{width: "100%"}} />
                                </div>
                                <div className="col-md-8">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <span className="label label-primary">{this.props.userData.public_repos} Repos</span>
                                            <span className="label label-success">{this.props.userData.public_gists} Public Gits</span>
                                            <span className="label label-info">{this.props.userData.followers} Followers</span>
                                            <span className="label label-danger">{this.props.userData.following} Following</span>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-md-12">
                                            <ul className="list-group">
                                                <li className="list-group-item"><strong>Username :</strong> {this.props.userData.login}</li>
                                                <li className="list-group-item"><strong>Location :</strong> {this.props.userData.location}</li>
                                                <li className="list-group-item"><strong>Email Address :</strong> {this.props.userData.email}</li>
                                                <li className="list-group-item"><strong>Bio :</strong> {this.props.userData.bio}</li>
                                                <li className="list-group-item"><strong>Blog :</strong> {this.props.userData.blog}</li>
                                                <li className="list-group-item"><strong>Company :</strong> {this.props.userData.company}</li>
                                                <li className="list-group-item"><strong>Created at :</strong> {this.props.userData.created_at}</li>
                                                <li className="list-group-item"><strong>Updated at :</strong> {this.props.userData.upated_at}</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <br />
                                    <a className="btn btn-primary" target="_blank" href={this.props.userData.html_url}>Visit Profile</a>
                                </div>
                            </div>
                            <hr />
                            <h3>User Repositories</h3>
                            <RepoList userRepos={this.props.userRepos} />
                          </div>
                        </div>
                        
                        <a className="btn btn-primary" href="#" onClick={this.onClickBack.bind(this)}>Back</a>
                        
                    </div>
                </div>
            </div>
        )
    }
}


export default Profile