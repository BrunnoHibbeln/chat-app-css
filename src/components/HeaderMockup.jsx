import { ChevronUp, MoreVertical } from "lucide-react";

export default function HeaderMockup() {
  return (
    <header className="relative h-20 w-full rounded-b-lg rounded-t-3xl bg-gradient-to-r from-violet to-magenta">
      <div className="absolute left-[19%] top-0 h-5 w-[11rem] rounded-b-3xl bg-white"></div>
      <nav className="absolute bottom-3 flex w-full flex-row items-center justify-between px-3">
        <section className="flex flex-row items-center">
          <ChevronUp className="-rotate-90" color="white" />
          <section className="flex flex-row items-center justify-center gap-2">
            <img
              className="h-8 w-8 rounded-full border border-white"
              src="./avatar.jpg"
              alt="Avatar Photo"
            />
            <article className="flex flex-col">
              <h2 className="text-[0.938rem] font-medium text-grayish">
                Samuel Green
              </h2>
              <h3 className="text-[0.625rem] text-pale-violet">
                Available to walk
              </h3>
            </article>
          </section>
        </section>
        <MoreVertical size={16} color="white" />
      </nav>
    </header>
  );
}
