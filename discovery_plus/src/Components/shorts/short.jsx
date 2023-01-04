import { useState } from "react";
import './Short.css';
const Short =() => {
    const [category_all, setCategory_all] = useState("category_opt_all");
    const [category_all2, setCategory_all2] = useState("category_opt_all2");
   

    const handleAll = ()=> {
        setCategory_all("category_opt_all");
    }
    const handleAdv = ()=> {
        setCategory_all("cates_opt_all2");
    }
    
    return(
        <div className="shorts_main">
            {/* <h3 style={{color:"white"}}>This is shorts Section</h3> */}
            <div className="shorts_letfBox">
                <div className="shorts_letfBox_cntnt">
                    <div className="category_cntnt">
                        <div>
                            <div className="category_heading">
                                <span className="category_heading_span">Categories wise</span>
                            </div>
                            <div className="categ_line">
                                <div className="subcateg_line"></div>
                            </div>
                        </div>
                        <div>
                            <button className="button_categ" onClick={handleAll}>
                                <div className="sub_categ" id="#category">
                                    <span className={category_all}>All</span>
                                </div>
                                <div className="categ_line">
                                    <div className="subcateg_line2"></div>
                                </div>
                            </button> 
                        </div>
                        <div>
                            <button className="button_categ">
                                <div className="sub_categ" id="#category">
                                    <span className={category_all}>Adventure</span>
                                </div>
                                <div className="categ_line">
                                    <div className="subcateg_line2"></div>
                                </div>
                            </button> 
                        </div>  
                        <div>
                            <button className="button_categ">
                                <div className="sub_categ" id="#category">
                                    <span className={category_all}>Food</span>
                                </div>
                                <div className="categ_line">
                                    <div className="subcateg_line2"></div>
                                </div>
                            </button> 
                        </div>
                        <div>
                            <button className="button_categ">
                                <div className="sub_categ" id="#category">
                                    <span className={category_all}>Science</span>
                                </div>
                                <div className="categ_line">
                                    <div className="subcateg_line2"></div>
                                </div>
                            </button> 
                        </div>
                        <div>
                            <button className="button_categ">
                                <div className="sub_categ" id="#category">
                                    <span className={category_all}>Animals</span>
                                </div>
                                <div className="categ_line">
                                    <div className="subcateg_line2"></div>
                                </div>
                            </button> 
                        </div>
                        <div>
                            <button className="button_categ">
                                <div className="sub_categ" id="#category">
                                    <span className={category_all}>Lifestyle</span>
                                </div>
                                <div className="categ_line">
                                    <div className="subcateg_line2"></div>
                                </div>
                            </button> 
                        </div>    
                    </div>

                    {/* <div><button><span>All</span></button></div> */}
                </div>
                <div style={{color:"white"}}>video</div>
                <div style={{color:"white"}}>right image</div>
            </div>
        </div>
    
    )

}
export default Short;