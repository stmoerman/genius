"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("e8c97327-c8a0-42e4-bec7-dbe1a4116692");
  }, []);

  return null;
};
