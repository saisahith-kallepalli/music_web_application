import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getSongsByUserId = async (): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });
  const { data, error } = await supabase.auth.getSession();
  if (error) {
    console.error(error.message);
    return [];
  }
  const { data: songData, error: songError } = await supabase
    .from("songs")
    .select("*")
    .eq("user_id", data.session?.user.id)
    .order("created_at", { ascending: false });
  if (songError) {
    console.error(songError.message);
  }
  return (songData as any) || [];
};
export default getSongsByUserId;
