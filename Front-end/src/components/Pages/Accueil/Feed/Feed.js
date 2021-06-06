import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './Feed.css';
import InputOptions from './InputOptions/InputOptions';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import DescriptionIcon from '@material-ui/icons/Description';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import Post from './Post/Post';
/* import {db} from './firebase/firebase' */
import firebase from 'firebase'


//add by me
 const firebaseConfig = {
    apiKey: "AIzaSyDU5UQbDp1HEEzDUUgyWDNleXSqA9OCLIU",
    authDomain: "plateforme-des-chercheurs-demo.firebaseapp.com",
    
    projectId: "plateforme-des-chercheurs-demo",
    storageBucket: "plateforme-des-chercheurs-demo.appspot.com",
    messagingSenderId: "977072052019",
    appId: "1:977072052019:web:245879e6f73c7354bad046"
  };
  // Initialize Firebase
//firebase.initializeApp(firebaseConfig);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

  
const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

const Feed = () => {
    const classes = useStyles();
    const [input, setInput ] = useState('');
    const [post, setPosts ] = useState([]);

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
            name: 'Nom Chercheur',
            description: 'Etablissement',
            message: input, 
            photoUrl: 'https://image.freepik.com/free-vector/new-post-neon-sign-template_77399-531.jpg',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput("")
    };

    return(
        <div className="feed " >
            <div className="feed_input" >
                <div className="input" >
                    <i className="fas fa-edit"></i>
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
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
                    </form>
                </div>
                <div className="input_options" >
                    <InputOptions Icon={PhotoCameraIcon} title="Photo" color="blue" />
                    <InputOptions Icon={VideoCallIcon} title="Video" color="blue" />
                    <InputOptions Icon={DescriptionIcon} title="Articles" color="blue" />
                    <InputOptions Icon={LiveHelpIcon} title="Question" color="blue" />

                </div>
            </div>

            {post.map(({ id, data:{ name, description, message, photoUrl}}) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
             
        </div>
    );
};


export default Feed;
