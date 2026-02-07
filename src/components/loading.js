import Spinner from "@/components/Spinner";

const Loading = () => {
  return (
    <section className="w-full">
      <div className="flex items-center justify-center py-20">
        <Spinner className="h-12 w-12 fill-primary" />
      </div>
    </section>
  );
};

export default Loading;
