import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = (props) => {
  return (
    <section id="portSection" className={props.attr}>
      <h3>농구 유명인</h3>
      <p>각 리그 별 농구 유명인입니다.</p>
      <div className="port__inner container">
          <div className="port__btn">
              <button className="active">NBA</button>
              <button>WNBA</button>
              <button>KBL</button>
              <button>WKBL</button>
          </div>
          <div className="port__cont">
              <div className="port">
                  <figure className="port__header">
                      <img src="./assets/images/port/port01.png" alt="포트폴리오1" />
                  </figure>   
                  <div className="port__body">
                      <span>
                          <img src="./assets/images/port/portMember01.svg" alt="멤버1" />
                      </span>
                      <div>
                          <h4>마이클 조던</h4>
                          <Link to="/port">Michael Jordan</Link>
                      </div>
                  </div>
              </div>
              <div className="port">
                  <figure className="port__header">
                      <img src="./assets/images/port/port02.png" alt="포트폴리오2" />
                  </figure>   
                  <div className="port__body">
                      <span>
                          <img src="./assets/images/port/portMember02.svg" alt="멤버2" />
                      </span>
                      <div>
                          <h4>르브론 제임스</h4>
                          <Link to="/port">Lebron James</Link>
                      </div>
                  </div>
              </div>
              <div className="port">
                  <figure className="port__header">
                      <img src="./assets/images/port/port03.png" alt="포트폴리오3" />
                  </figure>   
                  <div className="port__body">
                      <span>
                          <img src="./assets/images/port/portMember03.svg" alt="멤버3" />
                      </span>
                      <div>
                          <h4>코비 브라이언트</h4>
                          <Link to="/port">Kobe Bryant</Link>
                      </div>
                  </div>
              </div>
              <div className="port">
                  <figure className="port__header">
                      <img src="./assets/images/port/port04.png" alt="포트폴리오4" />
                  </figure>   
                  <div className="port__body">
                      <span>
                          <img src="./assets/images/port/portMember04.svg" alt="멤버4" />
                      </span>
                      <div>
                          <h4>케빈 듀란트</h4>
                          <Link to="/port">Kevin Durant</Link>
                      </div>
                  </div>
              </div>
              <div className="port">
                  <figure className="port__header">
                      <img src="./assets/images/port/port05.png" alt="포트폴리오5" />
                  </figure>   
                  <div className="port__body">
                      <span>
                          <img src="./assets/images/port/portMember05.svg" alt="멤버5" />
                      </span>
                      <div>
                          <h4>스테판 커리</h4>
                          <Link to="/port">Stephen Curry</Link>
                      </div>
                  </div>
              </div>
              <div className="port">
                  <figure className="port__header">
                      <img src="./assets/images/port/port06.png" alt="포트폴리오6" />
                  </figure>   
                  <div className="port__body">
                      <span>
                          <img src="./assets/images/port/portMember06.svg" alt="멤버6" />
                      </span>
                      <div>
                          <h4>크피스 폴</h4>
                          <Link to="/port">Chris Paul</Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
  )
};

export default Portfolio;