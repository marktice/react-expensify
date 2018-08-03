import expensesReducer from './../../reducers/expenses';
import expenses from './../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

describe('REMOVE_EXPENSE', () => {
  test('should remove expense by id', () => {
    const action = {
      type: 'REMOVE_EXPENSE',
      id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
  });
  test('should not remove expenses if id not found', () => {
    const action = {
      type: 'REMOVE_EXPENSE',
      id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
  });
});

test('should add an expense', () => {
  const expense = {
    id: '123abcdefg',
    description: 'Test Bill',
    note: 'Test note',
    amount: '100000',
    createdAt: moment()
  };
  const action = { type: 'ADD_EXPENSE', expense };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

describe('EDIT_EXPENSE', () => {
  test('should edit an expense', () => {
    const updates = {
      description: 'Edit test',
      note: 'Edit test note',
      amount: '666'
    };
    const action = { type: 'EDIT_EXPENSE', id: expenses[0].id, updates };
    const state = expensesReducer(expenses, action);
    expect(state[0]).toEqual({
      ...expenses[0],
      ...updates
    });
  });

  test('should not edit expense if expense not found', () => {
    const updates = {
      description: 'Edit test',
      note: 'Edit test note',
      amount: '666'
    };
    const action = { type: 'EDIT_EXPENSE', id: '-1', updates };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
  });
});
