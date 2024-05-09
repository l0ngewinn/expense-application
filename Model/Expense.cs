using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace expense_application;
public class Expense {
    [Key]
    public int ExpenseId { get; set; }

    [Required]
    public string ExpenseName { get;set; } = string.Empty;

    public int Month { get; set; }

    public int Day { get; set; }

    public int Year { get; set; }

    [Required]
    public int Cost { get; set; }

    [ForeignKey("CategoryId")]
    public int CategoryId { get; set; }

    [ForeignKey("UserId")]
    public int UserId { get; set; }
}