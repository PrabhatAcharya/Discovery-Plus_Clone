    import { Search2Icon } from "@chakra-ui/icons";
    import {CloseIcon} from  "@chakra-ui/icons";
    import {Flex,Box,Spacer, Image,Input,InputGroup,InputRightElement, Center, Button, color} from "@chakra-ui/react";
    import {Link} from "react-router-dom"
    import "./homeCss/result.css"
    import { useState } from "react";
    export const Navbar= ({data}) => {

    let ss = JSON.parse(localStorage.getItem("s"));
    console.log(ss);
    const [filteredData,setFilteredData]=useState([]);
    const [wordEntered,setwordEntered]=useState("");
    const handleFilter=(event)=>{
        const searchWord=event.target.value;
        setwordEntered(searchWord)
        const newFilter=data.filter((value)=>{
            return value.title.toLowerCase().includes(searchWord.toLowerCase())
        });
        if(searchWord===""){
            setFilteredData([])
        }else{
            setFilteredData(newFilter)
        }
        
    } 
    
    const clearInput=()=>{
        setFilteredData([])
        setwordEntered("");
    }
    return (
         <>
       
            <Flex style={{position: "relative"}} bg="black" alignItems="center" h="60px"gap={7} justifyContent={"center"} p="20px" >
                <Box display="flex" gap={4} >
                
                <Image w="200px" alt="discovery Logo" src="https://www.discoveryplus.in/129c5de772422db12a69e397768bd8ec.png" />
         
          
             </Box>
             
             <Box  display="flex" gap={4} color="gray.200" maxw="300px" 
              font-family='Roboto-Regular, sans-serif'
              font-weight="700">
                <Link to="/" >Home</Link>
                <Link to="/explore">Explore</Link> 
                <Link to="/kids">Kids</Link>
                <Link to="/shorts">Shorts</Link>
                <Link to="/mindblown">Mindblown</Link> 
                <Link to="/premium">Premium</Link>
               
                </Box>
            <Spacer />
            <Center  >
                <InputGroup mr={5}>
                    <Input border="none" color="white"  placeholder="Search for a show, episode, shorts etc" w={'330px'} value={wordEntered} onChange={handleFilter} />
                    <InputRightElement pointerEvents='none' children={filteredData.length === 0 ? <Search2Icon color='gray.300' /> :<CloseIcon onClick={clearInput} color='gray.300' />} />
                    
                 
                 </InputGroup>
               

                <Link to="/signin"><Button border="1px solid" bg="black" color="white" m={3}> {!ss? "Sign In" : "My Account " } </Button></Link>
                <Link to="/signin"><Button border="none" bg="blue.500" color="white"> {"Buy Plan" } </Button></Link>
                
            </Center>
            {filteredData.length !=0 && (
                <div className="dataResult" >
                        {filteredData.map((value,key)=>{
                            return <Link to="/Shows_You_Love" style={{textDecoration:"none"}}><div className="dataItem" style={{border:"2px Solid black" ,color:"white"}} onClick={() => {
                                       localStorage.setItem("showYouLove", JSON.stringify(value))
                                       clearInput()}} >{value.title}</div></Link>
                        })}
                    </div>
                )}

         
            
           
           
                </Flex>
                
        </>
    );  
};
