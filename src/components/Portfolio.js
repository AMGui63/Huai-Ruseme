import Isotope from "isotope-layout";
import dynamic from "next/dynamic";
import { Fragment, useEffect, useRef, useState } from "react";
import SectionContainer from "../layout/SectionContainer";
import { dataImage } from "../utils";
import ImageView from "./ImagePopup";
import { Detail, Soundcloud, Website } from "./Popup";
import Modal from "react-modal";

const website = [
  {
    img: "assets/img/portfolio/1/1.jpg",
    use: "React.js / Next.js / Node.js / Tailwind CSS",
    title: "Huai Wang - 極簡雜誌風的個人網站 ",
    url: "",
    text: "使用 React 實作網頁前端，並用Tailwind CSS切版及製作元件。網站具有現代感十足的UI設計和良好的用戶體驗，同時也具備高度的可定制性和擴展性。",
    img1: "assets/img/portfolio/1/2.jpg",
    img2: "assets/img/portfolio/1/3.jpg",
    img3: "assets/img/portfolio/1/4.jpg",
  },
  {
    img: "assets/img/portfolio/3/1.jpg",
    use: "React.js / Firestore後端 / Firebase / RestFul API",
    title: "Social Cool - 以React構成的輕量社群網站",
    url: "https://social-cool.web.app/posts",
    text: "以React構成前端的網站可使用戶創建個人資料，收藏文章、留言按讚。Firestore作為後端數據庫。firebase API作為前後端交互的接口，實現資料的讀取、寫入和更新。",
    img1: "assets/img/portfolio/3/2.jpg",
    img2: "assets/img/portfolio/3/3.jpg",
    img3: "assets/img/portfolio/3/4.jpg",
  },
  {
    img: "assets/img/portfolio/2/1.jpg",
    use: "Python / Flask / Jinja2 / PostresSql / Heroku / Docker",
    title: "InvesTable - 虛擬股票投資平台",
    url: "https://twstock-trading-platform.herokuapp.com/login",
    text: "協助使用者快速彙整與分析台灣股市資訊​，並進行買賣練習，是之前的創業比賽的實作項目，搭配與全國金融教育發展協會推出的課程，可以讓學生在課後驗證其所學。",
    img1: "assets/img/portfolio/2/2.jpg",
    img2: "assets/img/portfolio/2/3.jpg",
    img3: "assets/img/portfolio/2/4.jpg",
  },
  {
    img: "assets/img/portfolio/4/1.jpg",
    use: "HTML / RWD / SCSS / Firebase / 網域設定管理",
    title: "星進創新學院官方網站",
    url: "https://seedreams.com.tw/startup.html",
    text: "協助官方網站企劃設計與切版製作，網站幫助曝光與導流至公司旗下之業務（創新學院與線上整合行銷），同時負責網站維護以及SEO。",
    img1: "assets/img/portfolio/4/2.jpg",
    img2: "assets/img/portfolio/4/3.jpg",
    img3: "assets/img/portfolio/4/4.jpg",
  },
  {
    img: "assets/img/portfolio/5/1.jpg",
    use: "HTML / RWD / SCSS / Firebase / 網域設定管理",
    title: "星進整合行銷官方網站",
    url: "https://seedreams.com.tw",
    text: "星進創新學院的官方網站，負責從UI設計切版到後期維護、SEO等等，協助公司推廣其行銷之業務發展。",
    img1: "assets/img/portfolio/5/2.jpg",
    img2: "assets/img/portfolio/5/3.jpg",
    img3: "assets/img/portfolio/5/4.jpg",
  },
  {
    img: "assets/img/portfolio/6/1.jpg",
    use: "HTML / RWD / Boostrap4 / Surge Deploy",
    title: "前端切版練習",
    url: "https://investable-huai.surge.sh/",
    text: "台灣大學前端課程的練習作品",
    img1: "assets/img/portfolio/6/2.jpg",
    img2: "assets/img/portfolio/6/3.jpg",
    img3: "assets/img/portfolio/6/4.jpg",
  },
];

