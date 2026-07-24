import React from "react";

const CategoryItem = ({ componentData }) => {
  const Icon = componentData.img;

  return (
    <div className="group w-full h-[145px] border border-gray-300 rounded-md flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-secondary-color hover:border-secondary-color transition-all duration-300">
      <Icon className="text-5xl group-hover:text-white" />

      <h3 className="font-poppins text-base text-black group-hover:text-white">
        {componentData.name}
      </h3>
    </div>
  );
};

export default CategoryItem;