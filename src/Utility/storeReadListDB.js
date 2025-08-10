import { toast } from "react-toastify";

const getStoredList = () => {
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
}

const addToStorage = (id) => {
    const storedList = getStoredList();

    if(storedList.includes(id)){
        toast("Alread exist in array")
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        toast("Book has been added to read list");
    }
}

const getWishtList = () => {
    const wishListStr = localStorage.getItem('wish-list');
    if(wishListStr) {
        const wishList = JSON.parse(wishListStr);
        return wishList;
    }
    else {
        return [];
    }
}

const addToWishList = (id) => {
    const wishList = getWishtList();
    console.log(wishList);
    if(wishList.includes(id)){
        toast('Item already exist');
    }
    else {
        wishList.push(id);
        const wishListStr = JSON.stringify(wishList);
        localStorage.setItem('wish-list', wishListStr);
        toast("Item added to list");
    }
}
export  { addToStorage, getStoredList, getWishtList, addToWishList };