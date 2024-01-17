import { atom } from "recoil"

export const profileAtom = atom({
    key: "profileAtom",
    default: [{
        id: 1,
        name: "Rita Correia",
        age: 32,
        address: "London",
        followers: "80K",
        likes: "803K",
        photos: "1.4K",
      }, {
        id: 2,
        name: "Ekansh K",
        age: 22,
        address: "NY",
        followers: "800",
        likes: "803K",
        photos: "400",
      }]
});