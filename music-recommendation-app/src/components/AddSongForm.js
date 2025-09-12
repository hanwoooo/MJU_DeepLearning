import React, { useState } from 'react';

function AddSongForm({ onAddSong }) {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [genre, setGenre] = useState('');
  const [mood, setMood] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !artist || !genre || !mood) {
      alert('모든 필드를 입력해주세요.');
      return;
    }
    // Create a new song object. The ID can be a simple timestamp for now.
    const newSong = { id: Date.now(), title, artist, genre, mood };
    onAddSong(newSong);
    // Clear form
    setTitle('');
    setArtist('');
    setGenre('');
    setMood('');
  };

  return (
    <div className="card bg-light mb-4">
      <div className="card-body">
        <h5 className="card-title">새로운 노래 추가</h5>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <input type="text" className="form-control" placeholder="노래 제목" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="col-md-6 mb-3">
              <input type="text" className="form-control" placeholder="아티스트" value={artist} onChange={(e) => setArtist(e.target.value)} />
            </div>
            <div className="col-md-6 mb-3">
              <input type="text" className="form-control" placeholder="장르" value={genre} onChange={(e) => setGenre(e.target.value)} />
            </div>
            <div className="col-md-6 mb-3">
              <input type="text" className="form-control" placeholder="분위기" value={mood} onChange={(e) => setMood(e.target.value)} />
            </div>
          </div>
          <button type="submit" className="btn btn-success">노래 추가</button>
        </form>
      </div>
    </div>
  );
}

export default AddSongForm;
