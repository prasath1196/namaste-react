const ContactUs = () => {
  return (
    <div>
      <h1 className='font-bold text-3xl p-4 m-4'>ContactUs</h1>
      <div className='contact-form w-6/12 mx-auto'>
        <input
          type='text'
          placeholder='Name'
          className='border border-black rounded-sm p-2 m-2'
        ></input>
        <input
          type='text'
          placeholder='Mobile Number'
          className='rounded-sm border border-black p-2 m-2'
        ></input>
        <button
          type='submit'
          className='border border-black rounded-md ml-3 p-2'
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
