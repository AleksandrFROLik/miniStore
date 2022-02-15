import { rootReducerType} from "../store/store";
import {TypedUseSelectorHook, useSelector} from "react-redux";

export const UseTypedSelector: TypedUseSelectorHook<rootReducerType> = useSelector