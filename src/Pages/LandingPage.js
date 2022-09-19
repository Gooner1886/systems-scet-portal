import React from "react";
import Footer from "../components/views/Footer";
import Navbar from "../components/views/Navbar/Navbar";
import "react-multi-carousel/lib/styles.css";
import logo2 from "../Assets/logo2.png";
import styled from 'styled-components'
import "./LandingPage.css";
import BarChart from "../components/views/Chart/BarChart";
import LineChart from "../components/views/Chart/LineChart";
import AwardsLanding from "../components/views/Card/AwardsLanding";
import ResearchLanding from "../components/views/Card/ResearchLanding";
import Achieve2 from "../Assets/Achieve2.jpg";
import Achieve1 from "../Assets/Achieve1.jpg";
import Achieve3 from "../Assets/Achieve3.jpg";
import Achieve4 from "../Assets/Achieve4.jpg";
import ImgSlider from "../components/ImgSlider";
import Research1 from "../Assets/Research1.png";
import Research2 from "../Assets/Research2.png";
import Research3 from "../Assets/Research3.png";
import { width } from "@mui/system";

const LandingPage = (props) => {
  // const chartData = [6578, 6787, 3245, 9876, 2324, 5123, 2435];
  // const [data, setData] = useState(chartData);

  // const [jc, setJc] = useState([234, 45, 67, 987, 345, 456]);
  // const [bc, setBc] = useState([234, 45, 67, 987, 345, 456]);
  // const [cc, setCc] = useState([234, 45, 67, 987, 345, 456]);
  let journalCount = [];
  let conferenceCount = [];
  let bookCount = [];

  props.allData.forEach((el) => {
    if (el.citationType === "Journal") {
      journalCount.push(el.count);
    } else if (el.citationType === "Conference") {
      conferenceCount.push(el.count);
    } else {
      bookCount.push(el.count);
    }
  });

  return (
    <>
      <Navbar />
      <ImgSlider />
      <Container>
        <div style={{ paddingLeft: "4%", marginTop: "-3%", width: "100%" }}>
          <div className="content">
            <div>
              <img
                  src={logo2}
                  alt="logo"
                  style={{ height: "18rem", width: "18rem", marginLeft: '-2rem' }}
                  className="img"
              />
            </div>
            <div style={{ paddingTop: "0.5rem", marginLeft: '3rem'  }} >
              <h1
                  className="head"
                  style={{
                    marginLeft: "1rem",
                    fontSize: "2.4rem",
                    fontWeight: "800",
                    paddingLeft: "1rem",
                  }}
              >
                School of Computer Engineering and Technology
              </h1>
              <div
                  className="para"
                  style={{ width: "62rem", fontSize: "1rem" }}
              >
                <p>
                  The UG Programs offered by School of Computer Engineering and
                  Technology are 4 years full time programs. The course curriculum
                  includes cutting-edge technologies like Artificial Intelligence,
                  Machine Learning, Data Analytics, Cloud Computing, IoT, etc and
                  Peace courses taught by experienced and eminent faculties.
                  MIT-WPU consistently tops in ranking of engineering colleges and
                  is widely recognized in India and abroad for its excellence in
                  education. The salient features include fully equipped
                  laboratories and Center of Excellence established by MNC like
                  IBM, AMDOCS, NVIDIA, IEEE Pune section (Affordable Agriculture
                  Technology Laboratory). The academic and research partners
                  include NVIDIA, Federation University (Australia).
                </p>
              </div>
            </div>
          </div>

          <BaseCard>
            <h1>Meet the Dean HoS</h1>
            <Content>
              <img
                  src="https://computer-engineering.mitwpu.edu.in/images/School-of-Computer-Engineering-Technology/Photo-Vrushali-Kulkarni.jpg"
                  alt="lady"
                  style={{ height: "16rem", width: "20rem" }}
                  className="img"
              />
              <DetailsCard>
                <h2>Dr. Vrushali Kulkarni (Head of School and Professor)</h2>
                <p>
                  Dr. Vrushali Kulkarni possesses Ph.D. in “Machine Learning” from College of Engineering, Pune. Prior to that, she has done ME(Computer Engg)
                  from College of Engg, Pune, and BE(CSE) from Walchand College of Engg, Sangli. She has over 25 years of teaching experience. She has a specialization
                  in teaching Data Structures, Algorithms, Compilers, Data Mining, and Business Intelligence. She has been in administration for the last 10 years,
                  the Department has achieved NBA twice during her tenure.
                </p>
              </DetailsCard>
            </Content>
          </BaseCard>

          <BaseCard>
            <h1>Awards & Achievements</h1>
            <Content>
              <div className="awards">
                <div className="one">
                  <div style={{ padding: "4rem 0rem" }}>
                    <AwardsLanding
                        image={Achieve1}
                        desc="The three students of our Engineering department have been selected by Amazon with a CTC of 44.14 Lakh* + 2.5 Lakh worth of employee benefits."
                    />
                  </div>
                  <div>
                    <AwardsLanding
                        image={Achieve2}
                        desc="MIT-WPU School of Computer Engineering and Technology is glad to announce that our students are placed in BMC Software with the CTC of 12.5 LPA. Congratulations to the students !"
                    />
                  </div>
                </div>

                <div className="three">
                  <div style={{ padding: "3rem 0rem" }}>
                    <AwardsLanding
                        image={Achieve3}
                        desc="Mr. Tanmay Unhale, Final Year BTech (CSE) student on receiving Best Paper award for his paper titled, Novel Approach For Feature Selection Using Genetic Algorithm,under the guidance of Prof. Shilpa Sonawani."
                    />
                  </div>
                  <div>
                    <AwardsLanding image={Achieve4} />
                  </div>
                </div>
              </div>
            </Content>
          </BaseCard>
 
          <BaseCard>
            <h1>Research & Publication</h1>
            <Content>
              <div className="lcard">
                <div style={{ paddingTop: "2rem", paddingRight: '2em' }}>
                  <ResearchLanding image={Research1} link="https://research.mitwpu.edu.in/publication/the-new-dataset-mitwpu-1k-for-object-recognition-and-image"/>
                </div>
                <div style={{ paddingTop: "2rem", paddingRight: '2em' }}>
                  <ResearchLanding image={Research2} link="https://research.mitwpu.edu.in/publication/grid" />
                </div>
                <div style={{ paddingTop: "2rem", paddingRight: '2em' }}>
                  <ResearchLanding image={Research3} link="https://research.mitwpu.edu.in/publication/design-and-implementation-of-multipurpose-chatbot" />
                </div>
              </div>
            </Content>
            <BarChart
                data={props.allData}
                heading="Total Citations by type"
                subHeading="Citations since 2017"
                bottomHeader="Citations"
            />
            <div className="lgraph">
              <div style={{ paddingRight: "3rem" }}>
                <LineChart data={journalCount} title="Journal Citations" />
              </div>
              <div style={{ paddingRight: "3rem" }}>
                <LineChart data={bookCount} title="Book Citations" />
              </div>
              <div style={{ paddingRight: "3rem" }}>
                <LineChart data={conferenceCount} title="Conf. Citations" />
              </div>
            </div>
          </BaseCard>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default LandingPage;


const Container = styled.main`
  margin-top: 100px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BaseCard= styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 60px;
  margin-bottom: 50px;
  padding-top: 20px !important;
  
  h1 {
    margin: 0;
    padding: 0;
    font-size: 2.5em !important;
    font-weight: 800;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const DetailsCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 850px;
  padding-left: 100px;
  
  h2 {
    margin: 0;
    padding: 0;
    font-size: 1.8em;
  }
`;
