const sortContacts = (array, key) => {
    return array.sort(function (a, b) {
        const item1 = a[key];
        const item2 = b[key];
        if (item1 < item2) {
            return -1;
        } else if (item1 > item2) {
            return 1;
        } else {
            return 0;
        }
    });
};

export default sortContacts;