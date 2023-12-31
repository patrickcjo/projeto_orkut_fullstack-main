import { useState, useEffect } from "react";
import { ImagemComponent } from "./ImageComponent";
import { useGlobalStore } from "../useGlobalStore";

interface FooterProps {
  className: string;
}

export const Footer = ({ className }: FooterProps) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const user = useGlobalStore((state) => state.user);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString();
  const formattedTime = currentDateTime.toLocaleTimeString();

  return (
    <div className="mt-20">
      <div className={` fixed w-screen  bottom-0 py-4 text-[#f79ad3] font-bold px-12 ${className}`}>
        <p className="mr-3 ">
          {user.first_name} {user.last_name}
        </p>
        {formattedTime} - {formattedDate} <span> &copy; </span>
      </div>
    </div>
  );
};
