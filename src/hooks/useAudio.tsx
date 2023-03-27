import { useContext } from "react";
import AudioContext from "../context/audio";

const useAudio = () => {
  return useContext(AudioContext);
};

export default useAudio;
