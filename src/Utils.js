/**
 * format class names 
 * @param  {...string} classes 
 * @returns 
 */
const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
}

/**
 * generate uniq ID
 * @returns 
 */
const guidGenerator = () => {
    const S4 = () => {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

/**
 * get Links from localStorage
 * @returns 
 */
const getLinks = () => {
    return JSON.parse(localStorage.getItem('source_links')) || [];
}

/**
 * set Links to localStorage
 * @returns 
 */
const setLinks = (links) => {
    return localStorage.setItem('source_links', JSON.stringify(links));
}

export {
    classNames,
    guidGenerator,
    getLinks,
    setLinks
};