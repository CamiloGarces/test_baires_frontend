import React, { useEffect, useState } from 'react'
import Twit from './Twit'
import dog_blue from './assets/dog_blue.svg'
import lod1 from './assets/lod1.svg'
import lod2 from './assets/lod2.svg'
import lod3 from './assets/lod3.svg'
import lod4 from './assets/lod4.svg'
import './auth.css'

function AuthSuccess(props){
    const [dataDB, setDataDB ] = useState([])
    const [dataTxt, setDataTxt ] = useState({})
    
    const handlerData = () => {
        const data = fetch('http://localhost:3000/api/data')
        .then(res => res.json())
        .then(result => setDataDB(result.tuits))
        return data
    }

    const handlerAuth = () => {
        const dataPost = fetch(`http://localhost:3000/api/data`, {method: 'POST', body: JSON.stringify({twit: dataTxt}), headers: {'content-type': 'application/json'}})
        .then(res => res.json())
        .then(result => setDataDB(result))
        return dataPost
    }

    const handleDelete = (id) => {
        const dataDelete = fetch(`http://localhost:3000/api/${id}`, {method: 'DELETE'})
        .then(res => res.json())
        .then(result => setDataDB(result))
        return dataDelete
    }

    useEffect(()=>{
        handlerData()
    },[])

    return (
        <div className="content-news">
             <div className="content-news-left">
                <div className="content-news-left-item ">
                    <div className="content-news-left-item-icon-blue">
                        <img className="content-news-left-logo-small" src={dog_blue} alt="" />
                    </div>
                    <div className="content-news-left-item-icon">
                        <img  className="content-news-left-logo-small-inside"  src={lod1} alt="" />
                    </div>
                    <div className="content-news-left-item-icon">
                    <img  className="content-news-left-logo-small-inside"  src={lod2} alt="" />
                    </div>
                    <div className="content-news-left-item-icon">
                    <img  className="content-news-left-logo-small-inside"  src={lod3} alt="" />
                    </div>
                    <div className="content-news-left-item-icon">
                    <img  className="content-news-left-logo-small-inside"  src={lod4} alt="" />
                    </div>
                    <div onClick={()=>{ 
                        props.exit()
                    }} className="content-news-left-item-icon content-color-exit">EXIT</div>
                    <div className="content-news-left-item-icon icon-last">9</div>
                </div>
             </div>
             <div className="content-news-center">
                <div className="content-news-center-box-text">
                    <div className="content-news-center-box-text-title">Hello</div>
                    <div className="content-news-center-box-text-avatar">
                    <div className="content-news-left-item-avatar"></div>
                    </div>
                    <div className="content-news-center-box-text-input">
                        <input className="content-input" placeholder='What happening' type="text"
                            onChange={
                                (e) =>{
                                    console.log(e.target.value)
                                    return setDataTxt(e.target.value)
                                }
                            }
                        />
                        <hr className="content-input-hr"/>
                        <div className="content-input-button-aling ">
                            <button className="content-input-button" onClick={handlerAuth}>Public...</button>
                        </div>
                    </div>
                </div>
                <div className="content-separator"></div>
                    {
                        dataDB.map(e =>{
                            return <li key={e.id}><Twit id={e.id} info={e.twit} onDelete={handleDelete}/></li>
                        })
                    }
             </div>
             <div className="content-news-right">
                <div className="content-news-right-search">Search</div>
                <div className="content-news-right-happen">
                    <div className="content-news-right-happen-title">What Happen</div>
                    {
                        dataDB.map(e =>{
                            return <div key={e.id} className="content-news-right-happen-list" >{e.twit}</div>
                        })
                    }
                </div>
             </div>
        </div>
    )
}

export default AuthSuccess