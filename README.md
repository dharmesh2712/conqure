
*{
    margin: 0px;
    padding: 0px;
 }
 body{ 
         /* font-family: 'Cairo', sans-serif; */
         font-family: 'Varela Round', sans-serif;
}
html{
         scroll-behavior: smooth;
}
.container{
         position: relative;
         /* top: -70px; */
         background-color: blanchedalmond;
}
.para{

        /* background-image: linear-gradient(to bottom , rgba(52, 17, 180, 0.52) , rgba(239, 245, 247, 0.73)), url("/conquer/img/1-2.jpg") ; */
        background-image:linear-gradient(to bottom , rgba(230, 228, 240, 0.219) , rgba(43, 44, 44, 0.73)) ,url('ddp-EX3gFC6eP4c-unsplash.jpg'); 
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        /* background: linear-gradient(rgb(158, 21, 212),rgb(247, 5, 5)); */
        height: 83.5vh;
        font-size: 2rem;
        /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */  

}
.nav {   
        
        list-style: none;
          display: flex;
          align-items: center; 
         justify-content: flex-start; 
         position: sticky;
         top: 0px;
         background-color: rgb(185, 184, 181);
        opacity: 0.9;
        z-index: 1;
        font-weight: 900;
        transition: all 1s ease-out;

        }
        
.nav_left{
        width: 80%;  
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        /* margin: 10px 0px; */
        opacity: 0.8;
}       
.img{        
             /* position: relative; */
             display: flex;
             justify-content: flex-start;
             height:auto;
             align-items: center;
             width: 20%;
             
} 
 .img img{
              position: relative;
               top: 0px;  
               width: 35%;
               height: auto;
               margin: auto 30px;
               filter: contrast(150%);
               border-radius: 50%;     
               z-index: 1;
         }

.nav li { 
          font-size: 1.6rem;
          width: 15%;   
          margin: 10px 0px;
          text-align: center;
        
}
.nav li:hover{
                 font-size: 1.8rem;
                 cursor: pointer;                  
                }
.nav_right{
            top: 0px;
            text-align: right;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0.9;
}
.nav_right input{ 
        
        padding: 5px;
        border-radius: 50px;
        border: 2px solid rgb(48, 47, 47);
}
.nav_right input:hover {
             
        background: lightgrey;
        cursor: zoom-out;
} 
.nav_right button {
        border: 2px solid rgb(48, 47, 47);  
        margin: 20px;
        padding: 3px  6px;
        border-radius: 40px;
 
}
.nav_right button:hover{
            
        background-color: lightgrey;
        cursor: pointer;

}
.heading{ 
           position: relative;
           display: flex;
           flex-direction: column;
           justify-content: flex-end;
           align-items: center;
           height: 50%;
           width: auto;
}
.heading h1{ 
        
          font-size: 6rem;    
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          font-weight: 900;
          color: gray;
          mix-blend-mode: screen;
          opacity: 0.9;
          z-index: 2;
}
.heading h2{
            
         font-size: 2rem;
         mix-blend-mode: screen;
         color: gray;
         opacity: 0.9;
}
.img2{
         position:absolute;
         top: 0px;
         width: 100%;
         height: 83.5vh;
         display: flex;
         align-items: flex-end;

        }
.img2 img{
          /* position:absolute; */
          top: 75%;
          width: 100%;
          height: 18vh;
          /* z-index: ; */
          
}
                   
h1 , p {
        margin: 20px 0px;  

 }
.container2{
        
        z-index: 1;
        height: 60vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgb(236, 216, 186);
        /* z-index: 2; */
         /* font-family: 'Oswald', sans-serif; */
}

.container2 h1{
         
         font-size: 2rem;
         text-align: center;
        
}
.container2 p {
         font-size: 1.5rem;
         text-align: center;
}

