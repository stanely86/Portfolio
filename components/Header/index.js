import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import Image from 'next/image';
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const myLoader = ({ src }) => {
  return `https://stanely86.github.io/Portfolio//${src}`;
};

const Header = ({ handleWorkScroll, handleAboutScroll, isResume }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Render nothing until mounted on the client
  if (!mounted) {
    return null;
  }

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                {name}.
              </h1>

              <div className="flex items-center">
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <Image
                      loader={myLoader}
                      className="h-6"
                      src={`images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                      alt="Theme toggle"
                      width={24} // Recommended for layout='intrinsic' or 'fixed'
                      height={24} // Recommended for layout='intrinsic' or 'fixed'
                    />
                  </Button>
                )}

                <Popover.Button>
                  <Image
                    loader={myLoader}
                    className="h-5"
                    src={`/images/${!open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                          ? "cancel.svg"
                          : "cancel-white.svg"
                      }`}
                    alt="Menu toggle"
                    width={20} // Recommended for layout='intrinsic' or 'fixed'
                    height={20} // Recommended for layout='intrinsic' or 'fixed'
                  />
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${theme === "dark" ? "bg-slate-800" : "bg-white"} shadow-md rounded-md`}
            >
              {!isResume ? (
                <div className="grid grid-cols-1">
                  <Button onClick={handleWorkScroll}>Work</Button>
                  <Button onClick={handleAboutScroll}>About</Button>
                  {showResume && (
                    <Button onClick={() => router.push("/resume")}>
                      Resume
                    </Button>
                  )}

                  <Button
                    onClick={() => window.open("mailto:hello@chetanverma.com")}
                  >
                    Contact
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")} classes="first:ml-1">
                    Home
                  </Button>
                  {showResume && (
                    <Button
                      onClick={() => router.push("/resume")}
                      classes="first:ml-1"
                    >
                      Resume
                    </Button>
                  )}

                  <Button
                    onClick={() => window.open("mailto:hello@chetanverma.com")}
                  >
                    Contact
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>

      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${
          theme === "light" && "bg-white"
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          {name}.
        </h1>
        <div className="flex">
          {isResume ? (
            <Button onClick={() => router.push("/")}>Home</Button>
          ) : (
            <>
              <Button onClick={handleWorkScroll}>Work</Button>
              <Button onClick={handleAboutScroll}>About</Button>
            </>
          )}
          {showResume && (
            <Button onClick={() => router.push("/resume")} classes="first:ml-1">
              Resume
            </Button>
          )}
          <Button onClick={() => window.open("mailto:hello@chetanverma.com")}>
            Contact
          </Button>
          {mounted && theme && data.darkMode && (
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Image
                loader={myLoader}
                className="h-6"
                src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                alt="Theme toggle"
                width={24} // Recommended for layout='intrinsic' or 'fixed'
                height={24} // Recommended for layout='intrinsic' or 'fixed'
              />
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
