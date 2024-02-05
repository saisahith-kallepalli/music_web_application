import Header from "@/Components/Header";
import PageContent from "@/Components/PageContent";
import SearchContent from "@/Components/SearchContent";
import SearchInput from "@/Components/SearchInput";
import getSongsBySearch from "@/actions/getSongsBySearch";

interface SearchProps {
  searchParams: {
    title: string;
  };
}

const Search: React.FC<SearchProps> = async (props) => {
  const songs = await getSongsBySearch(props.searchParams.title);
  return (
    <div className="bg-netural-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">Search</h1>
          <SearchInput />
        </div>
        <SearchContent songs={songs} />
      </Header>
    </div>
  );
};

export default Search;
