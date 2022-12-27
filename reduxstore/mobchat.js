import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const counterSlice = createSlice({
  name: 'chatnav',
  initialState,
  reducers: {
    clubside(state , action){
        if(state.includes("openside")){
            state.splice(0)
            return
        }
        else{
            console.log("initialState",initialState)
            state.push("openside")
        }
    },
    memberside(state , action){
        if(state.includes("openmember")){
            state.splice(0)
            return 
        }
        state.push("openmember")
    },
  },
})

// Action creators are generated for each case reducer function
export const { clubside, memberside } = counterSlice.actions

export default counterSlice.reducer