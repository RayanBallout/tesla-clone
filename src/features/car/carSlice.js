import { createSlice } from "@reduxjs/toolkit"

const initialSlice = {
    cars: ["Model S", "Model 3", "Model X", "Model Y"]
}

const carSlice = createSlice({
    name: "car",
    initialState: initialSlice,
    reducers: {}
})

export const selectCar = state => state.car.cars;

export default carSlice.reducer;