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
export const ShowYouLove=()=> {
    return (
        <Toolbar>
        <h3 style={{ backgroundColor: "rgb(18,19,23)",paddingLeft:"4%", color:"white",fontSize:"larger",fontWeight:"bold" }}>Shows You Love</h3>
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
    img: "https://ap2-prod-images.disco-api.com/2022/09/25/b229caa5-fbb3-426f-af07-69ada1246b5c.jpeg?bf=0&f=jpg&p=true&q=85&w=600",

},
{
    id: 2,
    img: "https://ap2-prod-images.disco-api.com/2022/11/09/8c94e362-2a17-4587-a9db-2d5fa6549f9e.jpeg?bf=0&f=jpg&p=true&q=85&w=600",

},
{
    id: 3,
    img: "https://ap2-prod-images.disco-api.com/2022/08/18/8accb6b7-de88-42b9-a129-bcf6107350b5.jpeg?bf=0&f=jpg&p=true&q=85&w=600",

},
{
    id: 4,
    img: "https://ap2-prod-images.disco-api.com/2021/08/24/d285028a-f3c8-440e-bb38-3565f6425960.jpeg?bf=0&f=jpg&p=true&q=85&w=600",

}
]

