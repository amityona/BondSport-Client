import { IPlayer } from "./Interfaces/IPlayer";
import { favoriteStore , FavoriteActionType } from "./Redux/FavoriteState";
export function AddToFavorite(data:IPlayer) {

    favoriteStore.dispatch({ type: FavoriteActionType.AddFavoritePlayer, payload: data});
}

export function DeleteFromFavorite(data:IPlayer) {

    favoriteStore.dispatch({ type: FavoriteActionType.DeleteFavoritePlayer, payload: data});
}