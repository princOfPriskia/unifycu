export const ChatWidget = () => {
  return (
    <div
      role="button"
      aria-label="CHAT NOW"
      className="fixed bg-stone-800 bg-repeat-x box-border caret-transparent h-20 leading-[normal] list-none outline-[3px] w-5 z-[107158] bg-[position:left_100%] ml-auto mr-px -mt-10 mb-px rounded-sm right-0 top-2/4"
    >
      <div className="absolute text-yellow-500 text-xs font-bold box-border caret-transparent outline-[3px] text-nowrap -rotate-90 z-[600] -left-5 top-[33px] font-trebuchet_ms">
        CHAT NOW
      </div>
    </div>
  );
};
