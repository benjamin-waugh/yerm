import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    },
    {
      uuid: "01903f3d-a857-7da8-a48b-8200aab1f01c",
      code: "UKR",
      name: "Ukrainian",
    },
    {
      uuid: "01903f3d-d1d5-70e7-a224-213147c7b411",
      code: "RUS",
      name: "Russian",
    },
  ],
};

export default function TutorAvailabilityTabs() {
  return (
    <Tabs defaultValue="ENG">
      <div className="flex items-center justify-between">
        <h4 className="text-2xl font-semibold tracking-tight">Availability</h4>
        <TabsList>
          {tutor.languages.map((item, i) => {
            return (
              <TabsTrigger key={`trigger-${i}`} value={item.code}>
                {item.name}
              </TabsTrigger>
            );
          })}
        </TabsList>
      </div>
      {tutor.languages.map((item, i) => {
        return (
          <TabsContent key={`content-${i}`} value={item.code}>
            <Card>
              <CardHeader></CardHeader>
              <CardContent className="flex justify-center">[Placeholder]</CardContent>
              <CardFooter></CardFooter>
            </Card>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
