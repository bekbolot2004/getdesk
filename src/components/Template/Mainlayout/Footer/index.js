import React from "react";
import { Link } from "react-router-dom";
import logoSvg from "../../../assets/logo.svg";
import ChooseMoneyAndLanguage from "../../../UI/molecules/ChooseMoneyAndLanguage";
import SocialMedia from "../../../UI/molecules/SocialMedia/index";

const Footer = () => {
  const footerLinksObj = [
    {
      title: "Сообщество",
      links: [
        {
          title: "Реферальная программа",
          link: "#",
        },
      ],
    },
    {
      title: "Компания",
      links: [
        {
          title: "О сервисе",
          link: "#",
        },
      ],
    },
    {
      title: "Помощь",
      links: [
        {
          title: "Свяжитесь с нами",
          link: "#",
        },
      ],
    },
    {
      title: "Аренда",
    },
  ];

  const footerLinksObj2 = [
    {
      title: "Конфиденциальность",
      link: "#",
    },
    {
      title: "Условия использования",
      link: "#",
    },
    {
      title: "Реквизиты компании",
      link: "#",
    },
  ];

  const FooterLink = ({ item }) => {
    return (
      <div>
        <p className="text-base font-bold">{item.title}</p>
        {item.links &&
          item.links.map((item) => (
            <Link to={item.link} className="text-sm hover:text-[#ED4040]">
              {item.title}
            </Link>
          ))}
      </div>
    );
  };

  return (
    <div className="bg-[#FBFAFA]">
      <div className="max-max-2xl mx-auto p-10">
        <div className="flex flex-col sm:flex-row justify-between border-b border-[#C4C4C4] pb-[35px] sm:pb-[60px]">
          <div className="flex   flex-col lg:flex-row  gap-[40px] lg:gap-[100px] max-sm:border-b max-sm:border-[#C4C4C4] max-sm:py-[35px]">
            <div className="col-span-3 flex max-sm:justify-center">
              <img src={logoSvg} alt="logo" className="max-h-[50px]" />
            </div>
            <div className="col-span-3 flex max-sm:justify-center gap-4 pt-1">
              <SocialMedia />
            </div>
          </div>
          <div className="lg:w-[calc(100%-550px)] col-span-6 grid grid-cols-2 lg:flex lg:justify-between gap-x-8 gap-y-8 max-sm:pt-[35px]">
            {footerLinksObj &&
              footerLinksObj.map((item, i) => (
                <FooterLink key={i} item={item} />
              ))}
          </div>
        </div>
        <div className="my-[25px] flex justify-between">
          <div className="max-lg:flex-col-reverse flex  text-[#717171] text-sm max-md:gap-[16px] gap-[10px]">
            <p className="mr-[80px]">© 2022 Getdesk.</p>
            <ul className="list-disc flex max-md:flex-col justify-between max-md:gap-4 gap-12">
              {footerLinksObj2 &&
                footerLinksObj2.map((item) => (
                  <li className="ml-3">
                    <a href={item.link} className='hover:text-[#ED4040]'>{item.title}</a>
                  </li>
                ))}
            </ul>
          </div>
          <div className="flex max-md:flex-col-reverse max-md:justify-end gap-2">
            <ChooseMoneyAndLanguage/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
