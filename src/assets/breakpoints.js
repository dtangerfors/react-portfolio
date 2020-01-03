const size = {
    phone: '37.5em',
    tabPort: '56.25em',
    tabLand: '75em',
    bigDesktop: '112.5em',
    lessThan1000: '1000px'
}

const device = {
    phone: `(max-width: ${size.phone})`,
    tabPort: `(max-width: ${size.tabPort})`,
    tabLand: `(max-width: ${size.tabLand})`,
    bigDesktop: `(max-width: ${size.bigDesktop})`,
    lessThan1000: `(max-width: ${size.lessThan1000})`
};

export default device