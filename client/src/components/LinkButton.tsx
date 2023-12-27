import { Link } from "react-router-dom";
type LinkCss = "listComment" | "default";

type LinkButtonProps = {
  children: React.ReactNode;
  to: string;
  className?: string;
  onClick?: () => void;
  typeClass: LinkCss;
};

const configColor: { [key in LinkCss]: string } = {
  listComment:
    "px-2 mr-2 rounded bg-[#f79ad3] cursor-pointer text-white hover:text-black font-bold",
  default:
    "bg-[#f79ad3] hover:[#f79ad3] text-white font-bold uppercase mr-3 p-2  px-3 rounded-md hover:Text-black ",
};

export function LinkButton({ children, to, className, typeClass, onClick }: LinkButtonProps) {
  return (
    <Link onClick={onClick} to={to} className={` ${configColor[typeClass]} ${className}`}>
      {children}
    </Link>
  );
}
