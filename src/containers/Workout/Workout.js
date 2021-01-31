import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import WorkoutRoutine from "./Workout-routine/WorkoutRoutine";
import WorkoutDraft from "./Workout-draft/WorkoutDraft";
import WorkoutReview from "./Workout-review/WorkoutReview";
const Workout = () => {
  return (
    <Switch>
      <Redirect exact from='/workout' to='workout/draft' />
      <Route path='/workout/routine' component={WorkoutRoutine} />
      <Route path='/workout/draft' component={WorkoutDraft} />
      <Route path='/workout/review' component={WorkoutReview} />
    </Switch>
  );
};

export default Workout;
