export const phonePortrait = 'phonePortrait';
export const phoneLandscape = 'phoneLandscape';
export const tabletPortrait = 'tabletPortrait';
export const tabletLandscape = 'tabletLandscape';
export const desktop = 'desktop';
export const desktopWide = 'desktopWide';
export const desktopHD = 'desktopHD';
export const desktopMega = 'desktopMega';
export const breakpoints = [
    { name: 'phonePortrait', min: 0, max: 414 },
    { name: 'phoneLandscape', min: 415, max: 667 },
    { name: 'tabletPortrait', min: 668, max: 768 },
    { name: 'tabletLandscape', min: 769, max: 1024 },
    { name: 'desktop', min: 1025, max: 1366 },
    { name: 'desktopWide', min: 1367, max: 1680 },
    { name: 'desktopHD', min: 1681, max: 1920 },
    { name: 'desktopMega', min: 1921, max: 9999 }
];

export function currentBreakpoint() {
    let result;
    // console.log(breakpoints.length);
    for(let i = 0, l = breakpoints.length; i < l; i++) {
        if (isBreakpoint(breakpoints[i])) {
            result = breakpoints[i];
            break;
        }
    }
    // console.log(result);
    return result;
}

export function isBreakpoint(breakpoint) {
    // console.log(breakpoint);
    const result = (window.innerWidth >= breakpoint.min && window.innerWidth <= breakpoint.max);
    //console.log(`size ${window.innerWidth} == ( min: ${breakpoint.min}, max: ${breakpoint.max}) is ${result}`);
    return result;
}
