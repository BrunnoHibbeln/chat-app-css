import { ChevronUp } from "lucide-react";

import ChatMockup from "./ChatMockup";
import CheckboxMockup from "./CheckboxMockup";
import HeaderMockup from "./HeaderMockup";

export default function AppMockup() {
  return (
    <section className="z-10 h-[40.5rem] w-[18.75rem] overflow-hidden rounded-[2rem] border-[11px] border-white bg-grayish shadow-2xl">
      <HeaderMockup />
      <section className="flex flex-col gap-2 px-2 py-4">
        <ChatMockup
          justify="justify-start"
          styles="chatLeft"
          text="That sounds great. I’d be happy with that."
        />
        <ChatMockup
          justify="justify-start"
          styles="chatLeft"
          text="Could you send over some pictures of your dog, please?"
        />
        <section className="flex w-full flex-row justify-end gap-3">
          <img
            className="h-14 w-14 rounded-lg"
            src="./dog-image-1.jpg"
            alt="Dog Image"
          />
          <img
            className="h-14 w-14 rounded-lg"
            src="./dog-image-2.jpg"
            alt="Dog Image"
          />
          <img
            className="h-14 w-14 rounded-lg"
            src="./dog-image-3.jpg"
            alt="Dog Image"
          />
        </section>
        <ChatMockup
          justify="justify-end"
          styles="chatRight"
          text="Here are a few pictures. She’s a happy girl!"
        />
        <ChatMockup
          justify="justify-end"
          styles="chatRight"
          text="Can you make it?"
        />
        <ChatMockup
          justify="justify-start"
          styles="chatLeft"
          text="She looks so happy! The time we discussed works. How long shall I take her out for?"
        />
        <CheckboxMockup desc="30 minute to walk" price="29" />
        <CheckboxMockup desc="1 hour walk" price="49" />

        <section className="mt-2 flex flex-row items-center justify-between rounded-full bg-white p-1">
          <p className="pl-5 text-xs text-gray">Type a message...</p>
          <div className="rounded-full bg-desatured-violet p-1">
            <ChevronUp className="rotate-90" color="white" />
          </div>
        </section>
      </section>
    </section>
  );
}
