'use client';

const campusData = [
  {
    name: 'Classroom',
    image: 'https://www.dituniversity.edu.in/assets/frontend/images/dit-images/classroom.jpg',
  },
  {
    name: 'Lab & Facilities',
    image: 'https://www.dituniversity.edu.in/uploads/home/banner_images/639aa829e6e1e1671079977.webp',
  },
  {
    name: 'Library',
    image: 'https://www.dituniversity.edu.in/uploads/album/1697633968_9b740e39243f9bd89bb2.webp',
  },
  {
    name: 'Auditorium',
    image: 'https://www.dituniversity.edu.in/uploads/album/1727344824_6317ccdf639e6e917253.jpeg',
  },
  {
    name: 'Computing Facility',
    image: 'https://www.dituniversity.edu.in/uploads/album/1697633776_012b1a797b4d3cbcd665.webp',
  },
  {
    name: 'Central Workshop',
    image: 'https://www.dituniversity.edu.in/uploads/album/1697633776_f9fc2c623d301ad26786.webp',
  },
];

const CampusLifeSection = () => {
  return (
    <section id="campuslife" className="border border-white mt-32 mb-20 mx-10 p-10 backdrop-blur-lg bg-white/10 rounded-lg">
      <h2 className="text-5xl font-bold text-white text-center mb-14">Campus Life</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {campusData.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-4">
            <div className="w-full h-60 overflow-hidden rounded-lg border border-white hover:scale-105 transition-transform duration-300">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-white text-xl font-semibold text-center">{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CampusLifeSection;
