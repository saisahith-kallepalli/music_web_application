"use client";

import SongItem from "@/Components/SongItem";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import MediaItem from "./MediaItem";
import LikeButton from "./LikeButton";
import useOnPlay from "@/hooks/useOnPlay";
interface LikedContentProps {
  songs: Song[];
}

const LikedContent = (props: LikedContentProps) => {
  const { songs } = props;
  const onPlay = useOnPlay(songs);
  const router = useRouter();
  const { isLoading, user } = useUser();
  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [isLoading, user, router]);
  if (songs.length === 0) {
    return <div className="mt-4 text-neutral-400 ml-6">No liked songs.</div>;
  }
  return (
    <div className="px-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-col-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-3">
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

export default LikedContent;
