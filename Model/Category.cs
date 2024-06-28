using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace expense_application;
public class Category {
    [Key]
    public int CategoryId { get; set; }

    [Required]
    public string CategoryName { get;set; } = string.Empty;

    [Required]
    public int Limit { get; set; }

    [ForeignKey("UserId")]
    public int FKUserIdCategory { get; set;}
}