import React from "react";

const Loading = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bglight px-4 text-txt-primary dark:bg-bgdark dark:text-txt-primary-dark">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl dark:bg-secondary/10" />
      </div>

      <section className="relative z-10 w-full max-w-xl text-center">
        <p className="text-xs tracking-[0.28em] text-txt-secondary dark:text-txt-secondary-dark">
          DECORAHUB
        </p>

        <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
          Preparing your experience
        </h1>

        <p className="mt-3 text-sm text-txt-secondary dark:text-txt-secondary-dark sm:text-base">
          Loading page content and essential data.
        </p>

        <div className="mx-auto mt-8 h-12 w-12 animate-spin rounded-full border-4 border-secondary/25 border-t-primary dark:border-secondary/20 dark:border-t-secondary" />

        <div className="mt-8 overflow-hidden rounded-full bg-secondary/15 dark:bg-secondary/20">
          <div className="h-1.5 w-1/3 animate-[progress_1.25s_ease-in-out_infinite] rounded-full bg-primary dark:bg-secondary" />
        </div>
      </section>

      <style >{`
        @keyframes progress {
          0%,
          100% {
            transform: translateX(0%);
          }
          50% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </main>
  );
};

export default Loading;