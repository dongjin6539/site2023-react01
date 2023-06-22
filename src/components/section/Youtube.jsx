import React from "react";
import { Link } from "react-router-dom";

const Youtube = (props) => {
  return (
    <section id="youtubeSection" className={props.attr}>
      <div className="youtube__inner container">
        <div className="youtube__text">
          <h3>추천 유튜브 영상</h3>
          <p>
            유튜브를 통해 다양한 농구 영상을 볼 수 있습니다.
            <br />
            구독과 좋아요! 부탁드립니다.
          </p>
          <Link to="/youtube" className="button-green">
            자세히 보기
          </Link>
        </div>
        <div className="youtube__item">
          <div className="youtube">
            <img src="./assets/images/youtube/youtube01.png" alt="유튜브1" />
            {/* <iframe width="400" height="250" src="https://www.youtube.com/embed/QsCB9Ci9J7Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          </div>
          <div className="youtube">
            <img src="./assets/images/youtube/youtube02.png" alt="유튜브2" />
            {/* <iframe width="400" height="250" src="https://www.youtube.com/embed/R7u1qlHO-cQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          </div>
          <div className="youtube">
            <img src="./assets/images/youtube/youtube03.png" alt="유튜브3" />
            {/* <iframe width="400" height="250" src="https://www.youtube.com/embed/DbuVTHUJWFk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          </div>
          <div className="youtube">
            <img src="./assets/images/youtube/youtube04.png" alt="유튜브4" />
            {/* <iframe width="400" height="250" src="https://www.youtube.com/embed/49Z-OGD7D6k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Youtube;
