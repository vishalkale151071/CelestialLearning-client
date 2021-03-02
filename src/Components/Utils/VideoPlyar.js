import '../styles/index.css';
import '../styles/videoHLS.css';
import '../styles/CourseView.css';
import 'video.js';
const VideoPlayer = () => {
    return(
        <div className="player">
            <video
                id="forest-video"
                className="video-js vjs-theme-forest vidPlayer"
                controls
                preload="auto"
                poster="https://image.mux.com/FGZHQaIg7cjVNS2dgTrnMYSdCkXohOl3/thumbnail.jpg"
                data-setup='{ "fluid": true }'
            >
                <source
                src="https://celestiallearning.s3.amazonaws.com/machine-learning-data-science-and-deep-learning-with-python/predictive-models/dfvdsfght-one.m3u8"
                type="application/x-mpegurl"
                />
            </video>
            <script src="video.js"></script>
            <script src="videojs-http-streaming.min.js"></script>
        </div>
    )
}

export default VideoPlayer