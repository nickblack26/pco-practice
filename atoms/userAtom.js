import { atom } from 'recoil';

export const userDataAtom = atom({
	key: 'userDataAtom',
	default: {},
});

export const userIncludedAtom = atom({
	key: 'userIncludedAtom',
	default: [],
});
