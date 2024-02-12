const CarListShimmer = () => {
  return (
    <div className="border-[1px] border-red-200 rounded-xl flex flex-col flex-wrap animate-pulse">
      <div className="p-4 border-b-[1px] border-red-200">
        <div className="h-8 bg-gradient-to-r from-red-100 to-red-200 w-3/4 rounded-md mb-2"></div>
        <div className="h-4 bg-gradient-to-r from-red-100 to-red-200 w-1/2 rounded-md"></div>
      </div>
      <div className="pl-4 pt-4 flex">
        <div className="w-96 h-52 rounded-lg bg-gradient-to-r from-red-100 to-red-200 shadow-lg mr-6"></div>
        <div className="ml-6 text-red-700">
          <div className="h-6 bg-gradient-to-r from-red-100 to-red-200 w-20 rounded-md mb-2"></div>
          <div className="pl-4 mt-4 space-y-2 ">
            <div className="flex items-center ">
              <div className="h-4 w-4 bg-gradient-to-r from-red-100 to-red-200 rounded-full"></div>
              <div className="pl-2 h-4 bg-gradient-to-r from-red-100 to-red-200 w-20 rounded-md"></div>
            </div>

            <div className="flex items-center ">
              <div className="h-4 w-4 bg-gradient-to-r from-red-100 to-red-200 rounded-full"></div>
              <div className="pl-2 h-4 bg-gradient-to-r from-red-100 to-red-200 w-20 rounded-md"></div>
            </div>
            <div className="flex items-center">
              <div className="h-4 w-4 bg-gradient-to-r from-red-100 to-red-200 rounded-full"></div>
              <div className="pl-2 h-4 bg-gradient-to-r from-red-100 to-red-200 w-20 rounded-md"></div>
            </div>
            <div className="flex items-center">
              <div className="h-4 w-4 bg-gradient-to-r from-red-100 to-red-200 rounded-full"></div>
              <div className="pl-2 h-4 bg-gradient-to-r from-red-100 to-red-200 w-20 rounded-md"></div>
            </div>
          </div>
        </div>
        <div className="mx-auto flex justify-center items-center gap-4">
          <div className="h-20 w-20 bg-gradient-to-r from-red-100 to-red-200 rounded-lg p-6"></div>
          <div className="h-20 w-20 bg-gradient-to-r from-red-100 to-red-200 rounded-lg p-6"></div>
          <div className="h-20 w-20 bg-gradient-to-r from-red-100 to-red-200 rounded-lg p-6"></div>
        </div>
      </div>
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <p className="h-4 bg-gradient-to-r from-red-100 to-red-200 w-40 rounded-md"></p>
        </div>
        <div className="flex items-center cursor-pointer font-semibold bg-gradient-to-r from-red-100 to-red-200  px-6 py-1.5 rounded-full hover:bg-white hover:text-black font-montserrat text-sm">
          <p className="h-6 bg-gradient-to-r from-red-100 to-red-200 w-24 rounded-md"></p>
          <div className="ml-2 h-6 w-6 bg-gradient-to-r from-red-100 to-red-200 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default CarListShimmer;
