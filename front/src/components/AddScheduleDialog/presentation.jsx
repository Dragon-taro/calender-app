import React from 'react';
import { Dialog, DialogContent } from '@material-ui/core';

// 引数 = { schedule: { form: { ... }, isDialogOpen: false } }
// isDialogOpenのみが使える(scheduleは使えない)
const AddScheduleDialog = ({ schedule: { isDialogOpen }, closeDialog }) => {
  return (
    <Dialog open={isDialogOpen} onClose={closeDialog} maxWidth='xs' fullWidth>
      <DialogContent>( :＾∀＾:)</DialogContent>
    </Dialog>
  );
};

export default AddScheduleDialog;
