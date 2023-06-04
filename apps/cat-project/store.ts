import { atom } from "jotai";
import React from "react";

export const modalListAtom = atom<React.ReactNode[]>([]);
export const uuidAtom = atom<string>("");
