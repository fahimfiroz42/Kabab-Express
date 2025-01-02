import React from 'react';


const SectionCover = ({img,heading,subheading}) => {
    return (
        <div>
             <div className=''>
                        <div
              className="hero "
              style={{
                backgroundImage: `url(${img})`,
                backgroundAttachment:'fixed'
              }}>
             
              <div className="hero-content text-center py-28">
                <div className="max-w-7xl bg-black/40 py-20 px-10 ">
                  <h1 className="mb-5  text-5xl text-white font-bold uppercase">{heading}</h1>
                  <p className="mb-5 text-zinc-200">
                   {subheading}
                  </p>
                
                </div>
              </div>
            </div>
                        
                    </div>

            
        </div>
    );
};

export default SectionCover;