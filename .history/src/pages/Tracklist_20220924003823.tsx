import { Header } from "../components/Header";
import { TracklistContainer } from "../styles/pages/tracklist";
import { tracklist } from "../utils/gallery";

export default function Tracklist() {
  return (
    <>
      <Header />
      <TracklistContainer>
        <h1>Tracklist</h1>
        <ul>
          {tracklist.map((track) => {
            return (
              <li key={track.id}>
                <h3>{track.track}</h3>
                <div>
                  <p>lyrics: {track.lyrics}</p>
                  <p>music: {track.music}</p>
                  <p>audio: {track.arrangement}</p>
                  <p>length: {track.length}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </TracklistContainer>
    </>
  );
}
