export default function ChatMockup({ justify, styles, text }) {
  return (
    <section className={`flex w-full ${justify}`}>
      <article
        className={`max-w-[65%] rounded-2xl ${styles} p-3 text-[0.625rem]`}
      >
        {text}
      </article>
    </section>
  );
}
