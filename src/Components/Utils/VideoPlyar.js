import 'video.js';
const VideoPlayer = ({ src }) => {
    console.log("SRC : ",src);
    return(
        <video
            id="forest-video"
            className="video-js vjs-styles-defaults"
            controls
            preload="auto"
            poster="https://image.mux.com/FGZHQaIg7cjVNS2dgTrnMYSdCkXohOl3/thumbnail.jpg"
            data-setup='{ "fluid": true }'
            height='340'
            width='720'
        >
            <source
            src="https://celestiallearning.s3.amazonaws.com/machine-learning-data-science-and-deep-learning-with-python/predictive-models/dfvdsfght-one.m3u8"
            type="application/x-mpegurl"
            />
        </video>
    )
}

export default VideoPlayer