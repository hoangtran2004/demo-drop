import {createSlice} from "@reduxjs/toolkit";
import {getItemDrop} from "../../service/drop-item-service";

const initialState = {
    itemDrop: []
}
const itemDropSlice = createSlice({
    name: 'itemDrop',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getItemDrop.fulfilled, (state, action) => {
            state.item = action.payload
        })
    }
})
export default itemDropSlice.reducer