function AttendanceList() {
  const students = [
    { id: 1, name: "Arun", isPresent: true },
    { id: 2, name: "Meena", isPresent: false },
    { id: 3, name: "Karthik", isPresent: true }
  ];

  return (
    <div>
      <h2>10.Student Attendance</h2>

      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} -{" "}
            <span
              style={{
                color: student.isPresent ? "green" : "red",
                fontWeight: "bold"
              }}
            >
              {student.isPresent ? "Present" : "Absent"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AttendanceList;
