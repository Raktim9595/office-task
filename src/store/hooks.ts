import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux/es/types";
import { RootState, AppDispatch } from "./store";

export const useCustomDispatch: () => AppDispatch = useDispatch;
export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;
