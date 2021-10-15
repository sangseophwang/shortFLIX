import axios from "axios";
const KEY = "AIzaSyCEBt5M6A0qemJ8QZ9VR4qXBTYkNvWAN2A";
const KEY2 = "AIzaSyBD-aMI11UsF2ytr2lQCCBQx3IP89YvcGI";
const KEY3 = "AIzaSyDHkfvEBMgFrXx2Gr3CVs0jUdYwRhZ2eEU";
const KEY4 = "AIzaSyBLf9FKoEFKJZSw6UR_y5zKkbMloZxye1Q";
const KEY5 = "AIzaSyCGrmLRW1glgZ8gT4CCu-lpAIETnkjpPcc";
const KEY6 = "AIzaSyAAmggo9-8JsdsblBR5SJUc6Ehjlr2z5g0";
const KEY7 = "AIzaSyBmSEjXaiMc75WXzy4nnaMULAMss6ebWEY";
const KEY8 = "AIzaSyDM_F3VJLjqL5_BZK384LOKZbe0zvDQ8NU";
const KEY9 = "AIzaSyBqlb0hQBCoEvBOAgoJtRUPp_1oDjVuz4w";
const KEY10 = "AIzaSyCnO5XUDyoONoCJhp3MZGUFdLCSk_YpPMI";
const KEY11 = "AIzaSyBfIcLIcSYnvIrgtv17NlgxPrefrWkzUqU";
const KEY12 = "AIzaSyA7HfugShOoE4BOH-RVLVFM8oI2FyAs1Is";
const KEY13 = "AIzaSyAIAN4fWbhQxYcuLU-cnjAGihX695m5azE";
const KEY14 = "AIzaSyCqDwnddNCmxfARhDuzcwQylX11hHvycxo";
const KEY15 = "AIzaSyCXib5-Wu2HGVttwoGn5E5QTp1nS37fw6o";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY6,
  },
});
