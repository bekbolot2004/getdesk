import React from "react";
import TelegramLogo from "../../atoms/assets/telegram.svg";
import FacebookLogo from "../../atoms/assets/facebook.svg";
import VkLogo from "../../atoms/assets/vk.svg";
import InstagramLogo from "../../atoms/assets/instagram.svg";

const SocialMedia = () => {
  const socialMediaObj = [
    {
      title: "instagram",
      link: "https://www.instagram.com/",
      icon: InstagramLogo,
    },
    {
      title: "telegram",
      link: "https://web.telegram.org/",
      icon: TelegramLogo,
    },
    {
      title: "facebook",
      link: "https://www.facebook.com/",
      icon: FacebookLogo,
    },
    {
      title: "vk",
      link: "https://vk.com/feed",
      icon: VkLogo,
    },
  ];

  return (
    <>
      {socialMediaObj &&
        socialMediaObj.map((item) => (
          <a
            href={item.link}
            target="_blank"
            className="h-[40px] w-[40px] bg-white rounded-full flex justify-center items-center hover:bg-[#ED4040] "
          >
            <img src={item.icon} alt="socialMediaLogo" className="h-[20px] w-[20px]  text-white fill-red" />
          </a>
        ))}
    </>
  );
};

export default SocialMedia;
