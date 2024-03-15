

const Banner = () => {
    return (
        <div className="hero mt-12 rounded-3xl overflow-hidden  bg-no-repeat  h-[600px] bg-[url(./assets/banner-image.jpg)]" style={{backgroundImage: '../banner-image.jpg'}}>
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-2xl lg:text-5xl font-bold">Discover an exceptional cooking <br /> class tailored for you!</h1>
      <p className="mb-5 lg:max-w-[700px]">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
      <div className=" pb-4 flex justify-center gap-7"><button className="btn bg-[#0BE58A] text-xl font-bold rounded-full border-0">Explore Now</button>
         <button className="btn bg-transparent rounded-full text-white text-xl font-bold ">Our Feedback</button></div>
    </div>
  </div>
</div>
        // <div className="flex flex-col justify-center items-center">
        //     <h1 className="text-6xl font-bold">Discover an exceptional cooking <br /> class tailored for you!</h1>
        //     <p>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
        //     <div><button className="btn">Explore Now</button>
        //     <button className="btn">Our Feedback</button></div>
            
        // </div>
    );
};

export default Banner;