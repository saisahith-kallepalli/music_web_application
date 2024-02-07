"use client";

import SongItem from "@/Components/SongItem";
import { Song } from "@/types";
import MediaItem from "./MediaItem";
import LikeButton from "./LikeButton";
import useOnPlay from "@/hooks/useOnPlay";
interface SearchContentProps {
  songs: Song[];
}

const SearchContent = (props: SearchContentProps) => {
  const { songs } = props;
  const onPlay = useOnPlay(songs);
  if (songs.length === 0) {
    return <div className="mt-4 text-neutral-400">No songs available.</div>;
  }
  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
      {songs.map((song) => (
        <div className="flex" key={song.id}>
          <MediaItem
            song={song}
            onClickSong={(id: string) => {
              onPlay(id);
            }}
          />
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
};

export default SearchContent;
