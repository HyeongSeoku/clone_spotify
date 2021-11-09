import React, { useEffect,useState } from "react";
import { Router,Route,Link } from "react-router";
import styled from "styled-components";
import Header from "../components/Header";
import Content from "../components/Content";
import axios from "axios";

const HomeContainer = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    background-color: #121212;
`

const ContentsContainer = styled.ul`
    list-style: none;
    padding: 0;
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(5,1fr);
    grid-template-rows: repeat(6,1fr);

`



const Home = () => {
    const [data,setData] = useState([{id:1,name:"rla"},{id:2,name:"dl"}])
    useEffect(()=>{
        console.log(data)
    },[data])
    return(<HomeContainer>
    <Header song={data} setSong={setData} />
    <ContentsContainer>
        {
            data.map((item,idx)=><Content key={idx} data={item}/>)
        }
        
    </ContentsContainer>
    </HomeContainer>)
}

export default Home;