import TeamSection from '../compononets/team';
import { useTranslation } from 'react-i18next';
const About = () => {
  const { t } = useTranslation();
  return (
    <section className=" overflow-hidden py-14  ">
      <div
        className="flex overflow-hidden justify-evenly sm:h-2/5 h-3/5 absolute w-full font-inter items-start"
        style={{ background: '#776DF2' }}
      >
        <p className="text-white font-inter font-normal text-3xl ml-5 mt-14">
          {t('about.1')}<br />{t('about.2')}
                  </p>
        <img
          className="w-80"
          src="/images/industry.png"
          alt="decorative image"
        />
        <img
          className=" h-52"
          src="/images/settings.png"
          alt="decorative image"
        />
        <img
          className="w-72"
          src="/images/strategy.png"
          alt="decorative image"
        />
      </div>
      <div className="flex sm:justify-around justify-center flex-wrap p-4 rounded-md">
        <div className="w-80 h-36 relative mt-48  bg-white bg-opacity-100 z-20  flex  max-w-sm rounded-xl overflow-hidden shadow-lg">
          <div className="bg-purple-50 rounded-full w-14 h-14 p-2 m-5 flex basis-10 justify-center items-center">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.33398 10.4167C8.33398 8.86675 8.33398 8.09175 8.52148 7.45841C8.73785 6.7226 9.13542 6.05284 9.67775 5.51051C10.2201 4.96818 10.8898 4.57062 11.6257 4.35425C12.259 4.16675 13.034 4.16675 14.584 4.16675H29.1673C30.7173 4.16675 31.4923 4.16675 32.1257 4.35425C32.8615 4.57062 33.5312 4.96818 34.0736 5.51051C34.6159 6.05284 35.0134 6.7226 35.2298 7.45841C35.4173 8.09175 35.4173 8.86675 35.4173 10.4167C35.4173 11.9667 35.4173 12.7417 35.2298 13.3751C35.0134 14.1109 34.6159 14.7807 34.0736 15.323C33.5312 15.8653 32.8615 16.2629 32.1257 16.4792C31.4923 16.6667 30.7173 16.6667 29.1673 16.6667H14.584C13.034 16.6667 12.259 16.6667 11.6257 16.4792C10.8898 16.2629 10.2201 15.8653 9.67775 15.323C9.13542 14.7807 8.73785 14.1109 8.52148 13.3751C8.33398 12.7417 8.33398 11.9667 8.33398 10.4167ZM25.0007 36.4584C25.0007 35.4876 25.0007 35.0022 25.159 34.6188C25.3709 34.1094 25.7762 33.7048 26.2861 33.4938C26.6694 33.3334 27.1548 33.3334 28.1257 33.3334C29.0965 33.3334 29.5819 33.3334 29.9652 33.4918C30.4747 33.7036 30.8793 34.109 31.0902 34.6188C31.2507 35.0022 31.2507 35.4876 31.2507 36.4584V42.7084C31.2507 43.6793 31.2507 44.1647 31.0923 44.548C30.8804 45.0575 30.4751 45.4621 29.9652 45.673C29.5819 45.8334 29.0965 45.8334 28.1257 45.8334C27.1548 45.8334 26.6694 45.8334 26.2861 45.6751C25.7766 45.4632 25.372 45.0578 25.1611 44.548C25.0007 44.1647 25.0007 43.6793 25.0007 42.7084V36.4584Z"
                stroke="#7D75FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M35.9354 10.4167C37.7167 10.4167 38.6062 10.4167 39.3104 10.7334C41.6604 11.7959 41.6667 14.2959 41.6667 16.6751C41.6667 18.6688 41.6667 19.6647 41.3958 20.5042C40.5229 23.2042 36.9562 24.5167 33.5083 25.4938C31.0437 26.1938 29.8104 26.5417 28.9667 27.6584C28.125 28.773 28.125 30.0813 28.125 32.7001V33.3334"
                stroke="#7D75FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className=" py-5">
            <div className="font-medium text-xl mb-2">{t('about.creativity')}</div>
            <p className="text-base pt-4">
                {t('about.creativity_detail')}
            </p>
          </div>
        </div>
        <div className="relative sm:mt-48 mt-4 bg-white bg-opacity-100 z-20  w-80 h-36 flex  max-w-sm rounded-xl overflow-hidden shadow-lg">
          <div className="bg-yellow-50 rounded-full w-14 h-14 p-2 m-3 flex basis-10 justify-center items-center">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_296_463)">
                <path
                  d="M25.2149 0.00010449C26.0336 0.00010449 26.8399 0.0532295 27.5899 0.178229C28.3288 0.273414 29.0577 0.434472 29.768 0.659479C30.4763 0.871979 31.1784 1.14594 31.8742 1.48135C32.5524 1.80323 33.2492 2.19698 33.9461 2.6251C35.1242 3.3751 36.2836 3.98135 37.4649 4.46573C39.7897 5.39836 42.249 5.95226 44.7492 6.10635C46.0138 6.2001 47.3232 6.24802 48.6774 6.2501V18.7501C48.6774 21.123 48.3742 23.3793 47.768 25.5189C47.1855 27.632 46.358 29.6698 45.3024 31.5907C44.2512 33.5091 43.0073 35.3153 41.5899 36.9814C40.1516 38.6861 38.5934 40.286 36.9274 41.7689C35.2378 43.2542 33.4606 44.6369 31.6055 45.9095C29.7472 47.2011 27.8784 48.3918 25.9992 49.4814L25.2492 49.9282L24.4992 49.4814C22.5716 48.3657 20.6889 47.1741 18.8555 45.9095C16.9904 44.6506 15.2124 43.2672 13.5336 41.7689C11.8686 40.2859 10.3115 38.686 8.87423 36.9814C7.46158 35.3075 6.21215 33.5024 5.14298 31.5907C4.1063 29.6608 3.27969 27.6252 2.67736 25.5189C2.0713 23.3141 1.77058 21.0366 1.78361 18.7501V6.2501C3.13778 6.24802 4.44819 6.2001 5.71486 6.10635C6.96399 6.02144 8.20499 5.84282 9.42736 5.57198C10.6242 5.30323 11.8211 4.94698 12.9992 4.46573C14.2214 3.97169 15.3935 3.36161 16.4992 2.64385C17.8742 1.7501 19.268 1.09073 20.643 0.656354C22.1239 0.202884 23.6662 -0.0184897 25.2149 0.00010449ZM45.5336 9.32198C43.1682 9.2062 40.8248 8.81074 38.5524 8.14385C36.2928 7.46807 34.1402 6.47594 32.1586 5.19698C31.1305 4.52388 30.0149 3.99499 28.843 3.6251C27.6717 3.27185 26.4539 3.09697 25.2305 3.10635C23.998 3.09884 22.7712 3.27365 21.5899 3.6251C20.4166 3.98396 19.3026 4.5136 18.2836 5.19698C16.2979 6.48164 14.1399 7.47803 11.8742 8.15635C9.65965 8.8001 7.33778 9.19385 4.90861 9.3376V18.7657C4.90861 20.8345 5.17736 22.822 5.71486 24.7282C6.26292 26.6208 7.01745 28.4475 7.96486 30.1751C8.924 31.9206 10.0546 33.5662 11.3399 35.0876C12.643 36.622 14.0336 38.0501 15.5336 39.4064C17.0336 40.7626 18.6055 42.0189 20.2492 43.1751C21.9096 44.3334 23.5701 45.3928 25.2305 46.3532C26.9304 45.3653 28.5871 44.305 30.1961 43.1751C31.8527 42.022 33.4331 40.7632 34.9274 39.4064C36.4274 38.0501 37.8211 36.622 39.1242 35.0876C40.4095 33.5662 41.5401 31.9206 42.4992 30.1751C43.4419 28.4493 44.1852 26.622 44.7149 24.7282C45.2693 22.7896 45.5449 20.782 45.5336 18.7657V9.32198Z"
                  fill="#FFD67A"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M36.8648 14.7157L35.4898 13.5344L34.2211 13.6438L20.5961 29.7313L15.9555 23.1063L14.7055 22.8938L13.2586 23.9282L13.043 25.1782L19.0086 33.6969L19.6867 34.0719L21.1148 34.1594L21.8461 33.8407L36.9555 15.9813L36.8648 14.7157Z"
                  fill="#FFD67A"
                />
              </g>
              <defs>
                <clipPath id="clip0_296_463">
                  <rect width="50" height="50" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="py-5">
            <div className="font-medium text-xl mb-2 ">  {t('about.credibility')}</div>
            <p className="text-base pt-4 ">
            {t('about.credibility_detail1')} <br />{t('about.credibility_detail2')}
            </p>
          </div>
        </div>
        <div className="relative sm:mt-48 mt-4 bg-white bg-opacity-100 z-20  w-80 h-36 flex  max-w-sm rounded-xl overflow-hidden shadow-lg">
          <div className="bg-green-50 rounded-full w-14 h-14 p-2 m-3 flex basis-10 justify-center items-center">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.1874 37.5H32.8124V40.625H17.1874V37.5ZM20.3124 43.75H29.6874V46.875H20.3124V43.75ZM24.9999 3.125C20.8559 3.125 16.8816 4.7712 13.9514 7.70146C11.0211 10.6317 9.3749 14.606 9.3749 18.75C9.26923 21.0208 9.70423 23.2843 10.6441 25.3542C11.584 27.4241 13.0019 29.2413 14.7811 30.6563C16.3436 32.1094 17.1874 32.9375 17.1874 34.375H20.3124C20.3124 31.5 18.578 29.8906 16.8905 28.3438C15.4301 27.2254 14.2663 25.7661 13.5008 24.0935C12.7353 22.4209 12.3917 20.5862 12.4999 18.75C12.4999 15.4348 13.8169 12.2554 16.1611 9.91117C18.5053 7.56696 21.6847 6.25 24.9999 6.25C28.3151 6.25 31.4945 7.56696 33.8387 9.91117C36.1829 12.2554 37.4999 15.4348 37.4999 18.75C37.6063 20.5876 37.2602 22.4232 36.492 24.0958C35.7238 25.7685 34.5569 27.2271 33.0936 28.3438C31.4218 29.9062 29.6874 31.4688 29.6874 34.375H32.8124C32.8124 32.9375 33.6405 32.1094 35.2186 30.6406C36.9967 29.2281 38.4139 27.4136 39.3538 25.3464C40.2937 23.2792 40.7293 21.0184 40.6249 18.75C40.6249 16.6981 40.2207 14.6663 39.4355 12.7706C38.6503 10.8749 37.4994 9.15237 36.0484 7.70146C34.5975 6.25054 32.875 5.09961 30.9793 4.31438C29.0836 3.52915 27.0518 3.125 24.9999 3.125Z"
                fill="#48DBC2"
              />
            </svg>
          </div>
          <div className=" py-5">
            <div className="font-medium text-xl mb-2">{t('about.curiosity')}</div>
            <p className="text-base pt-4">
            {t('about.curiosity_detail')} 
            </p>
          </div>
        </div>
      </div>
      <div className=" flex my-14 gap-5 flex-wrap-reverse   justify-evenly">
        <div className="flex  flex-col justify-evenly gap-5">
          <img
            className="h-60"
            src="/images\Lettering.png"
            alt="decorative image"
          />
          <div className="h-60 w-[400px] justify-center max-sm:px-8 flex flex-col">
            <h1 className="font-semibold py-2 text-lg ">{t('about.intro')} </h1>
            <p>
             
              {t('about.intro_detail')}
            </p>
          </div>
          <img
            className="h-60"
            src="/images/Ai.png"
            alt="decorative image"
          />
          <div className="h-60 w-[400px] justify-center max-sm:px-8 flex flex-col">
            <h1 className="font-semibold py-2 text-lg">{t('about.commitment')} </h1>
            <p>
            {t('about.commitment_detail')} 
            </p>
          </div>
          <img
            className="h-60 w-72"
            src="/images/space.png"
            alt="decorative image"
          />
          <div className="h-60 w-[400px] justify-center max-sm:px-8 flex flex-col">
            <h1 className="font-semibold py-2 text-lg">{t('about.vision')} </h1>
            <p>
            {t('about.vision_detail')}
            </p>
          </div>
        </div>
        <div className="hidden sm:flex flex-col justify-evenly  ">
          <svg
            width="33"
            height="200"
            viewBox="0 0 33 511"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-0.000262418 396.461L29.0749 340.191L-0.000259389 283.87L29.0749 227.549L-0.00025636 171.279L29.0749 114.957L-0.00025333 58.6871L29.9762 0.688476L32.1277 4.09418L3.92489 58.6871L33 114.957L3.92489 171.279L33 227.549L3.92488 283.87L33 340.191L3.92488 396.461L33 452.732L3.05262 510.73L0.871988 507.325L29.0748 452.732L-0.000262418 396.461Z"
              fill="#5D328F"
              fillOpacity="0.2"
            />
          </svg>
          <svg
            width="33"
            height="200"
            viewBox="0 0 33 511"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-0.000262418 396.461L29.0749 340.191L-0.000259389 283.87L29.0749 227.549L-0.00025636 171.279L29.0749 114.957L-0.00025333 58.6871L29.9762 0.688476L32.1277 4.09418L3.92489 58.6871L33 114.957L3.92489 171.279L33 227.549L3.92488 283.87L33 340.191L3.92488 396.461L33 452.732L3.05262 510.73L0.871988 507.325L29.0748 452.732L-0.000262418 396.461Z"
              fill="#5D328F"
              fillOpacity="0.2"
            />
          </svg>
          <svg
            width="33"
            height="200"
            viewBox="0 0 33 511"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-0.000262418 396.461L29.0749 340.191L-0.000259389 283.87L29.0749 227.549L-0.00025636 171.279L29.0749 114.957L-0.00025333 58.6871L29.9762 0.688476L32.1277 4.09418L3.92489 58.6871L33 114.957L3.92489 171.279L33 227.549L3.92488 283.87L33 340.191L3.92488 396.461L33 452.732L3.05262 510.73L0.871988 507.325L29.0748 452.732L-0.000262418 396.461Z"
              fill="#5D328F"
              fillOpacity="0.2"
            />
          </svg>
          <svg
            width="33"
            height="200"
            viewBox="0 0 33 511"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-0.000262418 396.461L29.0749 340.191L-0.000259389 283.87L29.0749 227.549L-0.00025636 171.279L29.0749 114.957L-0.00025333 58.6871L29.9762 0.688476L32.1277 4.09418L3.92489 58.6871L33 114.957L3.92489 171.279L33 227.549L3.92488 283.87L33 340.191L3.92488 396.461L33 452.732L3.05262 510.73L0.871988 507.325L29.0748 452.732L-0.000262418 396.461Z"
              fill="#5D328F"
              fillOpacity="0.2"
            />
          </svg>
        </div>
        <div className="flex  flex-col flex-wrap gap-5 justify-evenly">
          <div className="h-60 max-sm:pl-5">
            <p className="text-start">{t('about.about')} </p>
            <h1 className="font-medium text-5xl">
            {t('about.title1')}<br />
            {t('about.title2')} <br /> 
            {t('about.title3')}
            </h1>
          </div>
          <img
            className="h-60"
            src="/images/Planet.png"
            alt="decorative image"
          />
          <div className="h-60 w-[400px] justify-center max-sm:px-8 flex flex-col">
            <h1 className="font-semibold py-2 text-lg">
            {t('about.evolution')}
            </h1>
            <p>
            {t('about.evolution_detail')}
            </p>
          </div>
          <img
            className="h-64"
            src="/images/unlocked.png"
            alt="decorative image"
          />
          <div className="h-60 w-[400px] justify-center max-sm:px-8 flex flex-col">
            <h1 className="font-semibold py-2 text-lg">{t('about.mission')}</h1>
            <p>
            {t('about.mission_detail')}
            </p>
          </div>
          <img
           
            src="/images/lace.png"
            className="h-52 w-72  max-sm:hidden"
            alt="decorative image"
          />
        </div>
      </div>

      <div className="flex justify-evenly items-center flex-wrap bg-gray-50 h-fit">
        <div className="py-3">
          <h1 className="font-medium text-3xl">10+</h1>
          <p>{t('about.clients')}</p>
        </div>
        <div className="py-2">
          <h1 className="font-medium text-3xl">100%</h1>
          <p>{t('about.succession')}</p>
        </div>
        <div className="py-2">
          <h1 className="font-medium text-3xl">20+</h1>
          <p>{t('about.years')}</p>
        </div>
        <div className="py-3">
          <h1 className="font-medium text-3xl">24/7</h1>
          <p>{t('about.customer_support')}</p>
        </div>
      </div>
      <div className="flex justify-center items-center w-screen my-14">
        <div className="w-9/12">
          <p className="text-start flex-wrap">
          {t('about.detail')}
          </p>
        </div>
      </div>
      <TeamSection />

      <div className="my-5"></div>
    </section>
  );
};

export default About;
