"use client";
import uniqid from "uniqid";
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import useAuthModel from "@/hooks/useAuthModel";
import { useEffect, useState } from "react";
import useUploadModal from "@/hooks/useUploadModal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import toast from "react-hot-toast";
import { useUser } from "@/hooks/useUser";
const UploadModal = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const { onChangeOpen, isOpen, onClose } = useUploadModal();
  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      song: null,
      image: null,
    },
  });
  const onHandleChange = () => {
    onChangeOpen();
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    try {
      setIsLoading(true);
      const { author, title, song, image } = values;
      const songUrl = song[0];
      const imageUrl = image[0];
      if (!user) {
        toast.error("Login to Create");
        return;
      } else if (!imageUrl || !songUrl) {
        toast.error("Missing Fields");
        return;
      }
      const uniqueId = uniqid();
      const { data: songData, error: songError } = await supabaseClient.storage
        .from("songs")
        .upload(`song-${title}-${uniqueId}`, songUrl, {
          cacheControl: "3600",
          upsert: false,
        });
      if (songError) {
        setIsLoading(false);
        return toast.error("Failed song upload.");
      }
      const { data: imageData, error: imageError } =
        await supabaseClient.storage
          .from("images")
          .upload(`image-${title}-${uniqueId}`, imageUrl, {
            cacheControl: "3600",
            upsert: false,
          });
      if (imageError) {
        setIsLoading(false);
        return toast.error("Failed image upload.");
      }
      const { error: dataError } = await supabaseClient
        .from("songs")
        .insert({
          title,
          author,
          song_path: songData.path,
          image_path: imageData.path,
          user_id: user.id,
        })
        .select();
      if (dataError) {
        setIsLoading(false);
        return toast.error(dataError.message);
      }
      toast.success("Successfully added");
      setIsLoading(false);
      router.refresh();
      reset();
      onClose();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Modal
      title="Add a song"
      description="Upload mp3 file"
      isOpen={isOpen}
      onHandleChange={onHandleChange}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          id="title "
          placeholder="Song title"
          disabled={isLoading}
          required
          {...register("title", { required: true })}
        />
        <Input
          id="author "
          placeholder="Song author"
          disabled={isLoading}
          required
          {...register("author", { required: true })}
        />
        <div>
          <div className="pb-1">Select a song file</div>
          <Input
            id="song"
            disabled={isLoading}
            type="file"
            accept=".mp3"
            {...register("song", { required: true })}
          />
        </div>
        <div>
          <div className="pb-1">Select a song image</div>
          <Input
            id="song"
            disabled={isLoading}
            type="file"
            accept="image/*"
            {...register("image", { required: true })}
          />
        </div>
        <Button disabled={isLoading} type="submit">
          Create
        </Button>
      </form>
    </Modal>
  );
};

export default UploadModal;
