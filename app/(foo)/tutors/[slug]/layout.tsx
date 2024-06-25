import { TutorDetailsCard, TutorMetricsCard, TutorAvailabilityTabs, TutorVideoCard } from "@/components/app/TutorComponents";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const tutor = {
  uuid: "01903f3a-7da4-786f-bbb7-ca27090447f3",
  name: "Viktoriia Yermolenko",
  role: "Community Tutor",
  description:
    "Integer vitae orci velit. Sed lacinia, velit eu lacinia mattis, lacus enim blandit ex, non commodo velit turpis vel augue. Praesent lobortis aliquam rhoncus. Integer convallis libero commodo dui rhoncus lacinia. Aliquam erat volutpat. Donec hendrerit nisl nibh, a commodo ante ornare eu. Integer ut felis vel dolor ultrices fringilla.",
  profilePicURL: "",
  following: true, // Resolve User <> Tutor junction.
  recentBookings: 2,
  insertedAt: "2024-06-23T12:34:56.789Z",
  students: 4,
  lessons: 23,
  attendance: 1.0,
  response: 0.98,
  tutorRating: 5.0,
  tutorPrice: {
    currencyCode: "GBP",
    lessonPrice: 13.5,
  },
  tutorStatus: {
    uuid: "019043f3-45ab-7f0f-aa56-818a4ce3cb98",
    code: "TUTOR_VERIFIED",
    name: "Verified",
  },
  languages: [
    {
      uuid: "01903f3b-32ca-7c48-b29f-96d7cee97e5c",
      code: "ENG",
      name: "English",
      slug: "english",
    },
    {
      uuid: "01903f3d-a857-7da8-a48b-8200aab1f01c",
      code: "UKR",
      name: "Ukrainian",
      slug: "ukrainian",
    },
    {
      uuid: "01903f3d-d1d5-70e7-a224-213147c7b411",
      code: "RUS",
      name: "Russian",
      slug: "russian",
    },
  ],
};

export default function TutorSlugLayout({ children, params }: { children: React.ReactNode; params: { slug: string } }) {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
        <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
          <TutorDetailsCard />
          <TutorAvailabilityTabs />
          <div className="space-y-3">
            <h4 className="text-2xl font-semibold tracking-tight">Reviews</h4>
            <Card>
              <CardHeader>
                <div className="flex">
                  <div className="flex-none mr-6">
                    <Avatar>
                      <AvatarImage />
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
          <TutorMetricsCard />
        </div>
      </div>
    </>
  );
}
