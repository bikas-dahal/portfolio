import React from 'react';
import { Card } from "@/components/ui/card";

const BentoVideoGrid = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-2 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Featured Video - Spans 2 columns on larger screens */}
        <Card className="md:col-span-2 aspect-video bg-slate-100 rounded-xl overflow-hidden">
          <div className="w-full h-full flex items-center justify-center bg-slate-200">
            <p className="text-slate-600">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/4Pp5mWs8k5I?si=_QtNf4cMBfVY0jl0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </p>
          </div>
        </Card>

        {/* Regular sized videos */}
        <Card className="aspect-video bg-slate-100 rounded-xl overflow-hidden">
          <div className="w-full h-full flex items-center justify-center bg-slate-200">
            <p className="text-slate-600">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/v4H2fTgHGuc?si=RewHqCFo6qfqr1CO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </p>
          </div>
        </Card>

        <Card className="aspect-video bg-slate-100 rounded-xl overflow-hidden">
          <div className="w-full h-full flex items-center justify-center bg-slate-200">
            <p className="text-slate-600"><iframe width="560" height="315" src="https://www.youtube.com/embed/n_LwI2OQHh8?si=lJTfA2PkilzeFljl" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BentoVideoGrid;