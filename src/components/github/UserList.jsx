import React, {Component} from 'react';

class UserList extends Component{
    
    onClickUser(username) {
        this.props.onClickUser(username);
    }
    
    render() {
        
        var entries = [];
        var maxToDisplay = this.props.searchResults.total_count;
        
        if(this.props.searchResults.total_count >= this.props.maximumResults) {
            maxToDisplay = this.props.maximumResults;
        }
        
        for (var i = 0; i < this.props.searchResults.total_count; i++) {
            if(this.props.searchResults.items[i]){
                entries.push(
                <div className="col-md-3" key={this.props.searchResults.items[i].id}>
                    <a href="#" onClick={this.onClickUser.bind(this, this.props.searchResults.items[i].login)} className="panel-link"><div className="panel panel-default">
                        <div className="panel-heading"><strong>{this.props.searchResults.items[i].login}</strong></div>
                        <div className="panel-body">
                            <div className="thumbnail">
                                <img src={this.props.searchResults.items[i].avatar_url} style={{width: "100%"}} />
                            </div>
                            Score: {this.props.searchResults.items[i].score}
                        </div>
                    </div></a>
                </div>
                );
            }

        }
        
        
        return(
            <div id="userList" className="content">
                <br />
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-body" style={{"textAlign": "center", "fontWeight": "bolder"}} >
                                {maxToDisplay} of {this.props.searchResults.total_count} total results
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        {entries}
                    </div>
                </div>
            </div>
        )
    }
}


export default UserList