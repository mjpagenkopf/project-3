export const BASEBALL_API_ENDPOINT = 'http://lookup-service-prod.mlb.com';
export const BASEBALL_API_PATH = '/json/named.search_player_all.bam';


export const BASEBALL_API_col_in = `'young%'&search_player_all.col_in=player_id`
//This would perform a search for ‘young’ but any results found would only have the player_id field. Conversely, we could exclude the player_id field by using col_ex
export const BASEBALL_API_col_ex = `'young%'&search_player_all.col_ex=player_id`
//This way we get search results that feature every field except the player’s ID.

export const PLAYER_SEARCH = `?sport_code='mlb'&active_sw=${active_sw}&name_part=${name_part}`;
//If you’re using a single search term i.e. using ‘cespedes’ instead of ‘yoenis cespedes’, you’ll need to append a ‘%25’ character to your search term. Without it, the request will return 500. See example
//URI Parameters:
//active_sw string (optional) Example: 'Y'
//name_part string (required) Example: 'cespedes%25'

export const PLAYER_INFO = `/json/named.player_info.bam?sport_code='mlb'&player_id={player_id}`
// player_id player_id string (required) Example: '493316'

export const PLAYER_TEAMS = `/json/named.player_teams.bam?season={season}&player_id={player_id}`
//season string (optional) Example: '2014'
//player_id string (required) Example: '493316'

export const SEASON_HITTING_STATS = `/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type={game_type}&season={season}&player_id={player_id}`
//game_type
//'R' - Regular Season
//'S' - Spring Training
//'E' - Exhibition
//'A' - All Star Game
//'D' - Division Series
//'F' - First Round (Wild Card)
//'L' - League Championship
//'W' - World Series
//season string (required) Example: '2017'
//player_id string (required) Example: '493316'

export const LIST_TEAMS = `/json/named.team_all_season.bam?sport_code='mlb'&all_star_sw={all_star_sw}&sort_order={sort_order}&season={season}`
// all_star_sw string (optional) Example: 'N'
// Set to ‘Y’ for all star data, and ‘N’ for regular season.

// sort_order string (optional) Example: name_asc
// Field to sort results by.

// season string (required) Example: '2017'

export const TEAM_ROSTER = `/json/named.roster_40.bam?team_id={team_id}`
//team_id string (required) Example: '121'


export const BASEBALL_API_CONFIG = {

}