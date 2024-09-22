import Video from "../assets/nextgen-vid.mp4"

export function VideoComponent() {
  return (
    <video width="600" className="h-96" controls preload="none">
      <source src={Video} type="video/mp4" />
      {/* <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      /> */}
      Your browser does not support the video tag.
    </video>
  )
}