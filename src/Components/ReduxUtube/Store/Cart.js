import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const Cart = createSlice(
    {
        name: "cart",
        reducers: {//use to do any action ,it use to change state,it also called pure funtion.

            add(state,action) { },
            remove() { }

        }
    }
)