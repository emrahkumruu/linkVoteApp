import {
    createSlice,
} from '@reduxjs/toolkit';

const slice = createSlice({
    name: "linkAdd",
    initialState: {
        notify: {
            isSuccess: false,
            isActive: false,
            title: null,
            msg: null
        }
    },
    reducers: {
        setNotify: (state, action) => {
            state.notify = { ...state.notify, ...action.payload }
        }
    }
});

export default slice.reducer;
export const {
    setNotify
} = slice.actions;