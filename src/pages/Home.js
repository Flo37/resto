import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import axios from 'axios';
import Container from '../components/Container';


const Home = () => {
    const [author,setAuthor]=useState('')
    const [comment,setComment]=useState('')
    const [error,setError]=useState(false)
    const SubmitHandl=(e)=>{
        e.preventDefault()
        if(comment.length < 5){
             setError(true)
        }else{
            axios.post('http://localhost:3000/blog',{
                author,
                comment,
                
            })
            getData()
            setError(false)
        }
    }

    const[blogData,setBlogData]=useState([])
    const getData=()=>{

        axios.get("http://localhost:3000/blog")
        .then((res)=>setBlogData(res.data))
    }
    useEffect(()=>getData(),[])
    return (
        <div className='home'>
            <Navigation/>
            <div className="container">
                <h1>Blog</h1>
                <form className='blog' onSubmit={(e)=>SubmitHandl(e)}>
                    <input type="text" placeholder='Name...' 
                    onChange={e=>setAuthor(e.target.value)}/>
                    <textarea placeholder='text...'
                    style={{outline:error ? '1px solid red':'1px solid  lightskyblue'}}
                    onChange={e=>setComment(e.target.value)}
                    ></textarea>
                    {error && <p>Low</p> }
                    <input type="submit" value="Submit" />
                </form>

                {blogData.map(content=>
        <ul>
             <Container key={content.id} content={content}/>

        </ul>
                )}
                </div>
        </div>
    );
};

export default Home;