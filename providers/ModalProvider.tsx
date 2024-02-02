"use client";

import AuthModal from "@/app/Components/AuthModal";
import Modal from "@/app/Components/Modal";
import UploadModal from "@/app/Components/UploadModal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <AuthModal />
      <UploadModal />
    </>
  );
};

export default ModalProvider;
