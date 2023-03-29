import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "./css/news1.css";
import Newitem from './Newitem';
import { motion } from "framer-motion"

export class News extends Component {
  

  static propTypes ={
    category:PropTypes.string,
    pagesize:PropTypes.number,
  } 

  constructor() {


    super();
    
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }


  async componentDidMount() {
    
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=caecb26802064827a2bdaaeb3da6a60a&page=1&pageSize=${this.props.pagesize}`;;
    this.props.setp(0);
    let data = await fetch(url);
    this.props.setp(30);
    console.log(data)
    let pardata = await data.json()
    this.props.setp(50);
    console.log(pardata)
    this.setState({ articles: pardata.articles, totalResults:pardata.totalResults })
    this.props.setp(100);
  }


  // previous button
  previous = async () => {
    // previous button
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=caecb26802064827a2bdaaeb3da6a60a&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`;
    let data = await fetch(url);
    console.log(data)
    let pardata = await data.json()

    this.setState({
      page: this.state.page - 1,
      articles: pardata.articles
    })


  }

  // next button
  Nextclick = async () => {

if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)){

}
else{
  let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=caecb26802064827a2bdaaeb3da6a60a&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`
  let data = await fetch(url);
  console.log(data)
  let pardata = await data.json()
  this.setState({
    page: this.state.page + 1,
    articles: pardata.articles
  })
}



  }
  render() {

    return (
      <>
      <motion.h2
       inherit={{x:'-150vw'}}
       animate={{x:'50vw'}}
       transition={{   delay:0.5}}
      className='heading12'>{this.props.heading}</motion.h2>
        <div className='row'>
          {this.state.articles.map((element) => {
            return <div className='deta1' key={element.url}>
              <Newitem title={element.title} description={element.description} imgurl={element.urlToImage}
                newurl={element.url} />
            </div>

          })}



        </div>
        <div className='prenextbtn'>
          <div className='btn12'>
          <button disabled={this.state.page <= 1} className='previousbtn' onClick={this.previous} type="button">&larr; Previous</button>
          </div>
          <div className='btn1234'>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)} className='nextbtn' onClick={this.Nextclick} type="button">Next &rarr;</button>
 
          </div>
                 </div>

      </>
    )
  }
}

export default News
