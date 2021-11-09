import React from "react";
import {Link } from "react-router";
import styled from "styled-components";
import spotify from "../img/Spotify_App_Logo.svg.png";
import defaultImg from "../img/defaultImg.png";

const ContentContainer = styled.li`
    text-decoration: none;
`

const ContentBox = styled.div`
    border: 1px solid;
    border-radius: 5px;
    width: 180px;
    height: 220px;
    margin: 5px 10px 10px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: #282828;
    &:hover{
        transform: scale(1.07);
        background-color: rgba(40, 40, 40,0.1);
    }
`

const ContentImg = styled.img.attrs(props => ({
    src: props.Img || defaultImg,
  }))`
    width:120px;
`
const ContentTitle = styled.div`
    font-weight: 700;
    color: white;
    font-size: 24px;
`
const ContentSinger = styled.div`
    font-weight: 400;
    font-size: 16px;
    color: #999999;
    
`

const Content = (props) =>{
    const {singer,title} = props.data
    return(
    <ContentContainer>
        <ContentBox>
            <ContentImg />
            <ContentTitle>{title}</ContentTitle>
            <ContentSinger>{singer}</ContentSinger>
        </ContentBox>
    </ContentContainer>
    )
}

export default Content;