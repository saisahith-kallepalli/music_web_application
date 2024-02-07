import { Song } from "@/types";
import usePlayer from "./usePlayer";
import useAuthModel from "./useAuthModel";
import { useUser } from "./useUser";

const useOnPlay = (songs: Song[]) => {
  const player = usePlayer();
  const { onOpen } = useAuthModel();
  const { user } = useUser();
  const onPlay = (id: string) => {
    if (!user) {
      console.log(user);
      return onOpen();
    }
    player.setId(id);
    player.setIds(songs.map((song) => song.id));
  };
  return onPlay;
};
export default useOnPlay;
