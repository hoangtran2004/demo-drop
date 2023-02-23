import {configureStore} from "@reduxjs/toolkit";
import itemReducer from './item/item-slice';
import dropItem from "./item/drop-item-slice";

export const store = configureStore({
    reducer: {
        item: itemReducer,
        itemDrop:dropItem
    }
})