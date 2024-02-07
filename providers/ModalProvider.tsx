"use client";

import AuthModal from "@/Components/AuthModal";
import Modal from "@/Components/Modal";
import UploadModal from "@/Components/UploadModal";
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
