import { useRouter } from "next/router"
import React, { useState } from "react"

function Language() {
  const router = useRouter()
  const [langToggle, setLangToggle] = useState(false)
  const languages = [{ code: "en" }, { code: "ru" }, { code: "uz" }]
  const changeLanguage = async (lang) => {
   
    router.push(router.asPath, router.asPath, { locale: lang })
    //  Cookies.set("NEXT_LOCALE", lang, { expires: 3 })
    // save lang to cookie
  }
  return (
    <div
      className="relative "
      onClick={() => setLangToggle(!langToggle)}
      onMouseEnter={() => setLangToggle(!langToggle)}
      onMouseLeave={() => setLangToggle(false)}
    >
      <div
        className={
          "flex items-center relative text-voltiva-500  cursor-pointer"
        }
      >
        <span className="ml-1 sm:font-bold uppercase sm:text-base text-xs">
          {router.locale}
        </span>
      </div>
      {langToggle && (
        <ul className="z-50  absolute top-full sm:left-0 bg-white shadow ">
          {languages?.map((language, index) => (
            <li
              key={index}
              onClick={() => changeLanguage(language.code)}
              className={`${
                router.locale === language.code
                  ? "bg-customYellow text-voltiva-500"
                  : "bg-customGrey-hover text-gray-500 text-customBlue1-hover"
              } cursor-pointer text-sm p-1.5 sm:px-2 border-b flex flex-row justify-between items-center `}
            >
             
              <span>{language.code}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Language
