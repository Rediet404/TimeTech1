
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Footer = () => {
const { t } = useTranslation();
  return (
    <section className="overflow-hidden">
      <div className="font-inter bg-black flex flex-col lg:flex-row flex-wrap py-8 px-10 items-start justify-around mt-24 gap-6 lg:gap-0">
        
        {/* Company Info Section */}
        <div className="text-white w-full lg:w-80 rounded-xl p-2 px-6   mb-4 lg:mb-0" style={{ background: "#776DF2" }}>
          <div className="flex justify-end">
            <img className="w-24" src="src/assets/Logo_large.png" alt="logo" />
          </div>
          <div className="flex items-center">
            <img src="src/assets/Logo_large.png" className="w-8 h-8 m-2" alt="logo" />
            <p className="text-sm font-medium">{t('footer.time_software')}</p>
          </div>
          <p className="text-xs p-2 font-medium">
          {t('footer.header2')}
            </p>
          <div className="flex gap-4 p-2">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.6941 16.1325L20.1254 16.6987C20.1254 16.6987 18.7716 18.0437 15.0779 14.3712C11.3841 10.6987 12.7379 9.35372 12.7379 9.35372L13.0954 8.99622C13.9791 8.11872 14.0629 6.70872 13.2916 5.67872L11.7166 3.57497C10.7616 2.29997 8.91787 2.13122 7.82412 3.21872L5.86162 5.16872C5.32037 5.70872 4.95787 6.40622 5.00162 7.18122C5.11412 9.16497 6.01162 13.4312 11.0166 18.4087C16.3254 23.6862 21.3066 23.8962 23.3429 23.7062C23.9879 23.6462 24.5479 23.3187 24.9991 22.8687L26.7741 21.1037C27.9741 19.9125 27.6366 17.8687 26.1016 17.035L23.7141 15.7362C22.7066 15.19 21.4816 15.35 20.6941 16.1325Z" fill="white" />
            </svg>
            <div className="text-sm">
              <p>+2519934660505</p>
              <p>+251933260505</p>
              <p>+251911375766</p>
            </div>
          </div>
          <div className="flex gap-4 p-2">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_360_204)">
                <path d="M26.9409 4.99999C26.8273 4.98828 26.7128 4.98828 26.5992 4.99999H3.26589C3.11634 5.00229 2.96778 5.02472 2.82422 5.06666L14.8659 17.0583L26.9409 4.99999Z" fill="white" />
                <path d="M28.1741 6.1582L16.0408 18.2415C15.7285 18.552 15.3061 18.7262 14.8658 18.7262C14.4254 18.7262 14.003 18.552 13.6908 18.2415L1.66576 6.24987C1.62879 6.38574 1.60919 6.52574 1.60742 6.66654V23.3332C1.60742 23.7752 1.78302 24.1992 2.09558 24.5117C2.40814 24.8243 2.83206 24.9999 3.27409 24.9999H26.6074C27.0494 24.9999 27.4734 24.8243 27.7859 24.5117C28.0985 24.1992 28.2741 23.7752 28.2741 23.3332V6.66654C28.2675 6.49292 28.2337 6.3214 28.1741 6.1582ZM4.41576 23.3332H3.25742V22.1415L9.31576 16.1332L10.4908 17.3082L4.41576 23.3332ZM26.5908 23.3332H25.4241L19.3491 17.3082L20.5241 16.1332L26.5824 22.1415L26.5908 23.3332Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_360_204">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="text-sm">timetechnologiesplc1@gmail.com</p>
          </div>
        </div>
<div className="flex flex-row lg:gap-60 ">
        {/* Pages Section */}
        <div className="text-white w-full lg:w-auto px-10">
          <h1 className="pb-5">{t('footer.pages')}</h1>
          <p className="py-2"><Link to="/">{t('navbar.home')}</Link></p>
          <p><Link to="/about">{t('navbar.about_us')}</Link></p>
          <p className="py-2"><Link to="/service">{t('navbar.services')}</Link></p>
          <p><Link to="/projects">{t('navbar.projects')}</Link></p>
          <p className="py-2"><Link to="/contact">{t('navbar.contact_us')}</Link></p>
          <div className="flex gap-4 py-4">
            <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_360_213)">

