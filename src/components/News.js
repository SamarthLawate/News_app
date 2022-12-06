import React, { Component } from 'react';
import NewsItem from '../NewsItem';

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    }

  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=288f3f383d624b79bd74622581cc0e39&page=1";
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData);
    this.setState({articles: parseData.articles})
  }

prevbutton = async ()=>{
  console.log("prev");
  console.log("next");
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=288f3f383d624b79bd74622581cc0e39&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData);
    this.setState({articles: parseData.articles})
  this.setState({
    page: this.state.page - 1,
    articles: parseData.articles
  })
}
nextbutton = async () =>{
  console.log("next");
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=288f3f383d624b79bd74622581cc0e39&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData);
    this.setState({articles: parseData.articles})
  this.setState({
    page: this.state.page + 1,
    articles: parseData.articles
  })
}

  render() {
    return (
      <>
      <div className="container my-5">
        <h2 className="text-center" >NewsGetWay - Top Headlines</h2>
        <div className="row" >
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url} >
              <NewsItem title={element.title} discription={element.description} imageUrl={element.urlToImage} url={element.url} />
            </div>
        })}
        
      </div>
      <div className= "container d-flex justify-content-around">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.prevbutton}>&larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.nextbutton}>Next &rarr;</button>
        </div>
      </div>
       
        </>
    );
  }
}

export default News;
