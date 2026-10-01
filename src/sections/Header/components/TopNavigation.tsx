import { useState } from "react";
import { LoginModal } from "@/components/LoginModal";

export const TopNavigation = () => {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
      <div className="box-border caret-transparent flex flex-wrap max-w-screen-xl outline-[3px] w-[95%] mx-auto py-5">
        <div className="box-border caret-transparent shrink-0 outline-[3px] w-full mb-[22px] md:w-[33.3333%]">
          <div className="box-border caret-transparent outline-[3px]">
            <a
              href="/"
              className="text-purple-800 font-bold box-border caret-transparent outline-[3px]"
            >
              <img
                src="https://c.animaapp.com/mp6ve6ukPxqINY/assets/logo.png"
                alt="UNIFY Financial Credit Union"
                className="box-border caret-transparent inline-block max-w-full min-h-28 object-contain outline-[3px]"
              />
            </a>
          </div>
        </div>
        <div className="self-center box-border caret-transparent basis-0 grow outline-[3px] text-right mr-[15px]">
          <div className="box-border caret-transparent outline-[3px]">
            <nav
              role="navigation"
              className="box-border caret-transparent outline-[3px]"
            >
              <ul className="box-border caret-transparent leading-[25.6px] outline-[3px] mb-4 pl-0">
                <li className="text-purple-800 text-sm font-semibold box-border caret-transparent inline-block leading-[22.4px] outline-[3px] px-[15px] py-2.5">
                  <a
                    href="/locator"
                    className="font-bold box-border caret-transparent outline-[3px]"
                  >
                    Branch/ATM Locator
                  </a>
                </li>
                <li className="text-purple-800 text-sm font-semibold box-border caret-transparent inline-block leading-[22.4px] outline-[3px] px-[15px] py-2.5">
                  <a
                    href="/unify-membership"
                    className="font-bold box-border caret-transparent outline-[3px]"
                  >
                    Join UNIFY
                  </a>
                </li>
                <li className="text-purple-800 text-sm font-semibold box-border caret-transparent inline-block leading-[22.4px] outline-[3px] px-[15px] py-2.5">
                  <a
                    href="/rates"
                    className="font-bold box-border caret-transparent outline-[3px]"
                  >
                    Rates
                  </a>
                </li>
                <li className="text-purple-800 text-sm font-semibold box-border caret-transparent inline-block leading-[22.4px] outline-[3px] px-[15px] py-2.5">
                  <a
                    href="https://internet.speedpay.com/unifyfcu/#/login/guest"
                    className="font-bold box-border caret-transparent outline-[3px]"
                  >
                    Make a Payment
                  </a>
                </li>
                <li className="text-purple-800 text-sm font-semibold box-border caret-transparent inline-block leading-[22.4px] outline-[3px] px-[15px] py-2.5">
                  <a
                    href="/unify-routing-transit-number"
                    className="font-bold box-border caret-transparent outline-[3px]"
                  >
                    Routing #322079719
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="self-center box-border caret-transparent shrink-0 outline-[3px]">
          <button
            onClick={() => setLoginOpen(true)}
            className="appearance-none text-white font-semibold bg-purple-800 caret-transparent leading-4 outline-[3px] text-center uppercase align-middle w-40 border mb-4 px-7 py-3 rounded-[50px] border-transparent hover:bg-purple-900"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};
