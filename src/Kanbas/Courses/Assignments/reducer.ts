import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = {
  assignments: assignments,
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newModule: any = {
        _id: new Date().getTime().toString(),
        title: assignment.title,
        course: assignment.course,
        description : assignment.description,
        points : assignment.points,
        due : assignment.due,
        available : assignment.available,
        until : assignment.until,
      };
      state.assignments = [...state.assignments, newModule] as any;
    },
    deleteAssignment: (state, { payload: assignmentID }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentID);
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      ) as any;
    },
  },
});
export const { addAssignment, deleteAssignment, updateAssignment} =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;