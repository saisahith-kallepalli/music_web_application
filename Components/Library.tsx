import useUploadModal from "@/hooks/useUploadModal";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types";
import { BsMusicNoteList, BsPlusLg } from "react-icons/bs";
import { HiListBullet } from "react-icons/hi2";
import MediaItem from "./MediaItem";
import useOnPlay from "@/hooks/useOnPlay";
import useSubscribeModal from "@/hooks/useSubscribeModal";
import useAuthModel from "@/hooks/useAuthModel";

type LibraryProps = {
  songs: Song[];
};

const Library: React.FC<LibraryProps> = (props: LibraryProps) => {
  const { songs } = props;
  const uploadModal = useUploadModal();
  const { user, subscription } = useUser();
  const subscribeModal = useSubscribeModal();
  const authModal = useAuthModel();
  const onPlay = useOnPlay(songs);
  const handleClickOnPlus = () => {
    if (!user) {
      authModal.onOpen();
    }
    if (!subscription) {
      return subscribeModal.onOpen();
    }
    return uploadModal.onChangeOpen();
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 py-4">
        <div className="inline-flex items-center gap-x-2">
          <BsMusicNoteList className="text-neutral-400" size={26} />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>
        <BsPlusLg
          size={20}
          className="text-neutral-400 hover:text-white transition cursor-pointer"
          onClick={handleClickOnPlus}
        />
      </div>
      <div className="flex flex-col gap-y-2 px-3">
        {songs.map((song) => (
          <MediaItem
            key={song.id}
            song={song}
            onClickSong={(id: string) => onPlay(id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
