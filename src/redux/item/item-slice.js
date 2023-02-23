import {createSlice} from "@reduxjs/toolkit";
import {
    getAll
} from "../../service/item-service";

const initialState = {
    item: []
}
const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAll.fulfilled, (state, action) => {
            state.item = action.payload
        })
    }
})
export default itemSlice.reducer