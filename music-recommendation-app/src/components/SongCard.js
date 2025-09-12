import React from 'react';

function SongCard({ song }) {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{song.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{song.artist}</h6>
        <p className="card-text">
          <span className="badge bg-primary me-1">{song.genre}</span>
          <span className="badge bg-info">{song.mood}</span>
        </p>
      </div>
    </div>
  );
}

export default SongCard;
