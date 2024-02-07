"use client";

import SongItem from "@/Components/SongItem";
import useOnPlay from "@/hooks/useOnPlay";
import { Song } from "@/types";
interface PageContentProps {
  songs: Song[];
}

const PageContent = (props: PageContentProps) => {
  const { songs } = props;
  const onPlay = useOnPlay(songs);
  if (songs.length === 0) {
    return <div className="mt-4 text-neutral-400">No songs available.</div>;
  }
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-col-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-3">
      {songs.map((song) => (
        <SongItem
          key={song.id}
          song={song}
          onClickSong={(id: string) => {
            onPlay(id);
          }}
        />
      ))}
    </div>
  );
};

export default PageContent;
