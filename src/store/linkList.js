import {
    createSlice,
} from '@reduxjs/toolkit';

// utils
import { getLinks as linkArr, setLinks } from '../Utils';

const slice = createSlice({
    name: "linkList",
    initialState: {
        links: [],
        orderAction: null,
        notify: {
            isSuccess: false,
            isActive: false,
            title: null,
            msg: null
        }
    },
    reducers: {
        getLinks: (state) => {
            state.links = linkArr();
        },
        changeLinkPoint: (state, action) => {
            const { id, actionType } = action.payload;

            state.links.map(item => {
                if (item.id === id) {
                    if (actionType === 'UP') {
                        item.point++;
                    } else if (item.point !== 0) {
                        item.point--;
                    }
                }
            });

            setLinks(state.links);
        },
        reOrderLinks: (state, action) => {
            const { value } = action.payload;

            if (!!value.length) {
                state.links.sort((a, b) => {
                    const c = a.point,
                        d = b.point;
                    return value === 'desc' ? d - c : c - d;
                })
            } else {
                state.links = linkArr();
            }
        },
        removeLink: (state, action) => {
            const { id } = action.payload;

            state.links = state.links.filter(item => { return item.id !== id });

            setLinks(state.links);
        },
        setNotify: (state, action) => {
            state.notify = { ...state.notify, ...action.payload }
        },
        closeNotify: (state) => {
            state.notify = { ...state.notify, isActive: false }
        }
    }
});

export default slice.reducer;
export const {
    getLinks,
    changeLinkPoint,
    reOrderLinks,
    removeLink,
    setNotify,
    closeNotify
} = slice.actions;