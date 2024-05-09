using Microsoft.EntityFrameworkCore;

namespace expense_application;

public class ExpenseAppContext(DbContextOptions options) : DbContext(options) {
    public DbSet<Expense> Expenses => Set<Expense>();
    public DbSet<Category> Categories => Set<Category>();
    public DbSet<User> Users => Set<User>();
}