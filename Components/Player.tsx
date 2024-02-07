"use client";

import useGetSongById from "@/hooks/useGetSongById";
import useLoadSong from "@/hooks/useLoadSong";
import usePlayer from "@/hooks/usePlayer";
import PlayerContent from "./PlayerContent";

interface PlayerProps {}

const Player = (props: PlayerProps) => {
  const player = usePlayer();
  const { song } = useGetSongById(player.activeId || "");
  const songUrl = useLoadSong(song!);
  if (!song || !songUrl || !player.activeId) {
    return null;
  }
  return (
    <div className="fixed bottom-0 bg-black w-full py-2 px-4 h-[80px]">
      <PlayerContent key={song.title} song={song} songUrl={songUrl} />
    </div>
  );
};

export default Player;
