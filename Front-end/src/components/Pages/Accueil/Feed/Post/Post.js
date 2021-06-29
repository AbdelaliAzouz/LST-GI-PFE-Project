import { Avatar } from '@material-ui/core'
import InputOptions from '../InputOptions/InputOptions'
import './Post.css'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import TextareaAutosize from 'react-textarea-autosize';

function Post( {name, description, message, postImage}) {

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
               <TextareaAutosize
               readOnly
               rows={4}
               defaultValue={message}
               />
           </div>
            
            <div className="post_image">

            {postImage && (
                <div className="relative">
                    <img src={postImage} alt="POST_PHOTO" objectFit='cover' layout='fill'></img>
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


/* import { Avatar } from '@material-ui/core'
import InputOptions from '../InputOptions/InputOptions'
import './Post.css'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import TextareaAutosize from 'react-textarea-autosize';

function Post( {name, description, message, postImage}) {

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
               <TextareaAutosize
               readOnly
               rows={4}
               defaultValue={message}
               />
           </div>
            
            <div className="post_image">

            {postImage && (
                <div className="relative">
                    <img src={postImage} alt="POST_PHOTO" objectFit='cover' layout='fill'></img>
                </div>
            )}

            </div>
            <div className="post_buttons">
                <InputOptions Icon={InsertCommentIcon} title="Comment" color="green"  />
            </div>
        </div>
    )
}

export default Post
 */