const Portfolio = () => {
  const ModalVideo = dynamic(
    () => {
      return import("react-modal-video");
    },
    { ssr: false }
  );

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    const data = document.querySelector(".item__");
    console.log(data);
    if (data.length !== 0) {
      setTimeout(() => {
        isotope.current = new Isotope(".gallery_zoom", {
          itemSelector: ".item__",
          // layoutMode: "fitRows",
        });
      }, 3000);
    }

    // return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");

  useEffect(() => {
    setTimeout(() => {
      dataImage();
    }, 2000);
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [Wcontent, setWcontent] = useState({});

  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  function toggleModalFive() {
    setIsOpen5(!isOpen5);
  }
  return (
    <Fragment>
      <ImageView />
      <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpen2}
        videoId="337293658"
        animationSpeed={300}
        onClose={() => setIsOpen2(false)}
        modalVideoClose="mfp-close"
      />
      <ModalVideo
        channel="youtube"
        autoplay={true}
        isOpen={isOpen}
        videoId="7e90gBu4pas"
        animationSpeed={300}
        onClose={() => setIsOpen(false)}
        modalVideoClose="mfp-close"
      />
      <Soundcloud isOpen3={isOpen3} toggleModalThree={toggleModalThree} />
      <Detail isOpen4={isOpen4} toggleModalFour={toggleModalFour} />
      <SectionContainer navName="portfolio">
        <div className="section_inner">
          <div className="cavani_tm_portfolio w-full h-auto clear-both float-left mb-[70px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                Portfolio
              </span>
            </div>
            <div className="portfolio_filter w-full h-auto clear-both float-left text-left relative px-0 pt-[55px] pb-[42px]">
              <ul>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className="current text-[#333] font-poppins font-medium transition-all duration-300"
                    data-filter="*"
                    onClick={handleFilterKeyChange("*")}
                  >
                    All
                  </a>
                </li>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className="text-[#333] font-poppins font-medium transition-all duration-300"
                    data-filter=".vimeo"
                    onClick={handleFilterKeyChange("vimeo")}
                  >
                    Website
                  </a>
                </li>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className="text-[#333] font-poppins font-medium transition-all duration-300"
                    data-filter=".video"
                    onClick={handleFilterKeyChange("video")}
                  >
                    Video
                  </a>
                </li>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className="text-[#333] font-poppins font-medium transition-all duration-300"
                    data-filter=".post"
                    onClick={handleFilterKeyChange("post")}
                  >
                    Poster
                  </a>
                </li>
              </ul>
            </div>
            <div className="portfolio_list w-full h-auto clear-both float-left">
              <ul className="gallery_zoom ml-[-50px]">
                <li className="vimeo mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url={website[0].img}
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          {website[0].title}
                        </h3>
                        <span className="text-[14px]">{website[0].use}</span>
                      </div>
                      <a
                        onClick={() => {
                          setWcontent(website[0]);
                          toggleModalFive();
                        }}
                        className="cavani_tm_full_link popup-youtube"
                        href="#"
                      />
                    </div>
                  </div>
                </li>
                <li className="vimeo mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url={website[1].img}
                        onClick={toggleModalFive}
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          {website[1].title}
                        </h3>
                        <span className="text-[14px]">{website[1].use}</span>
                      </div>
                      <a
                        className="cavani_tm_full_link popup-vimeo"
                        href="#"
                        onClick={() => {
                          setWcontent(website[1]);
                          toggleModalFive();
                        }}
                      />
                    </div>
                  </div>
                </li>
                <li className="vimeo mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url={website[2].img}
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          {website[2].title}
                        </h3>
                        <span className="text-[14px]">{website[2].use}</span>
                      </div>
                      <a
                        onClick={() => {
                          setWcontent(website[2]);
                          toggleModalFive();
                        }}
                        className="cavani_tm_full_link popup-youtube"
                        href="#"
                      />
                    </div>
                  </div>
                </li>
                <li className="vimeo mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url={website[3].img}
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          {website[3].title}
                        </h3>
                        <span className="text-[14px]">{website[3].use}</span>
                      </div>
                      <a
                        onClick={() => {
                          setWcontent(website[3]);
                          toggleModalFive();
                        }}
                        className="cavani_tm_full_link popup-youtube"
                        href="#"
                      />
                    </div>
                  </div>
                </li>
                <li className="vimeo mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url={website[4].img}
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          {website[4].title}
                        </h3>
                        <span className="text-[14px]">{website[4].use}</span>
                      </div>
                      <a
                        onClick={() => {
                          setWcontent(website[4]);
                          toggleModalFive();
                        }}
                        className="cavani_tm_full_link popup-youtube"
                        href="#"
                      />
                    </div>
                  </div>
                </li>
                <li className="vimeo mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url={website[5].img}
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          {website[5].title}
                        </h3>
                        <span className="text-[14px]">{website[5].use}</span>
                      </div>
                      <a
                        onClick={() => {
                          setWcontent(website[5]);
                          toggleModalFive();
                        }}
                        className="cavani_tm_full_link popup-youtube"
                        href="#"
                      />
                    </div>
                  </div>
                </li>
                {/* <li className="post mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url="assets/img/portfolio/3.jpg"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          暫時空白
                        </h3>
                        <span className="text-[14px]">WWWWWW</span>
                      </div>
                      <a
                        className="cavani_tm_full_link soundcloude_link mfp-iframe audio"
                        href="#"
                        onClick={() => {
                          setWcontent(website[0]);
                          toggleModalThree();
                        }}
                      />
                    </div>
                  </div>
                </li> */}
                <li className="image mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url="assets/img/portfolio/4.jpg"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Alla Gorova
                        </h3>
                        <span className="text-[14px]">Image</span>
                      </div>
                      <a
                        className="cavani_tm_full_link zoom"
                        href="assets/img/portfolio/4.jpg"
                      />
                    </div>
                  </div>
                </li>
                <li className="image mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url="assets/img/portfolio/5.jpg"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Fele Sweet
                        </h3>
                        <span className="text-[14px]">Image</span>
                      </div>
                      <a
                        className="cavani_tm_full_link zoom"
                        href="assets/img/portfolio/5.jpg"
                      />
                    </div>
                  </div>
                </li>
                <li className="detail mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url="assets/img/portfolio/6.jpg"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Alice Moon
                        </h3>
                        <span className="text-[14px]">Detail</span>
                      </div>
                      <a
                        className="cavani_tm_full_link portfolio_popup"
                        href="#"
                        onClick={toggleModalFour}
                      />
                    </div>
                    <div className="hidden_content hidden opacity-0 invisible absolute z-[-111]">
                      <div className="popup_details w-full h-auto clear-both float-left">
                        <div className="main_details w-full h-auto clear-both flex mb-[60px]">
                          <div className="textbox w-[70%] pr-[40px]">
                            <p className="mb-[15px]">
                              We live in a world where we need to move quickly
                              and iterate on our ideas as flexibly as possible.
                              Building mockups strikes the ideal balance ease of
                              modification. Building mockups strikes the ideal
                              balance ease of modification.
                            </p>
                            <p>
                              Mockups are useful both for the creative phase of
                              the project - for instance when you're trying to
                              figure out your user flows or the proper visual
                              hierarchy - and the production phase when they
                              phase when they will represent the target product.
                              Building mockups strikes the ideal balance ease of
                              modification.
                            </p>
                          </div>
                          <div className="detailbox w-[30%] pl-[40px]">
                            <ul>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Client
                                </span>
                                <span>Alvaro Morata</span>
                              </li>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Category
                                </span>
                                <span>
                                  <a className="text-[#7d7789]" href="#">
                                    Detail
                                  </a>
                                </span>
                              </li>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Date
                                </span>
                                <span>March 07, 2021</span>
                              </li>
                              <li className="w-full float-left">
                                <span className="first font-bold block">
                                  Share
                                </span>
                                <ul className="share relative top-[7px]">
                                  <li className="mr-[13px] inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/facebook.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                  <li className="mr-[13px] inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/twitter.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                  <li className="inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/instagram.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="additional_images w-full clear-both float-left h-auto">
                          <ul className="ml-[-30px]">
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/1.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/2.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/3.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
      {Wcontent && (
        <Modal
          isOpen={isOpen5}
          onRequestClose={toggleModalFive}
          contentLabel="My dialog"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={300}
          openTimeoutMS={300}
        >
          <div className="cavani_tm_modalbox opened">
            <div className="box_inner">
              <div className="close">
                <a href="#" onClick={toggleModalFive}>
                  <i className="icon-cancel" />
                </a>
              </div>
              <div className="description_wrap">
                <div className="popup_details w-full h-auto clear-both float-left">
                  <div className="top_image">
                    <img src="assets/img/thumbs/4-2.jpg" alt="image" />
                    <div
                      className="main"
                      data-img-url={Wcontent.img}
                      style={{
                        backgroundImage: `url(${Wcontent.img})`,
                      }}
                    />
                  </div>
                  <div className="portfolio_main_title">
                    <div className="flex">
                      <div className="w-full left">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          {Wcontent.title}
                        </h3>
                        <span className="text-[14px]">{Wcontent.use}</span>
                      </div>
                      {Wcontent.url !== "" ? (
                        <div className="cavani_tm_button transition_link w-[40%]">
                          <a href={Wcontent.url} target="_blank">
                            Live Demo
                          </a>
                        </div>
                      ) : null}
                    </div>
                    <div />
                  </div>
                  <div className="main_details w-full h-auto clear-both flex mb-[60px]">
                    <div className="textbox w-[70%] pr-[40px]">
                      <p className="mb-[15px]">{Wcontent.text}</p>
                    </div>
                    <div className="detailbox w-[30%] pl-[40px]">
                      <ul>
                        <li className="mb-[10px] w-full float-left">
                          <span className="first font-bold block">Date</span>
                          <span>April, 2023</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="additional_images w-full clear-both float-left h-auto">
                    <ul className="ml-[-30px]">
                      <li className="mb-[30px] float-left pl-[30px]">
                        <div className="list_inner w-full clear-both float-left h-auto relative">
                          <div className="my_image relative">
                            <img
                              className="relative opacity-0 min-w-full"
                              src="assets/img/thumbs/4-2.jpg"
                              alt="image"
                            />
                            <div
                              className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                              data-img-url={Wcontent.img1}
                              style={{
                                backgroundImage: `url(${Wcontent.img1})`,
                              }}
                            />
                          </div>
                        </div>
                      </li>
                      <li className="mb-[30px] float-left pl-[30px]">
                        <div className="list_inner w-full clear-both float-left h-auto relative">
                          <div className="my_image relative">
                            <img
                              className="relative opacity-0 min-w-full"
                              src="assets/img/thumbs/4-2.jpg"
                              alt="image"
                            />
                            <div
                              className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                              data-img-url={Wcontent.img2}
                              style={{
                                backgroundImage: `url(${Wcontent.img2})`,
                              }}
                            />
                          </div>
                        </div>
                      </li>
                      <li className="mb-[30px] float-left pl-[30px]">
                        <div className="list_inner w-full clear-both float-left h-auto relative">
                          <div className="my_image relative">
                            <img
                              className="relative opacity-0 min-w-full"
                              src="assets/img/thumbs/4-2.jpg"
                              alt="image"
                            />
                            <div
                              className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                              data-img-url={Wcontent.img3}
                              style={{
                                backgroundImage: `url(${Wcontent.img3})`,
                              }}
                            />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </Fragment>
  );
};
export default Portfolio;
