import { createAction } from '@reduxjs/toolkit';

// export const deleteRecord = value => ({

//     type: "deleteRecord",
//     payload: value
// });

// export const changeFilter = value => ({
//     type: "changeFilter",
//     payload: value
// });

// export const submitRecord = value => ({
//     type: "submitRecord",
//     payload: value
// });

export const deleteRecord = createAction('deleteRecord');
export const changeFilter = createAction('changeFilter');
export const submitRecord = createAction('submitRecord');
