export const phonePortrait = { min: 0, max: 414}
export const phoneLandscape = { min: 415, max: 667}
export const tabletPortrait = { min: 668, max: 768}
export const tabletLandscape = { min: 769, max: 1024}
export const desktop = { min: 1025, max: 1366}
export const desktopWide = { min: 1367, max: 1680}
export const desktopHD = { min: 1681, max: 1920}
export const desktopMega = { min: 1921, max: 9999}

export function isBreakpoint(breakpoint) {
    // console.log(breakpoint);
    const result = (window.innerWidth >= breakpoint.min && window.innerWidth <= breakpoint.max);
    // console.log(`size ${window.innerWidth} == ( min: ${breakpoint.min}, max: ${breakpoint.max}) is ${result}`);
    return result;
}
