import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

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

export default function TutorMetricsCard() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col flex-1 justify-center items-center space-y-1">
            <CardTitle>{tutor.students}</CardTitle>
            <CardDescription>Students</CardDescription>
          </div>
          <div className="flex flex-col flex-1 justify-center items-center space-y-1">
            <CardTitle>{tutor.lessons}</CardTitle>
            <CardDescription>Lessons</CardDescription>
          </div>
          <div className="flex flex-col flex-1 justify-center items-center space-y-1">
            <CardTitle>{(tutor.attendance * 100).toFixed(0)}%</CardTitle>
            <CardDescription>Attendance</CardDescription>
          </div>
          <div className="flex flex-col flex-1 justify-center items-center space-y-1">
            <CardTitle>{(tutor.response * 100).toFixed(0)}%</CardTitle>
            <CardDescription>Response</CardDescription>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
