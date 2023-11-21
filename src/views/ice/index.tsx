import iceice from "../../assets/newiceice.png";
import icemp3 from "../../assets/ice.mp3";
import icebottle from "../../assets/icebottle.png";
import { useCallback, useEffect, useState } from "react";

const Ice: React.FC = () => {
  // state to store time
  const [time, setTime] = useState(0);

  // state to check stopwatch running or not
  const [isRunning, setIsRunning] = useState(false);

  const [paused, setPaused] = useState(true);

  let audio = new Audio(icemp3);

  const start = useCallback(() => {
    if (audio.paused) {
      audio.play();
      setPaused(false);
    } else {
      audio.pause();
      setPaused(true);
    }
  }, []);

  useEffect(() => {
    let intervalId: number | undefined;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = window.setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;

  // Method to start and stop timer
  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  // Method to reset timer back to 0
  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <>
      <div className="">
        <div className="md:flex">
          <div className="window w-1/2 m-4">
            <div className="title-bar">
              <button aria-label="Close" className="close"></button>
              <h1 className="title">ICE Leaderboard</h1>
              <button aria-label="Resize" className="resize"></button>
            </div>
            <div className="separator"></div>

            <div className="window-pane">
              <ul>
                <li>1. Robin 4,91</li>
                <li>2. Christian 5,10</li>
                <li>3. Jaran 6,96</li>
                <li>4. André 7,16</li>
                <li>5. Bendik 7.28</li>
                <li>6. Johan 7.95</li>
                <li>7. Marius 9,91</li>
                <li>8. Jonathan 13,51</li>
                <li>9. Anndrea 20,45</li>
                <li>10. Ida 22,79</li>
              </ul>
            </div>
          </div>

          <div className="window w-1/2 m-4">
            <div className="title-bar">
              <button aria-label="Close" className="close"></button>
              <h1 className="title">Ice Ice Baby</h1>
              <button aria-label="Resize" className="resize"></button>
            </div>
            <div className="separator"></div>

            <div className="window-pane relative overflow-hidden h-[512px] p-0">
              <div className="wave absolute" />
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="spinner-wrapper">
                  <div className="spinning-track">
                    <div
                      className={`inner-spinner spinning-track-artwork ${
                        paused ? "paused" : ""
                      } `}
                      style={{
                        backgroundImage: "url(" + iceice + ")",
                      }}
                    >
                      <div className="spinning-track-center" />
                    </div>
                  </div>
                  <div className="spinning-track-background" />
                  <div className="spinning-track-overlay-cd" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0">
                <button className="btn m-4" onClick={start}>
                  {paused ? "Play" : "Pause"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="window m-4">
          <div className="title-bar">
            <button aria-label="Close" className="close"></button>
            <h1 className="title">Timer</h1>
            <button aria-label="Resize" disabled className="hidden"></button>
          </div>
          <div className="separator"></div>

          <div className="modeless-dialog">
            <div className="text-4xl">
              {seconds.toString().padStart(2, "0")}:
              {milliseconds.toString().padStart(2, "0")}
            </div>
            <div className="stopwatch-buttons">
              <button className="btn m-2" onClick={startAndStop}>
                {isRunning ? "Stop" : "Start"}
              </button>
              <button className="btn m-2" onClick={reset}>
                Reset
              </button>
            </div>
          </div>
        </div>
        <img src={icebottle} className="md:rotate-90 m-auto left-0 right-0" />
      </div>
    </>
  );
};

export { Ice };