.container2 button{
          
         padding: 10px 10px;
         font-weight: 700;
         font-size: 1rem;
         border: 2px solid black;
         border-radius: 50px;

}
.container2 button:hover{
         cursor: pointer;
         background-color:rgb(221, 221, 221);
}
.para2{
        display: flex;
        justify-content: center;
        margin: 30px 70px;
        width: auto;


}
.box{
       width: 33.3333%; 
       display: flex;
       flex-direction: column;
       margin: 30px 30px;
       background-color: #F2F2F2;
       /* width: auto; */
}
.feature{
padding: 20px 20px;
display: flex;
flex-direction: column;
align-items: center;
}
.feature button{
        
       padding: 10px 40px;
       font-size: 1rem;
       color: white;
       border-radius: 10px;
       
}
.red button{
       background-color: red;
       border: 1px solid red; 
}
.green button{
        
       background-color: green;
       border: 1px solid green;
}
.blue button{
        background-color: blue;
        border: 1px solid blue;
}
.red button:hover{
       background-color: rgb(245, 43, 43);
       cursor: pointer;
       
}
.green button:hover{
        
       background-color: rgb(58, 121, 58);
       cursor: pointer;
}
.blue button:hover{
        background-color: rgb(58, 58, 245);
        cursor: pointer;
}
.para3{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 40px 40px;
}
.box2{
        width: 50%;
        display: flex;
       flex-direction: column;
       margin: 30px 30px;
       background-color: #F2F2F2;
       /* width: auto; */
}
.feature2{
       padding: 20px 20px;
       display: flex;
       flex-direction: column;
       align-items: center;
}
.feature2 button{
        margin: 20px;
       padding: 10px 40px;
       font-size: 1.2rem;
       color: black;
       border-radius: 10px;
       border: 1px solid black;        
}
.feature2 button:hover{
        background-color:rgb(226, 223, 223);
        cursor: pointer;
}
@media only screen and (max-width: 1245px ) {
        
 .para2{
 margin: 30px 120px;
 }
        
}

@media only screen and (max-width: 1149px) {
        
.nav_left li{        
        font-size: 1.4rem;
        margin: 0px 10px;
        /* width: 10%; */
        
}
.para{ 
       height: 83vh;
   }        

}

@media screen and (max-width:966px) {
.nav{
               display: flex;
               flex-direction: column;
               height: 355px;
               
        }  
.nav_left{ 
          
           flex-direction: column;
           /* width: 100%; */

}
.img{
         /* width: 100%; */
         align-items: center;
         justify-content: center;
}
.img img{
            width:70% ;
}
.nav li{ 
          width: 100%;
          margin: 10px;
}
.nav_right{
           
        width: 100%;
        flex-direction: column;
}
.burger{
        position: absolute;
        top: 10px;
        right: 5%;
        cursor: pointer;
    }

.line{
           width: 33px;
           background-color: blanchedalmond;
           height: 5px;
           margin: 3px 0px;
        }
 .h-nav-resp{
                height: 70px;
         }   
.v-nav-resp{
              opacity: 0;
         }
.heading h1{
          
         font-size: 4rem;
}


.container2 h1{
         
         font-size: 1.5rem;
}

.container2 p{
 
         font-size: 1rem;
}
.feature h2{
         font-size: 1.2rem;

}
.feature2 h2{
         font-size: 1.4rem;
         display: block;
}
/* .feature button{
         width: 130px;
         padding: 10px 3px;
} */
.para2{
     margin: 30px 80px;    
}
.box{ 
        margin: 15px;
        width: 36.333%;

}
.para3{
         margin: 40px 60px;
}
}
/* @media only screen and (max-width:600px) {
        
.box{
        margin: 7px;
        width: 41.333%;
} */
@media only screen and (max-width:600px){
        
.para2{
      flex-direction: column; 
      align-items: center;
}
.box{
         width: 100%;
}
.para3{
      flex-direction: column;          
        
}        
.box2{
         width: 100%;
}
/* .feature button{
         width: auto;
} */
}




@media screen and (max-width:366px){
 
  .heading h1{
             
         font-size: 3rem;
  }      
  .heading h2 {
           font-size: 1rem;

  }
}
