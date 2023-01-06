import styled from "styled-components"
import play from "../LandingPage/Homeimages/play.png"
const Toolbar = styled.header`
.card{
    position: relative;
  text-align: center;
  color: white;
  height:"50%";
}
  p{
  position: absolute;
  font-size:1.330vw;
  top: 79%;
  weight:500;
  left: 50%;
  transform: translate(-50%, -50%);

  }
  .Hover_container div{
    
  }
  .hover_img{
    visibility: visible;
    backgroundColor:red;
    -webkit-transition: visibility 0s, opacity 0.5s linear; 
    transition: visibility 0s, opacity 0.5s linear;
    position:relative;
   let:0;
   right:0;
   top:10%;


  }
  .hover_img:hover{
    visibility: hidden;
    backgroundColor:black;

    ${'' /* .inner_container div{
    visibility: hidden;
    -webkit-transition: visibility 0s, opacity 0.5s linear; 
    transition: visibility 0s, opacity 0.5s linear; 
}
.inner_container:hover div{
    visibility: visible;
    transition: 5ms;
} */}

  }
  
  
  `
export const StreamForFree=()=> {
    return (
        <Toolbar>
        <h3 style={{ backgroundColor: "rgb(18,19,23)",paddingLeft:"4%", color:"white",fontSize:"larger",fontWeight:"bold" }}>Stream For Free Now</h3>
            <div style={{ backgroundColor: "rgb(18,19,23)", padding: "4%", paddingTop: "0px", paddingBottom: "2%" }} >
                <div className="row">
                    {
                        slider.map((e) => (
                            <div className="col col-4 g-2 col-lg-2 col-xl-2" key={e.id} >
                                <div className="Hover_container">
                                    <div className="card" style={{border:"none" }}>
                                        <img style={{height:"250px",borderRadius: "5px"}} src={e.img} classname="img-fluid" alt="" />
                                       <div className="hover_img">
                                            <img src={play} />
                                       </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </Toolbar>
    )
}
const slider = [{
    id: 1,
    img: "https://ap2-prod-images.disco-api.com/2022/12/21/e290d56d-ff1b-4aee-83ad-06f751c807d4.jpeg?bf=0&f=jpg&p=true&q=85&w=600",

},
{
    id: 2,
    img: "https://ap2-prod-images.disco-api.com/2022/12/06/ff00ee74-a71f-4174-a87a-3335cfb2670a.jpeg?bf=0&f=jpg&p=true&q=85&w=600",

},
{
    id: 3,
    img: "https://ap2-prod-images.disco-api.com/2022/11/08/af2d3c2f-45ab-4eae-a317-d035a972239c.jpeg?bf=0&f=jpg&p=true&q=85&w=600",

},
{
    id: 4,
    img: "https://ap2-prod-images.disco-api.com/2020/09/10/651f18ec-6098-46ba-8483-a64de9730429.jpeg?bf=0&f=jpg&p=true&q=85&w=600",

},
{
    id: 5,
    img: "https://ap2-prod-images.disco-api.com/2022/04/12/3b235cd3-71aa-442a-b0e2-acc9602ae6fe.jpeg?bf=0&f=jpg&p=true&q=85&w=600",

},
{
    id: 6,
    img: "https://ap2-prod-images.disco-api.com/2022/11/25/eca6ebce-6669-4cfb-afc8-da3d87fc668a.jpeg?bf=0&f=jpg&p=true&q=85&w=600",

}
]

