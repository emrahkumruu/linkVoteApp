import { guidGenerator } from './Utils';

export const initialDataSource = [
    {
        id: guidGenerator(),
        name: "Hacker News",
        url: "https://example.com",
        point: 0,
    },
    {
        id: guidGenerator(),
        name: "Product Hunt",
        url: "http://www.productHunt.com",
        point: 0,
    },
    {
        id: guidGenerator(),
        name: "Reddit",
        url: "https://www.reddit.com",
        point: 0,
    },
    {
        id: guidGenerator(),
        name: "Google",
        url: "https://google.com",
        point: 0,
    }]