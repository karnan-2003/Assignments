
// 3.Menu-Driven Program

// Display a menu (Add, Sub, Exit).
// Execute at least once,
// repeat the menu until user selects Exit.

import java.util.Scanner;

class MenuDriven {
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

            if (choice == 1) {
                System.out.print("Enter two numbers: ");
                int a = scan.nextInt();
                int b = scan.nextInt();
                System.out.println("Result = " + (a + b));

            } else if (choice == 2) {
                System.out.print("Enter two numbers: ");
                int a = scan.nextInt();
                int b = scan.nextInt();
                System.out.println("Result = " + (a - b));

            } else if (choice == 3) {
                System.out.println("Exiting program...");

            } else {
                System.out.println("Invalid choice");
            }

        } while (choice != 3);
    }
}
