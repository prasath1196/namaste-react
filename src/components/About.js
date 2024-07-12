import UserClass from "./UserClass";

const About = () => {
  return (
    <div className='flex justify-center m-10'>
      <div className='h-[600px] w-[300px] rounded-lg border-s-gray-200 shadow-md'>
        <div className='content'>
          <div className='name'>This is from function component</div>
          {}
        </div>
      </div>
      <UserClass data='This data is passed as props' />;
    </div>
  );
};

export default About;
