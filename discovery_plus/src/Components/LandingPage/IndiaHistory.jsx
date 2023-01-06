import styled from "styled-components"
const Toolbar = styled.header`
.card{
    position: relative;
  text-align: center;
  color: white;
}
  p{
  position: absolute;
  font-size:1.330vw;
  top: 79%;
  weight:500;
  left: 50%;
  transform: translate(-50%, -50%);

  }`
export const IndiaHistory=()=> {
    return (
        <Toolbar>
        <h1 style={{ backgroundColor: "rgb(18,19,23)",paddingLeft:"4%", color:"white",fontSize:"larger",fontWeight:"bold" }}>India: Historical & Spiritual Journey</h1>
            <div style={{ backgroundColor: "rgb(18,19,23)", padding: "4%", paddingTop: "0px", paddingBottom: "2%" }} >
                <div className="row">
                    {
                        slider.map((e) => (
                            <div className="col col-4  g-3 col-lg-2 col-xl-3" key={e.id} >
                                <div className="card" style={{border:"none" }}>
                                    <img style={{borderRadius: "5px"}} src={e.img} classname="img-fluid" alt="" />
                                    {/* <p >{e.text}</p> */}
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
    img: "https://ap2-prod-images.disco-api.com/2022/11/29/763c25de-0a7b-4f4a-8574-cda8c9906a48.jpeg?bf=0&f=jpg&p=true&q=85&w=600",

},
{
    id: 2,
    img: "https://ap2-prod-images.disco-api.com/2022/11/18/ff8aa059-1019-4837-a551-b33644937f73.jpeg?bf=0&f=jpg&p=true&q=85&w=600",

},
{
    id: 3,
    img: "https://ap2-prod-images.disco-api.com/2022/11/11/2fe3d4b0-b7b9-48fe-b905-886bbe1b906a.jpeg?bf=0&f=jpg&p=true&q=85&w=600",

},
{
    id: 4,
    img: "https://ap2-prod-images.disco-api.com/2022/10/25/bd64e71a-7418-44bc-8a54-119979a57304.jpeg?bf=0&f=jpg&p=true&q=85&w=600",

}
]

