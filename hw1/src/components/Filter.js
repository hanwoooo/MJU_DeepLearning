import React from 'react';

function Filter({ setGenre, setMood, songs }) {
  const genres = ['All', ...new Set(songs.map(song => song.genre))];
  const moods = ['All', ...new Set(songs.map(song => song.mood))];

  return (
    <div className="row mb-4">
      <div className="col-md-6">
        <label htmlFor="genre-select" className="form-label">장르</label>
        <select id="genre-select" className="form-select" onChange={(e) => setGenre(e.target.value)}>
          {genres.map(genre => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
      </div>
      <div className="col-md-6">
        <label htmlFor="mood-select" className="form-label">분위기</label>
        <select id="mood-select" className="form-select" onChange={(e) => setMood(e.target.value)}>
          {moods.map(mood => (
            <option key={mood} value={mood}>{mood}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Filter;
