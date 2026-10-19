"use client";
import { useEffect } from "react";
import ClaritySDK from "@microsoft/clarity";

export function Clarity({ id }) {
  useEffect(() => {
    if (id) ClaritySDK.init(id);
  }, [id]);
  return null;
}
