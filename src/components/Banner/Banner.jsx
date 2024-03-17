import './banner.css'

const Banner = () => {
    return (
        <div id="banner" className="hero mt-12 rounded-3xl overflow-hidden  bg-no-repeat  h-[600px]">
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-2xl lg:text-5xl font-bold">Discover an exceptional cooking <br /> class tailored for you!</h1>
      <p className="mb-5 lg:max-w-[700px]">Unleash your culinary potential with our personalized cooking class, Indulge in a culinary adventure personalized just, designed exclusively for you! Discover a world of exceptional flavors and skills tailored to your taste and preferences.</p>
      <div className=" pb-4 flex justify-center gap-7"><button className="btn bg-[#0BE58A] text-xl font-bold rounded-full border-0">Explore Now</button>
         <button className="btn bg-transparent rounded-full text-white text-xl font-bold ">Our Feedback</button></div>
    </div>
  </div>
</div>
    );
};

export default Banner;