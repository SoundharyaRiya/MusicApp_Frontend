import React, { Component } from 'react'
import SongService from '../services/SongService'

class ListSong extends Component {
    constructor(props) {
        super(props)

        this.state = {
                songs: []
        }
        this.addSong = this.addSong.bind(this);
        this.editSong = this.editSong.bind(this);
        this.deleteSong = this.deleteSong.bind(this);
    }

    deleteSong(id){
        SongService.deleteSong(id).then( _res => {
            this.setState({songs: this.state.songs.filter(song => song.id !== id)});
        });
    }
    viewSong(id){
        this.props.history.push(`/view-song/${id}`);
    }
    editSong(id){
        this.props.history.push(`/add-song/${id}`);
    }

    componentDidMount(){
        SongService.getSongs().then((res) => {
            this.setState({ songs: res.data});
        });
    }

    addSong(){
        this.props.history.push('/add-song/_add');
    }
  render() {
        return (
            <div>
                 <h2 className="text-center">Songs List</h2>
                 <div className = "row">
                    <button className="btn btn-warning" onClick={this.addSong}> 
                    <h3>Add Song</h3></button>
                 </div>
                 <br></br>
                 <div className = "row">
                    <table className = "table table-striped">
                            <thead>
                                <tr class="table-dark">
                                    <th scope='col'> Song Title</th>
                                    <th scope='col'> Song Filename</th>
                                    <th scope='col'> Song Artist</th>
                                    <th scope='col'> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.songs.map(
                                        song => 
                                        <tr key = {song.id}>
                                             <td> {song.title} </td>   
                                             <td> {song.filename}</td>
                                             <td> {song.artist}</td>
                                             <td>
                                                 <button onClick={ () => this.editSong(song.id)} className="btn btn-outline-info waves-effect">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteSong(song.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewSong(song.id)} className="btn btn-success">View Details </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                    </table>
                 </div>

            </div>
        )
    }
}
export default ListSong

/* 
    <a href="." className="navbar-brand"> &ensp; &nbsp; MUSIC APP </a>
        <Link to="/"> Home </Link>
        <Link to="/login"> Login </Link>
        <Link to="/allSongs"> AllSongs </Link>
*/