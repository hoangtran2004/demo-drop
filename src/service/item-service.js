import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'

export const getAll = createAsyncThunk(
    'getAll',
    async () => {
        const res = await axios.get(`https://dummyjson.com/products`)
        return res.data

    }
)