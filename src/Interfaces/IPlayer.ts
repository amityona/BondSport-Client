export interface IPlayer {
    id: number,
    first_name: string | null
    height_feet: string | null,
    last_name: string | null,
    position: string | null,
    team: ITeam,
    weight_pounds: number | null

}
interface ITeam {
    id: number
    city: string | null,
    conference: string | null,
    division: string | null,
    full_name: string | null,
}
