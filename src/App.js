
import './App.css';
import React, { Component } from 'react';
import {useRef ,useState} from 'react';
import FileList from './components/FileList';
import { faFile, faFolder } from '@fortawesome/free-solid-svg-icons';


function App(){
  const files=[{
    id:1,
    type:'file',
    name:'README',
    commit:{
      message:"Initial commit"
    },
    updated_at:"2018-07-11 19:00:00"
  },
  {
    id:2,
    type:'file',
    name:'index.html',
    commit:{
      message:"Initial commit"
    },
    updated_at:"2015-04-13 21:15:00"
  },
  {
    id:3,
    type:'file',
    name:'index.css',
    commit:{
      message:"Initial commit"
    },
    updated_at:"2011-09-08 20:10:13"
  },
  {
    id:4,
    type:'folder',
    name:'src',
    commit:{
      message:"Initial commit"
    },
    updated_at:"2021-03-12 16:30:00"
  },
  {
    id:5,
    type:'folder',
    name:'public',
    commit:{
      message:"Initial commit"
    },
    updated_at:"2021-04-18"
  }
]
const repo={
  author:'john-doe',
  repo_name:'sample'
}
  return (
    <div className="App">
     <div className="header">{repo.author}/{repo.repo_name}</div>
<FileList files={files}/>

    </div>


  );

  }
export default App;
