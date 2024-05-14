import { Component } from '@angular/core';
import { Expense } from '../expense';
import { User } from '../user';
import { Category } from '../category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  expense1: Expense = {
    id: 1,
    name: 'Blessing Thai',
    month: 5,
    day: 4,
    year: 2024,
    cost: 32,
    categoryId: 1,
    userId: 1234
  }
  expense2: Expense = {
    id: 2,
    name: 'Target',
    month: 5,
    day: 6,
    year: 2024,
    cost: 30,
    categoryId: 2,
    userId: 1234
  }
  expense3: Expense = {
    id: 3,
    name: 'Starbucks',
    month: 5,
    day: 6,
    year: 2024,
    cost: 16,
    categoryId: 3,
    userId: 1234
  }
  expense4: Expense = {
    id: 4,
    name: 'The Mill',
    month: 5,
    day: 18,
    year: 2024,
    cost: 13,
    categoryId: 3,
    userId: 1234
  }
  
  public expenses: Expense[] = [this.expense1, this.expense2, this.expense3, this.expense4];

  public user: User = {
    id: 1234,
    firstName: 'Hyeri',
    lastName: 'Cho',
    password: 'hcho01'
  }

  category1: Category = {
    id: 1,
    name: 'Food',
    limit: 200,
    userId: 1234
  }
  category2: Category = {
    id: 2,
    name: 'Grocery',
    limit: 50,
    userId: 1234
  }
  category3: Category = {
    id: 3,
    name: 'Drinks',
    limit: 50,
    userId: 1234
  }

  public categories: Category[] = [this.category1, this.category2, this.category3]

  getBudget() {
    var expenseCost = 0;
    for (var i = 0; i < this.expenses.length; i++) {
      expenseCost += this.expenses[i].cost;
    }
    var limit = 0;
    for (var j = 0; j < this.categories.length; j++) {
      limit += this.categories[j].limit
    }
    return limit - expenseCost;
  }

  budget = this.getBudget();

  date:Date = new Date();
  getMonth() {
    interface MonthNames {
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
      10: string;
      11: string;
    }
    var monthNames: MonthNames = {
      0: "January",
      1: "February",
      2: "March",
      3: "April",
      4: "May",
      5: "June",
      6: "July",
      7: "August",
      8: "September",
      9: "October",
      10: "November",
      11: "December"
    }
    var currentDate = this.date;
    const month: number = currentDate.getMonth();
    console.log('month: ' + month);
    var currentMonth = monthNames[month as keyof MonthNames];
    return currentMonth;
  }
  month = this.getMonth();
}
