// import Video from "/videos/nextgen-vid.mp4"

export function VideoComponent() {
  return (
    <video width="600" className="h-96" controls preload="auto" autoPlay crossOrigin="anonymous" playsInline muted loop
      // style={{
      //   height: "100%",
      //   width: "100%",
      //   objectFit: "cover",
      //   objectPosition: "center center",
      //   opacity: 1
      // }}
    >
      <source src="./nextgen-vid.mp4" type="video/mp4" />
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

