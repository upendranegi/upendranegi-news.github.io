import React, { Component } from 'react'
import './css/news.css'
export class Newitem extends Component {
  render() {
    let {title , description , newurl ,imgurl }=this.props;
    return (
      <>

<div className='news1'>
    <div className='imgbox'>
        <img  className='img' src={imgurl}  alt=""/>
    </div>
    <div className='content'>
        <h5 className='heading'>{title}</h5>
        <p className='description-data'>{description?description:"_ _ _ _ _ _ _"}</p>
        <button className='btn1' > <a className='readmore' rel="nofollow" target="_blank" href={newurl}>Read More</a></button>
    </div>
    
</div>
        

      </>
    )
  }
}

export default Newitem
