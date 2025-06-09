'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const researchTopics = [
  {
    title: "COE – Internet Of Things",
    image: "https://www.dituniversity.edu.in/assets/frontend/images/dit-images/coe1.webp",
    description: "Research on smart devices and interconnected systems.",
  },
  {
    title: "COE – CAIR",
    image: "https://www.dituniversity.edu.in/assets/frontend/images/dit-images/cie2.webp",
    description: "Focus on AI, robotics, and advanced computing.",
  },
  {
    title: "COE - Industrial Automation And Robotics",
    image: "https://www.dituniversity.edu.in/assets/frontend/images/dit-images/coe3.webp",
    description: "Developing next-gen robotics and control systems.",
  },
  {
    title: "COE – Materials And Nano Engineering Research",
    image: "https://www.dituniversity.edu.in/assets/frontend/images/dit-images/coe4.webp",
    description: "Advancing nano-materials for future tech.",
  },
  {
    title: "COE - Land, Air & Water (Environmental Sustainability)",
    image: "https://www.dituniversity.edu.in/assets/frontend/images/dit-images/coe5.webp",
    description: "Research on sustainable development and environment.",
  },
  {
    title: "COE – Advanced Functional Smart Materials Lab",
    image: "https://www.dituniversity.edu.in/assets/frontend/images/dit-images/coe6.webp",
    description: "Innovating smart materials for industrial use.",
  },
];

const ResearchSection = () => {
  return (
    <section id='research' className="border border-white mt-32 mx-4 md:mx-10 mb-10 p-4 md:p-10 backdrop-blur-lg bg-white/10 rounded-lg min-h-[600px]">
      <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">Research</h2>

      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay]}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {researchTopics.map((topic, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center">
              <div className="w-full h-60 rounded-lg overflow-hidden border border-white bg-white/10 hover:scale-105 transition-transform duration-300">
                <img
                  src={topic.image}
                  alt={topic.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 px-2 text-center">
                <h3 className="text-white text-lg font-semibold hover:text-blue-400 transition-colors duration-300">
                  {topic.title}
                </h3>
                <p className="text-white text-sm mt-2">{topic.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ResearchSection;
