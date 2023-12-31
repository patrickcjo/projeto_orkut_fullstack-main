import { useNavigate } from "react-router-dom";

type TTypeClass = "default" | "danger" | "edit" | "signIn" | "logout" | "submit" | "exit";

type ButtonProps = {
  type?: "submit" | "button" | "reset";
  children?: React.ReactNode;
  to?: string;
  onClick?: () => void;
  className?: string;
  typeClass?: TTypeClass;
};

export function Button({ type, children, to, onClick, className, typeClass = "default" }: ButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else if (onClick) {
      onClick();
    }
  };

  const configColor: { [key in TTypeClass]: string } = {
    default: "bg-sky-500 hover:bg-sky-400 ",

    submit:
      "bg-sky-500 hover:bg-sky-400 text-white font-bold uppercase mr-3 p-2 px-3 rounded-md hover:text-black ",

    signIn:
      "bg-[#f79ad3] text-white font-bold uppercase rounded-md hover:text-black w-full py-3 my-2",

    logout:
      "bg-[#f79ad3] hover:[#f79ad3] text-white font-bold uppercase mr-3 py-2 px-6 rounded-md hover:text-black ",

    danger:
      "text-[#fff] flex justify-center items-center bg-red-500 py-3 h-2 w-28 rounded-md border-2 border-[#222] hover:bg-red-700 hover:text-[#222]",

    edit: "text-[#fff] flex justify-center items-center bg-amber-500 py-3 h-2 w-28 rounded-md border-2 border-[#222] hover:bg-amber-700 hover:text-[#222]",

    exit: " bg-[#f79ad3] hover:[#f79ad3] text-white font-bold uppercase mr-3 py-2 px-2 rounded-md hover:text-black ",
  };

  return (
    <button type={type} onClick={handleClick} className={` ${configColor[typeClass]} ${className}`}>
      {children}
    </button>
  );
}
