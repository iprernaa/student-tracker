import React, { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([
    "Complete DSA practice",
    "Revise C Programming",
    "Update LinkedIn profile",
    "Watch DBMS lecture",
  ]);

  const [contests, setContests] = useState([
    { name: "LeetCode Weekly Contest", date: "Sunday", reminded: false },
    { name: "Codeforces Round", date: "Saturday", reminded: false },
  ]);

  const [internships, setInternships] = useState([
    { company: "Google STEP", status: "Preparation Phase" },
    { company: "Microsoft Explore", status: "Upcoming" },
    { company: "Amazon Internship", status: "Researching" },
  ]);

  const stats = [
    { title: "Daily Goals", value: "7/10" },
    { title: "Coding Streak", value: "14 Days" },
    { title: "Internships Applied", value: "5" },
    { title: "CGPA Goal", value: "9.0+" },
  ];

  const handleDone = (indexToRemove) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToRemove);
    setTasks(updatedTasks);
  };

  const handleRemindMe = (indexToChange) => {
    const updatedContests = contests.map((contest, index) => {
      if (index === indexToChange) {
        return { ...contest, reminded: !contest.reminded };
      }
      return contest;
    });
    setContests(updatedContests);
  };

  const handleTrack = (indexToChange) => {
    const updatedInternships = internships.map((item, index) => {
      if (index === indexToChange) {
        return { ...item, status: "Applied ✅" };
      }
      return item;
    });
    setInternships(updatedInternships);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-black">Student Productivity Tracker</h1>
          <p className="text-gray-600 mt-2">Track coding, studies and internships.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((item, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-700">{item.title}</h2>
              <p className="text-3xl font-bold mt-3">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Today's Tasks</h2>
            <div className="space-y-4">
              {tasks.length === 0 ? (
                <p className="text-green-600 font-semibold">All tasks completed 🎉</p>
              ) : (
                tasks.map((task, index) => (
                  <div key={index} className="flex items-center justify-between border rounded-2xl p-4">
                    <span>{task}</span>
                    <button onClick={() => handleDone(index)} className="bg-black text-white px-4 py-2 rounded-xl cursor-pointer">
                      Done
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Coding Contests</h2>
            <div className="space-y-4">
              {contests.map((contest, index) => (
                <div key={index} className="border rounded-2xl p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{contest.name}</h3>
                    <p className="text-gray-500">{contest.date}</p>
                  </div>
                  <button
                    onClick={() => handleRemindMe(index)}
                    className={`px-4 py-2 rounded-xl cursor-pointer ${contest.reminded ? "bg-green-100 text-green-700 border" : "border"}`}
                  >
                    {contest.reminded ? "⏰ Set!" : "Remind Me"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-6 mt-8">
          <h2 className="text-2xl font-bold mb-4">Internship Tracker</h2>
          <div className="space-y-4">
            {internships.map((item, index) => (
              <div key={index} className="border rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{item.company}</h3>
                  <p className="text-gray-500">{item.status}</p>
                </div>
                <button
                  onClick={() => handleTrack(index)}
                  className={`px-4 py-2 rounded-xl cursor-pointer ${item.status === "Applied ✅" ? "bg-green-600 text-white" : "bg-black text-white"}`}
                >
                  {item.status === "Applied ✅" ? "Applied" : "Track"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
