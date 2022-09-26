import React from "react";

const Experience = () => {
     return (
          <>
               <div className="w-11/12 tablet:w-10/12 desktop:w-3/5 py-10 justify-center text-white mx-auto">
                    <div className="my-3">
                         <span className="font-mono font-bold text-2xl tracking-widest">
                              Experience
                         </span>
                    </div>
                    {/* Work 1 Starts */}
                    <div className="flex flex-col tablet:flex-row space-y-6 tablet:space-y-0 tablet:space-x-16 mx-6 tablet:mx-12 my-8 py-3">
                         <div className="w-full tablet:w-1/12 desktop:w-2/12">
                              <span className="my-6 text-base font-mono font-bold">
                                   2021 - 2022
                              </span>
                         </div>
                         <div className="flex flex-col w-full tablet:w-4/5 pl-6 tablet:pl-0">
                              <span className="text-base font-mono font-bold">
                                   Software Developement Engineer Intern - FOSSASIA
                              </span>
                              <span className="text-sm font-mono my-4 opacity-75">
                                   Working on the open-event project (FOSSASIA) which allows hosting
                                   events online • Upgraded old legacy stripe API to new API to
                                   support more payment gateways like Klarna, Sepa, Google Pay and
                                   more. • Made Price and Tax Calculation/Orders API efficient and
                                   secure. • Fixed major bugs in Groups feature and made it
                                   production ready. • Streamlined CI/CD (Github Actions) and helped
                                   setup and manage autodeployment (Docker, Hetzner Cloud)
                              </span>
                              <span className="text-sm font-mono opacity-75">
                                   EmberJS | NodeJS | Typescript | Docker | Flask | Celery | Redis
                              </span>
                         </div>
                    </div>
                    {/* Work 1 Ends */}
               </div>
          </>
     );
};

export default Experience;
