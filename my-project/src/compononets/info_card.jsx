import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
export const Info_card = () => {
  const { t } = useTranslation(); 
  return (
    <>
    <div className="flex justify-center ">
      <div className="rounded-2xl text-white flex-wrap justify-between px-10  flex h-fit p-4 w-10/12  items-center" style={{background: "#776DF2"}}>
        <div>
            <h1 className="sm:text-4xl text-xl font-inter font-normal">{t('info_card.1')} <br /> {t('info_card.1.5')}</h1>
            <p className="font-light sm:text-xl font-inter py-5">{t('info_card.2')} </p>
            <Link to="/contact"><button className="bg-black rounded-2xl w-36 h-8 text-white text-sm shadow-md">{t('info_card.3')}  </button></Link>
        </div>
        <div>
          <img className="w-64 h-48 " src="src/assets/learning.png" alt="decorative image" />
        </div>
      </div>
      </div>
    </>
  )
}
