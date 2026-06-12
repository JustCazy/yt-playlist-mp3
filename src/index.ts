import { Playlist } from "youtube-pl";

const playlistDownload = new Playlist(
  "https://youtube.com/playlist?list=PLp3-KQ922RELlU_q8bmxEMtweK_b8jo0j&si=LADK1kYof7mei448",
  "mp3",
  "downloads"
);

playlistDownload.startPlaylistDownload();
yarn && yarn dev
