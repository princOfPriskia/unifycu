export const ExitModal = () => {
  return (
    <div className="fixed bg-neutral-950/50 box-border caret-transparent hidden outline-[3px] z-[1005] overflow-auto inset-0">
      <div
        role="dialog"
        className="relative bg-white box-border caret-transparent hidden h-3/4 max-w-none min-h-[75%] outline-[3px] text-center w-full z-[1006] border-stone-800 overflow-auto ml-0 mr-auto p-9 border-0 border-none top-[250px] bottom-0 inset-x-0 md:h-auto md:max-w-[1200px] md:min-h-0 md:w-[600px] md:border md:border-stone-300 md:ml-auto md:border-solid md:bottom-auto md:inset-x-auto"
      >
        <h2 className="text-blue-950 text-2xl box-border caret-transparent leading-[33.6px] outline-[3px] mb-2 font-brandon_grotesque">
          Thanks For Exploring All UNIFY Has To Offer!
        </h2>
        <p className="box-border caret-transparent leading-[25.6px] outline-[3px] mb-4">
          You’re now leaving the UNIFY Financial Credit Union website for a
          third-party site that services our members. Don’t Panic! We just
          wanted to let you know that their privacy and security policies might
          differ from ours, and give you the option to continue. Thanks again
          for visiting UNIFY…come back soon!
        </p>
        <p className="box-border caret-transparent leading-[25.6px] outline-[3px]">
          <a
            href="#"
            className="text-[14.4px] font-semibold bg-white box-border caret-transparent inline-block leading-[14.4px] outline-[3px] uppercase align-middle border border-purple-800 px-7 py-3 rounded-[50px] border-solid hover:bg-sky-400"
          >
            Cancel
          </a>
           
          <a
            href="#"
            className="text-white text-[14.4px] font-semibold bg-purple-800 box-border caret-transparent inline-block leading-[14.4px] outline-[3px] uppercase align-middle border px-7 py-3 rounded-[50px] border-solid border-transparent hover:bg-purple-900"
          >
            Continue
          </a>
           
        </p>
      </div>
    </div>
  );
};
