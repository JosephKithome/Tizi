import React from 'react'
import {Box, Button, TextField, Typography, Stack } from '@mui/material'
import { useState, useEffect } from 'react'
import { Search } from '@mui/icons-material'
import { exerciseOptions, fetchData } from '../utils/fetchData'

const SearchExercises = () => {

const [ searchTerm, setSearchterm ] = useState("")

const baseUrl = process.env.baseUrl
console.log(baseUrl)

const handleSearch =  async () =>{
    if(searchTerm){

        // fetchData from the Api

        const { data} = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

        console.log(data)
    }
}
  return (
    <Stack
    alignItems="center" mt="37px"
    justifyContent="center" p="20px">
        <Typography fontWeight={700}
        sx={{fontSize: {lg: '44px', xs: '30px'}}}
        mb="50px" textAlign='center'>
            Awesome Exercises You <br />
            Should Know 
        </Typography>
        <Box position='relative' mb='72px'>
            <TextField
            sx={{
                input: {fontWeight: '700',border: 'none', borderRadius: '10px'},
                width: {lg: "800px", xs: "350px"},
                backgroundColor: '#fff',
                borderRadius: '40px'
            }}
            height="76px"
            value={searchTerm}
            placeholder='Search for exercises'
            onChange={(e)=> setSearchterm(e.target.value.toLowerCase())}
            type='text'/>
            <Button  className='search-btn' 
            sx={{
                bgcolor: '#ff2526',
                color: '#fff',
                textTransform: 'none',
             
                fontSize: {lg: '20px', xs: '14px'},
                height: {lg: '56px', xs:"56px"},
                position: 'absolute',
                right: '0'

            }}
            onClick={handleSearch}><Search></Search></Button>

        </Box>
    </Stack>
  )
}

export default SearchExercises
