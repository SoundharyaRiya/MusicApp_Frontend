import React, { Component } from 'react'
import SongService from '../services/SongService';

class CreateSong extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            title: '',
            filename: '',
            artist: ''
        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeFilenameHandler = this.changeFilenameHandler.bind(this);
        this.saveOrUpdateSong = this.saveOrUpdateSong.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            SongService.getSongById(this.state.id).then( (res) =>{
                let song = res.data;
                this.setState({title: song.title,
                    filename: song.filename,
                    artist : song.artist
                });
            });
        }        
    }
    saveOrUpdateSong = (e) => {
        e.preventDefault();
        let song = {title: this.state.title, filename: this.state.filename, artist: this.state.artist};
        console.log('song => ' + JSON.stringify(song));

        // step 5
        if(this.state.id === '_add'){
            SongService.createSong(song).then(res =>{
                this.props.history.push('/songs');
            });
        }else{
            SongService.updateSong(song, this.state.id).then( res => {
                this.props.history.push('/songs');
            });
        }
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

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Songs</h3>
        }else{
            return <h3 className="text-center">Update Songs</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3"> 
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Title: </label>
                                            <input placeholder="Title of the song" name="title" className="form-control" 
                                                value={this.state.title} onChange={this.changeTitleHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Filename: </label>
                                            <input placeholder="Name of the file" name="filename" className="form-control" 
                                                value={this.state.filename} onChange={this.changeFilenameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Artist: </label>
                                            <input placeholder="Song Artist" name="artist" className="form-control" 
                                                value={this.state.artist} onChange={this.changeArtistHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateSong}>Save</button>
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

export default CreateSong