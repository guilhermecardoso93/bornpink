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
                <h4>{track.track}</h4> 
                <p>lyrics: {track.length}</p>
                <div>
                  <p>lyrics: {track.lyrics}</p>
                  <p>lyrics: {track.music}</p>
                  
                </div>
              </li>
            );
          })}
        </ul>
      </TracklistContainer>
    </>
  );
}
