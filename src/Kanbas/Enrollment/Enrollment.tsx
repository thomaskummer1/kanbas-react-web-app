import EnrollmentCourses from "./EnrollmentCourses";

export default function Enrollment({ courses }: { courses: any[] }) {
  return (
    <div>
      <button
        id="wd-add-module-btn"
        className="btn btn-lg btn-primary me-1 float-end"
        data-bs-toggle="modal"
        data-bs-target="#wd-add-module-dialog"
      >
        Enrollment
      </button>
      <EnrollmentCourses
        dialogTitle="Courses for Enrollment"
        courses={courses}
      />
    </div>
  );
}
