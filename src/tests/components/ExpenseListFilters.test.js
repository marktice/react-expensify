import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from './../../components/ExpenseListFilters';
import { filters, altFilters } from './../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;
beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test('should renderExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should renderExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const value = 'a';
  wrapper.find('input').simulate('change', { target: { value } });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
  const value = 'date';
  wrapper.find('select').simulate('change', { target: { value } });
  expect(sortByDate).toHaveBeenLastCalledWith();
});

test('should sort by amount', () => {
  const value = 'amount';
  wrapper.find('select').simulate('change', { target: { value } });
  expect(sortByAmount).toHaveBeenLastCalledWith();
});

test('should handle date changes', () => {
  const startDate = moment(0);
  const endDate = moment(0).add(4, 'days');
  wrapper.find('[onDatesChange]').prop('onDatesChange')({ startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes', () => {
  const calanderFocused = 'endDate';
  wrapper.find('[onFocusChange]').prop('onFocusChange')(calanderFocused);
  expect(wrapper.state('calanderFocused')).toBe(calanderFocused);
});
