import people from '../../assets/people.svg'
export const People = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <img src={people} alt="" />
      <div className="w-2 h-2 rounded-full text-center bg-[#48FF4E] "></div>
      <p className="text-[#6E6E6E] text-sm">200+ people joined already!</p>
    </div>
  );
};
