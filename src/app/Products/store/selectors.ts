import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/types/appState.interface";

export const selectFeature = (state:AppStateInterface) => state.productsState;
export const isLoadingSelector = createSelector(selectFeature,(state) => state.isLoading);
export const productsSelector = createSelector(selectFeature,(state) => state.products);
export const errorSelector = createSelector(selectFeature,(state) => state.error);
export const cartSelector = createSelector(selectFeature,(state) => state.cart);