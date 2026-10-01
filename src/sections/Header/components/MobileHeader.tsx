import { useState } from "react";
import { LoginModal } from "@/components/LoginModal";

export const MobileHeader = () => {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
      <div className="text-white items-center bg-white shadow-[rgb(10,25,113)_0px_2px_4px_0px] box-border caret-transparent flex justify-start max-h-20 outline-[3px] mb-px py-2.5 md:hidden">
        <div className="box-border caret-transparent basis-0 min-h-[auto] min-w-[auto] outline-[3px] px-5 py-[15px] md:min-h-0 md:min-w-0">
          <button className="appearance-none text-black text-[27.2px] bg-transparent caret-transparent leading-[27.2px] outline-[3px] text-center bg-[position:0px_0px] p-0">
            <i className="font-black box-border caret-transparent inline-block outline-[3px] font-font_awesome_6_pro before:accent-auto before:box-border before:caret-transparent before:text-black before:text-[27.2px] before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[27.2px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_pro"></i>
          </button>
        </div>
        <div className="box-border caret-transparent basis-[0%] grow min-h-[auto] min-w-[auto] outline-[3px] text-center md:min-h-0 md:min-w-0">
          <a
            href="/"
            className="text-purple-800 font-bold box-border caret-transparent outline-[3px]"
          >
            <img
              src="https://c.animaapp.com/mp6ve6ukPxqINY/assets/logo.png"
              alt="UNIFY Financial Credit Union"
              className="box-border caret-transparent inline-block max-h-[60px] max-w-[70%] min-h-px object-contain outline-[3px] p-[3px]"
            />
          </a>
        </div>
        <div className="box-border caret-transparent basis-0 min-h-[auto] min-w-[auto] outline-[3px] text-right md:min-h-0 md:min-w-0">
          <button
            onClick={() => setLoginOpen(true)}
            className="appearance-none text-purple-800 font-semibold bg-transparent caret-transparent leading-4 outline-[3px] text-center uppercase align-middle border bg-[position:0px_0px] mr-1.5 px-4 py-3 rounded-[50px] border-transparent"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};
