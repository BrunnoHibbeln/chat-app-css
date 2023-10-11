export default function CheckboxMockup({ desc, price }) {
  return (
    <section className="flex w-4/5 flex-row items-center justify-between gap-3 rounded-2xl rounded-bl-md bg-gradient-to-r from-magenta to-violet px-4 py-2">
      <section className="flex flex-row items-center gap-3">
        <div className="border-light-magenta h-5 w-5 rounded-full border "></div>
        <p className="text-[0.625rem] text-grayish">{desc}</p>
      </section>
      <strong className="text-lg font-bold text-grayish">${price}</strong>
    </section>
  );
}
