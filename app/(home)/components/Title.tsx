import React from "react";

function Title({ text, className }: { text: string; className?: string }) {
  return (
    <div className={className}>
      <h1 className="text-3xl font-bold group-hover:text-green-500 transition-all">
        {text}
      </h1>
      <div className="w-40 h-2 bg-green-500 rounded-full translate-y-1"></div>
      <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-5"></div>
    </div>
  );
}

export default Title;
