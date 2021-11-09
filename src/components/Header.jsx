import {Link, Redirect } from "react-router";
import styled from "styled-components";
import spotify from "../img/Spotify_App_Logo.svg.png";
import React,{ useEffect, useState } from "react";
import axios from "axios";

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #000000;
    width: 1200px;
    border-radius:9px;
    align-items: center;
`

const HeaderImg = styled.div`
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100px;
    height: 100px;
    margin-right: 20px;
` 

const HeaderTitle = styled.h2`
    color: white;
    margin-right: 30px;
`

const SearchNav = styled.div`
    color: white;
    &:hover{
        transform: scale(1.08);
    }
`

const SearchBar = styled.form`
    margin-left: 10px;
    border: 1px solid;
    border-radius: 25px;
    visibility: ${props=>props.vis?"block":"hidden"};
`

const SearchInput = styled.input.attrs({ placeholder: "아티스트,곡,팟캐스트" })`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border:1px solid ;
    border-radius: 8px;
    height: 27px;
    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px red;
    }
`

const Header = (props) =>{
    const {song} = props;
    const [toggle,setToggle] = useState(false);
    const [search,setSearch] = useState("");

    const onToggleClick = ()=>{
        setToggle((current)=>!current);
    }

    const onSearchChange = (e) =>{
        setSearch(e.target.value);
    }

    const onSongSumbit = (e) =>{
        e.preventDefault();
        let maxLen = 0;
        const tempArr = [];
        axios.get(`karaoke/search?singer=${search}`).then(({data:{data}})=>{
            for(var i=0; i<data.length; i++){
                if(i>=100)break;
                tempArr.push(data[i])
            }
            props.setSong(tempArr)
        })
        setSearch("");
    }

    return(
    <HeaderContainer>
        <HeaderImg img={spotify}/>
        <HeaderTitle>Spotify</HeaderTitle>
        <SearchNav onClick={onToggleClick}>검색하기</SearchNav>
        <SearchBar onSubmit={onSongSumbit} vis={toggle} >
            <SearchInput value={search} onChange={onSearchChange}/>
        </SearchBar>
    </HeaderContainer>
    )
}

export default Header;