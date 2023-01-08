import {Player, ControlBar, PlayToggle} from 'video-react';
const ShortVideo = () => {
  return(
   
        <Player fluid={false} width="100%" height={1000} autoPlay disableDefaultControls={true}
                          poster="/assets/poster.png"
                          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                        >
        </Player>                      
    
  )
}
export default ShortVideo;