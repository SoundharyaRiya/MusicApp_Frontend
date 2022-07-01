import React, { Component } from 'react'
import SongService from '../services/SongService'

class ViewSong extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            song: {}
        }
    }

    componentDidMount(){
        SongService.getSongById(this.state.id).then( res => {
            this.setState({song: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Song Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Song Title: </label>
                            <div> { this.state.song.title }</div>
                        </div>
                        <div className = "row">
                            <label> Song Filename: </label>
                            <div> { this.state.song.filename }</div>
                        </div>
                        <div className = "row">
                            <label> Song Artist: </label>
                            <div> { this.state.song.artist }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewSong