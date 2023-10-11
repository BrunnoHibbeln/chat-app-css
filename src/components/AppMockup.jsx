import HeaderMockup from "./HeaderMockup";

export default function AppMockup() {
  return (
    <section className="z-10 h-[35rem] w-72 overflow-hidden rounded-[2rem] border-[11px] border-white bg-grayish shadow-2xl">
      <HeaderMockup />
      <section className="flex w-full justify-start px-2 py-5">
        <article className="text-moderate-violet w-3/5 rounded-2xl rounded-bl-md bg-white p-3 text-xs">
          That sounds great. I’d be happy with that.
        </article>
      </section>
    </section>
  );
}
