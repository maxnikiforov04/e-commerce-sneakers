export const Footer = () => {
  return (
    <footer className="bg-footerBg text-xl text-footerTxt">
      <div className="flex justify-between mr-20 ml-20 pt-28 pb-28 leading-loose">
        <div className="font-anton text-4xl text-white leading-normal">
          <div>FIND A STORE</div>
          <div>NIKE JOURNAL</div>
          <div>BECOME A MEMBER</div>
          <div>FEEDBACK</div>
          <div>PROMO CODES</div>
        </div>
        <div>
          <div className="font-anton text-white text-4xl">GET HELP</div>
          <div>Order Status</div>
          <div>Shipping and Delivery</div>
          <div>Returns</div>
          <div>Payment Options</div>
          <div>Contact Us</div>
        </div>
        <div>
          <div className="font-anton text-white text-4xl">ABOUT NIKE</div>
          <div>News</div>
          <div>Careers</div>
          <div>Investors</div>
          <div>Sustainability</div>
        </div>
        <div>
          <div className="font-anton text-white text-4xl">JOIN US</div>
          <div>Nike App</div>
          <div>Nike Run Club</div>
          <div>Nike Training Club</div>
        </div>
        <div>
          <div className="font-anton text-white text-4xl">SOCIAL</div>
          <div className="flex justify-between mt-3">
            <div className="cursor-pointer">
              <img src="/Footer/facebook.svg" alt="" />
            </div>
            <div className="cursor-pointer">
              <img src="/Footer/insta.svg" alt="" />
            </div>
            <div className="cursor-pointer">
              <img src="/Footer/twitter.svg" alt="" />
            </div>
            <div className="cursor-pointer">
              <img src="/Footer/youtube.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="mr-20 ml-20 pt-6 pb-6 flex justify-between items-center">
        <div className="flex justify-between cursor-pointer">
          <img src="/Footer/geolocation.svg" alt="" />
          <div>Australia</div>
        </div>
        <div className="cursor-pointer">Guides</div>
        <div className="cursor-pointer">Terms of Use</div>
        <div className="cursor-pointer">Company Details</div>
        <div className="cursor-pointer">Modern Slavery Act</div>
        <div className="cursor-pointer">Privacy & Cookie Policy</div>
        <div className="cursor-pointer">Cookie Settings</div>
      </div>
    </footer>
  );
};
