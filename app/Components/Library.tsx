import { BsMusicNoteList, BsPlusLg } from "react-icons/bs";
import { HiListBullet } from "react-icons/hi2";

type LibraryProps = {};

const Library: React.FC<LibraryProps> = (props: LibraryProps) => {
  const handleClickOnPlus = () => {
    console.log("clicked");
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
      <div className="flex flex-col gap-y-2 px-3">List of Songs</div>
    </div>
  );
};

export default Library;
