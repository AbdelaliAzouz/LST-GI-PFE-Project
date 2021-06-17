/* import { Component, useState } from "react";
import './ProfilePic.css'

export class ProfilePic extends Component {
    state = {
      profileImg:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    };
    imageHandler = e => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          this.setState({ profileImg: reader.result });
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    };
    render() {
      const { profileImg } = this.state;
      return (
        <div className="page">
          <div className="containerr">
            <div className="img-holder">
              <img src={profileImg} alt="" id="img" className="imgg" />
            </div>
            <input
              type="file"
              accept="image/*"
              name="image-upload"
              id="input"
              onChange={this.imageHandler}
            />
            <div className="labell">
              <label className="image-upload" htmlFor="input">
                <i className="material-icons"></i>
                Choisir votre photo 
              </label>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default ProfilePic; */

  import { useState, useRef } from "react";
import { storage } from "../Firebase/FirebaseConfig";
import './ProfilePic.css'

const ProfilePic = () => {

  const filepickerRefe = useRef(null); 

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url);
          });
      }
    );
  };

  console.log("image: ", image);

  return (
    <div>
      <img id="img" className="imgg" src={url || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} alt="firebase-image" />
      <br />
      <br />
      <div onClick={() => filepickerRefe.current.click()} className="inputIcon">
       <button>Choisir une photo</button>
       <input ref={filepickerRefe} type="file" onChange={handleChange} hidden/>
          </div>
      <button onClick={handleUpload}>Upload</button>
      <br />
      <progress value={progress} max="100" />
      <br />
          
    </div>
  );
};

export default ProfilePic;