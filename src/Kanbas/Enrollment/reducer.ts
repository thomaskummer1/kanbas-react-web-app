import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";
const initialState = {
  enrollments: [],
};
const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, action) => {
      state.enrollments = action.payload;
    },
    addEnrollment: (state, { payload: enrollment }) => {
      const newModule: any = {
        _id: new Date().getTime().toString(),
        user: enrollment.user,
        course: enrollment.course,
      };
      state.enrollments = [...state.enrollments, newModule] as any;
    },
    deleteEnrollment: (state, { payload: enrollment }) => {
      console.log(enrollment.course);
      state.enrollments = state.enrollments.filter(
        (a: any) => (a.user !== enrollment.user && a.course !== enrollment.course));
    },
  },
});
export const { addEnrollment, deleteEnrollment, setEnrollments} =
enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;