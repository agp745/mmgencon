import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface PathState {
    pathname: string | null
}

const initialState: PathState = {
    pathname: null
}

export const PathSlice = createSlice({
    name: 'path',
    initialState,
    reducers: {
        updatePath: (state, action: PayloadAction<string>) => {
            state.pathname = action.payload
        }
    }
})

export const { updatePath } = PathSlice.actions

export default PathSlice.reducer