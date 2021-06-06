import React from "react";
import "./Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Header() {
  return (
    <header className="head1">
      <div className="container">
      <div className="row">
        {/* <div className="col-md-1 "></div> */}

        <div className="col-md-6 col-xs-2 ">
          <a className="phone" href="#">   
                
            <i className="fas fa-phone-alt"></i> <span className="hidden-xs"></span>
          </a>
          |
          <a className="email" href="#">
            
            <i className="fas fa-envelope"></i><span className="hidden-xs"></span>
          </a>
        </div>

        <div className="col-md-3 col-xs-2 colm">
          <a className="Download-app" href="#">
          <span className="hidden-xs">Download App </span>
              <i className="fab fa-android"></i>|
            <i className="fab fa-apple"></i>
          </a>
        </div>

        <div className="col-md-3 col-xs-2">
          <a className="Login" href="#">
            Login|Signup
          </a>
        </div>

        {/* <div className="col-md-1 col-xs-6"></div> */}
      </div>
      </div>
    </header>


    // <header className="header-top-row">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-md-5 col-2">
    //         <a href="#">
    //           <span className="hidden-xs visible-md ">
    //             <i className="fas fa-phone-alt" aria-hidden="true"></i>
    //             1800-1030-004
    //           </span>
    //         </a>
    //         <a href="#">
    //           <span className="hidden-md hidden-lg">
    //             <i className="fas fa-phone-alt" aria-hidden="true"></i>
                
    //           </span>
    //         </a>
    //         <span className="leftpadding5 leftpadding5m">|</span>
            
    //         <a href="mailto:marketing@somanyceramics.com">
    //           <span className="hidden-xs visible-md  ">
    //             <i className="fas fa-envelope" aria-hidden="true"></i>
    //             marketing@somanyceramics.com
    //           </span>
    //         </a>
    //         <a href="mailto:marketing@somanyceramics.com">
    //           <span className="hidden-md hidden-lg ">
    //             <i className="fas fa-envelope" aria-hidden="true"></i>
              
    //           </span>
    //         </a>
    //       </div>

    //       <div className="col-md-5 col-3">
    //         <span className="hidden-xs">Download App</span>
    //         <a href="https://play.google.com/store/apps/details?id=com.somany.trumpet">
    //           <span className="leftpadding5 leftpadding5m">
    //           <i className="fab fa-android" aria-hidden="true"></i>
    //           </span>
    //         </a>
    //         <span className="leftpadding5 leftpadding5m">|</span>
    //         <a href="https://itunes.apple.com/in/app/somany/id1148944529?mt=8">
    //           <span className="leftpadding5 leftpadding5m">
    //           <i className="fab fa-apple" aria-hidden="true"></i>
    //           </span>

    //         </a>
    //       </div>
    //       <div className="col-md-3 col-xs-3">
    //         <a href="#" className="marginright10 marginright10m hidden-xs">Login</a>
    //         <span className="marginright10 marginright10m hidden-xs">|</span>
    //         <a href="#" className="marginright10 marginright10m hidden-xs">Sign Up</a>
    //       </div>
    //     </div>
    //   </div>
    // </header>
  );
}
