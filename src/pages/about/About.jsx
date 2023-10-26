import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import {
  UserGroupIcon,
  EyeIcon,
  ViewfinderCircleIcon,
  LightBulbIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

import teamPerson from "../../assets/about/member.png";
import cover from "../../assets/about/image.png";

export default function About() {
  const data = [
    {
      label: "Team",
      value: "team",
      icon: UserGroupIcon,
      title: "Our Team",
      caption: "Built by a team of industry experts",
      teamData: [
        {
          img: teamPerson,
          name: "Name",
          designation: "Designation",
        },
        {
          img: teamPerson,
          name: "Name",
          designation: "Designation",
        },
        {
          img: teamPerson,
          name: "Name",
          designation: "Designation",
        },
        {
          img: teamPerson,
          name: "Name",
          designation: "Designation",
        },
        {
          img: teamPerson,
          name: "Name",
          designation: "Designation",
        },
        {
          img: teamPerson,
          name: "Name",
          designation: "Designation",
        },
      ],
    },
    {
      label: "Mission",
      value: "mission",
      icon: EyeIcon,
      title: "Our Mission",
      caption:
        "Our goal is to be one of the best IT training institutes in the world by providing quality training to learners.",
      coverImg: cover,
    },
    {
      label: "Vision",
      value: "vision",
      icon: ViewfinderCircleIcon,
      title: "Our Vision",
      caption:
        "We aspire to empower the young generation providing quality training on trendy topics.",
      coverImg: cover,
    },
    {
      label: "Value",
      value: "values",
      icon: LightBulbIcon,
      title: "Our Value",
      caption:
        "Many people from different backgrounds work in our organization. Creative IT has a diverse culture that appreciates the labor and talent of all the members. Anyone irrespective of their gender, class, and education would find a great work environment where everyone works in harmony with love and respect.",
      coverImg: cover,
    },
    {
      label: "Facts",
      value: "facts",
      icon: ClipboardDocumentCheckIcon,
      title: "Facts",
      factData: [
        {
          number: 5000,
          name: "Students",
        },
        {
          number: 5000,
          name: "Freelancers",
        },
        {
          number: 5000,
          name: "Job Holders",
        },
        {
          number: 5000,
          name: "Experts",
        },
        {
          number: 5000,
          name: "Ratio",
        },
        {
          number: 5000,
          name: "Companies",
        },
      ],
    },
  ];
  return (
    <section>
      <div className="bg-lightBlue py-10">
        <div className="mx-5 md:container md:mx-auto">
          <h1 className="text-[40px] md:text-[60px]">About Us</h1>
          <p className="text-[16px] md:w-2/3">
            Pathshala IT is an institution where empowering the community with
            an excellent standard of learning is what we desire. We endeavor for
            the continuous improvement of our leaders who will work to construct
            a better future. We will continue to share our knowledge for
            contributing to the success of individuals and to serve society in
            the best interest.
          </p>
        </div>
      </div>
      <div className="mx-5 md:container md:mx-auto">
        <Tabs value="team">
          <TabsHeader className="md:my-[80px]">
            {data.map(({ label, value, icon }) => (
              <Tab key={value} value={value}>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  {React.createElement(icon, { className: "w-5 h-5" })}
                  {label}
                </div>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody className="md:mb-[120px]">
            {data.map((d, i) => (
              <TabPanel key={i} value={d.value}>
                <h1 className=" text-[30px] md:text-[40px] text-black text-center">
                  {d.title}
                </h1>
                {d.caption && (
                  <p className="mt-[24px] mb-[48px] text-center  md:text-[20px]">
                    {d.caption}
                  </p>
                )}

                {d.coverImg && (
                  <div className="flex justify-center mb-[120px]">
                    <img src={d.coverImg} alt="" />
                  </div>
                )}
                {d.teamData && (
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-[30px] gap-y-[48px] place-items-center">
                    {d.teamData.map((dt, i) => (
                      <div key={i}>
                        <img src={dt.img} alt="" />
                        <p className="text-[32px]">{dt.name}</p>
                        <p className="text-[20px]">{dt.designation}</p>
                      </div>
                    ))}
                  </div>
                )}
                {d.factData && (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[24px] mt-[50px] mb-[120px]">
                    {d.factData.map((df, i) => (
                      <div key={i} className="p-[20px] rounded-[8px] bg-lightOrange">
                        <h1 className="text-[40px] text-black text-center">{df.number} +</h1>
                        <p className="text-[20px] text-center">{df.name}</p>
                      </div>
                    ))}
                  </div>
                )}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </section>
  );
}
