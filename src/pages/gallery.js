import React, { Component } from "react";
import style from "../css/gallery.module.css"
import img1 from "../img/b1.JPG"
import img2 from "../img/b2.jpg"
import img3 from "../img/b3.jpg"
import img4 from "../img/b4.jpg"
import img5 from "../img/b5.jpg"
import img6 from "../img/b6.jpg"
import img7 from "../img/b7.png"
import FadeLoader from "react-spinners/FadeLoader";
import { url, user } from '../host/Host'
import axios from 'axios'
import { Col, Container, Row } from "react-bootstrap";
export default class Gallery extends Component{
state={
       school:[],
       loader:true,    
}
getSchool=()=>{
       axios.get(`${url}/school-by-admin/${user}`).then(res=>{
           this.setState({
               school:res.data,
         loader:false,
           })
           console.log(res.data)
       }).catch(err=>{console.log(err) })
       
   }

   componentDidMount(){
  
       this.getSchool()
     
   }
render(){
    
return(<div>
       {
              this.state.loader?<div className="loaderT">
          <FadeLoader
          
           color='blue' loading={this.state.loader} size={120} />        
          
              </div>:
    <div className={style.mat}>
          <br/>
        <div className={style.header}>
               <img src={this.state.school!==null?this.state.school.foto!==null?this.state.school.foto:img1:img1} style={{width:'100%',height:'100%'}}/>
        <div className={style.sarlavha}>
        <h2 >Bizning Fotogalareya</h2>
            <h1>Maktabimiz hayotidan fotolavhalar</h1>    
    </div>
        </div>
      
       <Container>
        <Row>
        <Col lg={6} md={6} cm={12}>
        <div class={style.imagewrapper} >
  <img class={style.image1} src={this.state.school!==null?this.state.school.foto1!==null?this.state.school.foto1:img2:img2}  />
  <img class={style.image2} src={this.state.school!==null?this.state.school.foto1!==null?this.state.school.foto1:img2:img2}  />
  <img class={style.image3} src={this.state.school!==null?this.state.school.foto1!==null?this.state.school.foto1:img2:img2}  />
  <img class={style.image4} src={this.state.school!==null?this.state.school.foto1!==null?this.state.school.foto1:img2:img2}  />
</div>         </Col>
                      <Col lg={6} md={6} cm={12}>
                      <div class={style.imagewrapper} >
  <img class={style.image1} src={this.state.school!==null?this.state.school.foto2!==null?this.state.school.foto2:img3:img3}  />
  <img class={style.image2} src={this.state.school!==null?this.state.school.foto2!==null?this.state.school.foto2:img3:img3}  />
  <img class={style.image3} src={this.state.school!==null?this.state.school.foto2!==null?this.state.school.foto2:img3:img3}  />
  <img class={style.image4} src={this.state.school!==null?this.state.school.foto2!==null?this.state.school.foto2:img3:img3}  />
</div>    
                      
               </Col>
               <Col lg={6} md={6} cm={12}>
               <div class={style.imagewrapper} >
  <img class={style.image1} src={this.state.school!==null?this.state.school.foto3!==null?this.state.school.foto3:img4:img4}  />
  <img class={style.image2} src={this.state.school!==null?this.state.school.foto3!==null?this.state.school.foto3:img4:img4}  />
  <img class={style.image3} src={this.state.school!==null?this.state.school.foto3!==null?this.state.school.foto3:img4:img4}  />
  <img class={style.image4} src={this.state.school!==null?this.state.school.foto3!==null?this.state.school.foto3:img4:img4}  />
</div>    
                      
               </Col>
               <Col lg={6} md={6} cm={12}>
               <div class={style.imagewrapper} >
  <img class={style.image1} src={this.state.school!==null?this.state.school.foto4!==null?this.state.school.foto4:img5:img5}  />
  <img class={style.image2} src={this.state.school!==null?this.state.school.foto4!==null?this.state.school.foto4:img5:img5}  />
  <img class={style.image3} src={this.state.school!==null?this.state.school.foto4!==null?this.state.school.foto4:img5:img5}  />
  <img class={style.image4} src={this.state.school!==null?this.state.school.foto4!==null?this.state.school.foto4:img5:img5}  />
</div>         
               </Col>
               <Col lg={6} md={6} cm={12}>
               <div class={style.imagewrapper} >
  <img class={style.image1} src={this.state.school!==null?this.state.school.foto4!==null?this.state.school.foto4:img6:img6}  />
  <img class={style.image2} src={this.state.school!==null?this.state.school.foto4!==null?this.state.school.foto4:img6:img6}  />
  <img class={style.image3} src={this.state.school!==null?this.state.school.foto4!==null?this.state.school.foto4:img6:img6}  />
  <img class={style.image4} src={this.state.school!==null?this.state.school.foto4!==null?this.state.school.foto4:img6:img6}  />
</div>          
               </Col>
               <Col lg={6} md={12} cm={12}>
               <div class={style.imagewrapper} >
  <img class={style.image1} src={this.state.school!==null?this.state.school.foto5!==null?this.state.school.foto5:img6:img6}  />
  <img class={style.image2} src={this.state.school!==null?this.state.school.foto5!==null?this.state.school.foto5:img6:img6}  />
  <img class={style.image3} src={this.state.school!==null?this.state.school.foto5!==null?this.state.school.foto5:img6:img6}  />
  <img class={style.image4} src={this.state.school!==null?this.state.school.foto5!==null?this.state.school.foto5:img6:img6}  />
</div>    
                      
               </Col>
        </Row>
        </Container>
        
        
        
        
        
       
    </div>}</div>    
)
}
}