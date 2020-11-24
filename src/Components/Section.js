import React ,{useState}from "react";
import "./Section.css";
import Swiper from "./Swiper";
import data from "./json/content.json";
function Section() {

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 300){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth',});
  };

  window.addEventListener('scroll', checkScrollTop)
    return(
        <div>
            {data.map((data) => {
            return (
              <div className="sect"> 
                {/* <!-- About section--!> */}
            <section className="about" >
                <div className="max-width">
                    <h2 className="title" >About me</h2>
                    <div className="about-content">
                        <div className="column left">
                            <img src="/all/about.png" alt="about"></img>
                        </div>
                        <div className="column right">
                            <div className="text">I'm Swethaa and I'm an <span>UI/UX Designer!</span></div>
                            <p>{data.about}</p>
                        </div>
                    </div>
                </div>
            </section>
             <div className="rect1" id="expe"></div>
            <div className="rect"></div>

            {/* <!-- Experiences section--!> */}

            <section className="expe" >
                <div className="max-width">
                    <h2 className="title" >My Experiences</h2>
                    <div className="expe-content">
                        <div class="row">
                            <div class="column">
                                  <div class="card">
                                      <div className="box">
                                         <i className="fa fa-paper-plane"></i>
                                         <div className="text">UI/UX Intern</div>
                                         <p>{data.ui}</p>
                                        </div>
                                    </div>
                                </div>

                            <div class="column">
                               <div class="card">
                                   <div className="box">
                                      <i className="fa fa-paper-plane"></i>
                                      <div className="text">Designer Intern</div>
                                      <p>{data.po}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="column">
                                  <div class="card">
                                      <div className="box">
                                         <i className="fa fa-paper-plane"></i>
                                         <div className="text">Market Research Intern</div>
                                         <p>{data.po1}</p>
                                        </div>
                                    </div>
                                </div>
                            <div class="column">
                                  <div class="card">
                                      <div className="box">
                                         <i className="fa fa-paper-plane"></i>
                                         <div className="text">UI/UX Intern</div>
                                         <p>{data.ui1}</p>
                                        </div>
                                    </div>
                                </div>

                            <div class="column">
                              <div class="card">
                                  <div className="box">
                                      <i className="fa fa-paper-plane"></i>
                                      <div className="text">Chapter Member</div>
                                      <p>{data.lo}</p>
                                    </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
             <div className="rect" id="skills"></div>
            <div className="rect1"></div>

            {/* <!-- Skills section--!> */}

            <section className="skills" >
                <div className="max-width">
                    <h2 className="title" >My Skills</h2>
                    <div className="skills-content">
                        <div className="column left">
                            <img src="/all/skills.png" alt="skills"></img>
                        </div>
                        <div className="column right">
                            <div className="bars">
                                <div className="info">
                                    <span>Adobe Illustrator</span>
                                    <span>80%</span>
                                </div>
                                <div className="line illu"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>Adobe XD</span>
                                    <span>90%</span>
                                </div>
                                <div className="line xd"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>HTML</span>
                                    <span>85%</span>
                                </div>
                                <div className="line html"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>CSS</span>
                                    <span>80%</span>
                                </div>
                                <div className="line css"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>Canva</span>
                                    <span>90%</span>
                                </div>
                                <div className="line canva"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="rect1" id="work"></div>
            <div className="rect"></div>


            {/* <!-- Works section--!> */}

            <section className="work" >
                <div className="max-width">
                    <h2 className="title" >My Works</h2>
                    <div className="work-content">
                        <div>
                            <Swiper/>
                        </div>
                    </div>
                </div>
            </section>
             <div className="rect"></div>
            <div className="rect1"></div>

            {/* <!-- Education section--!> */}

            <section className="edu" id="edu">
                <div className="max-width">
                    <h2 className="title">My Education</h2>
                    <div className="edu-content">
                        <div>
                            <div class="row">
                            <div class="column">
                                  <div class="card">
                                      <div className="box">
                                         <i className="fa fa-graduation-cap"></i>
                                         <div className="text">{data.clg}</div>
                                         <p>&nbsp;&nbsp;{data.clg1} &nbsp; &nbsp;{data.clg2}</p>
                                         <p className="year">{data.clg3}</p>
                                        </div>
                                    </div>
                                </div>

                            <div class="column">
                               <div class="card">
                                   <div className="box">
                                      <i className="fa fa-graduation-cap"></i>
                                      <div className="text">{data.highschl}</div>
                                      <p>{data.highschl1} &nbsp; {data.highschl2}</p>
                                      <p className="year">{data.highschl3}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="column">
                              <div class="card">
                                  <div className="box">
                                      <i className="fa fa-graduation-cap"></i>
                                      <div className="text">{data.sslc}</div>
                                      <p>{data.sslc1} &nbsp; {data.sslc2}</p>
                                      <p className="year">{data.sslc3}</p>
                                    </div>
                              </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="rect1"></div>
            <div className="rect"></div>

            {/* <!-- Education section--!> */}


            <footer>
                <div>
                    <p>Created By <span>Swethaa Chelladurai </span> | <i className="fa fa-heart"></i> - 2020.</p>
                    <div className="icons">
                        <a href= "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=swethaachelladurai@gmail.com" rel="noreferrer" target="_blank"><i className="fa fa-envelope"></i></a>
                        <a href="https://www.linkedin.com/in/swethaa-c-395845178/" rel="noreferrer" target="_blank"><i className="fa fa-linkedin"></i></a>
                        <a href="https://www.instagram.com/_art_bucket_/" rel="noreferrer" target="_blank"><i className="fa fa-instagram"></i></a>
                    </div>
                </div>
            </footer>
              </div>
            );
          })}

          {/* <!-- Scroll up button--!> */}
          
          <div className={showScroll ? 'Scroll-up-btn' : 'none'} onClick={scrollTop}>
              <i className="fa fa-caret-up"></i>
          </div>
        </div>
    )
}
export default Section;