import useLoadImage from "@/hooks/useLoadImage";
import usePlayer from "@/hooks/usePlayer";
import { Song } from "@/types";
import Image from "next/image";

interface MediaItemProps {
  song: Song;
  onClickSong?: (id: string) => void;
}

const MediaItem = (props: MediaItemProps) => {
  const { song, onClickSong } = props;
  const imagePath = useLoadImage(song);
  const player = usePlayer();
  const onHandleClickSong = () => {
    if (onClickSong) {
      return onClickSong(song.id);
    }
    return player.setId(song.id);
  };
  return (
    <div
      onClick={onHandleClickSong}
      className="flex item-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md">
      <div className="relative rounded-md overflow-hidden min-h-[48px] min-w-[48px]">
        <Image
          className="object-cover"
          fill
          src={imagePath || "/images/liked.png"}
          alt={song.title}
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{song.title}</p>
        <p className="text-neutral-400 text-sm truncate">{song.author}</p>
      </div>
    </div>
  );
};

export default MediaItem;
