import React from 'react';
import SongCard from './SongCard';

function SongList({ songs }) {
  return (
    <div className="row">
      {songs.length > 0 ? (
        songs.map(song => (
          <div key={song.id} className="col-lg-4 col-md-6 mb-4">
            <SongCard song={song} />
          </div>
        ))
      ) : (
        <div className="col-12">
          <p className="text-center text-muted">추천할 노래가 없습니다.</p>
        </div>
      )}
    </div>
  );
}

export default SongList;
