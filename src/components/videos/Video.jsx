import ReactPlayer from "react-player";
import "./Video.scss";

const Video = ({ url }) => {
  return (
    <>
      <ReactPlayer
        className="video"
        url={url}
        controls
        config={{
          youtube: {
            playerVars: { showinfo: 1 },
          },
        }}
      />
    </>
  );
};

export default Video;
