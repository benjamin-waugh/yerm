import TutorAvailabilityTabs from "@/components/app/TutorAvailabilityTabs";
import TutorDetailsCard from "@/components/app/TutorDetailsCard";
import TutorMetricsCard from "@/components/app/TutorMetricsCard";
import TutorVideoCard from "@/components/app/TutorVideoCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const reviews = [
  {
    uuid: "",
    student: {
      uuid: "",
      name: "Benjamin Waugh",
    },
    description: "Curabitur efficitur est in libero convallis eleifend. Quisque dapibus tristique orci, vitae eleifend massa dignissim viverra.",
    rating: 5,
    insertedAt: "2024-06-24T11:22:17.789Z",
  },
];

export default function TutorSlugLayout({ children, params }: { children: React.ReactNode; params: { slug: string } }) {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
        <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
          <TutorDetailsCard />
          <TutorMetricsCard />
          <TutorAvailabilityTabs />
          <div className="space-y-3">
            <h4 className="text-2xl font-semibold tracking-tight">Reviews</h4>
            <Card>
              <CardHeader>
                <div className="flex">
                  <div className="flex-none mr-6">
                    <Avatar>
                      <AvatarImage></AvatarImage>
                      <AvatarFallback>BW</AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="flex flex-col justify-center w-full">
                    <div className="flex flex-row justify-between">
                      <div className="font-semibold text-sm tracking-tight">Benjamin Waugh</div>
                      <div className="text-xs font-normal text-muted-foreground">Student since Feb 12, 2024</div>
                    </div>
                    <div className="text-xs">May 3, 2024</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">Fusce feugiat dolor a lacinia ultrices. Sed tincidunt, magna vitae congue venenatis, nibh magna imperdiet ex, sed iaculis erat velit id massa. Aliquam mollis mi quis sem egestas blandit.</div>
              </CardContent>
              <CardFooter>
                <Badge>ukrainian</Badge>
              </CardFooter>
            </Card>
          </div>
          {children}
        </div>
        <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
          <TutorVideoCard />
        </div>
      </div>
    </>
  );
}
