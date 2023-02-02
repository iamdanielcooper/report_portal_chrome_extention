const getTitleFormat = (passed, failed) => {
    const titleIcon = failed > 0 ? '🔴' : '🟢';
    return `${titleIcon} Passed:${passed} | Failed:${failed}`;
};

const getTotals = () => {
    return {
        passCount: document.querySelector('.passed'),
        failCount: document.querySelector('.failed'),
    };
};

const getTestInfo = () => {
    const totals = getTotals();
    return getTitleFormat(totals.passCount, totals.failCount);
};

console.log('Loaded Script');
document.title = getTestInfo();
