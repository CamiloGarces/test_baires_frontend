import React from 'react'

function Twit(props){
 
    return (
        <div className="content-news-center-post">
            <div className="content-news-center-box-text-avatar content-avatar-height">
                <div className="content-news-left-item-avatar">2</div>
            </div>
            <div className="content-news-left-item-post">
                <div className="content-news-left-item-post-message">
                   {props.info}
                </div>
                <div className="content-news-left-buttons">
                    <button className="button-item-post-delete" onClick={()=>{
                        props.onDelete(props.id)
                    }}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Twit