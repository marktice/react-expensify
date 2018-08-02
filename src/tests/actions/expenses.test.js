import { addExpense, editExpense, removeExpense } from './../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({ type: 'REMOVE_EXPENSE', id: '123abc' });
});

test('should setup add expense action object', () => {
  const expenseData = {
    description: 'Test Bill',
    note: 'Nice test Mark',
    amount: 500,
    createdAt: 1234567890
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});
test('should setup add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  });
});

test('should setup edit expense action object', () => {
  const id = '666';
  const updates = {
    description: 'Edited test Bill',
    note: 'Nice edited test Mark',
    amount: 1500,
    createdAt: 1234567890666
  };
  const action = editExpense(id, updates);
  expect(action).toEqual({ id, type: 'EDIT_EXPENSE', updates });
});
