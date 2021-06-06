import React from 'react'
import axios from 'axios'


class Articles extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        articles : [
                {

                }
        ]           
      };
    }

  
    getArticles = () => {
        /* axios.get('https://jsonplaceholder.typicode.com/posts') */ 
        /* axios.get('https://www.breakingbadapi.com/api/characters') */ 
        axios.get('https://serpapi.com/search?engine=google_scholar_author') 
        .then(Response => {
                console.log(Response)
        })
    }

    componentDidMount() {
      this.getArticles();
    }
  
    render() {
      return <div>{this.state.message}</div>;
    }
  }

export default Articles;