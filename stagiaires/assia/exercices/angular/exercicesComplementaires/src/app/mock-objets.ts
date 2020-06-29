import { Item } from './model/item';
export const MOCK_OBJETS = [
    {
        id:0,
        nom: "blalalala0",
        qt:4,
        stock:20,
    },
    {
        id:1,
        nom: "blalalala1",
        qt:0,
        stock:11,
    },
    {
        id:2,
        nom: "blalalala2",
        qt:1,
        stock:3,
    },
    {
        id:3,
        nom: "blalalala3",
        qt:2,
        stock:7,
    },
    {
        id:4,
        nom: "blalalala4",
        qt:0,
        stock:9,
    }       
].map(rawItem => new Item(rawItem.id, rawItem.nom, rawItem.qt, rawItem.stock));