import { BadgeCheck, UserCheck, UserPlus, EllipsisVertical } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

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

export default function TutorDetailsCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex">
          <div className="flex-none mr-6">
            <Avatar className="static h-12 w-12">
              <AvatarImage src={tutor.profilePicURL} alt="slug"></AvatarImage>
              <AvatarFallback>
                {tutor.name
                  .split(" ")
                  .filter((part, index, arr) => index === 0 || index === arr.length - 1)
                  .map((part) => part[0])
                  .join("")
                  .toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col justify-center w-full space-y-1">
            <div className="flex flex-row justify-between">
              <div className="flex space-x-2">
                <CardTitle>{tutor.name}</CardTitle>
                <BadgeCheck />
              </div>
              <div className="flex space-x-2">
                {tutor.following ? <UserCheck /> : <UserPlus />}
                <EllipsisVertical />
              </div>
            </div>
            <CardDescription>{tutor.role}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium">About Me</p>
            <p className="text-sm text-muted-foreground">{tutor.description}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <span className="text-xs font-normal text-muted-foreground">Yerm tutor since {new Date(tutor.insertedAt).toLocaleDateString("en-US", { day: "2-digit", month: "short", year: "numeric" })}</span>
      </CardFooter>
    </Card>
  );
}
