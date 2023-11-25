import axios from "axios";
export async function getNBAGames() {
    try {
        const res = await axios.get(
            `http://52.188.229.42:5011/api/v1/nba/all-nba-games`
        );
        const nbaGames = await res.data;
        return nbaGames;
      } catch (e) {
        console.log(e);
        throw(e);
    }
}