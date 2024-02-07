"use client";

import { useUser } from "@/hooks/useUser";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { HiHeart, HiOutlineHeart } from "react-icons/hi2";
import AuthModal from "./AuthModal";
import useAuthModel from "@/hooks/useAuthModel";
import toast from "react-hot-toast";

interface Props {
  songId: string;
}

const LikeButton = (props: Props) => {
  const { songId } = props;
  const router = useRouter();
  const { supabaseClient } = useSessionContext();
  const { user } = useUser();
  const { onOpen } = useAuthModel();
  const [isLiked, setIsLiked] = useState(false);
  useEffect(() => {
    if (!user) return;
    const getLikedSongs = async () => {
      const { data: likedSongs, error } = await supabaseClient
        .from("liked_songs")
        .select("*")
        .eq("user_id", user.id)
        .eq("song_id", songId)
        .single();
      if (!error && likedSongs) {
        console.log(likedSongs, ".........................LikedSongs");

        setIsLiked(true);
      }
    };
    getLikedSongs();
  }, [songId, user?.id, supabaseClient]);
  const handleClick = async () => {
    if (!user) {
      return onOpen();
    }
    if (isLiked) {
      const { error } = await supabaseClient
        .from("liked_songs")
        .delete()
        .eq("user_id", user.id)
        .eq("song_id", songId);
      if (error) {
        toast.error(error.message);
      } else {
        setIsLiked(false);
      }
    } else {
      const { error } = await supabaseClient
        .from("liked_songs")
        .insert({ song_id: songId, user_id: user.id });
      if (error) {
        toast.error(error.message);
      } else {
        setIsLiked(true);
        toast.success("Liked!");
      }
    }
    router.refresh();
  };
  const Icon = isLiked ? HiHeart : HiOutlineHeart;
  return (
    <button className="hover:opacity-75 transition px-2" onClick={handleClick}>
      <Icon color={isLiked ? "#22c55c" : "#ffffff"} />
    </button>
  );
};

export default LikeButton;
