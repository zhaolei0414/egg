// This file is created by egg-ts-helper@1.34.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExtendAgent from '../../../app/extend/agent';
type ExtendAgentType = typeof ExtendAgent;
declare module 'egg' {
  interface Agent extends ExtendAgentType { }
}