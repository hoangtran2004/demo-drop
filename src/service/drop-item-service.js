import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'

export const getItemDrop = createAsyncThunk(
    'getItems',
    async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?fbclid=IwAR0xKPNP0M-p2UJ1nwywbPTE8wa1WZnIH6RvAm0WH1XWmhat3zrupRwdPlQ`)
        return res.data

    }
)