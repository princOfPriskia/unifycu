export const CookieBanner = () => {
  return (
    <div
      role="dialog"
      className="fixed bg-white border-b-stone-800 border-l-stone-800 border-r-stone-800 border-t-purple-800 box-border caret-transparent hidden outline-[3px] w-full z-[100] px-3 py-1.5 border-t-[5px] bottom-0 md:py-3.5"
    >
      <div className="box-border caret-transparent outline-[3px]">
        <div className="box-border caret-transparent outline-[3px]">
          <div className="box-border caret-transparent outline-[3px]">
            <div
              role="dialog"
              className="box-border caret-transparent flex flex-wrap outline-[3px]"
            >
              <div className="box-border caret-transparent shrink-0 outline-[3px] w-full md:w-[91.6667%]">
                <p className="box-border caret-transparent leading-5 outline-[3px] mb-4 md:leading-[25.6px]">
                  This site uses cookies to store information on your
                  computer/device and collect personal information. Cookies help
                  us enhance site navigation, analyze site usage, and assist in
                  our marketing efforts. We encourage you to read our 
                  <a
                    aria-label="Online Privacy Policy – link opens PDF in a new tab"
                    href="https://trabian-canvas-prd-files.s3.amazonaws.com/unifyfcu-com/files/document/unify_online_privacy_policy_1.pdf?VersionId=1oRE0Og660HHs8Z850R398_gOhzMrHF0"
                    title="Online Privacy Policy"
                    className="text-purple-800 font-bold box-border caret-transparent leading-5 outline-[3px] md:leading-[25.6px]"
                  >
                    Online Privacy Policy
                  </a>
                   to learn more about how we use cookies and how we collect and
                  use visitor data. By selecting ACCEPT, you consent to the
                  placement of these cookies and our Online Privacy Policy.
                </p>
              </div>
              <div className="box-border caret-transparent shrink-0 outline-[3px] w-full md:w-[8.33333%]">
                <div className="box-border caret-transparent justify-center outline-[3px] text-center w-full mx-auto">
                  <img
                    src="https://c.animaapp.com/mp6ve6ukPxqINY/assets/43.webp"
                    alt="cookie image"
                    className="aspect-[auto_250_/_250] box-border caret-transparent hidden h-[75px] max-w-full min-h-px object-contain outline-[3px] md:inline-block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent outline-[3px] text-center">
          <button
            type="button"
            className="appearance-none text-[14.4px] font-semibold bg-yellow-500 caret-transparent leading-[14.4px] outline-[3px] uppercase align-middle border px-7 py-3 rounded-[50px] border-transparent hover:border-stone-800"
          >
            Deny
          </button>
          <button
            type="button"
            className="appearance-none text-white text-[14.4px] font-semibold bg-purple-800 caret-transparent leading-[14.4px] outline-[3px] uppercase align-middle border px-7 py-3 rounded-[50px] border-transparent hover:bg-purple-900"
          >
            Accept
          </button>
        </div>
      </div>
      <button
        aria-label="Dismiss message"
        type="button"
        className="absolute appearance-none text-zinc-500 text-[32px] bg-transparent caret-transparent block leading-8 outline-[3px] text-center z-10 bg-[position:0px_0px] p-0 right-4 top-2 hover:text-neutral-950 hover:border-neutral-950"
      >
        <span className="box-border caret-transparent outline-[3px]">×</span>
      </button>
    </div>
  );
};
