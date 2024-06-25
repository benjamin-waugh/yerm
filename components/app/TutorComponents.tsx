"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BadgeCheck, UserCheck, UserPlus, EllipsisVertical, Star, TrendingUp } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

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

export function TutorAvailabilityTabs() {
  const pathname = usePathname();
  const router = useRouter();
  const currentPath = useMemo(() => pathname.split("/").pop() || "english", [pathname]);
  const [currentTab, setCurrentTab] = useState(currentPath);

  const handleTabChange = (newItem: string) => {
    const newUrl = pathname.replace(currentPath, newItem);
    setCurrentTab(newItem);
    router.replace(newUrl, { scroll: false });
  };

  return (
    <Tabs value={currentTab} onValueChange={handleTabChange}>
      <div className="flex items-center justify-between">
        <h4 className="text-2xl font-semibold tracking-tight">Availability</h4>
        <TabsList>
          {tutor.languages.map((item, i) => (
            <TabsTrigger key={`trigger-${item.slug}`} value={item.slug}>
              {item.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      {tutor.languages.map((item, i) => (
        <TabsContent key={`content-${item.slug}`} value={item.slug}>
          <Card>
            <CardHeader></CardHeader>
            <CardContent className="flex justify-center">[Placeholder]</CardContent>
            <CardFooter></CardFooter>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
}

export function TutorDetailsCard() {
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

export function TutorMetricsCard() {
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

export function TutorVideoCard() {
  return (
    <Card>
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
