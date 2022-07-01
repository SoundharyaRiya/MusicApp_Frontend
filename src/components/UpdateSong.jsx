import React, { Component } from 'react'
import SongService from '../services/SongService';

class UpdateSong extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            title: '',
            filename: '',
            artist: ''
        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeFilenameHandler = this.changeFilenameHandler.bind(this);
        this.updateSong = this.updateSong.bind(this);
    }

    componentDidMount(){
        SongService.getSongById(this.state.id).then( (res) =>{
            let song = res.data;
            this.setState({title: song.title,
                filename: song.filename,
                artist : song.artist
            });
        });
    }

    updateSong = (e) => {
        e.preventDefault();
        let song = {title: this.state.title, filename: this.state.filename, artist: this.state.artist};
        console.log('song => ' + JSON.stringify(song));
        console.log('id => ' + JSON.stringify(this.state.id));
        SongService.updateSong(song, this.state.id).then( res => {
            this.props.history.push('/songs');
        });
    }
    
    changeTitleHandler= (event) => {
        this.setState({title: event.target.value});
    }

    changeFilenameHandler= (event) => {
        this.setState({filename: event.target.value});
    }

    changeArtistHandler= (event) => {
        this.setState({artist: event.target.value});
    }

    cancel(){
        this.props.history.push('/songs');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Song</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label>  Title: </label>
                                            <input placeholder="Title" name="title" className="form-control" 
                                                value={this.state.title} onChange={this.changeTitleHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Filename: </label>
                                            <input placeholder="Filename" name="filename" className="form-control" 
                                                value={this.state.filename} onChange={this.changeFilenameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Artist: </label>
                                            <input placeholder="Artist" name="artist" className="form-control" 
                                                value={this.state.artist} onChange={this.changeArtistHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateSong}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateSong