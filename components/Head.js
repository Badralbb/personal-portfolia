import Image from "next/image";
import { IoIosMenu } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { VscGithubAlt } from "react-icons/vsc";
import { LuTwitter } from "react-icons/lu";
import { FaFigma } from "react-icons/fa";
import Link from "next/link";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { FiSun } from "react-icons/fi";
import { useState } from "react";
import { CiSquareRemove } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";

const HeadItems = [
    { title: "about", link: "#about" },
    { title: "work", link: "#work" },
    { title: "testimonial", link: "#testimonial" },
    { title: "contact", link: "#contact" },
];
export const Head = () => {
    const [open, setOpen] = useState(false);
    function Block() {
        setOpen(true);
    }
    function Hidden() {
        setOpen(false);
    }
    const [dark, setDark] = useState(false);
    function DarkOn() {
        setDark(true);
    }
    function DarkOff() {
        setDark(false);
    }
    return (
        <div>
            <div className={`md:hiddens`}>
                <div
                    className={`fixed ${dark ? "bg-white" : "bg-slate-500"
                        } z-10 shadow-xl transition-[6s] ${open ? "inset-0" : "-left-full -top-full"
                        }`}
                ></div>
                <div
                    className={`fixed transition-[6s] z-20 ${dark ? "bg-[#030712] text-white" : "bg-white"
                        } bottom-0 top-0 w-[80%] ${open ? "right-0" : "-right-full"}`}
                >
                    <div>
                        <div className="flex justify-between items-center py-4 text-[#111827]">
                            <div className={dark ? "text-[#F9FAFB]" : ''}>

                                <div className={`text-3xl px-4`}>&lt;SS/&gt;</div>
                            </div>
                            <button>
                                <CiSquareRemove className="w-12 h-12" onClick={Hidden} />
                            </button>
                        </div>
                        <div className="border-b-2 border-t-2 border-solid py-4">
                            <div className="flex flex-col gap-4 px-4">
                                {HeadItems.map((item, link) => (
                                    <Link  onClick={Hidden} href={item.link} key={link}>
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between">
                                <div>Switch Theme</div>
                                <button onClick={DarkOff} className={dark ? "block" : "hidden"}>
                                    <IoMoonOutline />
                                </button>
                                <button onClick={DarkOn} className={dark ? "hidden" : "block"}>
                                    <FiSun />
                                </button>
                            </div>
                            <div className="flex justify-center mt-4">
                                <AwesomeButton>Download Cv</AwesomeButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`flex justify-between items-center dark:text-[#D1D5DB]`}>
                <div className="text-3xl">&lt;SS/&gt;</div>
                <div className="hidden md:flex gap-6 items-center ">
                    {HeadItems.map((item, link) => (
                        <Link href={item.link} key={link}>
                            {item.title}
                        </Link>
                    ))}
                    <svg
                        width="1"
                        height="24"
                        viewBox="0 0 1 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line x1="0.5" y1="24" x2="0.5" stroke="#F3F4F6" />
                    </svg>
                    <button onClick={DarkOff} className={dark ? "block" : "hidden"}>
                        <IoMoonOutline />
                    </button>
                    <button onClick={DarkOn} className={dark ? "hidden" : "block"}>
                        <FiSun />
                    </button>
                    <AwesomeButton>Download Cv</AwesomeButton>
                </div>
                <button className="md:hidden">
                    <IoIosMenu className="size-6" onClick={Block} />
                </button>
            </div>
            <HeadInformation />
        </div>
    );
};

const HeadInformation = () => {
    return (
        <div className="flex flex-col gap-12 md:flex-row items-center md:justify-between py-16">
            <div className="max-w-[260px] md:max-w-[240px] bg-[#E5E7EB] dark:bg-[#374151] w-full md:order-10 flex justify-center md:mt-[25px]">
                <Image
                    src={"/images/Pic.png"}
                    width={240}
                    height={280}
                    className="relative top-[-15px] w-[90%] md:w-[100%] md:left-[-20px] md:top-[-25px]"
                />
            </div>

            <div className="flex flex-col gap-12 md:w-[60%]">
                <div>
                    <h1 className="mb-2 text-[#111827] text-6xl dark:text-[#F9FAFB]">Hi, I’m Sagar 👋</h1>
                    <p className="text-[#4B5563] dark:text-[#D1D5DB]">
                        I'm a full stack developer (React.js & Node.js) with a focus on
                        creating (and occasionally designing) exceptional digital
                        experiences that are fast, accessible, visually appealing, and
                        responsive. Even though I have been creating web applications for
                        over 7 years, I still love it as if it was something new.
                    </p>
                </div>
                <div className="text-[#4B5563] dark:text-[#D1D5DB]">
                    <div className="flex gap-2 items-center">
                        <IoLocationOutline />
                        <p>Ahmedabad, India</p>
                    </div>
                    <div className="flex gap-2 items-center px-1">
                        <div className="bg-green-500 rounded-full w-2 h-2"></div>
                        <p>Available for new projects</p>
                    </div>
                </div>
                <div className="flex gap-2 text-[#4B5563] dark:text-[#D1D5DB]">
                    <VscGithubAlt />
                    <LuTwitter />
                    <FaFigma />
                </div>
            </div>
        </div>
    );
};
