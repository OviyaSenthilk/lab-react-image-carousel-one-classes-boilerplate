
class Carousel extends Component {

  constructor(){
    super();
    this.state={
     id:0
    };
  }
  next(){

    this.setState=({
        id:this.setState.id===images.length-1?0:this.state.id+1
    },()=>{
        console.log(this.state.id)
    })
  }
prev(){
    this.setState=({
        id:this.setState.id===0?0:this.state.id-1
    },()=>{
        console.log(this.state.id)
    })
}

  render(){
    const {items}=this.props;
    return(
        <div className="slide">
            <button className="Arrow" onClick={()=>this.prev()}><ArrowBackIosIcon></ArrowBackIosIcon></button>
            <div className="data" id="title">{items[this.state.id].title}</div>
            <img className="data" src={images[this.state.id].img}/>
            <div className="data" id="subtitle">{items[this.state.id].subtitle}</div>
            <button className="Arrow" onClick={()=>this.next()}><ArrowForwardIosIcon></ArrowForwardIosIcon></button>
        </div>
    )
  }
}

export default Carousel;