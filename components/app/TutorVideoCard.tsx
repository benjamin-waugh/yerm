import { Star, TrendingUp } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";

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

export default function TutorVideoCard() {
  return (
    <Card x-chunk="dashboard-07-chunk-3">
      <CardHeader className="items-center space-y-6">
        <div className="w-full h-40 bg-slate-300"></div>
        <div className="flex w-full justify-evenly">
          <div className="flex flex-col items-center space-y-1">
            <div className="flex flex-row space-x-1">
              <Star />
              <CardTitle>{(reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)}</CardTitle>
            </div>
            <CardDescription>
              {reviews.length} review{reviews.length > 1 ? "s" : null}
            </CardDescription>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <CardTitle>
              {tutor.tutorPrice.currencyCode} {tutor.tutorPrice.lessonPrice}
            </CardTitle>
            <CardDescription>per hour</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Button type="submit" className="w-full">
              Book Lesson
            </Button>
            <Button variant="outline" className="w-full">
              Contact Tutor
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex space-x-2 items-center">
          <TrendingUp />
          <p className="text-sm">
            {tutor.recentBookings} lesson{tutor.recentBookings > 1 ? "s" : null} booked in the last 48 hours
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}
