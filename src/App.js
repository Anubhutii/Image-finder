import React, {useState, useEffect} from 'react';


import NavBar from './components/NavBar';
import SearchRes from './components/SearchRes';
import Images from './components/Images';
import {card, cardMedia, Grid, TextField} from "@mui/material"
import Snackbar from './components/SnackBar';
import {getImages} from './services/api';

function App() {

  //capture data
  const [data,setData] = useState([]);


  const [text, setText] = useState('');
  const [count, setCount] = useState(5);
  const [open, setOpen] = useState(false);

  useEffect(()=>{
    if(count <3 || count >200){
      setOpen(true);
      return;
    }
    setOpen(false);

    const getData = async () => {
      const res = await getImages(text, count);
      setData(res.data.hits);
    }
    getData();
    
  },[text,count])

  return (
    <div className='App'>
      <NavBar />
      <SearchRes setText={setText} setCount = {setCount}  />
      <Images data= {data}/>
      <Snackbar open ={open} setOpen={setOpen} />
      
    </div>
  );
}

export default App;
