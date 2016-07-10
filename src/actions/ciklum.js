import {CIKLUM_SET_LINK, CIKLUM_SET_ACTIVE_COMPONENT, CIKLUM_SET_INPUT_CHANGE} from './const';

export function setCurrentLink(parameter) {
  return { type: CIKLUM_SET_LINK, parameter };
}

export function setCurrentComponent(parameter) {
  return { type: CIKLUM_SET_ACTIVE_COMPONENT, parameter };
}

export function setInputChanged(parameter) {
  return { type: CIKLUM_SET_INPUT_CHANGE, parameter };
}
