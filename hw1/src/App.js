import React, { useState, useEffect } from 'react';
import './App.css';
import Filter from './components/Filter';
import SongList from './components/SongList';
import AddSongForm from './components/AddSongForm';

function App() {
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [genre, setGenre] = useState('All');
  const [mood, setMood] = useState('All');

  useEffect(() => {
    fetch('/songs.json')
      .then(response => response.json())
      .then(data => {
        setSongs(data);
      })
      .catch(error => console.error('Error fetching songs:', error));
  }, []);

  useEffect(() => {
    let tempSongs = songs;

    if (genre !== 'All') {
      tempSongs = tempSongs.filter(song => song.genre === genre);
    }

    if (mood !== 'All') {
      tempSongs = tempSongs.filter(song => song.mood === mood);
    }

    setFilteredSongs(tempSongs);
  }, [songs, genre, mood]);

  const handleAddSong = (newSong) => {
    // Add the new song to the main songs list
    const updatedSongs = [...songs, newSong];
    setSongs(updatedSongs);
  };

  return (
    <div className="container">
      <h1 className="text-center">음악 추천 앱</h1>
      <AddSongForm onAddSong={handleAddSong} />
      <hr />
      <Filter setGenre={setGenre} setMood={setMood} songs={songs} />
      <SongList songs={filteredSongs} />
    </div>
  );
}

export default App;
