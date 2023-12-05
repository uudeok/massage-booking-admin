import { MASSAGE_ITEM } from "../../const/items";
import { valueOf } from "../order";

export type ITEM_TYPE = typeof MASSAGE_ITEM;
export type ITEM_TYPE_KEYS = keyof ITEM_TYPE;
export type ITEM_TYPE_VALUES = valueOf<ITEM_TYPE>;
