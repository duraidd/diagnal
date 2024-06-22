import { Stack, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import APIClient from '../Contanst/APIClient'
import axios from 'axios'
import styled from '@emotion/styled';

const Root = styled('div')(({ theme }) => ({
  width: "280px",
  height: "360px",
  borderRadius: "15px",
  padding: "1.5rem",
  background: "white",
  position: "relative",
  display: "flex",
  alignItems: "flex-end",
  transition: `0.4s ease-out`,
  boxShadow: `0px 7px 10px rgba(black, 0.5)`,
  "&:hover": {
    transform: `translateY(0px)`,
    "&:before": { opacity: 1 },

    ".info": {
      opacity: 1,
      transform: `translateY(0px)`
    }

  },

  "&:before": {
    position: "absolute",
    top: 0,
    left: 0,
    display: "block",
    width: "100%",
    height: "100%",
    borderRadius: "15px",
    background: "rgba(black, 0.6)",
    zIndex: 2,
    transition: "0.5s",
    opacity: 0
  },

  ".img": {

    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: "15px"

  },

  ".info": {
    position: "relative",
    zIndex: 2,
    color: "white",
    opacity: 1,
    transform: "translateY(0px)",
    transition: "0.5s",
    ".h1": { margin: "0px", backgroundColor: 'grey', padding: '0px 10px 0px 10px', borderRadius: '8px' },

    ".p": {
      letterSpacing: "1px",
      fontSize: "15px",
      marginTop: "8px"
    }


  }



}));







function Display() {

  const [data, setdata] = useState([])
  const [pageTitle, setpageTitle] = useState("")




  useEffect(() => {

    axios.get(APIClient.API_BASE_URL).then((result) => {
      setpageTitle(result.data.page.title)
      setdata(result.data.page["content-items"].content)

    })
  }, [])



  data.push({
    "name": "Loading....",
    "poster-image": "placeholder_for_missing_posters.png"
  })

  console.log(data)



  return (
    <>
      <div style={{  // Add this line
        position: 'fixed',
        width: '100vw', // Add this line to set the width to full viewport width
        textAlign: 'center',
        zIndex: 3,
        marginTop: 0,
        backgroundColor: " #171717"
      }}>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }} >
          <img style={{ height: '25px', width: '25px', marginLeft: "10px" }} src='https://test.create.diagnal.com/images/Back.png' />
          <h1 style={{ color: 'white', marginLeft: "10px" }}>{pageTitle}</h1>
          <img src='https://test.create.diagnal.com/images/search.png' /></div>
      </div>
      <div>
        < Stack gap="50px" justifyContent="center" alignItems="flex-start" padding="100px 0px 20px 0px" direction="row" flexWrap="wrap" backgroundColor="#171717" >
          {data.map((txt, i) => (
            <Root>
              <img className='img' src={`https://test.create.diagnal.com/images/${txt['poster-image']}`} />
              <div className='info' >
                <Typography className='h1'>{txt.name}</Typography>
                {/* <Typography className='p'>{txt.title}</Typography> */}
              </div>


            </Root>
          ))}
        </Stack>
      </div>
    </>
  )
}

export default Display