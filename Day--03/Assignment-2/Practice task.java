
// Display a menu (Add, Sub, Exit).
// Execute at least once,
// repeat the menu until user selects Exit.


import java.util.Scanner;

class MenuProgram {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);
        int choice;

        do {
            System.out.println("\n--- Menu ---");
            System.out.println("1. Add");
            System.out.println("2. Sub");
            System.out.println("3. Exit");
            System.out.print("Enter your choice: ");

            choice = scan.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Enter two numbers: ");
                    int a = scan.nextInt();
                    int b = scan.nextInt();
                    System.out.println("Result = " + (a + b));
                    break;

                case 2:
                    System.out.print("Enter two numbers: ");
                    int x = scan.nextInt();
                    int y = scan.nextInt();
                    System.out.println("Result = " + (x - y));
                    break;

                case 3:
                    System.out.println("Exiting program...");
                    break;

                default:
                    System.out.println("Invalid choice");
            }

        } while (choice != 3);
    }
}
