import { TracklistContainer } from "../styles/pages/tracklist";
import { tracklist } from "../utils/gallery";

export function Tracklist() {
  return (
    <TracklistContainer>
      <h1></h1>
      <ul>
        {tracklist.map((track) => {
          return (
            <li key={track.id}>
              <h3>{track.track}</h3>
            </li>
          );
        })}
      </ul>
    </TracklistContainer>
  );
}
