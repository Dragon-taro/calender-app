import React from 'react';

import { Icon, IconButton, Toolbar, Typography, withStyles } from '@material-ui/core';
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

const Navigation = ({ setNextMonth, setPreviousMonth }) => {
  return (
    <StyledToolbar>
      <IconButton>
        {/* DehazeIcon: ハンバーガーメニュー */}
        <DehazeIcon />
      </IconButton>
      <img src="/images/calendar_icon.png" width="40" height="40" />
      <StyledTypography color="textSecondary" variant="h5" component="h1">カレンダー</StyledTypography>
      {/* `setPreviousMonth = () => {}` のため、変数名だけ渡すでOK */}
      <IconButton size="small" onClick={setPreviousMonth}>
        {/* ArrowBackIos: 「<」ボタン */}
        <ArrowBackIos />
      </IconButton>
      <IconButton size="small" onClick={setNextMonth}>
        {/* ArrowForwardIos: 「>」ボタン */}
        <ArrowForwardIos />
      </IconButton>
    </StyledToolbar>
  );
};

export default Navigation;
