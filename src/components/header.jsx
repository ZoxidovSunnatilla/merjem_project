import React from "react"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"


import Select from 'react-select';
const languages = [
  { code: "en", label: "English" },
  { code: "ru", label: "Russian" },
  { code: "uz", label: "Uzbek" }
]

const Header = () => {
  const router = useRouter()

  const { t } = useTranslation()
  const changeLanguage = (lang) => {
    router?.push(router.asPath, router.asPath, { locale: lang.value })
    
  }
  // const options = languages.map((language) => ({
  //   value: language.code,
  //   label: (
  //     <div style={{ display: 'flex', alignItems: 'center' }}>
  //       <img
  //         src={`/images/${language.code}.svg`}
  //         alt={language.label}
  //         style={{ width: '20px', height: '20px', marginRight: '10px' }}
  //       />
  //       {language.label}
  //     </div>
  //   ),
  // }));
  // <Select
  // options={options}
  // onChange={(e) => changeLanguage(e)}
  // defaultValue={options[0]}
  // />
  return (
    <div className="  ">
     

      <a
        href=""
        className="text-base text-costum-blue font-medium py-3 px-4 w-full "
      >
        {t("headerViewAll")}
      </a>


    </div>
  )
}

export default Header