<path d="M42.5979 42.6083H35.1937V31.0063C35.1937 28.2396 35.1375 24.6792 31.3354 24.6792C27.475 24.6792 26.8854 27.6896 26.8854 30.8021V42.6083H19.4812V18.75H26.5938V22.0021H26.6896C27.6833 20.1271 30.1 18.1479 33.7104 18.1479C41.2125 18.1479 42.6 23.0854 42.6 29.5125L42.5979 42.6083ZM11.1187 15.4854C10.5538 15.4862 9.99416 15.3755 9.47207 15.1595C8.94998 14.9436 8.47567 14.6267 8.07635 14.2269C7.67703 13.8272 7.36057 13.3526 7.14512 12.8303C6.92966 12.308 6.81946 11.7483 6.82083 11.1833C6.82125 10.3329 7.07384 9.50163 7.54667 8.79473C8.0195 8.08783 8.69134 7.53701 9.47722 7.21194C10.2631 6.88686 11.1277 6.80213 11.9618 6.96845C12.7958 7.13477 13.5618 7.54467 14.1629 8.14633C14.7639 8.74799 15.1731 9.51437 15.3386 10.3486C15.5041 11.1828 15.4186 12.0473 15.0927 12.8329C14.7669 13.6184 14.2154 14.2897 13.5081 14.7619C12.8007 15.234 11.9692 15.4858 11.1187 15.4854ZM14.8312 42.6083H7.40625V18.75H14.8312V42.6083ZM46.3021 0H3.68958C1.65 0 0 1.6125 0 3.60208V46.3979C0 48.3896 1.65 50 3.68958 50H46.2958C48.3333 50 50 48.3896 50 46.3979V3.60208C50 1.6125 48.3333 0 46.2958 0H46.3021Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_360_213">
        <rect width="50" height="50" fill="white"/>
        </clipPath>
        </defs>
            </svg>
            <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_360_215)">
        <path d="M24.8833 0C18.2732 0.0308478 11.9442 2.67838 7.28103 7.36345C2.61783 12.0485 -7.19772e-05 18.3898 1.48424e-09 25C1.48425e-09 31.6304 2.63392 37.9893 7.32233 42.6777C12.0107 47.3661 18.3696 50 25 50C31.6304 50 37.9893 47.3661 42.6777 42.6777C47.3661 37.9893 50 31.6304 50 25C50 18.3696 47.3661 12.0107 42.6777 7.32233C37.9893 2.63392 31.6304 0 25 0L24.8833 0ZM35.2208 15.05C35.4292 15.0458 35.8896 15.0979 36.1896 15.3417C36.3899 15.514 36.5173 15.756 36.5458 16.0187C36.5792 16.2125 36.6208 16.6562 36.5875 17.0021C36.2125 20.9562 34.5833 30.5479 33.7542 34.975C33.4042 36.85 32.7146 37.4771 32.0458 37.5375C30.5958 37.6729 29.4937 36.5792 28.0875 35.6583C25.8875 34.2146 24.6437 33.3167 22.5083 31.9083C20.0396 30.2833 21.6396 29.3875 23.0458 27.9292C23.4146 27.5458 29.8104 21.7271 29.9354 21.2C29.95 21.1333 29.9646 20.8875 29.8187 20.7583C29.6729 20.6292 29.4562 20.6729 29.3 20.7083C29.0792 20.7597 25.5646 23.0826 18.7563 27.6771C17.7563 28.3646 16.8521 28.6979 16.0438 28.6771C15.1521 28.6604 13.4354 28.175 12.1583 27.7604C10.5917 27.25 9.34792 26.9812 9.45625 26.1167C9.51181 25.6667 10.1319 25.2062 11.3167 24.7354C18.6042 21.5604 23.4639 19.4674 25.8958 18.4562C32.8375 15.5687 34.2812 15.0667 35.2208 15.05Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_360_215">
        <rect width="50" height="50" fill="white"/>
        </clipPath>
        </defs>
            </svg>
          </div>
        </div>

        {/* Services Section */}
        <div className="text-white w-full lg:w-auto  px-10">
          <p className="pb-4">{t('footer.services')}</p>
          <p className="py-1">{t('footer.services_list.1')}</p>
          <p>{t('footer.services_list.2')}</p>
          <p className="py-1">{t('footer.services_list.3')}</p>
          <p>{t('footer.services_list.4')}</p>
          <p className="py-1">{t('footer.services_list.5')}</p>
          <p>{t('footer.services_list.6')}</p>
        </div></div>
      </div>
    </section>
  );
};

export default Footer;