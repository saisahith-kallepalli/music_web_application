"use client";
import React from "react";
import { Toaster } from "react-hot-toast";

interface ToasterProviderProps {}

const ToasterProvider: React.FC<ToasterProviderProps> = (props) => {
  return (<Toaster toastOptions={
    {style: {background: '#333', color: '#fff'}}
  }/>)
};

export default ToasterProvider;
