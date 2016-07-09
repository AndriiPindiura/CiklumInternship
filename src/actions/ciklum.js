import {CIKLUM_SET_LINK, CIKLUM_SET_ACTIVE_COMPONENT} from './const';

export function setCurrentLink(parameter) {
  return { type: CIKLUM_SET_LINK, parameter };
}

export function setCurrentComponent(parameter) {
  return { type: CIKLUM_SET_ACTIVE_COMPONENT, parameter };
}
