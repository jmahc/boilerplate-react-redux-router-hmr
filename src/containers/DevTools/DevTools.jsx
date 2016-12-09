import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import SliderMonitor from 'redux-slider-monitor';

export default createDevTools(
  <DockMonitor
    changePositionKey="ctrl-w"
    defaultIsVisible={false}
    defaultPosition='bottom'
    defaultSize={0.15}
    toggleVisibilityKey="ctrl-h"
  >
    <LogMonitor />
    <SliderMonitor keyboardEnabled />
  </DockMonitor>,
);
