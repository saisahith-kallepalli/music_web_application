import { HiMiniPlay } from "react-icons/hi2";

interface PlayButtonProps {}
const PlayButton = (props: PlayButtonProps) => {
  return (
    <button className="rounded-full flex items-center opacity-0 bg-green-500 p-4 cursor-pointer drop-shadow-md translate-y-1 hover:scale-110 group-hover:opacity-100 group-hover:translate-y-1/4 transition">
      <HiMiniPlay className="text-black" />
    </button>
  );
};
export default PlayButton;
