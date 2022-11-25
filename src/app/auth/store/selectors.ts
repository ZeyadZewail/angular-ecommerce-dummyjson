import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/types/appState.interface";

export const selectFeature = (state:AppStateInterface) => state.userState;
export const isLoadingSelector = createSelector(selectFeature,(state) => state.isLoading);
export const userSelector = createSelector(selectFeature,(state) => state.user);
export const loggedInSelector = createSelector(selectFeature,(state) => state.isLoggedIn);
export const errorSelector = createSelector(selectFeature,(state) => state.error);