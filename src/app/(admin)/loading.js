import Spinner from "@/components/Spinner";

const Loading = () => {
  return (
    <section className="p-8 w-full bg-bglight dark:bg-gray-900 dark:text-gray-100">
      <div className="flex items-center justify-center py-20">
        <Spinner className="h-12 w-12 fill-primary" />
      </div>
    </section>
  );
};

export default Loading;
