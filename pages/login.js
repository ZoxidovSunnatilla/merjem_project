import React, { useState } from "react"

import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import EPSProvider from "@/src/hooks/EPSProvider"
import Login from "@/src/components/Login"
import SelectRole from "@/src/components/Login/SelectRole"
import Registration from "@/src/components/Login/Registration"
const LoginPage = () => {
  const [role, setRole] = useState()
  const [values, setValues] = useState({
    is_24_7: true,
  })
  return (
    <>

      {!role && <SelectRole setRole={(e) => setRole(e)} />}
      {!values?.data && (role === "buyer" || role === "seller") && (
        <div className="  flex justify-center items-center  min-h-[100vh] w-full  bg-[#F7F7FC]">
          <div className="w-[80%] mx-auto  flex justify-center items-center pb-20">
            <Login
              setRole={(e) => setRole(e)}
              role={role}
              setValues={setValues}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default LoginPage

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "login"])),
    },
  }
}
{/* <div className="bg-[#F7F7FC] ">
<div className="w-[80%] mx-auto"> */}