import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:'todo',
    initialState:{task:[]},
    reducers:{
        addTask:(state,action)=>{
            state.task.push({ id: Date.now(), text: action.payload });

        },
        deleteTask:(state,action)=>{
            state.task = state.task.filter((item) => item.id !== action.payload);
        }
    }
})
export const store = configureStore({reducer: {todo: todoSlice.reducer}})
export const todoActions =todoSlice.actions;
export default store;