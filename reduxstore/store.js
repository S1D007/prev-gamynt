import { configureStore } from '@reduxjs/toolkit'
import mobchatreducer from "./mobchat"

export const store = configureStore({
  reducer: {
    chatnav:mobchatreducer
  },
})