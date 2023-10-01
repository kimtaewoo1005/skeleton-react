import { ReduxState } from '@/stores'

export const selectNumber = (state: ReduxState ) => state.number.value;