import { Fragment, useEffect, useState } from "react";
import Modal from "react-modal";
import SectionContainer from "../layout/SectionContainer";

const News = () => {
  useEffect(() => {
    var lists = document.querySelectorAll(".news_list > ul > li");
    let box = document.querySelector(".cavani_fn_moving_box");
    if (!box) {
      let body = document.querySelector("body");
      let div = document.createElement("div");
      div.classList.add("cavani_fn_moving_box");
      body.appendChild(div);
    }

    lists.forEach((list) => {
      list.addEventListener("mouseenter", (event) => {
        box.classList.add("opened");
        var imgURL = list.getAttribute("data-img");
        box.style.backgroundImage = `url(${imgURL})`;
        box.style.top = event.clientY - 50 + "px";
        console.log(event.clientY);
        if (imgURL === "") {
          box.classList.remove("opened");
          return false;
        }
      });
      list.addEventListener("mouseleave", () => {
        box.classList.remove("opened");
      });
    });
  }, []);

  const [isOpen4, setIsOpen4] = useState(false);
  const [modalContent, setModalContent] = useState({});
  function toggleModalFour(value) {
    setIsOpen4(!isOpen4);
    setModalContent(value);
  }
  const newsData = [
    {
      img: "assets/img/experience/1.png",
      img1: "assets/img/experience/1.png",
      date: "August, 2022 - March, 2022",
      name: "星進股份有限公司>>>",
      title: "網頁設計師",
      description:
        "獨立從設計到製作切版星進股份有限公司旗下官方網站，也負責網站上線後的維護、更新與搜尋引擎優化。",
      special: "https://ctee.com.tw/industrynews/financesmanage/727280.html",
      text1: "",
      text2: "",
      text3: "",
    },
    {
      img: "assets/img/experience/2.png",
      date: "August, 2022 - March, 2022",
      name: "統一證券>>>",
      title: "專案管理師",
      description:
        "中正大學x統一證券的產學合作專案。負責專案的規劃、分析及落地實施。達成統一證券深耕大學生客群的目標。",
      text1:
        "「統一證券邁向數位轉型的策略是有決心的。」統一證券表示，透過與中正大學合辦全國性校園大使活動，不但提供青年學子培養金融素養與職場即戰力的機會，也趁此機會讓更多年輕人了解統一推廣數位帳戶的過程，與年輕客戶直接對話，近矩離觀察他們的需求，三十幾年老字號的統一證券也有一顆年輕的心。",
      text2: "",
      text3: "",
    },
    {
      img: "assets/img/experience/3.png",
      date: "August, 2022 - March, 2022",
      name: "InvesTable>>>",
      title: "共同創辦人",
      description:
        "關於財金的教育事業，我們的願景是想要成為奠基學生理財基礎的搖籃，提供一系列的財金教育課程以及與真實市場連動的虛擬交易所讓學生驗證所學。",
      text1: "-共同負責開發及撰寫虛擬交易所之網頁程式",
    },
    {
      img: "assets/img/experience/4.png",
      date: "August, 2022 - March, 2022",
      name: "浪 - 甜食製作所>>>",
      title: "創辦人",
      description:
        "從零開始的創業，一步一步的從懵懂到穩定經營。創業初衷是為了驗證自己的想法：「身為生活圈的一份子，我能不能根據我的觀察抓住我想像中的客群並提供他們需要的產品與商業模式？」",
      text1: "",
      text2: "",
      text3: "",
    },
  ];

  return (
    <Fragment>
      <SectionContainer navName="news">
        <div className="section_inner">
          <div className="cavani_tm_news w-full h-auto clear-both float-left mb-[70px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                Work Experience
              </span>
            </div>
            <div className="news_list w-full h-auto clear-both float-left mt-[60px]">
              <ul className="relative z-[2]">
                {newsData.map((news, i) => (
                  <li
                    className="w-full py-[29px] px-0 z-10"
                    data-img={news.img}
                    key={i}
                  >
                    <div className="list_inner w-full clear-both h-auto flex items-center">
                      <span className="number w-[50px] min-w-[50px] h-[50px] text-center leading-[50px] inline-block rounded-full bg-[#b9b8c3] text-[#333] text-[16px] font-semibold font-poppins">
                        {`${i <= 9 ? 0 : ""}${i + 1}`}
                      </span>
                      <div className="details relative pl-[30px] ml-[29px]">
                        <div className="extra_metas">
                          <ul className="flex items-center flex-wrap mb-[2px]">
                            <li className="relative mr-[10px]">
                              <span className="text-[15px] text-[#777]">
                                {news.date}
                              </span>
                            </li>
                            <li className="relative mr-[10px]">
                              <span className="text-[15px] text-[#777] pl-[10px]">
                                <a
                                  className="text-[#777] transition-all duration-300 hover:text-[#000]"
                                  href="#"
                                  // onClick={() => toggleModalFour(news)}
                                >
                                  {news.title}
                                </a>
                              </span>
                            </li>
                            <li className="relative mr-[10px]">
                              <span className="text-[15px] text-[#777] pl-[10px]">
                                <a
                                  className="text-[#777] transition-all duration-300 hover:text-[#000]"
                                  href="#"
                                ></a>
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="post_title">
                          <h3 className="m-0 p-0 leading-[1] font-semibold">
                            <a
                              href="#"
                              // onClick={() => toggleModalFour(news)}
                            >
                              {news.name}
                            </a>
                          </h3>
                          <br />
                          <p>{news.description}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
      {modalContent && (
        <Modal
          isOpen={isOpen4}
          onRequestClose={toggleModalFour}
          contentLabel="My dialog"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={300}
          openTimeoutMS={300}
        >
          <div className="cavani_tm_modalbox opened">
            <div className="box_inner">
              <div className="close">
                <a href="#" onClick={toggleModalFour}>
                  <i className="icon-cancel" />
                </a>
              </div>
              <div className="description_wrap">
                <div className="news_popup_informations w-full h-auto clear-both float-left">
                  <div className="image">
                    <img src="assets/img/thumbs/4-2.jpg" alt="image" />
                    <div
                      className="main"
                      data-img-url={modalContent.img}
                      style={{ backgroundImage: `url(${modalContent.img})` }}
                    />
                  </div>
                  <div className="details">
                    <div className="meta">
                      <ul className="flex items-center flex-wrap mb-[2px]">
                        <li className="relative mr-[10px]">
                          <span className="text-[15px] text-[#777]"></span>
                        </li>
                        <li className="relative mr-[10px]">
                          <span className="text-[15px] text-[#777] pl-[10px]">
                            <a
                              className="text-[#777] transition-all duration-300 hover:text-[#000]"
                              href="#"
                            ></a>
                          </span>
                        </li>
                        <li className="relative mr-[10px]">
                          <span className="text-[15px] text-[#777] pl-[10px]">
                            <a
                              className="text-[#777] transition-all duration-300 hover:text-[#000]"
                              href="#"
                            ></a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="title">
                      <h3>{modalContent.name}</h3>
                    </div>
                    <div />
                  </div>
                  <div className="text w-full float-left">
                    <p className="mb-[15px]">{modalContent.text1}</p>
                    <p className="mb-[15px]">{modalContent.text2}</p>
                    <p>{modalContent.text3}</p>
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
export default News;
