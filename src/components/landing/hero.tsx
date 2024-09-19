import { placeholder } from "@/lib/placeholder";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, StarsIcon } from "lucide-react";

export default function Hero() {
  return (
    <div className={"bg-gradient-to-t from-white/0 to-white p-20 rounded-3xl"}>
      <div className={"grid lg:grid-cols-2 gap-4"}>
        <div className={"my-auto grid gap-4"}>
          <div className={"flex gap-2 w-fit border px-5 py-2.5 rounded-full"}>
            <StarsIcon size={18} className={"text-yellow-500/80 my-auto"} />
            <p className={"text-sm my-auto text-muted-foreground"}>
              Heute noch ein Erstgespräch vereinbaren
            </p>
          </div>
          <h1 className={cn("text-6xl text-balance font-medium font-grotesk")}>
            Individuellste Weblösungen für frischen Wind
          </h1>
          <div
            className={
              "w-full h-0.5 bg-gradient-to-r from-gray-500 via-gray-500/80 to-gray-500/0 opacity-20"
            }
          />
          <p className={"text-muted-foreground"}>
            Nutzen Sie das volle Potential des Internets mit einer Webseite, die
            es in sich hat.
          </p>
          <div className={"flex gap-2"}>
            <Button variant={"outline"} size={"lg"}>
              Mehr erfahren
            </Button>
            <Button size={"lg"} className={"group"}>
              Kontakt
              <ArrowRightIcon
                size={18}
                className={"ml-2 group-hover:-rotate-45 duration-200"}
              />
            </Button>
          </div>
        </div>
        <div className={"w-full lg:justify-end lg:grid"}>
          <img src={placeholder("400")} alt="Hero" className={"rounded-2xl"} />
        </div>
      </div>
    </div>
  );
}
