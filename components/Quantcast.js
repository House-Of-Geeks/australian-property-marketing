"use client";
import { useEffect } from "react";

export function Quantcast({ id }) {
  useEffect(() => {
    if (!id || document.getElementById("quantcast-js")) return;
    window._qevents = window._qevents || [];
    window._qevents.push({ qacct: id });
    const elem = document.createElement("script");
    elem.id = "quantcast-js";
    elem.src = (document.location.protocol === "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";
    elem.async = true;
    elem.type = "text/javascript";
    const scpt = document.getElementsByTagName("script")[0];
    scpt.parentNode?.insertBefore(elem, scpt);
  }, [id]);
  return null;
}
