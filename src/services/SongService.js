import axios from 'axios';

const SONG_API_BASE_URL = "http://localhost:8080/api/v1/songs";

class SongService {

    getSongs(){
        return axios.get(SONG_API_BASE_URL);
    }

    createSong(song){
        return axios.post(SONG_API_BASE_URL, song);
    }

    getSongById(songId){
        return axios.get(SONG_API_BASE_URL + '/' + songId);
    }

    updateSong(song, songId){
        return axios.put(SONG_API_BASE_URL + '/' + songId, song);
    }

    deleteSong(songId){
        return axios.delete(SONG_API_BASE_URL + '/' + songId);
    }
}

export default new SongService()
