type LocalsType = { type: 'UA'; lang: 'uk' } | { type: 'EN'; lang: 'en' };

export const Locals: Record<LocalsType['type'], LocalsType> = {
    UA: { type: 'UA', lang: 'uk' },
    EN: { type: 'EN', lang: 'en' },
};
