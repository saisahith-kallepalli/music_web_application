"use client";
import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import Image from "next/image";
import PlayButton from "./PlayButton";

interface SongItemProps {
  song: Song;
  onClickSong: (id: string) => void;
}
const SongItem = (props: SongItemProps) => {
  const { song, onClickSong } = props;
  const imagePath = useLoadImage(song);
  return (
    <div
      onClick={() => onClickSong(song.id)}
      className="relative group flex flex-col items-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 hover:bg-neutral-400/10 transition p-3">
      <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
        <Image
          className="object-cover"
          fill
          src={imagePath || "/images/liked.png"}
          alt={song.title}
        />
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full">{song.title}</p>
        <p className="text-neutral-400 text-sm truncate pb-4">
          by {song.author}
        </p>
      </div>
      <div className="absolute bottom-24 right-5">
        <PlayButton />
      </div>
    </div>
  );
};
export default SongItem;
