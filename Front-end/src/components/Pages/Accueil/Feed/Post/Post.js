import { Avatar } from '@material-ui/core'
import React from 'react'
import InputOptions from '../InputOptions/InputOptions'
import './Post.css'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import InsertCommentIcon from '@material-ui/icons/InsertComment';


function Post( {name, description, message, photoUrl}) {
    return (
        <div className="post">
            <div className="post_header">
                <Avatar/>
                <div className="post_info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post_body">
                <p>{message}</p>
            </div>
            
            <div className="post_image">
            <img src={photoUrl} alt="POST_PHOTO"></img>

            {photoUrl && (
                <div>
                </div>
            )}

            </div>
            <div className="post_buttons">
                <InputOptions Icon={ThumbUpAltIcon} title="Like" color="blue"  />
                <InputOptions Icon={InsertCommentIcon} title="Comment" color="green"  />
            </div>
        </div>
    )
}

export default Post
