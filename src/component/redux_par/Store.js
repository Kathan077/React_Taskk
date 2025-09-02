import { legacy_createStore as createstore} from "redux";
import { Rootreducer } from "./Rootreducer";

export const myStore=createstore(Rootreducer)
