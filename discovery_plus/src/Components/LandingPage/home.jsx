
import {Slider} from "./slider"
// import {Caro} from "./manual_carousel"
import { Corosuel } from "./corosuel"
import { ShowYouLove } from "./showYouLove"
import { IndiaHistory } from "./IndiaHistory"
import { NewlyAddedShows } from "./Newly"
import { StreamForFree } from "./streamForFree"
// import {Footer} from"./footer"
export const Home=()=> {
    return (
    <>
    <Corosuel />
     <Slider />
     <ShowYouLove/>
     <NewlyAddedShows/>
    <IndiaHistory/>
    <StreamForFree/>
    
     </>
    )
}
