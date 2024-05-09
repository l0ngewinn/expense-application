using System.ComponentModel.DataAnnotations;

namespace expense_application;
public class User {
    [Key]
    public int UserId { get; set; }

    public string? FirstName { get;set; }

    public string? LastName { get;set; }

    public string? Password { get; set; }
}