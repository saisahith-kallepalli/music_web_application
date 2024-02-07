import { Song } from "@/types";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

const useGetSongById = (id: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [song, setSong] = useState<Song | undefined>();
  const { supabaseClient } = useSessionContext();
  useEffect(() => {
    if (!id) {
      return;
    }
    setIsLoading(true);
    const getSong = async () => {
      const { data, error } = await supabaseClient
        .from("songs")
        .select("*")
        .eq("id", id)
        .single();
      if (error) {
        setIsLoading(false);
        toast.error(error.message);
      } else {
        setSong(data as Song);
        setIsLoading(false);
      }
    };
    getSong();
  }, [id, supabaseClient]);
  return useMemo(() => ({ song, isLoading }), [song, isLoading]);
};
export default useGetSongById;
