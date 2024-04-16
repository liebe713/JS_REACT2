import './App.css';
import Card from './component/card';

import React, { useState } from 'react';


export default function App() {

  const  [allData, setAllData] = useState([
    {
      id: 1,
      text: "Image",
      image: "https://images.unsplash.com/photo-1592743263126-bb241ee76ac7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJhbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      text: "Image",
      image: "https://plus.unsplash.com/premium_photo-1664360971475-d84469e7d7aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJhbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
    },
    { 
      id: 3,
      text: "Image",
      image: "https://images.unsplash.com/photo-1625558185597-a44138cce398?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJhbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 4,
      text: "Image",
      image: "https://images.unsplash.com/photo-1530543591690-29750de55028?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyYWwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
    },
    {
      id: 5,
      text: "Image",
      image: "https://images.unsplash.com/photo-1625239185060-88135bd3519b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyYWwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
    },
    {
      id: 6,
      text: "Image",
      image: "https://images.unsplash.com/photo-1628082878684-1b66400cdf85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyYWwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
    },
    {
      id: 7,
      text: "Image",
      image: "https://images.unsplash.com/photo-1604093882750-3ed498f3178b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5hdHVyYWwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
    },
    {
      id: 8,
      text: "Image",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyYWwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
    },
    {
      id: 9,
      text: "Image",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyYWwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
    },
    {
      id: 10,
      text: "Image",
      image: "https://images.unsplash.com/photo-1600073797414-7f200ffdde62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG5hdHVyYWwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
    },
    {
      id: 11,
      text: "Image",
      image: "https://images.unsplash.com/photo-1635316356744-7a5b8bbb8bc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG5hdHVyYWwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
    },
    {
      id: 12,
      text: "Image",
      image: "https://images.unsplash.com/photo-1526781100743-007e0dc2b474?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG5hdHVyYWwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
    },
  ])
  

  const  [allData2, setAllData2] = useState([
    {
      id: 1,
      text: "Picture1",
      image: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGFuaW1lfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      text: "Picture2",
      image: "https://images.unsplash.com/photo-1521133573892-e44906baee46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGFuaW1lfGVufDB8fDB8fHww",
    },
    { 
      id: 3,
      text: "Picture3",
      image: "https://images.unsplash.com/photo-1542272201-b1ca555f8505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGFuaW1lfGVufDB8fDB8fHww",
    },
    {
      id: 4,
      text: "Picture4",
      image: "https://images.unsplash.com/photo-1558865869-c93f6f8482af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGFuaW1lfGVufDB8fDB8fHww",
    },
    {
      id: 5,
      text: "Picture5",
      image: "https://images.unsplash.com/photo-1502759683299-cdcd6974244f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGFuaW1lfGVufDB8fDB8fHww",
    },
    {
      id: 6,
      text: "Picture6",
      image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGFuaW1lfGVufDB8fDB8fHww",
    },
    {
      id: 7,
      text: "Picture7",
      image: "https://images.unsplash.com/photo-1517315003714-a071486bd9ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGFuaW1lfGVufDB8fDB8fHww",
    },
    {
      id: 8,
      text: "Picture7",
      image: "https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxhbmltZXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ])
  

  return (

      <Card datav={allData} datav2={allData2}/>

  )
}