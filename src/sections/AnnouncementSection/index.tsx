export const AnnouncementSection = () => {
  return (
    <div className="box-border caret-transparent outline-[3px] pt-[0.1px] pb-[50px]">
      <div className="box-border caret-transparent max-w-[1200px] outline-[3px] mx-[22px] my-0 px-2.5 md:m-auto md:px-[15px]">
        <div className="box-border caret-transparent outline-[3px]">
          <div className="box-border caret-transparent flex flex-wrap justify-center outline-[3px] -mx-2.5 md:ml-[-15px] md:mr-[-15px]">
            <div className="box-border caret-transparent shrink-0 outline-[3px] w-[calc(100%_-_20px)] mx-2.5 md:w-[calc(100%_-_30px)] md:mx-[15px]">
              <h2 className="text-blue-950 text-4xl box-border caret-transparent leading-[50.4px] outline-[3px] mb-2 font-brandon_grotesque after:accent-auto after:border-b-blue-950 after:border-l-blue-950 after:border-r-blue-950 after:border-t-yellow-500 after:box-border after:caret-transparent after:text-blue-950 after:block after:text-4xl after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[50.4px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-[60px] after:border-t-2 after:border-separate after:font-brandon_grotesque">
                Our New Path Forward
              </h2>
              <p className="box-border caret-transparent leading-[25.6px] outline-[3px] mb-4">
                We are excited to share that as of November 1, 2025, we have
                joined forces and merged with CommunityAmerica Credit Union. The
                strength of our combined credit union will help us better serve
                members with a wider range of value-added products, services,
                innovative technologies, and investment in our communities. To
                learn more and stay up to date, visit the{" "}
                <a
                  href="/forward"
                  title="A New Path Forward"
                  className="text-purple-800 font-bold box-border caret-transparent outline-[3px]"
                >
                  Merger Updates
                </a>
                page.
              </p>
              <div className="box-border caret-transparent justify-center outline-[3px] text-center w-full mx-auto py-[25px]">
                <img
                  src="https://c.animaapp.com/mp6ve6ukPxqINY/assets/21.webp"
                  alt="UNIFY is now CommunityAmerica"
                  className="aspect-[auto_586_/_95] box-border caret-transparent inline-block max-w-full min-h-px object-contain outline-[3px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
