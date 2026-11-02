const Account = () => {
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col gap-[24px] px-[16px] py-[24px] lg:flex-row lg:gap-[32px]">
      <div className="h-fit bg-[#FBFBFB] dark:bg-[#2a2a2a] lg:w-[300px] lg:shrink-0">
        <h2 className="px-[20px] py-[16px] text-[18px] font-bold">
          My Account
        </h2>

        <p className="border-l-[5px] border-[#46A358] px-[20px] py-[12px] font-bold text-[#46A358]">
          Account Details
        </p>
        <p className="px-[20px] py-[12px] text-gray-500">Address</p>
        <p className="px-[20px] py-[12px] text-gray-500">Orders</p>
        <p className="px-[20px] py-[12px] text-gray-500">Wishlist</p>
        <p className="px-[20px] py-[12px] text-gray-500">Reports</p>
        <p className="px-[20px] py-[12px] text-gray-500">Downloads</p>
        <p className="px-[20px] py-[12px] text-gray-500">Support</p>

        <p className="mt-[16px] border-t border-gray-200 px-[20px] py-[16px] font-bold text-[#46A358]">
          Logout
        </p>
      </div>

      <div className="flex-1">
        <h3 className="text-[18px] font-bold">Personal Information</h3>

        <div className="mt-[16px] grid grid-cols-1 gap-[20px] md:grid-cols-2">
          <div>
            <p className="text-[14px]">
              First Name <span className="text-red-500">*</span>
            </p>
            <input className="mt-[8px] h-[40px] w-full border border-gray-200 bg-white" />
          </div>
          <div>
            <p className="text-[14px]">
              Last Name <span className="text-red-500">*</span>
            </p>
            <input className="mt-[8px] h-[40px] w-full border border-gray-200 bg-white" />
          </div>
          <div>
            <p className="text-[14px]">
              Email address <span className="text-red-500">*</span>
            </p>
            <input className="mt-[8px] h-[40px] w-full border border-gray-200 bg-white" />
          </div>
          <div>
            <p className="text-[14px]">
              Phone Number <span className="text-red-500">*</span>
            </p>
            <div className="mt-[8px] flex gap-[8px]">
              <input
                className="h-[40px] w-[80px] border border-gray-200 bg-white p-[5px]"
                placeholder="966+"
              />
              <input className="h-[40px] flex-1 border border-gray-200 bg-white" />
            </div>
          </div>
          <div>
            <p className="text-[14px]">
              Username <span className="text-red-500">*</span>
            </p>
            <input className="mt-[8px] h-[40px] w-full border border-gray-200 bg-white" />
          </div>
          <div>
            <p className="text-[14px]">Photo</p>
            <div className="mt-[8px] flex items-center gap-[16px]">
              <div className="h-[50px] w-[50px] rounded-full bg-[#FBFBFB] dark:bg-[#2a2a2a]" />
              <button className="bg-[#46A358] px-[24px] py-[10px] text-[14px] font-bold text-white">
                Change
              </button>
              <button className="text-[14px]">Remove</button>
            </div>
          </div>
        </div>

        <h3 className="mt-[40px] text-[18px] font-bold">Password change</h3>

        <div className="mt-[16px] flex max-w-[500px] flex-col gap-[20px]">
          <div>
            <p className="text-[14px]">Current password</p>
            <input className="mt-[8px] h-[40px] w-full border border-gray-200 bg-white" />
          </div>
          <div>
            <p className="text-[14px]">New password</p>
            <input className="mt-[8px] h-[40px] w-full border border-gray-200 bg-white" />
          </div>
          <div>
            <p className="text-[14px]">Confirm new password</p>
            <input className="mt-[8px] h-[40px] w-full border border-gray-200 bg-white" />
          </div>
        </div>

        <button className="mt-[40px] bg-[#46A358] px-[24px] py-[12px] text-[14px] font-bold text-white">
          Save Change
        </button>
      </div>
    </div>
  );
};

export default Account;
