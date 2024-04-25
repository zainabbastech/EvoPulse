import React, {useContext} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import youtube from "../../assets/images/youtube.png"
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  if (!achievementSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {achievementSection.title}
            </h1>

            <div className="container">
                <div className="child1">
                  <div class="video-009p">
                    <figure style={{margin: "0"}}>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/odDgRngTJaI?si=MV1MX31BB5LabPvC"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </figure>

                  </div>

                </div>


                <div className="child2">
                  <div class="video-info08">
                    <div class="combo007">
                      <div class="thumnil001">
                        <a href="#">   <img src={youtube} alt="image" width={"150px"} /></a>

                      </div>
                      <div class="thum002-details">
                        <a href="https://www.youtube.com/live/odDgRngTJaI?si=fNAaNRho5U4g0dxi" target="_blank">Mughees Raza on leadership</a>

                      </div>
                    </div>
                    <br />
                    
                    <div class="combo007">
                      <div class="thumnil001">
                        <a href="#"><img src={youtube} alt="image" width={"150px"}/></a>
                      </div>
                      <div class="thum002-details">
                        <a href="https://www.youtube.com/live/aDo5H3CcjYE?si=wRKprAoey2IzIaLm" target="_blank">Unleash leadership</a>

                      </div>
                    </div>
                    <br />
                    
                    <div class="combo007">
                      <div class="thumnil001">
                        <a href="#"><img src={youtube} alt="image" width={"150px"}/></a>


                      </div>
                      <div class="thum002-details">
                        <a href="https://youtu.be/tza_cQk1yqI?si=2TxOvUV6nFCS29UL" target="_blank">Leaders are readers</a>

                      </div>
                    </div>
                    <br/>
                      
                    <div class="combo007">
                      <div class="thumnil001">
                        <a href="#">   <img src={youtube} alt="image" width={"150px"}/></a>


                      </div>
                      <div class="thum002-details">
                        <a href="https://youtu.be/NLVig3ZiiWQ?si=14vPi2aG764e_im1" target="_blank">Time Management | Self Learning</a>

                      </div>
                    </div>
                    <br/>
                  </div>
                </div>
              </div>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {/* {achievementSection.subtitle} */}
            </p>
          </div>
          <div className="achievement-cards-div">
            {/* {achievementSection.achievementsCards.map((card, i) => {
              return (
                <AchievementCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    // title: card.title,
                    // description: card.subtitle,
                    image: card.image,
                    imageAlt: card.imageAlt,
                    footer: card.footerLink
                  }}
                />
              );
            })} */}
          </div>
        </div>
      </div>
    </Fade>
  );
}
