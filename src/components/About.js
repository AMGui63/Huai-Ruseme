import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionContainer from "../layout/SectionContainer";
import ProgressBar from "./progressBar";

const About = () => {
  const circleProgressData = [
    { language: "English", progress: 95 },
    { language: "Russian", progress: 80 },
    { language: "Arabic", progress: 90 },
  ];

  const progressBarData = [
    { bgcolor: "#7d7789", completed: 60, title: "HTML & CSS" },
    { bgcolor: "#7d7789", completed: 85, title: "Javascript" },
    { bgcolor: "#7d7789", completed: 90, title: "WordPress" },
  ];

  const services = [
    {
      desc: "Beautiful minimalist design and great, fast response with support. Highly recommend. Thanks Marketify!.",
      img: "img/testimonials/1.jpg",
      info1: "Alexander Walker",
      info2: "Graphics Designer",
    },
    {
      desc: "I had a little problem and the support was just awesome to quickly solve the situation. And keep going on.",
      img: "img/testimonials/2.jpg",
      info1: "Baraka Clinton",
      info2: "Construction Engineering",
    },
    {
      desc: "These people really know what they are doing! Great customer support availability and supperb kindness.",
      img: "img/testimonials/3.jpg",
      info1: "Armin Van Buuren",
      info2: "Content Manager",
    },
  ];

  return (
    <SectionContainer navName="about">
      <div className="section_inner">
        <div className="cavani_tm_about w-full h-auto clear-both float-left">
          <div className="biography w-full h-auto clear-both float-left mb-[87px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                About Me
              </span>
            </div>
            <div className="wrapper w-full h-auto clear-both float-left flex justify-between mt-[55px]">
              <div className="left w-[40%]">
                <p className="mb-[15px]"></p>
                <p>
                  <br />
                  理工的邏輯實作、商管的溝通論調、於新創圈培養出的責任感及好奇心是構成”我“的基調。
                  <br />
                  喜歡充滿可能性的生活，所以喜歡讀故事，認為製作產品的本質就是闡述動人的故事。
                </p>
              </div>
              <div className="right w-[50%]">
                <ul>
                  <li className="mb-[8px] w-full float-left">
                    <span className="first inline-block min-w-[100px] font-bold">
                      Name:
                    </span>
                    <span className="second inline-block">Guan Huai ,Wang</span>
                  </li>
                  <li className="mb-[8px] w-full float-left">
                    <span className="first inline-block min-w-[100px] font-bold">
                      Study:
                    </span>
                    <span className="second inline-block">
                      National Chung Cheng Univercity 2018-2022
                    </span>
                  </li>
                  <li className="mb-[8px] w-full float-left">
                    <span className="first inline-block min-w-[100px] font-bold">
                      Degree:
                    </span>
                    <span className="second inline-block">
                      Bachelor of Business Administration, B.B.A.
                    </span>
                  </li>
                  <li className="mb-[8px] w-full float-left">
                    <span className="first inline-block min-w-[100px] font-bold">
                      Mail:
                    </span>
                    <span className="second inline-block">
                      <a
                        className="text-[#7d7789] transition-all duration-300 hover:text-[#333]"
                        href="mailto:guanhuaidesu@gmail.com"
                      >
                        guanhuaidesu@gmail.com
                      </a>
                    </span>
                  </li>
                  <li className="w-full float-left">
                    <span className="first inline-block min-w-[100px] font-bold">
                      Phone:
                    </span>
                    <span className="second inline-block">
                      +886 975 552 800
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="services w-full h-auto clear-both float-left mb-[87px]">
            <div className="wrapper w-full h-auto clear-both float-left flex justify-between">
              <div className="service_list w-full">
                <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
                  <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                    Expertise
                  </span>
                </div>
                <div className="cavani_tm_title wrapper w-full h-auto clear-both float-left flex justify-between mt-[55px]">
                  <div className="w-[50%]">
                    <ul>
                      <li className="mb-[8px] w-full float-left relative pl-[25px]">
                        Front End
                        <ul>
                          <li className="mb-[8px] w-full float-left relative pl-[25px]">
                            React.js
                          </li>
                          <li className="mb-[8px] w-full float-left relative pl-[25px]">
                            Next.js
                          </li>
                          <li className="mb-[8px] w-full float-left relative pl-[25px]">
                            Html/CSS/SCSS
                          </li>
                          <li className="mb-[8px] w-full float-left relative pl-[25px]">
                            RWD
                          </li>
                          <li className="mb-[8px] w-full float-left relative pl-[25px]">
                            Tailwind CSS
                          </li>
                          <li className="mb-[8px] w-full float-left relative pl-[25px]">
                            Typescript
                          </li>
                          <li className="mb-[8px] w-full float-left relative pl-[25px]">
                            Webpack
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="w-[50%]">
                    <ul>
                      <li className="mb-[8px] w-full float-left relative pl-[25px]">
                        Backend and Others
                        <ul>
                          <li className="mb-[8px] w-full float-left relative pl-[25px]">
                            Node.js
                          </li>
                          <li className="mb-[8px] w-full float-left relative pl-[25px]">
                            Git / Gulp
                          </li>
                          <li className="mb-[8px] w-full float-left relative pl-[25px]">
                            PostgreSQL
                          </li>
                          <li className="mb-[8px] w-full float-left relative pl-[25px]">
                            Firebase / Firestore / GCP Deploy
                          </li>
                          <li className="mb-[8px] w-full float-left relative pl-[25px]">
                            C / C++
                          </li>
                          <li className="mb-[8px] w-full float-left relative pl-[25px]">
                            Docker
                          </li>
                          <li className="mb-[8px] w-full float-left relative pl-[25px]">
                            Agile / Scrum
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="partners w-full h-auto clear-both float-left mb-[92px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                Certificate
              </span>
            </div>
            <div className="list w-full clear-both float-left overflow-hidden border-solid mt-[62px]">
              <div className="wrapper w-full h-auto clear-both float-left flex justify-between mt-[55px]">
                <div className="left w-[50%]">
                  <img
                    className="relative min-w-full"
                    src="assets/img/about/google"
                  />
                  <p className="mt-5 text-center font-bold text-[#333]">
                    Google Project Management Certificate
                    <br />
                    Google專案管理證書
                  </p>
                </div>
                <div className="right w-[50%]">
                  <img />
                  <h2>TOEIC: 830</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonials w-full h-auto clear-both float-left mb-[90px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                Testimonials
              </span>
            </div>
            <div className="list w-full h-auto clear-both float-left mt-[75px]">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                }}
                className="cursor-e-resize custom-class"
              >
                <SwiperSlide>
                  <div className="list_inner w-full h-auto clear-both float-left relative">
                    <div className="text w-full h-auto clear-both float-left relative border-solid border-[#E5EDF4] border-2 p-[40px] mb-[30px]">
                      <i className="icon-quote-left absolute z-[1] text-[30px] top-[-29px] left-[50px]" />
                      <p>
                        冠淮的執行力還有責任感帶給公司很多幫助。在這段期間展現了出色的工作表現和專業態度，具有優秀的溝通能力和團隊合作精神，相信你在未來也能繼續帶給身邊的人更多價值！
                      </p>
                    </div>
                    <div className="details w-full h-auto clear-both float-left flex items-center pl-[20px]">
                      <div className="image relative w-[60px] h-[60px]">
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full"
                          data-img-url="assets/img/testimonials/1.jpeg"
                        />
                      </div>
                      <div className="info pl-[20px]">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Terry 張祐禎{" "}
                        </h3>
                        <span className="text-[14px]">
                          星進股份有限公司 執行長
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                  <div className="list_inner w-full h-auto clear-both float-left relative">
                    <div className="text w-full h-auto clear-both float-left relative border-solid border-[#E5EDF4] border-2 p-[40px] mb-[30px]">
                      <i className="icon-quote-left absolute z-[1] text-[30px] top-[-29px] left-[50px]" />
                      <p>
                        These people really know what they are doing! Great
                        customer support availability and supperb kindness.
                      </p>
                    </div>
                    <div className="details w-full h-auto clear-both float-left flex items-center pl-[20px]">
                      <div className="image relative w-[60px] h-[60px]">
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full"
                          data-img-url="assets/img/testimonials/2.jpg"
                        />
                      </div>
                      <div className="info pl-[20px]">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Armin Van Buuren
                        </h3>
                        <span className="text-[14px]">Content Manager</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide> */}
                <SwiperSlide>
                  <div className="list_inner w-full h-auto clear-both float-left relative">
                    <div className="text w-full h-auto clear-both float-left relative border-solid border-[#E5EDF4] border-2 p-[40px] mb-[30px]">
                      <i className="icon-quote-left absolute z-[1] text-[30px] top-[-29px] left-[50px]" />
                      <p>
                        身為冠淮創業比賽的指導教授，一路走來都看在眼裡，團隊在金融教育領域的耕耘和專業精神為整個團隊注入了不竭的動力，展現出了良好的領導才能和卓越的團隊合作能力。
                      </p>
                    </div>
                    <div className="details w-full h-auto clear-both float-left flex items-center pl-[20px]">
                      <div className="image relative w-[60px] h-[60px]">
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full"
                          data-img-url="assets/img/testimonials/3.jpg"
                        />
                      </div>
                      <div className="info pl-[20px]">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          方慧臻
                        </h3>
                        <span className="text-[14px]">企業管理學系 教授</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default About;
