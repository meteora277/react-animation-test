import React, { useState } from 'react';
import styled, { css } from 'styled-components';


const Expand = styled.div`
    width:100px;
    height:100px;
    background: black;
    color: white;
    display:grid;
    place-items:center;
    margin: 0 auto;
    transform: rotate(0deg);
    transition: transform .2s ease-out;
    ${ props => {
        console.log("uwu", props)
        return (props.expanded === true && css`
        transform: translateY(400px);
      `)
    }}
  p{color:white;}
`

function Uwu(){

    function handleClick(){

        setRotated(!rotated)

    }

    const [rotated, setRotated] = useState(false)

    return(

    <div>
        <button onClick={handleClick}>Uwu</button>

        <Expand expanded={rotated}>Uwu</Expand>
    </div>
    )
    }
export default Uwu