
import React from 'react';

const VideoTutorial: React.FC = () => {
  return (
    <section id="video" className="scroll-mt-20">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center items-center py-16 px-4 sm:px-6 lg:px-8">
          <div className="layout-content-container flex w-full max-w-5xl flex-col items-center gap-8">
            {/* SectionHeader */}
            <div className="w-full flex flex-col items-center gap-2">
              <h2 className="text-[#212529] dark:text-white/90 text-sm font-bold leading-normal tracking-widest uppercase text-center text-primary">
                Video Tutorial y Demostración
              </h2>
              <h3 className="text-[#212529] dark:text-white text-3xl md:text-4xl font-bold text-center">
                Mira cómo funciona nuestro sistema
              </h3>
            </div>
            {/* MediaPlayer */}
            <div className="w-full max-w-4xl">
              <div
                className="relative flex items-center justify-center bg-gray-800 bg-cover bg-center aspect-video rounded-xl shadow-lg"
                data-alt="A stylized thumbnail showing a preview of the eco-fashion system tutorial."
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCwFLDZl_R6lvs3H58_pqbZFEPlecxCffwJvzweRW6UkQJcFiVWMTKzHW_Lu06c17HY0OJuVx9FRUc0vtWoDdo3b1heUm410BcQAJNCkke3zwwzQOyCpMQDSjhP3ktdZpBmP7mVVVesGP5t4lh0v1g6oTQkJw0KUlyn_sz_8neSbXyajiUhTiP21SAvB3eK-oS6BQr1QnD4HwXwOyj1vaM39MB3Z-QZLVBqAk4lKFH9rwIbYvTWfLxuvAl4IsIojqwx3dwsDNQCLDUH")',
                }}
              >
                <button className="flex shrink-0 items-center justify-center rounded-full size-20 bg-primary/80 text-white backdrop-blur-sm transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-primary/50">
                  <span className="material-symbols-outlined text-5xl">play_arrow</span>
                </button>
                <div className="absolute inset-x-0 bottom-0 px-4 sm:px-6 py-4 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="flex h-4 items-center justify-center gap-1">
                    <div
                      className="h-1 flex-1 rounded-full bg-white/90"
                      style={{ flexBasis: '30%' }}
                    ></div>
                    <div className="relative h-1" style={{ flexBasis: '70%' }}>
                      <div className="absolute -left-2 -top-1.5 size-4 rounded-full bg-white shadow"></div>
                      <div className="h-full rounded-full bg-white/40"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-white text-xs font-medium leading-normal tracking-[0.015em]">
                      0:37
                    </p>
                    <p className="text-white text-xs font-medium leading-normal tracking-[0.015em]">
                      2:23
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTutorial;
