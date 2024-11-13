
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function Hero() {
  const { t } = useTranslation();
  return ( 
    <section className="text-center py-20 bg-white w-[90%] mx-auto">
      <h1 className="sm:text-5xl text-4xl font-bold text-black mb-2">
        {t('hero.header')}
      </h1>
      <h1 className="sm:text-5xl text-3xl font-bold text-black mb-8">
        {t('hero.header2')}
      </h1>
      <p className="text-lg text-black lg:w-[50%] m-auto  text-blackgray-600 mb-8 ">
       {t('hero.paragraph')}
      </p>
      <div className="flex  lg:flex-row justify-center space-x-4 mb-8">
       <Link to='/contact'><button className="bg-black text-white sm:px-4 px-4 py-3  rounded-full">{t('hero.get_consultation')}</button></Link>
       <Link to='/service'><button className="text-black border border-black sm:px-6 px-4 py-3 rounded-full">{t('hero.explore_services')}</button></Link>
      </div>
      <div className="flex justify-center w-full">
        {/* Replace with actual paths to the images */}
        <img src="/images/hero1.png" alt="Design Mockup" className="w-[30%] h-auto" />
        <img src="/images/hero2.png" alt="Design Mockup" className="w-[30%] h-auto" />
        <img src="/images/hero3.png" alt="Design Mockup" className=" w-[30%]  h-auto" />
      </div>
    </section>
  );
}

export default Hero;
