import React from "react";
import { Dialog, DialogContent } from "@material-ui/core";

const AddScheduleDialog = ({ schedule: { isDialogOpen }, closeDialog }) => {
  return (
    <Dialog open={isDialogOpen} onClose={closeDialog} maxWidth="xs" fullWidth>
      <DialogContent>dialog</DialogContent>
    </Dialog>
  );
};

export default AddScheduleDialog;
