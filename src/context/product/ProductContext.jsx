import { createContext, useContext, useReducer } from "react";
import ProductReducer from "./ProductReducer";



const ProductContext = createContext()

export const ProductProvider = ({ children }) => {

    const initialState = {
        products: [{
            "id": 1,
            "title": "Tomoto",
            "price": 20,
            "image": "https://img.freepik.com/free-photo/one-fresh-red-tomato-isolated-white_1205-548.jpg?size=626&ext=jpg&ga=GA1.2.886943807.1684301468&semt=sph",

        },
        {
            "id": 2,
            "title": "Bell Pepper",
            "price": 40,
            "image": "https://img.freepik.com/free-photo/bell-pepper_1339-1599.jpg?size=626&ext=jpg&ga=GA1.1.886943807.1684301468&semt=ais",

        },
        {
            "id": 3,
            "title": "Garlic",
            "price": 30,
            "image": "https://img.freepik.com/premium-photo/garlic-isolated_120872-4425.jpg?size=626&ext=jpg&ga=GA1.1.886943807.1684301468&semt=sph",

        },
        {
            "id": 4,
            "title": "Green Beans",
            "price": 70,
            "image": "https://img.freepik.com/free-photo/green-beans-handful-isolated-white-background-cutout_1205-1714.jpg?size=626&ext=jpg&ga=GA1.1.886943807.1684301468&semt=ais",

        },
        {
            "id": 5,
            "title": "Purple Cabbage",
            "price": 55,
            "image": "https://img.freepik.com/free-photo/purple-cabbage-vegetables_1203-6928.jpg?size=626&ext=jpg&ga=GA1.1.886943807.1684301468&semt=ais",

        },
        {
            "id": 6,
            "title": "CARROTS",
            "price": 80,
            "image": "https://img.freepik.com/free-photo/many-fresh-carrots-white-table_114579-76050.jpg?size=626&ext=jpg&ga=GA1.1.886943807.1684301468&semt=sph7.jpg",

        },
        {
            "id": 7,
            "title": "ONIONS",
            "price": 25,
            "image": "https://img.freepik.com/free-photo/red-onion-whole-isolated-white_146671-19175.jpg?size=626&ext=jpg&ga=GA1.1.886943807.1684301468&semt=sph",

        },
        {
            "id": 8,
            "title": "CHILLI",
            "price": 20,
            "image": "https://img.freepik.com/free-photo/red-fresh-chili-peppers-isolated-white_114579-43541.jpg?size=626&ext=jpg&ga=GA1.2.886943807.1684301468&semt=sph",

        },
        {
            "id": 9,
            "title": "BROCOLLI",
            "price": 45,
            "image": "https://img.freepik.com/free-photo/fresh-broccoli-isolated_144627-30009.jpg?size=626&ext=jpg&ga=GA1.1.886943807.1684301468&semt=sph",

        },
        {
            "id": 10,
            "title": "Leaf lettuce",
            "price": 24,
            "image": "https://img.freepik.com/free-photo/white-vegetable-healthy-fresh-natural_1203-5946.jpg?w=740&t=st=1685286702~exp=1685287302~hmac=526ab09245d0098f9d78b96f478f66de6eee5d2e760f62fd2924e778f4da3536",

        },
        {
            "id": 11,
            "title": "Chinese broccoli",
            "price": 25,
            "image": "https://img.freepik.com/free-photo/chinese-broccoli-vegetables_1203-6831.jpg?w=360&t=st=1685286753~exp=1685287353~hmac=a7b4df9d7291d35b1ba3877ba69460dede3aa8cc2ab5a98f6a4b97a3c0b126c5",

        },
        {
            "id": 12,
            "title": "Eggplant",
            "price": 48,
            "image": "https://img.freepik.com/premium-photo/close-up-eggplants-white-background-with-copy-space-healthy-vegan-vegetarian-food-concept_685067-4097.jpg?size=626&ext=jpg&ga=GA1.1.886943807.1684301468&semt=sph",

        },
        {
            "id": 13,
            "title": "Sweet Potato",
            "price": 18,
            "image": "https://img.freepik.com/free-photo/purple-sweet-potato_1205-697.jpg?size=626&ext=jpg&ga=GA1.2.886943807.1684301468&semt=sph",

        },
        {
            "id": 14,
            "title": "Ginger ",
            "price": 60,
            "image": "https://img.freepik.com/free-photo/bittersweet-ginger_144627-12044.jpg?size=626&ext=jpg&ga=GA1.1.886943807.1684301468&semt=sph",

        },
        {
            "id": 15,
            "title": "Eggplant",
            "price": 25,
            "image": "https://img.freepik.com/free-photo/raw-eggplants-ready-be-cooked_23-2150410411.jpg?size=626&ext=jpg&ga=GA1.1.886943807.1684301468&semt=sph",

        },
        {
            "id": 16,
            "title": "Lady's Finger",
            "price": 35,
            "image": "https://img.freepik.com/premium-photo/young-okra-isolated-white-background_147493-714.jpg?size=626&ext=jpg&ga=GA1.1.886943807.1684301468&semt=sph",

        },
        {
            "id": 17,
            "title": "Fruggies Pumpkin",
            "price": 120,
            "image": "https://img.freepik.com/free-photo/fresh-pumpkin_1339-282.jpg?size=626&ext=jpg&ga=GA1.1.886943807.1684301468&semt=sph",

        },
        {
            "id": 18,
            "title": "Green Chilies",
            "price": 24,
            "image": "https://img.freepik.com/premium-photo/green-chilli-peppers-thailand-market_10279-535.jpg?size=626&ext=jpg&ga=GA1.1.886943807.1684301468&semt=sph",

        },
        {
            "id": 19,
            "title": "Cauliflower",
            "price": 20,
            "image": "https://img.freepik.com/premium-photo/fresh-cauliflower-isolated-white-background_33736-2839.jpg?size=626&ext=jpg&ga=GA1.1.886943807.1684301468&semt=sph",

        },
        {
            "id": 20,
            "title": "Potato ",
            "price": 20,
            "image": "https://img.freepik.com/free-photo/potato-table_144627-14820.jpg?size=626&ext=jpg&ga=GA1.1.886943807.1684301468&semt=sph",

        },
        {
            "id": 21,
            "title": "parsley",
            "price": 20,
            "image": "https://img.freepik.com/premium-photo/bunch-ripe-parsley-isolated_80510-763.jpg?size=626&ext=jpg&ga=GA1.1.886943807.1684301468&semt=sph",

        },
        {
            "id": 22,
            "title": "Green Onions",
            "price": 20,
            "image": "https://img.freepik.com/premium-photo/green-onion-isolated_146346-3600.jpg?size=626&ext=jpg&ga=GA1.1.886943807.1684301468&semt=sph",

        },
        {
            "id": 23,
            "title": "Baguio Beans",
            "price": 20,
            "image": "https://img.freepik.com/free-photo/green-beans-handful-isolated-white-background-cutout_1205-1714.jpg?size=626&ext=jpg&ga=GA1.1.886943807.1684301468&semt=sph",

        },
        {
            "id": 24,
            "title": "Mushroom",
            "price": 20,
            "image": "https://img.freepik.com/premium-vector/realistic-champignon-mushroom-isolated-white-background-cremini-whole-portobello_341509-3332.jpg?size=626&ext=jpg&ga=GA1.1.886943807.1684301468&semt=sph",

        },
    ]
    }

    const [state, dispatch] = useReducer( ProductReducer, initialState)


    return (
        <ProductContext.Provider value={{
            ...state,
            dispatch

        }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext
