import React from "react";

function NewsSkeleton() {
  return (
    <div className="
      relative block 
      bg-white border-4 border-slate-100 rounded-xl 
      p-5 mb-5 mx-auto max-w-2xl w-full
      animate-pulse
    ">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1 w-full">
          <div className="flex items-center gap-2 mb-3">
             <div className="h-6 w-20 bg-slate-200 rounded-md"></div>
             <div className="h-4 w-12 bg-slate-200 rounded-md"></div>
          </div>
          <div className="space-y-2 max-w-[90%]">
             <div className="h-5 bg-slate-200 rounded w-full"></div>
             <div className="h-5 bg-slate-200 rounded w-5/6"></div>
             <div className="h-5 bg-slate-200 rounded w-4/6"></div>
          </div>
        </div>
        <div className="hidden sm:block w-16 h-16 rounded-full bg-slate-200 border-4 border-slate-100 flex-shrink-0"></div>
      </div>
    </div>
  );
}

export default NewsSkeleton;