import DiscordIcon from "@/components/icons/discord-icon";
import { Button } from "@/components/ui/button";
import { IconCircles } from "@tabler/icons-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const CommunitySection = () => {
  return (
    <section id="community" className="py-12 ">
      <hr className="border-secondary" />
      <div className="container py-20 sm:py-20">
        <div className="lg:w-[60%] mx-auto">
          <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
                <div className="flex items-center justify-center">
                  <IconCircles className="w-10 h-10" />
                </div>
                <div>
                 ¿Listo para comenzar con
                  <span className="text-transparent pl-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                    Framik?
                  </span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
              Descubre cómo Framik puede transformar la forma en que tus sistemas de IA procesan y utilizan contenido multimedia.
            </CardContent>

            <CardFooter>
              <Button asChild>
                <a href="https://app.framik.io/signup" target="_blank">
                  Empieza gratis
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <hr className="border-secondary" />
    </section>
  );
};
