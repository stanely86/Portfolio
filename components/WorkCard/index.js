import React from "react";
import Image from 'next/image';

const WorkCard = ({ img, name, description, tag, onClick }) => {
  // Split the tag string into an array of tags, trimming any extra whitespace
  const tags = tag ? tag.split('|').map(t => t.trim()) : [];
  const myLoader = ({ src }) => {
    return `https://example.com/${src}`;
  }; 
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
      onClick={onClick}
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "600px" }}
      >
        <Image
          loader={myLoader}
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
          layout='fill'
        />
      </div>
      <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
      <div className="flex flex-wrap gap-2">
        {tags.map((tagItem, index) => (
          <span
            key={index}
            className="hover:bg-slate-500 w-auto max-w-full bg-gray-700 text-center rounded-md px-2 py-1 my-1 text-white text-sm flex items-center justify-center truncate"
          >
            {tagItem}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WorkCard;
