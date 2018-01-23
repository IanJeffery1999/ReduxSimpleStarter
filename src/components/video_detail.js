import React from 'react';

const VideoDetail = ({video}) => {
    
    if (!video) {
        
        return <div>Loading...</div>
        
    }
    
    const videoId = video.id.videoId;
    
    const url = `https://www.youtube.com/embed/${videoId}`;
    
    return(
        
        <div className="video-detail col-md-8 ">
        
            <div className="details">
                <div className="card text-white mb-3 video-title border-title"><h3>{video.snippet.title}</h3></div>
            </div>
            
            <div className="embed-responsive embed-responsive-16by9">
            
                <iframe className="embed responsive item margin-video" src={url}></iframe>
            
            </div>
            
            <div className="details">
                
                <div className="card text-white mb-3 video-link border-link"><a className="text-white" href={url} >https://www.youtube.com/embed/${videoId}</a></div>
            
                
                <div className="card text-white mb-3 video-description border-description">{video.snippet.description}</div>
            
            </div>
        
        </div>
        
    );
    
};

export default VideoDetail;