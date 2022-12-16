import { createStore } from "redux";
import { IPlayer } from "../Interfaces/IPlayer";

export class FavoriteState {
    public favoritesPlayer: IPlayer[] = [];

}

export enum FavoriteActionType {
    AddFavoritePlayer,
    DeleteFavoritePlayer
}

export interface FavoriteAction {
    type: FavoriteActionType,
    payload: IPlayer;
}

export function favoriteReducer(currentState = new FavoriteState(), action: FavoriteAction): FavoriteState {

    const newState = { ...currentState };

    switch (action.type) {
        case FavoriteActionType.AddFavoritePlayer:
            let resultAdd = newState.favoritesPlayer.filter(player => player.id == action.payload.id);
            if (resultAdd.length == 0) {
                newState.favoritesPlayer.push(action.payload);
            }
            break;
        case FavoriteActionType.DeleteFavoritePlayer:
            newState.favoritesPlayer = newState.favoritesPlayer.filter(player => player.id != action.payload.id);
            break;
    }
    return newState;

}


export const favoriteStore = createStore(favoriteReducer);