import React from 'react';

// images
import Mobile from 'images/illustration-editor-mobile.svg';
import Desktop from 'images/illustration-editor-desktop.svg';

const EditorSection = () => {
  return (
    <div className="pt-24 md:pt-36 px-6 text-body-text text-sm md:text-base text-center md:text-left overflow-hidden">
      <section className="container mx-auto">
        <h2 className="text-2xl md:text-5xl text-dark-blue mb-9 text-center relative z-10">
          Designed for the future
        </h2>
        {/* grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {/* Mobile bottom, desktop left */}
          <div className="order-2 md:order-1 max-w-md mx-auto md:mx-0">
            <div className="mb-9 md:mb-16">
              <h3 className="text-dark-blue text-xl md:text-3xl mb-5">
                Introducing an extensible editor
              </h3>
              <p>
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, videos, and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionality or
                change the looks of a blog.
              </p>
            </div>
            <div>
              <h3 className="text-dark-blue text-xl md:text-3xl mb-5">
                Robust content management
              </h3>
              <p>
                Flexible content management enables users to easily move through
                posts. Increase the usability of your blog by adding customized
                categories, sections, format, or flow. With this functionality,
                you’re in full control.
              </p>
            </div>
          </div>
          {/* mobile top, desktop right */}
          <div className="order-1 md:order-2 max-w-xs mx-auto md:max-w-none relative md:-right-8 md:-top-8 xl:-right-1/3 xl:-top-1/4">
            <img
              src={Mobile}
              alt="Illustration of the editor"
              className="block md:hidden"
            />
            <img
              src={Desktop}
              alt="Illustration of the editor"
              className="hidden md:block"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditorSection;
