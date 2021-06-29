import React, { useState, useEffect,component, useRef } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './Feed.css';
import InputOptions from './InputOptions/InputOptions';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import DescriptionIcon from '@material-ui/icons/Description';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import Post from './Post/Post';
import { db, storage } from '../../../Firebase/FirebaseConfig' 
import firebase from 'firebase'
import Axios from 'axios'
import TextareaAutosize from 'react-textarea-autosize';
import { useCollection } from "react-firebase-hooks/firestore";


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  }));




const Feed = () => {

    const [realtimePosts] = useCollection(
        db.collection('posts').orderBy('timestamp', 'desc')
    );
    

    const classes = useStyles();

    const [input, setInput ] = useState('');
    const [post, setPosts ] = useState([]);

    const [ userLastName, setUserLastName ] = useState("")
    const [ userFirstName, setFirstName ] = useState("")
    const [ userEtablissement, setUserEtablissement ] = useState("")

    const filepickerRef = useRef(null); 
    const [imageToPost, setImageToPost] = useState(null)
 
    Axios.defaults.withCredentials = true;

  useEffect(() => {
      Axios.get("http://localhost:3001/login").then((response) => {
          setUserLastName(response.data.user[0].nom)
          setFirstName(response.data.user[0].prenom)
          setUserEtablissement(response.data.user[0].etablissement)
      })
  }
, [])

    useEffect(() => {
        db.collection("posts")
          .orderBy('timestamp','desc')
          .onSnapshot((snapshot) => 
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
            }))
            )
        );
    }, []);

    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name: userFirstName + ' ' + userLastName,
            description: userEtablissement,
            message: input, 
            postImage: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(doc => {
            if (imageToPost) {
                const uploadTask = storage.ref(`posts/${doc.id}`).putString(imageToPost,
                    'data_url')

                    removeImage();

                    uploadTask.on('state_changed', null, error => console.error(error), () => {
                        storage
                        .ref('posts')
                        .child(doc.id)
                        .getDownloadURL()
                        .then(url => {
                            db.collection('posts').doc(doc.id).set({
                                postImage: url
                            },{ merge: true })
                        })
                    })
            }
        })

        setInput("")
    };

    const addImageToPost = (e) =>{
        const reader = new FileReader();
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
        }
        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result)
        };
    };

    const removeImage = () => {
        setImageToPost(null);
    }

    return(
        <div className="feed " >
            <div className="feed_input" >
                <div className="input" >
                    <i className="fas fa-edit"></i>
                    <form>
                       {/*  <textarea value={input} onChange={e => setInput(e.target.value)} /> */}
                       <TextareaAutosize
                       value={input}
                       onChange={e => setInput(e.target.value)}
                        rows={24}
                        />
                         {imageToPost && (
                        <div onClick={removeImage} className="imagePreview">
                            <img className="h-10 object-contain" src={imageToPost} alt=""></img>
                            <p>remove</p>
                        </div>
                    )}
                        <span>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            endIcon={<i className="fas fa-paper-plane"></i>}
                            type='submit'
                            onClick={sendPost}
                        >
                            POST
                        </Button>
                        </span>
                    </form>
                   
                </div>
                <div className="input_options" >
                    <div onClick={() => filepickerRef.current.click()} className="inputIcon">
                    <InputOptions Icon={PhotoCameraIcon} title="Photo" color="blue" />
                    <input ref={filepickerRef} onChange={addImageToPost} type="file" hidden></input>
                    </div>
                    <div onClick={() => filepickerRef.current.click()} className="inputIcon">
                    <InputOptions Icon={VideoCallIcon} title="Video" color="blue" />
                    <input ref={filepickerRef} onChange={addImageToPost} type="file" hidden></input>
                    </div>
                    <div onClick={() => filepickerRef.current.click()} className="inputIcon">
                    <InputOptions Icon={DescriptionIcon} title="Fichier" color="blue" />
                    <input ref={filepickerRef} onChange={addImageToPost} type="file" hidden></input>
                    </div>

                </div>
            </div>

            {post.map(({ id, data:{ name, description, message, postImage}}) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    postImage={postImage}
                    /* photoUrl */
                />
            ))}
             
        </div>
    );
};


export default Feed;
