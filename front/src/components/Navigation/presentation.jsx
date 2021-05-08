import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";

import { Icon, IconButton, Toolbar, Typography, withStyles, Tooltip } from '@material-ui/core';
// 必要なiconsをimportし、<IconButton></IconButton>で囲って使用
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import DehazeIcon from '@material-ui/icons/Dehaze';

const StyledToolbar = withStyles({
  root: { padding: '0' }
})(Toolbar);

const StyledTypography = withStyles({
  root: { margin: '0 30px 0 10px' }
})(Typography);

const StyledDatePicker = withStyles({
  root: { marginLeft: 30 }
})(DatePicker);

const Navigation = ({ setNextMonth, setPreviousMonth, setMonth, firstDayOfMonth }) => {
  // const [selectedDate, handleDateChange] = useState(new Date()); // useStateとは?

  return (
    <StyledToolbar>
      <IconButton>
        {/* DehazeIcon: ハンバーガーメニュー */}
        <DehazeIcon />
      </IconButton>
      <img src="/images/calendar_icon.png" width="40" height="40" />
      <StyledTypography color="textSecondary" variant="h5" component="h1">カレンダー</StyledTypography>
      {/* `setPreviousMonth = () => {}` のため、変数名だけ渡すでOK */}
      <Tooltip title="前の月" placement="bottom">
        <IconButton size="small" onClick={setPreviousMonth}>
          {/* ArrowBackIos: 「<」ボタン */}
          <ArrowBackIos />
        </IconButton>
      </Tooltip>
      <Tooltip title="次の月" plcement="bottom">
        <IconButton size="small" onClick={setNextMonth}>
          {/* ArrowForwardIos: 「>」ボタン */}
          <ArrowForwardIos />
        </IconButton>
      </Tooltip>
      <StyledDatePicker
        value={firstDayOfMonth} // value={selectedDate}
        onChange={setMonth} // setMonth = () => {...}, onChange={handleDateChange}
        variant="inline" // dialog or inline
        format="YYYY年 M月"
        animateYearScrolling
        disableToolbar // 日付押下時のモーダルのToolbarを非表示
      />
    </StyledToolbar>
  );
};

export default Navigation;
