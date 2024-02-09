"use client";

import AuthModal from "@/Components/AuthModal";
import Modal from "@/Components/Modal";
import SubscribeModal from "@/Components/SubscribeModal";
import UploadModal from "@/Components/UploadModal";
import { ProductWithPrice } from "@/types";
import { useEffect, useState } from "react";
interface ModalProviderProps {
  products: ProductWithPrice[];
}
const ModalProvider = (props: ModalProviderProps) => {
  const { products } = props;
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <AuthModal />
      <UploadModal />
      <SubscribeModal products={products} />
    </>
  );
};

export default ModalProvider;
