// 4.Read Input Until User Says “No”
// Ask user:
// “Do you want to continue? (y/n)”
// Repeat do-while user enters 'y'.

import java.util.Scanner;

class ContinueProgram {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);
        char choice;

        do {
            System.out.println("Program is running...");
            System.out.print("Do you want to continue? (y/n): ");
            choice = scan.next().charAt(0);

        } while (choice == 'y' || choice == 'Y');

        System.out.println("Program ended.");
    }
}
