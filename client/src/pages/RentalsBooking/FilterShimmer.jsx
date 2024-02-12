const FilterShimmer = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-md shadow-md border-2 border-red-50 text-red-500 animate-pulse">
      <div className="flex justify-between items-center">
        <section className="flex gap-3 items-center">
          <div className="h-8 w-8 bg-gradient-to-r from-red-100 to-red-200 rounded-full"></div>
          <div className="h-6 w-20 bg-gradient-to-r from-red-100 to-red-200 rounded-md"></div>
        </section>
        <section className="cursor-pointer text-red-500">
          <div className="h-6 w-16 bg-gradient-to-r from-red-100 to-red-200 rounded-md"></div>
        </section>
      </div>
      <section className="mt-4">
        <div className="h-6 w-full bg-gradient-to-r from-red-100 to-red-200 rounded-md mb-2"></div>
        <div>
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="h-4 w-4 bg-gradient-to-r from-red-100 to-red-200 rounded-full"></div>
              <div className="h-6 w-20 bg-gradient-to-r from-red-100 to-red-200 rounded-md"></div>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-4">
        <div className="h-6 w-full bg-gradient-to-r from-red-100 to-red-200 rounded-md mb-2"></div>
        <div>
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex gap-2">
              <div className="h-4 w-4 bg-gradient-to-r from-red-100 to-red-200 rounded-full"></div>
              <div className="h-6 w-20 bg-gradient-to-r from-red-100 to-red-200 rounded-md"></div>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-4">
        <div className="h-6 w-full bg-gradient-to-r from-red-100 to-red-200 rounded-md mb-2"></div>
        <div>
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex gap-2">
              <div className="h-4 w-4 bg-gradient-to-r from-red-100 to-red-200 rounded-full"></div>
              <div className="h-6 w-20 bg-gradient-to-r from-red-100 to-red-200 rounded-md"></div>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-4">
        <div className="h-6 w-full bg-gradient-to-r from-red-100 to-red-200 rounded-md mb-2"></div>
        <div>
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex gap-2">
              <div className="h-4 w-4 bg-gradient-to-r from-red-100 to-red-200 rounded-full"></div>
              <div className="h-6 w-20 bg-gradient-to-r from-red-100 to-red-200 rounded-md"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FilterShimmer;
