import { playlists } from "../lib/data";
import { usePlayerStore } from "../store/playerStore";
import { Pause, Play } from "./Player";

export function CardPlayButtom({ id, size = "small" }) {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } =
    usePlayerStore((state) => state);

  const isPlayingPlayList = isPlaying && currentMusic?.playlist?.id === id;

  const handleClick = () => {
    if (isPlayingPlayList) {
        setIsPlaying(false);
        return
    }

    fetch(`/api/get-info-playlist.json?id=${id}`)
        .then(res => res.json())
        .then(data => {
            const {songs, playlist} = data
            setIsPlaying(true)
            setCurrentMusic({songs, playlist, song: songs[0]})
        })

  };

 const iconClassName = size === "small" ? "w-4 h-4" : "w-5 h-5";

  return (
    <button
      onClick={handleClick}
      className="card-play-button rounded-full bg-green-500 p-4 hover:scale-105 transition hover:bg-green-400"
    >
      {isPlayingPlayList ? <Pause className={iconClassName} /> : <Play className={iconClassName} />}
    </button>
  );
}
