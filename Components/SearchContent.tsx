"use client";

import SongItem from "@/Components/SongItem";
import { Song } from "@/types";
import MediaItem from "./MediaItem";
interface SearchContentProps {
  songs: Song[];
}

const SearchContent = (props: SearchContentProps) => {
  const { songs } = props;
  if (songs.length === 0) {
    return <div className="mt-4 text-neutral-400">No songs available.</div>;
  }
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-col-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-3">
      {songs.map((song) => (
        <MediaItem key={song.id} song={song} onClickSong={() => {}} />
      ))}
    </div>
  );
};

export default SearchContent;
