import balanceReducer from './balance';
import balanceReducer2 from './balance';
import * as constants from '../actions/constants';

describe('balanceReducer', ( () => {
    describe('when initalizing', () => {
        const balance = 10;
        it('sets a balance', () => {
    
            expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance})).toEqual(balance);
        });
    
        describe('then re-initializing', () => {
            it('reads the balance from the cookies', () => {
                expect(balanceReducer2(undefined, {})).toEqual(balance);
            });
        });
    });

    it('deposits into the balance', () => {
        const deposit = 10;
        const initialState = 5;

        expect(balanceReducer(initialState, { type: constants.DEPOSIT, deposit }))
        .toEqual(initialState + deposit);
    });

    it('withdraw from the balance', () => {
        const withdraw = 10;
        const initialState = 20;

        expect(balanceReducer(initialState, { type: constants.WITHDRAW, withdraw }))
        .toEqual(initialState - withdraw);        
    });
}));