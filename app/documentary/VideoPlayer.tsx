export default function VideoPlayer() {
  return (
    <div className="relative w-full bg-misf-blue-dark" style={{ paddingBottom: '56.25%' }}>
      <iframe
        className="absolute inset-0 w-full h-full"
        src="https://www.youtube.com/embed/frqGTHL4vbQ?rel=0&modestbranding=1"
        title="The Last Country on Earth Without a Football Team"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
