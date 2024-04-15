import getBudgetObject from './7-getBudgetObject';

function getIncomeInDollars(income) {
  return `$${income}`;
}

function getIncomeInEuros(income) {
  return `${income} euros`;
}
export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = { ...budget, getIncomeInDollars, getIncomeInEuros };

  return fullBudget;
}
