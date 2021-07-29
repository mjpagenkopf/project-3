// const BASEURL = process.env.REACT_APP_BASEURL;
// const URL2 = process.env.REACT_APP_URL2
// const APIKEY = process.env.REACT_APP_APIKEY;


    
export const searchBaseballData = async (query) => {
    fetch(`/json/named.search_player_all.bam?sport_code=mlb&active_sw=Y&name_part=${query}`);
};
    
    

